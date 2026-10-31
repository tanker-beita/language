import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const data = JSON.parse(await readFile(new URL("../assets/libraries/grammar-core-english/grammar-core-120-preview.json", import.meta.url), "utf8"));
const source = await readFile(new URL("../src/grammar-library.js", import.meta.url), "utf8");
let requests = 0;
let responseData = data;
const context = vm.createContext({
  window: {},
  fetch: async (url, options) => {
    assert.ok(url.includes("?v="), "Updated bundled data must have a versioned URL");
    assert.equal(options.cache, "no-cache", "Revalidate HTTP cache before using library data");
    requests += 1;
    return requests === 1
      ? { ok: false, status: 503 }
      : { ok: true, json: async () => responseData };
  }
});
vm.runInContext(source, context);
const library = context.window.langLSRWGrammarLibrary;
const rows = library.parse(data);
assert.equal(data.categories.length, 6);
const subcategories = data.categories.flatMap(category => category.subcategories);
const points = subcategories.flatMap(subcategory => subcategory.points);
assert.equal(subcategories.length, 20);
assert.equal(points.length, 120);
assert.ok(points.every(point => point.examples.length === 10));
assert.equal(rows.length, 1200);
assert.equal(new Set(rows.map(row => row.id)).size, 1200);
assert.equal(new Set(rows.map(row => row.text.toLocaleLowerCase())).size, 1200);
assert.ok(rows.every(row => /[\u3400-\u9fff]/u.test(row.translation)));
assert.ok(rows.every(row => Array.isArray(row.keywords) && row.keywords.length > 0));
for (const row of rows) {
  const parts = library.keywordParts(row.text, row.keywords);
  assert.equal(parts.map(part => part.text).join(""), row.text, `Highlighting must preserve the original: ${row.id}`);
  assert.ok(parts.some(part => part.highlight), `No highlight: ${row.id}`);
}
assert.equal(rows.find(row => row.text === "I lost my wallet yesterday.").keywords.join("|"), "lost");
assert.equal(library.keywordParts("The teacher is here.", ["he"]).filter(part => part.highlight).length, 0);
assert.equal(library.keywordParts("He helped her.", ["he"]).filter(part => part.highlight).map(part => part.text).join(""), "He");
assert.equal(library.keywordParts("I have finished.", ["have finished", "finished"]).filter(part => part.highlight).length, 1);
assert.equal(library.keywordParts("a+b is literal.", ["a+b"]).find(part => part.highlight).text, "a+b");
assert.equal(library.keywordParts("<b>lost</b>", ["lost"]).map(part => part.text).join(""), "<b>lost</b>");
assert.equal(library.filter(rows, { query: "主谓一致" }).length, 40);
assert.equal(library.filter(rows, { category: "verbs", subcategory: "verbs.tense-aspect", query: "完成" }).length, 60);
assert.equal(library.filter(rows, { query: "THE TEACHER OPENED" }).length, 1);
assert.equal(library.filter(rows, { query: "不存在的例句" }).length, 0);
assert.equal(library.filter(rows, { point: rows[0].pointId }).length, 10);

