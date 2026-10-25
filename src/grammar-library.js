/* Hierarchical, manually editable grammar material; no AI requests or user-data writes. */
(() => {
  "use strict";
  const URL = "assets/libraries/grammar-core-english/grammar-core-120-preview.json";

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
            rows.push({
              id: example.id, libraryId: data.id, text: example.en, translation: example.zh,
              categoryId: category.id, subcategoryId: subcategory.id, pointId: point.id,
              category: `${ci + 1}：${category.name}`,
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
  async function load() {
    if (cached) return cached;
    if (!pending) pending = (async () => {
      const response = await fetch(URL);
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
      visible.forEach(row => {
        const element = document.createElement("div");
        element.className = "library-sentence-row grammar-library-row";
        const heading = document.createElement("div");
        heading.className = "grammar-library-heading";
        const [number, ...pointName] = row.point.split("：");
        const name = label => label.slice(label.indexOf("：") + 1);
        heading.textContent = `${number}：${name(row.category)} - ${name(row.subcategory)} - ${pointName.join("：")}`;
        element.append(heading);
        const sentence = document.createElement("div");
        sentence.className = "grammar-library-example";
        const english = document.createElement("span");
        english.className = "library-sentence-english";
        english.textContent = row.text;
        sentence.append(english);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "user-sentence-load-button";
        button.textContent = "▶";
        button.title = "从这句开始练习当前筛选结果";
        button.setAttribute("aria-label", `练习：${row.text}`);
        button.addEventListener("click", () => { if (isEnglish()) onUse(visible, row.id); });
        sentence.append(button);
        element.append(sentence);
        list.append(element);
      });
      if (enabled) status.textContent = `共 ${rows.length} 句 · 当前 ${visible.length} 句`;
      list.scrollTop = 0;
    }
    function refreshOptions() {
      options(category, unique(rows, "categoryId", "category"), "全部大类");
      const categoryRows = filter(rows, { category: category.value });
      options(subcategory, unique(categoryRows, "subcategoryId", "subcategory"), "全部小类");
      options(point, unique(filter(categoryRows, { subcategory: subcategory.value }), "pointId", "point"), "全部语法点");
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
        const result = await load();
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
  window.langLSRWGrammarLibrary = { parse, filter, load, init };
})();
