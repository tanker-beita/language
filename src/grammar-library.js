/* Hierarchical, manually editable grammar material; no AI requests or user-data writes. */
(() => {
  "use strict";
  const URL = "assets/libraries/grammar-core-english/grammar-core-120-preview.json?v=20261026-2";

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
    const $ = id => document.getElementById(id);
    const category = $("grammarCategorySelect");
    const subcategory = $("grammarSubcategorySelect");
    const point = $("grammarPointSelect");
    const search = $("grammarLibrarySearch");
    const list = $("grammarLibraryList");
    const use = $("useGrammarLibraryBtn");
    const status = $("grammarLibraryStatus");
    const retry = $("retryGrammarLibraryBtn");
    let rows = [];
    let visible = [];
    let generation = 0;

    function options(select, values, placeholder) {
      const previous = select.value;
      select.replaceChildren(new Option(placeholder, ""));
      values.forEach(([id, label]) => select.add(new Option(label, id)));
      select.value = values.some(([id]) => id === previous) ? previous : "";
    }
    function unique(items, id, label) {
      return [...new Map(items.map(row => [row[id], row[label]])).entries()];
    }
    function render() {
      const enabled = isEnglish() && rows.length > 0;
      [category, subcategory, point, search].forEach(el => { el.disabled = !enabled; });
      visible = enabled ? filter(rows, {
        category: category.value, subcategory: subcategory.value, point: point.value, query: search.value
      }) : [];
      use.disabled = !visible.length;
      list.replaceChildren();
      if (!enabled || !visible.length) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = !isEnglish() ? "这份句库是英语材料，请切换到英语后使用。" : "没有找到匹配的句子。";
        list.append(empty);
      }
      const groups = new Map();
      visible.forEach(row => {
        let examples = groups.get(row.pointId);
        if (!examples) {
          const element = document.createElement("div");
          element.className = "library-sentence-row grammar-library-row";
          const heading = document.createElement("div");
          heading.className = "grammar-library-heading";
          const [number, ...pointName] = row.point.split("：");
          const name = label => label.slice(label.indexOf("：") + 1);
          heading.textContent = `${number}：${name(row.category)} - ${name(row.subcategory)} - ${pointName.join("：")}`;
          examples = document.createElement("div");
          examples.className = "grammar-library-examples";
          element.append(heading, examples);
          list.append(element);
          groups.set(row.pointId, examples);
        }
        const sentence = document.createElement("div");
        sentence.className = "grammar-library-example";
        const english = document.createElement("span");
        english.className = "library-sentence-english";
        english.title = "右键点击单词，打开词典查询";
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
        sentence.append(english);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "user-sentence-load-button";
        button.textContent = "▶";
        button.title = "从这句开始练习当前筛选结果";
        button.setAttribute("aria-label", `练习：${row.text}`);
        button.addEventListener("click", () => { if (isEnglish()) onUse(visible, row.id); });
        sentence.append(button);
        examples.append(sentence);
      });
      if (enabled) status.textContent = `共 ${rows.length} 句 · 当前 ${visible.length} 句`;
      list.scrollTop = 0;
    }
    function refreshOptions() {
      options(category, unique(rows, "categoryId", "categoryOption"), "全部大类");
      const categoryRows = filter(rows, { category: category.value });
      options(subcategory, unique(categoryRows, "subcategoryId", "subcategory"), "全部小类");
      const categoryBySubcategory = new Map(categoryRows.map(row => [row.subcategoryId, row.categoryId]));
      let previousCategory = null;
      for (const option of subcategory.options) {
        if (!option.value) continue;
        const categoryId = categoryBySubcategory.get(option.value);
        option.classList.toggle("grammar-category-divider", previousCategory !== null && categoryId !== previousCategory);
        previousCategory = categoryId;
      }
      options(point, unique(filter(categoryRows, { subcategory: subcategory.value }), "pointId", "point"), "全部语法点");
      const subcategoryByPoint = new Map(categoryRows.map(row => [row.pointId, row.subcategoryId]));
      let previousSubcategory = null;
      for (const option of point.options) {
        if (!option.value) continue;
        const subcategoryId = subcategoryByPoint.get(option.value);
        option.classList.toggle("grammar-subcategory-divider", previousSubcategory !== null && subcategoryId !== previousSubcategory);
        previousSubcategory = subcategoryId;
      }
      render();
    }
    async function open() {
      const request = ++generation;
      retry.hidden = true;
      if (!isEnglish()) {
        render();
        status.textContent = "仅支持英语";
        return;
      }
      use.disabled = true;
      status.textContent = "正在加载语法句库…";
      try {
        const result = await load({ refresh: true });
        if (request !== generation || !isEnglish()) return;
        rows = result.rows;
        const subs = result.data.categories.flatMap(c => c.subcategories);
        $("grammarLibraryMeta").textContent = `${result.data.categories.length} 大类 · ${subs.length} 小类 · ${subs.reduce((n, s) => n + s.points.length, 0)} 个语法点 · ${rows.length} 句`;
        refreshOptions();
      } catch (error) {
        if (request !== generation || !isEnglish()) return;
        rows = [];
        render();
        status.textContent = `加载失败：${error.message}。请检查句库文件并重新加载。`;
        retry.hidden = false;
      }
    }
    category.addEventListener("change", () => { subcategory.value = ""; point.value = ""; refreshOptions(); });
    subcategory.addEventListener("change", () => { point.value = ""; refreshOptions(); });
    point.addEventListener("change", render);
    search.addEventListener("input", render);
    retry.addEventListener("click", open);
    use.addEventListener("click", () => { if (isEnglish() && visible.length) onUse(visible); });
    return { open };
  }
  window.langLSRWGrammarLibrary = { parse, filter, keywordParts, load, init };
})();
