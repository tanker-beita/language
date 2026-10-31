"""Check rated channel sentences against docs/CEFR_LEVELS.md (cefr-rules/2).

Computes a vocabulary and length reference level for every sentence with a `cefr` field and lists those whose
manual level is below the reference, or two or more levels above it. Grammar is judged by hand, so the output is
a review list, not a verdict. Uses the bundled ECDICT dictionary; makes no network or AI requests.

    python tools/check-cefr.py [channel.json ...] [-v]
"""
import gzip
import json
import re
import sqlite3
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RULES = "cefr-rules/2"
LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"]
TAG = {"zk": 1, "gk": 2, "cet4": 2, "cet6": 3, "ky": 3, "ielts": 4, "toefl": 4, "gre": 5}
FREQUENCY = [(1000, 0), (2000, 1), (3500, 2), (6000, 3), (10000, 4)]
LENGTH = [(6, 0), (10, 1), (15, 2), (22, 3), (30, 4)]
# Names and scene words that are the learning target of their scene (section 2.1); extend with new scenes.
EXEMPT = set("""
anna latte lattes cappuccino espresso decaf caffeine syrup oat almond soy cinnamon whipped
napkin menu specials vegetarians starters dessert lamb pasta seafood steak medium rare overcooked spicy
fries burger pizza risotto curry starter mains onions
reservation booked lid holder carrier outlet counter
wang o'clock wi fi password toilet salty ketchup croissant seasonal reusable skim straw mug sleeve takeaway
app downtown subway platform track transit departures delay cab taxi terminal highway pump gas diesel
valet hydrant registration taillight tire brakes battery tow towed jumper roadside overheating
rent rental upgrade confirmation mileage deposit insurance deductible debit headlights dent scratch
helmet unlock sidewalk crosswalk jaywalking validate trunk aisle restroom recline
passport flight declare legroom kiosks voucher tag sticker stroller oversize id bin bins laptops liquids aboard fasten
blanket carousel baggage luggage suitcase carts incidentals spa housekeeping towels pillow clogged minibar charger
layover refundable refunded refund nonstop crib souvenir souvenirs handmade touristy selfie tripod photography
delayed rebook helpline scanner audio vegetarian cancellation screening cart belt
trash grocery chores chore broom vacuum dishwasher sink wipe mopped dust mold bleach laundry washer dryer laundromat
detergent closet hallway apartment furnished utilities lease broker renter stubs cosigner faucet flush cockroaches
beeping flickering plumber repairman barks ladder hammer drill mower fence driveway autopay meter flashlight breaker
freezer modem router outage extender hotspot restarting installation promotional movers pack couch dresser curtains
unpack leash puppy vet rabies neutered cone hi bugs pickup neighbor
appointment reminder portal copay kiosk allergy allergies pharmacy pharmacist prescription antibiotics advil
headache cough sore throbbing runny stuffy aches diarrhea vomiting heartburn constipated bloated bug bleeding
ankle wrist sprain crutches sunscreen generic refill refills thru coupon authorization bedtime pill penicillin
breastfeeding rash grapefruit dentist checkup cleanings cavity cavities rinse floss gums hygienist buildup fluoride
whitening colored numbness gauze gym locker trainer bench dumbbells squat treadmills yoga workout workouts cardio
sleeper nightmares melatonin snoring therapist meditate journaling unwind bath gotten throat
garcia lee smith chen learner tech coworkers overtime negotiable prioritize projector laptop badge restart headset
desking printer stapler sticky toner paperless update timeline offline invoice voicemail beep email cc resend spam
inbox spreadsheet typos presentation anytime contagious bereavement recharge salaried comp itinerary receipt receipts
reimbursed diem paycheck itemized specialty appetizers steakhouse folder hourly
tense attendance hint rephrase homework upload calculator essay rubric flash rereading cramming nighter retake
audiobooks interlibrary checkout roommate headphones semester sorority dining taco swipes poster homecoming homeroom
slot bullying waitlist undecided intro advisor freshmen minoring deadline transcripts dorm homesick register schedule campus
sam bye billing disconnected tunnel unlimited prepaid esim app apps roaming gigs cracked warranty iphone passwords username click hacked scam authentication remotely updates
download delete install reinstalling button tablet profile chat notifications airdrop viral scroll mute rejoin mic slide slides passcode expired
savings waived waive yen euros routing memo screenshot pending perishable certified recipient redelivery notarized jointly freelance deduct refunds donations itemize
dental renters premium adjuster renewal supervisor haircut trim bangs styling stain starch hanger fifteenth traveling canceling ins expires
scary singer cheers hobbies dice beginners gardening pottery dinosaurs horror popcorn snacks album playlist rap hoops backyard babysitter potluck combo trailer subtitles sequel
overrated podcasts resale recital pickleball halftime touchdown playoffs shootout buzzer clockwise ammo revive loser rematch outdid ex texted traveled pandemic hiking birdwatching intermission ovation latecomers goosebumps favorite decorations
heartbroken terrified overthinking overreacting halfway risky sweetie
ambulance locksmith responders theft non hoodie tattoo doorbell interpreter paramedics defibrillator diabetic extinguisher grease handrail bender backpack engraved beard leather dots alarm exit elevator
wow congratulations goodbye lucy lockers ramp restrooms recycling merry wedding cash li pants tight sleeves baggy waist hem alterations wrap tags packaging restocking warehouse newsletter
appetizer takeout beer beers cola coke tap draft gin cocktail soda cheeseburger mayo veggie pickles napkins nuggets bacon sauces burgers delivery gluten ham slice slices garlic peel chop defrost olive grate
marinate boil fry oven simmer preheat recipe bland fatty lactose carb diabetics vegan halal kosher nuts allergic chef shellfish peanuts itchy alcohol batteries cents self expire ipa uber promo shrimp
""".split())
FUNCTION = set("""
a an the i me my mine you your yours he him his she her hers it its we us our ours they them their theirs
this that these those who whom whose which what where when why how whatever someone something anyone anything
everyone everything nobody nothing be am is are was were been being do does did done doing have has had having
can could will would shall should may might must and but or so because if than as of to in on at for with from
by about into over under after before while through up down out off
""".split())
IRREGULAR_NEGATIVE = {"can't": "can", "won't": "will", "shan't": "shall"}
CONTRACTION = re.compile(r"(n't|'s|'m|'re|'ll|'ve|'d)$")


