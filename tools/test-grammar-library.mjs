import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const data = JSON.parse(await readFile(new URL("../assets/libraries/grammar-core-english/grammar-core-120-preview.json", import.meta.url), "utf8"));
const source = await readFile(new URL("../src/grammar-library.js", import.meta.url), "utf8");
let requests = 0;
const context = vm.createContext({
  window: {},
  fetch: async () => {
    requests += 1;
    return requests === 1
      ? { ok: false, status: 503 }
      : { ok: true, json: async () => data };
  }
});
vm.runInContext(source, context);
const library = context.window.langLSRWGrammarLibrary;
const rows = library.parse(data);
assert.equal(rows.length, 120);
assert.equal(new Set(rows.map(row => row.id)).size, 120);
assert.equal(library.filter(rows, { query: "主谓一致" }).length, 4);
assert.equal(library.filter(rows, { category: "verbs", subcategory: "verbs.tense-aspect", query: "完成" }).length, 6);
assert.equal(library.filter(rows, { query: "THE TEACHER OPENED" }).length, 1);
assert.equal(library.filter(rows, { query: "不存在的例句" }).length, 0);
assert.equal(library.filter(rows, { point: rows[0].pointId }).length, 1);

const changed = structuredClone(data);
const example = changed.categories[0].subcategories[0].points[0].examples[0];
changed.categories[0].subcategories[0].points[0].examples.push({ ...example, id: `${example.id}-new` });
assert.equal(library.parse(changed).length, 121, "Counts must follow manually added examples");
example.id = changed.categories[0].id;
assert.throws(() => library.parse(changed), /唯一 ID/);
assert.throws(() => library.parse({ ...data, schemaVersion: "2.0.0" }), /格式/);
const invalid = structuredClone(data);
delete invalid.categories[0].subcategories[0].points[0].examples[0].zh;
assert.throws(() => library.parse(invalid), /中文/);

await assert.rejects(library.load(), /503/);
const [first, second] = await Promise.all([library.load(), library.load()]);
assert.equal(first, second, "Concurrent loads must share a request");
assert.equal((await library.load()).rows.length, 120);
assert.equal(requests, 2, "Failure must be retryable; successful loads must be cached");
console.log("Grammar library: data validation, filtering, editable counts, retry and cache checks passed.");
