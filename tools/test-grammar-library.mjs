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
assert.equal(library.filter(rows, { query: "主谓一致" }).length, 40);
assert.equal(library.filter(rows, { category: "verbs", subcategory: "verbs.tense-aspect", query: "完成" }).length, 60);
assert.equal(library.filter(rows, { query: "THE TEACHER OPENED" }).length, 1);
assert.equal(library.filter(rows, { query: "不存在的例句" }).length, 0);
assert.equal(library.filter(rows, { point: rows[0].pointId }).length, 10);

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