def open_dictionary():
    target = Path(tempfile.gettempdir()) / "langlsrw-ecdict-check.sqlite"
    source = ROOT / "assets/dictionaries/runtime/ecdict/ecdict.sqlite.gz"
    if not target.exists() or target.stat().st_mtime < source.stat().st_mtime:
        with gzip.open(source) as compressed, open(target, "wb") as plain:
            plain.write(compressed.read())
    return sqlite3.connect(target)


def rank(row):
    ranks = [value for value in row[1:3] if value]
    return min(ranks) if ranks else None


def lookup(db, word):
    query = "select tag, frq, bnc, exchange from stardict where word=?"
    row = db.execute(query, (word,)).fetchone()
    if not row or rank(row) is None:
        # Irregular forms (went, ate) are listed only in the base form's exchange field.
        for base in db.execute("select tag, frq, bnc, exchange from stardict where exchange like ?", (f"%:{word}%",)):
            forms = [part.split(":", 1)[1] for part in (base[3] or "").split("/") if ":" in part]
            if word in forms and rank(base):
                return [base]
    rows = [row] if row else []
    if row and row[3] and "0:" in row[3]:
        lemma = dict(part.split(":", 1) for part in row[3].split("/") if ":" in part).get("0")
        base = lemma and db.execute(query, (lemma,)).fetchone()
        # A form may also be a word of its own (number is not only "more numb", bit not only "bitten"), so both count.
        if base:
            rows.append(base)
    return rows


def row_level(row):
    tags = (row[0] or "").split()
    tag_level = min([TAG[tag] for tag in tags if tag in TAG], default=5)
    value = rank(row)
    frequency_level = next((level for limit, level in FREQUENCY if value and value <= limit), 5)
    if "zk" in tags and value and value <= 3500:
        frequency_level = 0
    return min(tag_level, frequency_level)


def word_level(db, word):
    return min((row_level(row) for row in lookup(db, word)), default=5)


def reference(db, text):
    matches = list(re.finditer(r"[A-Za-z]+(?:'[A-Za-z]+)?", text))
    words = [match.group() for match in matches]
    vocabulary, hardest = 0, ""
    for match in matches:
        word = match.group()
        # A capitalised word that does not start a sentence is a name (section 2.1); sentence-initial names go in EXEMPT.
        if word[0].isupper() and word != "I" and not word.startswith("I'") \
                and text[:match.start()].rstrip()[-1:] not in ("", ".", "!", "?", '"'):
            continue
        word = word.lower()
        base = IRREGULAR_NEGATIVE.get(word) or CONTRACTION.sub("", word) or word
        if {word, base} & (EXEMPT | FUNCTION):
            continue
        level = word_level(db, base)
        if level > vocabulary:
            vocabulary, hardest = level, base
    length = next((level for limit, level in LENGTH if len(words) <= limit), 5)
    return vocabulary, hardest, length, len(words)


def main(argv):
    verbose = "-v" in argv
    files = [Path(arg) for arg in argv if arg != "-v"]
    if not files:
        manifest = json.loads((ROOT / "assets/libraries/channel-english/index.json").read_text(encoding="utf-8"))
        files = [ROOT / "assets/libraries/channel-english" / channel["file"] for channel in manifest["channels"]]
    db = open_dictionary()
    rated = flagged = 0
    for path in files:
        data = json.loads(path.read_text(encoding="utf-8"))
        examples = [example for situation in data["situations"] for scene in situation["scenes"]
                    for topic in scene["topics"] for example in topic["examples"] if "cefr" in example]
        if examples and data.get("cefrRules") != RULES:
            print(f"{path.name}: cefrRules is {data.get('cefrRules')!r}, this checker implements {RULES}")
        for example in examples:
            rated += 1
            manual = LEVELS.index(example["cefr"])
            vocabulary, hardest, length, count = reference(db, example["en"])
            target = max(vocabulary, length)
            note = "低于参考" if manual < target else "高出两级" if manual - target >= 2 else ""
            flagged += bool(note)
            if note or verbose:
                print(f"{note or '通过'}\t{example['cefr']}\t参考 {LEVELS[target]}\t"
                      f"词汇 {LEVELS[vocabulary]} {hardest}\t句长 {LEVELS[length]} {count}词\t{example['id']}\t{example['en']}")
    print(f"已定级 {rated} 句，需复核 {flagged} 句。")
    return 1 if flagged else 0


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    sys.exit(main(sys.argv[1:]))
