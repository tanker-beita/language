import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const read = async path => readFile(new URL(path, import.meta.url), "utf8");
const manifest = JSON.parse(await read("../assets/libraries/channel-english/index.json"));
const files = new Map();
for (const channel of manifest.channels) {
  files.set(channel.file, JSON.parse(await read(`../assets/libraries/channel-english/${channel.file}`)));
}
const requests = [];
const context = vm.createContext({
  window: {},
  fetch: async (url, options) => {
    assert.ok(url.includes("?v="), "Bundled data must have a versioned URL");
    assert.equal(options.cache, "no-cache");
    requests.push(url);
    const file = url.slice(url.lastIndexOf("/") + 1, url.indexOf("?"));
    if (file === "index.json") return { ok: true, json: async () => manifest };
    return files.has(file) ? { ok: true, json: async () => files.get(file) } : { ok: false, status: 404 };
  }
});
vm.runInContext(await read("../src/tree-library.js"), context);
vm.runInContext(await read("../src/channel-library.js"), context);
const library = context.window.langLSRWChannelLibrary;
const { filter } = context.window.langLSRWTreeLibrary;

assert.deepEqual([...manifest.levels], ["频道", "情景", "场景", "话题"]);
library.parseManifest(manifest);
assert.throws(() => library.parseManifest({ ...manifest, channels: [] }));
assert.throws(() => library.parseManifest({ ...manifest, channels: [{ id: "x", name: "x", file: "../x.json" }] }));

const daily = files.get("daily.json");
const scenes = daily.situations.flatMap(situation => situation.scenes);
const topics = scenes.flatMap(scene => scene.topics);
assert.equal(daily.situations.length, 14);
assert.equal(scenes.length, 94);
assert.equal(topics.length, 357);
const examples = topics.flatMap(topic => topic.examples);
assert.equal(daily.cefrRules, "cefr-rules/2");
const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];
// Generation rules (CEFR_LEVELS.md section 4): a topic is either still a 2-sentence test topic, or generated, fully
// rated, with 15-50 common sentences (20+ is the aim, never padded) numbered from .001.
const rated = topics.filter(topic => topic.examples.some(example => example.cefr));
assert.ok(rated.length >= 10);
for (const topic of topics) {
  if (!rated.includes(topic)) {
    assert.equal(topic.examples.length, 2, `Test topic: ${topic.id}`);
    continue;
  }
  assert.ok(topic.examples.every(example => CEFR.includes(example.cefr)), `Fully rated: ${topic.id}`);
  assert.ok(topic.examples.length >= 15 && topic.examples.length <= 50, `15-50 sentences: ${topic.id}`);
  assert.deepEqual(topic.examples.map(example => example.id),
    topic.examples.map((_, index) => `${topic.id}.${String(index + 1).padStart(3, "0")}`), `Numbered from .001: ${topic.id}`);
}
const ORDERING = "daily.food.restaurant.ordering";

const result = await library.load();
assert.equal(result.channel.id, "daily", "Without a channel id the first listed channel loads");
const rows = result.rows;
assert.equal(rows.length, examples.length);
assert.equal(new Set(rows.map(row => row.id)).size, examples.length);
assert.equal(rows.filter(row => row.cefr).length, examples.filter(example => example.cefr).length);
assert.equal(rows.filter(row => !("cefr" in row)).length, examples.filter(example => !example.cefr).length,
  "An unrated sentence carries no guessed level");
assert.equal(rows.find(row => row.id === "daily.food.restaurant.bill_tip.001").cefr, "A1");
for (const topic of rated) {
  const levels = Array.from(rows.filter(row => row.pointId === topic.id), row => CEFR.indexOf(row.cefr));
  assert.deepEqual(levels, [...levels].sort((a, b) => a - b), `Displayed easy to hard: ${topic.id}`);
}
// A sentence added later keeps the next sequence number and is shown among its own level.
const appended = structuredClone(daily);
const appendedTopic = appended.situations[1].scenes[0].topics.find(topic => topic.id === ORDERING);
appendedTopic.examples.push({ id: `${ORDERING}.040`, en: "Water for everyone, please.", zh: "每人一杯水。", cefr: "A1" },
  { id: `${ORDERING}.041`, en: "Do you have any desserts?", zh: "有甜点吗？" });
const appendedRows = library.parse(appended, "x").filter(row => row.pointId === ORDERING);
assert.equal(appendedRows[11].id, `${ORDERING}.040`, "New A1 sentence follows the existing A1 sentences");
assert.equal(appendedRows[12].cefr, "A2");
assert.equal(appendedRows.at(-1).id, `${ORDERING}.041`, "Unrated sentences come last");
assert.ok(rows.every(row => row.libraryId === "english-channel.daily" && row.channelName === "日常"));
assert.ok(rows.every(row => row.id.startsWith(`${row.pointId}.`) && row.pointId.startsWith(`${row.subcategoryId}.`)
  && row.subcategoryId.startsWith(`${row.categoryId}.`) && row.categoryId.startsWith("daily.")));
assert.ok(rows.every(row => /[㐀-鿿]/u.test(row.translation) && !/[㐀-鿿]/u.test(row.text)));
assert.equal(rows[0].point, "1-1-1：初次见面问候");

assert.equal(filter(rows, { category: "daily.food" }).length, examples.filter(example => example.id.startsWith("daily.food.")).length);
assert.equal(filter(rows, { subcategory: "daily.food.restaurant" }).length, examples.filter(example => example.id.startsWith("daily.food.restaurant.")).length);
assert.equal(filter(rows, { point: "daily.food.restaurant.bill_tip" }).length, 20);
assert.equal(filter(rows, { query: "餐厅点餐" }).length, examples.filter(example => example.id.startsWith("daily.food.restaurant.")).length);
assert.equal(filter(rows, { point: ORDERING }).length, 39);
assert.equal(filter(rows, { query: "COULD WE HAVE THE CHECK" }).length, 1);

const before = requests.length;
await library.load("daily");
assert.equal(requests.length, before, "A loaded channel is reused from memory");
await library.load("daily", { refresh: true });
assert.ok(requests.length > before, "Refresh revalidates the files");

const broken = structuredClone(daily);
broken.situations[0].scenes[0].topics[0].examples[1].id = broken.situations[0].scenes[0].topics[0].examples[0].id;
assert.throws(() => library.parse(broken, "x"), /唯一 ID/);
const noTranslation = structuredClone(daily);
noTranslation.situations[0].scenes[0].topics[0].examples[0].zh = "";
assert.throws(() => library.parse(noTranslation, "x"), /中文翻译/);
const badLevel = structuredClone(daily);
badLevel.situations[1].scenes[0].topics[0].examples[0].cefr = "B3";
assert.throws(() => library.parse(badLevel, "x"), /A1–C2/);
const noRules = structuredClone(daily);
delete noRules.cefrRules;
assert.throws(() => library.parse(noRules, "x"), /cefrRules/);

console.log("Channel library: manifest, 14/94/357 structure, generation rules, CEFR sorting and appending, IDs, filtering and caching checks passed.");
