/* Hierarchical, manually editable grammar material; no AI requests or user-data writes. */
(() => {
  "use strict";
  const URL = "assets/libraries/grammar-core-english/grammar-core-120-preview.json?v=20261031-1";

  function keywordParts(text, keywords = []) {
    const ranges = [];
    const word = char => /[\p{L}\p{N}_]/u.test(char || "");
    for (const keyword of keywords) {
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      for (const match of text.matchAll(new RegExp(escaped, "giu"))) {
        const start = match.index;
        const end = start + match[0].length;
        if ((word(keyword[0]) && word(text[start - 1]))
            || (word(keyword.at(-1)) && word(text[end]))) continue;
        ranges.push({ start, end });
      }
    }
    ranges.sort((a, b) => a.start - b.start || b.end - a.end);
    const merged = [];
    for (const range of ranges) {
      const previous = merged.at(-1);
      if (previous && range.start <= previous.end) previous.end = Math.max(previous.end, range.end);
      else merged.push({ ...range });
    }
    const parts = [];
    let cursor = 0;
    for (const { start, end } of merged) {
      if (start > cursor) parts.push({ text: text.slice(cursor, start), highlight: false });
      parts.push({ text: text.slice(start, end), highlight: true });
      cursor = end;
    }
    if (cursor < text.length) parts.push({ text: text.slice(cursor), highlight: false });
    return parts;
  }

  function parse(data) {
    const ids = new Set();
    const rows = [];
    const nodes = (value) => {
      if (!Array.isArray(value)) throw new Error("分类或例句列表格式不正确");
      return value;
    };
    const check = (node, field) => {
      if (!node || typeof node.id !== "string" || !node.id.trim() || ids.has(node.id)
          || typeof node[field] !== "string" || !node[field].trim()) {
        throw new Error("分类或例句缺少名称、原文或唯一 ID");
      }
      ids.add(node.id);
    };
    if (!data || data.schemaVersion !== "1.0.0" || typeof data.id !== "string" || !data.id.trim()) {
      throw new Error("不支持的语法句库格式");
    }
    nodes(data.categories).forEach((category, ci) => {
      check(category, "name");
      nodes(category.subcategories).forEach((subcategory, si) => {
        check(subcategory, "name");
        nodes(subcategory.points).forEach((point, pi) => {
          check(point, "name");
          nodes(point.examples).forEach((example) => {
            check(example, "en");
            if (typeof example.zh !== "string" || !example.zh.trim()) throw new Error("例句缺少中文翻译");
            const keywords = example.keywords === undefined ? [] : example.keywords;
            if (!Array.isArray(keywords) || keywords.some(keyword => typeof keyword !== "string" || !keyword.trim()
                || keyword !== keyword.trim() || !keywordParts(example.en, [keyword]).some(part => part.highlight))
                || new Set(keywords.map(keyword => keyword.toLocaleLowerCase())).size !== keywords.length) {
              throw new Error(`关键词格式错误或与原句不匹配：${example.id}`);
            }
            rows.push({
              id: example.id, libraryId: data.id, text: example.en, translation: example.zh,
              ...(example.grammarAnalysis ? { grammar: JSON.stringify(example.grammarAnalysis) } : {}),
              keywords: [...keywords],
              categoryId: category.id, subcategoryId: subcategory.id, pointId: point.id,
              category: `${ci + 1}：${category.name}`,
              categoryOption: `${ci + 1}：${category.name}${typeof category.description === "string" && category.description.trim() ? ` (${category.description.trim()})` : ""}`,
              subcategory: `${ci + 1}-${si + 1}：${subcategory.name}`,
              point: `${ci + 1}-${si + 1}-${pi + 1}：${point.name}`
            });
          });
        });
      });
    });
    if (!rows.length) throw new Error("语法句库中没有例句");
    return rows;
  }

  function filter(rows, { category = "", subcategory = "", point = "", query = "" } = {}) {
    const term = query.trim().toLocaleLowerCase();
    return rows.filter(row => (!category || row.categoryId === category)
      && (!subcategory || row.subcategoryId === subcategory)
      && (!point || row.pointId === point)
      && (!term || [row.id, row.category, row.subcategory, row.point, row.text, row.translation]
        .some(text => text.toLocaleLowerCase().includes(term))));
  }

  let pending;
  let cached;
  async function load({ refresh = false } = {}) {
    if (cached && !refresh) return cached;
    if (!pending) pending = (async () => {
      const response = await fetch(URL, { cache: "no-cache" });
      if (!response.ok) throw new Error(`读取失败（${response.status}）`);
      const data = await response.json();
      const rows = parse(data);
      cached = { data, rows };
      return cached;
    })().finally(() => { pending = null; });
    return pending;
  }

  function init({ isEnglish, onUse }) {
    return window.langLSRWTreeLibrary.mount({
      ids: {
        category: "grammarCategorySelect", subcategory: "grammarSubcategorySelect", point: "grammarPointSelect",
        search: "grammarLibrarySearch", list: "grammarLibraryList", use: "useGrammarLibraryBtn",
        status: "grammarLibraryStatus", retry: "retryGrammarLibraryBtn", classButton: "grammarMobileClassBtn",
        classMenu: "grammarMobileClassMenu", meta: "grammarLibraryMeta", mobileMeta: "grammarLibraryMobileMeta"
      },
      levels: ["大类", "小类", "语法点"],
      loadingText: "正在加载语法句库…",
      async load() {
        const result = await load({ refresh: true });
        const subs = result.data.categories.flatMap(c => c.subcategories);
        const points = subs.reduce((n, s) => n + s.points.length, 0);
        return {
          rows: result.rows,
          meta: `${result.data.categories.length} 大类 · ${subs.length} 小类 · ${points} 个语法点 · ${result.rows.length} 句`,
          mobileMeta: `${points}个语法点`
        };
      },
      renderText(row, english) {
        for (const part of keywordParts(row.text, row.keywords)) {
          if (part.highlight) {
            const mark = document.createElement("mark");
            mark.className = "grammar-library-keyword";
            mark.textContent = part.text;
            english.append(mark);
          } else {
            english.append(document.createTextNode(part.text));
          }
        }
      },
      isEnglish,
      onUse
    });
  }
  window.langLSRWGrammarLibrary = { parse, filter, keywordParts, load, init };
})();
