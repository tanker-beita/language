import { readFile, writeFile } from "node:fs/promises";

const directory = new URL("../assets/libraries/grammar-core-english/", import.meta.url);
const data = JSON.parse(await readFile(new URL("grammar-core-120-preview.json", directory), "utf8"));
const lines = [data.title, data.description, ""];
let count = 0;
data.categories.forEach((category, ci) => {
  lines.push(`${ci + 1}：${category.name}${category.description ? ` (${category.description})` : ""}`);
  category.subcategories.forEach((subcategory, si) => {
    lines.push(`  ${ci + 1}-${si + 1}：${subcategory.name}`);
    subcategory.points.forEach((point, pi) => {
      lines.push(`    ${ci + 1}-${si + 1}-${pi + 1}：${point.name}`);
      point.examples.forEach((example, ei) => {
        if (!example.en?.trim() || !example.zh?.trim()) throw new Error(`例句缺少中英文：${example.id}`);
        lines.push(`      ${ei + 1}：${example.en}`, `         ${example.zh}`, "");
        count += 1;
      });
    });
  });
});
await writeFile(new URL("grammar-core-120-preview.txt", directory), `${lines.join("\n")}\n`, "utf8");
console.log(`Updated grammar reading snapshot: ${count} bilingual examples.`);
