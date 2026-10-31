/* Shared three-level browse-and-practise panel for the grammar and channel libraries. */
(() => {
  "use strict";

  // Each row carries categoryId / subcategoryId / pointId and the matching numbered labels.
  function filter(rows, { category = "", subcategory = "", point = "", query = "" } = {}) {
    const term = query.trim().toLocaleLowerCase();
    return rows.filter(row => (!category || row.categoryId === category)
      && (!subcategory || row.subcategoryId === subcategory)
      && (!point || row.pointId === point)
      && (!term || [row.id, row.category, row.subcategory, row.point, row.text, row.translation]
        .some(text => text.toLocaleLowerCase().includes(term))));
  }

  // config: ids (element ids), levels (three level names), load() -> { rows, meta, mobileMeta },
  // renderText(row, element), loadingText, isEnglish(), onUse(rows, id).
  function mount({ ids, levels, load, renderText, loadingText, isEnglish, onUse }) {
    const $ = id => document.getElementById(id);
    const category = $(ids.category);
    const subcategory = $(ids.subcategory);
    const point = $(ids.point);
    const search = $(ids.search);
    const list = $(ids.list);
    const use = $(ids.use);
    const status = $(ids.status);
    const retry = $(ids.retry);
    const classButton = $(ids.classButton);
    const classMenu = document.createElement("div");
    classMenu.id = ids.classMenu;
    classMenu.className = "learning-filter-menu grammar-class-menu";
    classMenu.setAttribute("role", "menu");
    classMenu.setAttribute("aria-label", `${levels.join("、")}分类`);
    classMenu.hidden = true;
    document.body.append(classMenu);
    const allLabel = levels.map(level => `全部${level}`);
    let branchCategory = "";
    let branchSubcategory = "";
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
    function closeClassMenu() {
      classMenu.hidden = true;
      classButton.setAttribute("aria-expanded", "false");
    }
    function chooseClass(categoryId = "", subcategoryId = "", pointId = "") {
      category.value = categoryId;
      const categoryRows = filter(rows, { category: categoryId });
      options(subcategory, unique(categoryRows, "subcategoryId", "subcategory"), allLabel[1]);
      subcategory.value = subcategoryId;
      options(point, unique(filter(categoryRows, { subcategory: subcategoryId }), "pointId", "point"), allLabel[2]);
      point.value = pointId;
      closeClassMenu();
      refreshOptions();
      classButton.focus();
    }
    function showClassMenu() {
      classMenu.replaceChildren();
      const narrow = window.matchMedia("(max-width: 640px)").matches;
      const level = branchSubcategory ? 2 : branchCategory ? 1 : 0;
      const name = value => value.slice(value.indexOf("：") + 1);
      const addColumn = (entries, label) => {
        const column = document.createElement("div");
        column.className = "grammar-class-column";
        column.setAttribute("role", "group");
        column.setAttribute("aria-label", label);
        for (const entry of entries) {
          const button = document.createElement("button");
          button.type = "button";
          button.setAttribute("role", "menuitem");
          const text = document.createElement("span");
          text.textContent = entry.label;
          button.append(text);
          if (entry.children) {
            const arrow = document.createElement("span");
            arrow.textContent = "▸";
            arrow.setAttribute("aria-hidden", "true");
            button.append(arrow);
          }
          button.title = entry.children ? `展开${entry.label}的子分类` : `筛选${entry.label}`;
          if (entry.current) button.classList.add("is-current");
          if (entry.back) { button.classList.add("grammar-class-back"); button.title = "返回上一级分类"; }
          if (entry.children) {
            button.setAttribute("aria-haspopup", "menu");
            button.setAttribute("aria-expanded", String(Boolean(entry.current)));
          }
          button.addEventListener("click", entry.action);
          column.append(button);
        }
        classMenu.append(column);
      };
      if (!narrow || level === 0) addColumn([{ label: "全部", action: () => chooseClass(), current: !category.value },
        ...unique(rows, "categoryId", "category").map(([id, text]) => ({
          label: name(text), children: true, current: id === branchCategory,
          action: () => { branchCategory = id; branchSubcategory = ""; showClassMenu(); }
        }))], levels[0]);
      if (branchCategory) {
        const categoryRows = filter(rows, { category: branchCategory });
        const back = (label, action) => ({ label: `‹ 返回 · ${label}`, action, back: true });
        if (!narrow || level === 1) addColumn([...(narrow ? [back(name(categoryRows[0].category), () => { branchCategory = ""; branchSubcategory = ""; showClassMenu(); })] : []), { label: "全部", action: () => chooseClass(branchCategory), current: category.value === branchCategory && !subcategory.value },
          ...unique(categoryRows, "subcategoryId", "subcategory").map(([id, text]) => ({
            label: name(text), children: true, current: id === branchSubcategory,
            action: () => { branchSubcategory = id; showClassMenu(); }
          }))], levels[1]);
        if (branchSubcategory) {
          addColumn([...(narrow ? [back(name(categoryRows.find(r => r.subcategoryId === branchSubcategory).subcategory), () => { branchSubcategory = ""; showClassMenu(); })] : []), { label: "全部", action: () => chooseClass(branchCategory, branchSubcategory), current: subcategory.value === branchSubcategory && !point.value },
            ...unique(filter(categoryRows, { subcategory: branchSubcategory }), "pointId", "point").map(([id, text]) => ({
              label: name(text), current: id === point.value,
              action: () => chooseClass(branchCategory, branchSubcategory, id)
            }))], levels[2]);
        }
      }
      classMenu.hidden = false;
      classButton.setAttribute("aria-expanded", "true");
      const anchor = classButton.getBoundingClientRect();
      const width = narrow ? window.innerWidth - 16 : Math.min(window.innerWidth - 16, branchCategory ? 600 : Math.max(180, anchor.width));
      classMenu.style.width = `${width}px`;
      classMenu.style.gridTemplateColumns = `repeat(${classMenu.children.length}, minmax(0, 1fr))`;
      classMenu.style.left = `${Math.max(8, Math.min(anchor.left, window.innerWidth - width - 8))}px`;
      const below = window.innerHeight - anchor.bottom - 8;
      const above = anchor.top - 8;
      const upward = below < 180 && above > below;
      const height = Math.min(480, upward ? above : below);
      classMenu.style.maxHeight = `${Math.max(60, height)}px`;
      classMenu.style.top = upward ? "auto" : `${anchor.bottom}px`;
      classMenu.style.bottom = upward ? `${window.innerHeight - anchor.top}px` : "auto";
    }
    function render() {
      const enabled = isEnglish() && rows.length > 0;
      [category, subcategory, point, search].forEach(el => { el.disabled = !enabled; });
      classButton.disabled = !enabled;
      const selectedOption = point.value ? point.selectedOptions[0] : subcategory.value ? subcategory.selectedOptions[0] : category.value ? category.selectedOptions[0] : null;
      classButton.textContent = `${selectedOption?.textContent || "全部分类"} ▾`;
      classButton.title = `当前：${selectedOption?.textContent || "全部分类"}；点击母项展开子项，选择全部或具体${levels[2]}进行筛选`;
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
        renderText(row, english);
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
      options(category, unique(rows, "categoryId", "categoryOption"), allLabel[0]);
      const categoryRows = filter(rows, { category: category.value });
      options(subcategory, unique(categoryRows, "subcategoryId", "subcategory"), allLabel[1]);
      const categoryBySubcategory = new Map(categoryRows.map(row => [row.subcategoryId, row.categoryId]));
      let previousCategory = null;
      for (const option of subcategory.options) {
        if (!option.value) continue;
        const categoryId = categoryBySubcategory.get(option.value);
        option.classList.toggle("grammar-category-divider", previousCategory !== null && categoryId !== previousCategory);
        previousCategory = categoryId;
      }
      options(point, unique(filter(categoryRows, { subcategory: subcategory.value }), "pointId", "point"), allLabel[2]);
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
    // reset: start from the full list, used when the panel switches to other data such as another channel.
    async function open({ reset = false } = {}) {
      closeClassMenu();
      const request = ++generation;
      retry.hidden = true;
      if (reset) { category.value = ""; subcategory.value = ""; point.value = ""; search.value = ""; }
      if (!isEnglish()) {
        render();
        status.textContent = "仅支持英语";
        return;
      }
      use.disabled = true;
      status.textContent = loadingText;
      try {
        const result = await load();
        if (request !== generation || !isEnglish()) return;
        rows = result.rows;
        $(ids.meta).textContent = result.meta;
        $(ids.mobileMeta).textContent = result.mobileMeta;
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
    retry.addEventListener("click", () => open());
    use.addEventListener("click", () => { if (isEnglish() && visible.length) onUse(visible); });
    classButton.addEventListener("click", () => {
      if (!classMenu.hidden) { closeClassMenu(); return; }
      const selectedRow = rows.find(row => point.value ? row.pointId === point.value : subcategory.value && row.subcategoryId === subcategory.value);
      branchCategory = category.value || selectedRow?.categoryId || "";
      branchSubcategory = subcategory.value || selectedRow?.subcategoryId || "";
      showClassMenu();
    });
    document.addEventListener("pointerdown", event => {
      if (!classMenu.contains(event.target) && !classButton.contains(event.target)) closeClassMenu();
    });
    classMenu.addEventListener("keydown", event => {
      if (event.key === "Escape") { event.preventDefault(); closeClassMenu(); classButton.focus(); }
    });
    window.addEventListener("resize", closeClassMenu);
    window.addEventListener("blur", closeClassMenu);
    document.addEventListener("visibilitychange", closeClassMenu);
    return { open };
  }
  window.langLSRWTreeLibrary = { filter, mount };
})();