const analysed = rows.filter(row => row.grammar);
assert.equal(analysed.length, 1200, "The all six categories have built-in analyses");
assert.ok(rows.slice(0, 1200).every(row => row.grammar));
assert.ok(rows.slice(1200).every(row => !row.grammar));
for (const category of data.categories) {
  assert.ok(category.subcategories.every(sub => sub.points.every(point => point.examples.every(example => example.grammarAnalysis))));
}
const roles = new Set(["主语", "谓语", "宾语", "表语", "补语", "定语", "状语", "同位语", "中心语", "其他"]);
const analysisFor = text => JSON.parse(rows.find(row => row.text === text).grammar);
const sleeping = analysisFor("The babies were sleeping.");
assert.ok(sleeping.nodes.some(node => node.role === "谓语" && node.text.trim() === "were sleeping."));
const advice = analysisFor("She gave me some useful advice.");
assert.equal(advice.nodes.filter(node => node.parent === 0 && node.role === "宾语").length, 2);
const taught = analysisFor("He taught himself Spanish.");
assert.equal(taught.nodes.find(node => node.text.trim() === "himself").type, "间接宾语（反身代词）");
assert.equal(taught.nodes.find(node => node.text.trim() === "Spanish.").type, "直接宾语（专有名词）");
assert.equal(taught.nodes.find(node => node.text.trim() === "Spanish.").note, "");
const possessive = analysisFor("We visited my uncle's farm.");
const genitive = possessive.nodes.find(node => node.text === "my uncle's");
assert.equal(genitive.role, "定语");
assert.ok(possessive.nodes.some(node => node.parent === genitive.id && node.text === "my"));
const information = analysisFor("I need some information about the course.");
assert.ok(information.nodes.some(node => node.role === "定语" && node.type === "介词短语" && node.parent > 0));
const negative = analysisFor("I do not have enough money.");
assert.ok(!negative.nodes.some(node => node.role === "谓语" && node.text.trim() === "have"));
assert.ok(negative.explanation.some(text => text.includes("共同构成")));
const relative = analysisFor("I liked the film we watched yesterday.");
const relativeNode = relative.nodes.find(node => node.type.startsWith("限制性定语从句"));
assert.equal(relativeNode.role, "定语");
assert.ok(relative.nodes.some(node => node.parent === relativeNode.id && node.role === "主语" && node.text === "we"));
const emphatic = analysisFor("They built the shelves themselves.");
assert.ok(emphatic.nodes.some(node => node.text.trim() === "themselves." && node.role === "同位语"));
const copular = analysisFor("You should be proud of yourself.");
assert.ok(copular.nodes.some(node => node.parent === 0 && node.role === "谓语" && node.text.trim() === "should be"));
assert.ok(copular.nodes.some(node => node.parent === 0 && node.role === "表语" && node.text.trim() === "proud of yourself."));
const subjectQuestion = analysisFor("Who left the kitchen window open?");
assert.equal(subjectQuestion.status, "complete");
assert.ok(subjectQuestion.nodes.some(node => node.text.trim() === "Who" && node.role === "主语"));
const question = analysisFor("Do you have any questions?");
assert.equal(question.status, "partial");
assert.ok(question.explanation.some(text => text.includes("连续片段格式")));
assert.ok(!question.nodes.some(node => node.role === "谓语" && node.text.trim() === "have"));
const expectation = analysisFor("I look forward to meeting your family.");
const meeting = expectation.nodes.find(node => node.text.trim() === "meeting your family.");
assert.equal(meeting.role, "宾语");
assert.equal(meeting.type, "介词宾语（动名词短语）");
assert.ok(expectation.nodes.some(node => node.text === "to" && node.type === "介词"));
const comparison = analysisFor("The station is farther away than I thought.");
assert.ok(comparison.nodes.some(node => node.type === "比较状语从句" && node.role === "状语"));
const named = analysisFor("She named her daughter Alice.");
const invertedPlace = analysisFor("On the hill stood an old castle.");
assert.equal(invertedPlace.status, "complete");
assert.deepEqual(invertedPlace.nodes.filter(node => !node.parent).map(node => node.role), ["状语", "谓语", "主语"]);
const ellipsisExample = analysisFor("Tom ordered tea, and Anna coffee.");
const ellipticalClause = ellipsisExample.nodes.find(node => node.type === "省略分句");
assert.equal(ellipsisExample.status, "complete");
assert.ok(!ellipsisExample.nodes.some(node => node.parent === ellipticalClause.id && node.role === "谓语"));
assert.ok(ellipsisExample.explanation.some(text => text.includes("ordered")));
const cleftExample = analysisFor("It was yesterday that we signed the contract.");
assert.equal(cleftExample.status, "partial");
assert.ok(cleftExample.nodes.some(node => node.type === "强调焦点（原句状语）" && node.text.trim() === "yesterday"));
const counterfactual = analysisFor("If I had left earlier, I would have caught the train.");
assert.ok(counterfactual.nodes.some(node => node.type === "反事实完成结构" && node.text.trim() === "would have caught"));
const reportedFuture = analysisFor("He said that they would arrive the next day.");
assert.ok(reportedFuture.nodes.some(node => node.type === "过去将来时" && node.text.trim() === "would arrive"));
const mandative = analysisFor("They demanded that the fee be refunded.");
assert.ok(mandative.nodes.some(node => node.type === "原形虚拟式被动结构"));
const formalObject = analysisFor("I find it difficult to wake up early.");
assert.ok(formalObject.nodes.some(node => !node.parent && node.role === "宾语" && node.type === "形式宾语"));
assert.ok(formalObject.nodes.some(node => !node.parent && node.role === "宾语" && node.type === "后置真正宾语（不定式短语）"));
const subjectClauseExample = analysisFor("What she said surprised me.");
const subjectClause = subjectClauseExample.nodes.find(node => node.type === "主语从句");
assert.equal(subjectClause.role, "主语");
assert.ok(subjectClauseExample.nodes.some(node => node.parent === subjectClause.id && node.text.trim() === "What" && node.role === "宾语"));
const appositiveExample = analysisFor("The news that our team had won made us happy.");
const appositiveClause = appositiveExample.nodes.find(node => node.type === "同位语从句");
assert.equal(appositiveClause.role, "同位语");
assert.ok(appositiveExample.nodes.some(node => node.parent === appositiveClause.id && node.text.trim() === "that" && node.role === "其他"));
const relativeExample = analysisFor("The book that you lent me is useful.");
const relativeClause = relativeExample.nodes.find(node => node.type === "限制性定语从句");
assert.equal(relativeClause.role, "定语");
assert.ok(relativeExample.nodes.some(node => node.parent === relativeClause.id && node.text.trim() === "that" && node.type.startsWith("直接宾语")));
assert.ok(relativeExample.nodes.some(node => node.parent === relativeClause.id && node.text.trim() === "me" && node.type.startsWith("间接宾语")));
const purposeExample = analysisFor("I wrote it down so that I would not forget.");
assert.equal(purposeExample.status, "partial");
const purposeClause = purposeExample.nodes.find(node => node.type === "目的状语从句");
assert.ok(purposeExample.nodes.some(node => node.parent === purposeClause.id && node.text.trim() === "not" && node.role === "状语"));
const readyQuestion = analysisFor("Are you ready to leave?");
assert.equal(readyQuestion.status, "complete");
assert.ok(readyQuestion.nodes.some(node => !node.parent && node.role === "谓语" && node.text.trim() === "Are"));
const whoQuestion = analysisFor("Who called you this morning?");
assert.equal(whoQuestion.status, "complete");
assert.ok(whoQuestion.nodes.some(node => !node.parent && node.role === "主语" && node.text.trim() === "Who"));
const gardenExclamation = analysisFor("What a beautiful garden this is!");
assert.equal(gardenExclamation.nodes[0].role, "表语");
const neighborExclamation = analysisFor("What a helpful neighbor you have!");
assert.equal(neighborExclamation.nodes[0].role, "宾语");
const indirectQuestion = analysisFor("No one knew where he lived.");
const whereClause = indirectQuestion.nodes.find(node => node.type === "宾语从句");
assert.ok(indirectQuestion.nodes.some(node => node.parent === whereClause.id && node.text === "where" && node.role === "状语"));
const passive = analysisFor("The bridge will have been finished by December.");
assert.ok(passive.nodes.some(node => node.role === "谓语" && node.type === "将来完成时被动语态" && node.text.trim() === "will have been finished"));
const asked = analysisFor("The teacher asked us to wait outside.");
assert.equal(asked.nodes.filter(node => !node.parent && node.role === "宾语").length, 1);
assert.ok(asked.nodes.some(node => !node.parent && node.type === "宾语补足语（不定式短语）"));
const allowed = analysisFor("Visitors are allowed to take photos here.");
assert.ok(allowed.nodes.some(node => node.role === "补语" && node.type === "主语补足语（不定式短语）"));
const growing = analysisFor("Growing vegetables saves us money.");
assert.ok(growing.nodes.some(node => node.role === "主语" && node.type === "动名词短语"));
assert.ok(growing.nodes.some(node => node.type.startsWith("间接宾语")));
assert.ok(growing.nodes.some(node => !node.parent && node.type.startsWith("直接宾语")));
const feeling = analysisFor("Feeling tired, she went to bed early.");
const feelingAdverbial = feeling.nodes.find(node => node.type === "现在分词短语");
assert.ok(feeling.nodes.some(node => node.parent === feelingAdverbial.id && node.role === "表语" && node.text === "tired"));
const futureProgressive = analysisFor("She will be working when you arrive.");
assert.ok(futureProgressive.nodes.some(node => node.role === "谓语" && node.text.trim() === "will be working"));
const timeClause = futureProgressive.nodes.find(node => node.type === "时间状语从句");
assert.ok(futureProgressive.nodes.some(node => node.parent === timeClause.id && node.role === "谓语" && node.text === "arrive" && node.type.includes("一般现在时")));
const leave = analysisFor("Nobody wants to leave early.");
const infinitiveObject = leave.nodes.find(node => node.type === "直接宾语（不定式短语）");
assert.equal(infinitiveObject.role, "宾语");
assert.ok(leave.nodes.some(node => node.parent === infinitiveObject.id && node.role === "状语" && node.text === "early"));
assert.ok(named.nodes.some(node => node.role === "补语" && node.type === "宾语补足语（专有名词）" && node.text.trim() === "Alice."));
const monday = analysisFor("We met on Monday, the first day of the course.");
const mondayObject = monday.nodes.find(node => node.type.startsWith("介词宾语"));
assert.ok(monday.nodes.some(node => node.role === "同位语" && node.parent === mondayObject.id));
const coat = analysisFor("The woman in the red coat is my aunt.");
const coatSubject = coat.nodes.find(node => node.role === "主语");
assert.ok(coat.nodes.some(node => node.role === "定语" && node.type === "介词短语" && node.parent === coatSubject.id));
const late = analysisFor("He apologized for being late.");
const being = late.nodes.find(node => node.text === "being");
assert.ok(late.nodes.some(node => node.text === "late" && node.role === "表语" && node.parent === being.parent));
assert.ok(!late.nodes.some(node => node.role === "谓语" && node.text.trim() === "being late."));
for (const row of analysed) {
  const analysis = JSON.parse(row.grammar);
  assert.equal(analysis.schemaVersion, 2);
  assert.equal(analysis.convention, "traditional-school/8");
  const partialNumbers = new Set([179, 207, 209, 449, 450, 459, 460, 468, 469, 478, 479, 488, 489, 499, 501, 502, 505, 508, 509, 514, 517, 518, 519, 528, 529, 539, 540, 549, 608, 612, 614, 617, 618, 627, 628, 630, 636, 640, 659, 709, 751, 753, 754, 755, 757, 758, 760, 761, 762, 764, 765, 766, 767, 769, 770, 771, 772, 773, 775, 776, 777, 778, 780, 784, 790, 811, 813, 815, 816, 817, 818, 819, 820, 829, 833, 836, 839, 865, 869, 887, 897, 899, 958, 988, 998, 1002, 1007, 1009, 1011, 1014, 1016, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1089, 1093, 1098, 1110, 1112, 1115, 1116, 1126, 1146, 1148, 1158, 1190]);
  assert.equal(analysis.status, partialNumbers.has(rows.indexOf(row) + 1) ? "partial" : "complete");
  if (analysis.status === "partial") assert.ok(analysis.explanation.some(text => /格式/.test(text)));
  assert.ok(analysis.explanation.length <= 4);
  for (const indirect of analysis.nodes.filter(node => node.type.startsWith("间接宾语"))) {
    assert.equal(indirect.role, "宾语");
    assert.ok(analysis.nodes.some(node => node.parent === indirect.parent && node.role === "宾语" && node.type.startsWith("直接宾语")), `Double-object labels must use type consistently: ${row.id}`);
  }
  for (const node of analysis.nodes) {
    if (/^(直接宾语|间接宾语|介词宾语|宾语补足语)$/.test(node.note)) {
      assert.ok(node.type.includes(node.note), `A grammatical subtype must not appear only in note: ${row.id}`);
    }
  }
  assert.deepEqual(Object.keys(analysis).sort(), ["schemaVersion", "convention", "status", "pattern", "nodes", "explanation"].sort());
  assert.equal(analysis.nodes.filter(node => !node.parent).map(node => node.text).join(""), row.text);
  const byId = new Map();
  const offsets = new Map();
  for (const node of analysis.nodes) {
    assert.deepEqual(Object.keys(node).sort(), ["id", "text", "role", "type", "parent", "note"].sort());
    assert.ok(Number.isInteger(node.id) && node.id > 0 && !byId.has(node.id));
    assert.ok(roles.has(node.role) && node.note.length <= 20);
    const parent = node.parent ? byId.get(node.parent) : null;
    assert.ok(!node.parent || parent, `Parent must precede child: ${row.id}`);
    const source = parent ? parent.text : row.text;
    const start = source.indexOf(node.text, offsets.get(node.parent) || 0);
    assert.ok(start >= 0, `Contiguous, ordered sibling spans: ${row.id}`);
    if (parent) assert.notEqual(parent.text, node.text);
    offsets.set(node.parent, start + node.text.length);
    byId.set(node.id, node);
  }
}

const changed = structuredClone(data);
const example = changed.categories[0].subcategories[0].points[0].examples[0];
changed.categories[0].subcategories[0].points[0].examples.push({ ...example, id: `${example.id}-new` });
assert.equal(library.parse(changed).length, 1201, "Counts must follow manually added examples");
example.id = changed.categories[0].id;
assert.throws(() => library.parse(changed), /唯一 ID/);
assert.throws(() => library.parse({ ...data, schemaVersion: "2.0.0" }), /格式/);
const invalid = structuredClone(data);
delete invalid.categories[0].subcategories[0].points[0].examples[0].zh;
assert.throws(() => library.parse(invalid), /中文/);
const invalidKeywords = structuredClone(data);
const keywordExample = invalidKeywords.categories[0].subcategories[0].points[0].examples[0];
for (const value of ["teacher", [""], ["teach"], ["teacher", "TEACHER"], [" teacher"]]) {
  keywordExample.keywords = value;
  assert.throws(() => library.parse(invalidKeywords), /关键词/);
}
delete keywordExample.keywords;
assert.equal(library.parse(invalidKeywords)[0].keywords.length, 0, "Manually added sentences may omit keywords");

await assert.rejects(library.load(), /503/);
const [first, second] = await Promise.all([library.load(), library.load()]);
assert.equal(first, second, "Concurrent loads must share a request");
assert.equal((await library.load()).rows.length, 1200);
assert.equal(requests, 2, "Failure must be retryable; successful loads must be cached");
responseData = structuredClone(data);
responseData.categories[0].subcategories[0].points[0].examples.splice(1);
assert.equal((await library.load()).rows.length, 1200, "Normal practice loads may use the memory cache");
assert.equal((await library.load({ refresh: true })).rows.length, 1191, "Opening the library must refresh changed material");
assert.equal((await library.load()).rows.length, 1191, "Refreshed material must replace the memory cache");
assert.equal(requests, 3);
console.log("Grammar library: data validation, filtering, editable counts, retry and cache checks passed.");
