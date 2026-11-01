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
  // Wide screens browse with the collapsible tree beside the list; narrow screens use the column menu behind classButton.
  function mount({ ids, levels, load, renderText, loadingText, isEnglish, onUse }) {
    const $ = id => document.getElementById(id);
    const tree = $(ids.tree);
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
    // The chosen filter: an empty value means all of that level.
    const chosen = { category: "", subcategory: "", point: "" };
    const expanded = new Set();
    // Classes shown by the previous render; only lines that were not shown fade in, so a click does not flash the tree.
    let shownKeys = new Set();
    const counts = new Map();
    let branchCategory = "";
    let branchSubcategory = "";
    let rows = [];
    let visible = [];
    let generation = 0;

    function unique(items, id, label) {
      return [...new Map(items.map(row => [row[id], row[label]])).entries()];
    }
    const name = value => value.slice(value.indexOf("：") + 1);
    function chosenLabel() {
      if (!chosen.category) return "";
      const row = rows.find(item => chosen.point ? item.pointId === chosen.point
        : chosen.subcategory ? item.subcategoryId === chosen.subcategory : item.categoryId === chosen.category);
      return !row ? "" : chosen.point ? row.point : chosen.subcategory ? row.subcategory : row.category;
    }
    function closeClassMenu() {
      classMenu.hidden = true;
      classButton.setAttribute("aria-expanded", "false");
    }
    function choose(categoryId = "", subcategoryId = "", pointId = "") {
      Object.assign(chosen, { category: categoryId, subcategory: subcategoryId, point: pointId });
      // Choosing a class opens it in the tree together with its parent.
      [categoryId, subcategoryId].forEach(id => { if (id) expanded.add(id); });
      render();
    }
    function chooseClass(categoryId = "", subcategoryId = "", pointId = "") {
      closeClassMenu();
      choose(categoryId, subcategoryId, pointId);
      classButton.focus();
    }
    function toggle(key) {
      if (expanded.has(key)) expanded.delete(key); else expanded.add(key);
      renderTree();
    }
    function renderTree() {
      const focusedKey = tree.contains(document.activeElement) ? document.activeElement.dataset.key : null;
      const scrollTop = tree.scrollTop;
      tree.replaceChildren();
      const keys = new Set();
      const addNode = ({ depth, key, label, fullLabel, current, family, action, parent }) => {
        const line = document.createElement("div");
        line.className = "tree-library-line";
        line.classList.toggle("is-new", !shownKeys.has(key));
        keys.add(key);
        line.dataset.depth = depth;
        if (parent) {
          const caret = document.createElement("button");
          caret.type = "button";
          caret.className = "tree-library-toggle";
          caret.textContent = expanded.has(key) ? "▾" : "▸";
          caret.tabIndex = -1;
          caret.title = `${expanded.has(key) ? "收起" : "展开"}${label}，不改变筛选`;
          caret.setAttribute("aria-label", caret.title);
          caret.addEventListener("click", () => toggle(key));
          line.append(caret);
        }
        const node = document.createElement("button");
        node.type = "button";
        node.className = "tree-library-node";
        node.dataset.key = key;
        node.classList.toggle("is-current", Boolean(current));
        node.classList.toggle("is-current-family", Boolean(family));
        node.setAttribute("aria-current", String(current));
        if (parent) node.setAttribute("aria-expanded", String(expanded.has(key)));
        const text = document.createElement("span");
        text.textContent = label;
        const count = document.createElement("span");
        count.className = "tree-library-count";
        count.textContent = counts.get(key) ?? 0;
        node.append(text, count);
        node.title = `筛选：${fullLabel}（${counts.get(key) ?? 0} 句）；方向键上下移动，右键头展开，左键头收起`;
        node.addEventListener("click", action);
        line.append(node);
        tree.append(line);
      };
      // 全部 also collapses the whole tree.
      addNode({ depth: 0, key: "", label: "全部", fullLabel: "全部分类并收起所有分类", current: !chosen.category,
        action: () => { expanded.clear(); choose(); } });
      for (const [categoryId, categoryText] of unique(rows, "categoryId", "category")) {
        const inCategory = chosen.category === categoryId;
        addNode({ depth: 1, key: categoryId, label: name(categoryText), fullLabel: categoryText, parent: true,
          current: inCategory && !chosen.subcategory, family: inCategory && Boolean(chosen.subcategory), action: () => choose(categoryId) });
        if (!expanded.has(categoryId)) continue;
        const categoryRows = filter(rows, { category: categoryId });
        for (const [subcategoryId, subcategoryText] of unique(categoryRows, "subcategoryId", "subcategory")) {
          const inSubcategory = chosen.subcategory === subcategoryId;
          addNode({ depth: 2, key: subcategoryId, label: name(subcategoryText), fullLabel: subcategoryText, parent: true,
            current: inSubcategory && !chosen.point, family: inSubcategory && Boolean(chosen.point),
            action: () => choose(categoryId, subcategoryId) });
          if (!expanded.has(subcategoryId)) continue;
          for (const [pointId, pointText] of unique(filter(categoryRows, { subcategory: subcategoryId }), "pointId", "point")) {
            addNode({ depth: 3, key: pointId, label: name(pointText), fullLabel: pointText, current: chosen.point === pointId,
              action: () => choose(categoryId, subcategoryId, pointId) });
          }
        }
      }
      shownKeys = keys;
      tree.scrollTop = scrollTop;
      // Rebuilding replaces the buttons, so keyboard focus returns to the same class.
      if (focusedKey !== null) [...tree.querySelectorAll(".tree-library-node")].find(node => node.dataset.key === focusedKey)?.focus();
    }
    function showClassMenu() {
      classMenu.replaceChildren();
      const narrow = window.matchMedia("(max-width: 640px)").matches;
      const level = branchSubcategory ? 2 : branchCategory ? 1 : 0;
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
      if (!narrow || level === 0) addColumn([{ label: "全部", action: () => chooseClass(), current: !chosen.category },
        ...unique(rows, "categoryId", "category").map(([id, text]) => ({
          label: name(text), children: true, current: id === branchCategory,
          action: () => { branchCategory = id; branchSubcategory = ""; showClassMenu(); }
        }))], levels[0]);
      if (branchCategory) {
        const categoryRows = filter(rows, { category: branchCategory });
        const back = (label, action) => ({ label: `‹ 返回 · ${label}`, action, back: true });
        if (!narrow || level === 1) addColumn([...(narrow ? [back(name(categoryRows[0].category), () => { branchCategory = ""; branchSubcategory = ""; showClassMenu(); })] : []), { label: "全部", action: () => chooseClass(branchCategory), current: chosen.category === branchCategory && !chosen.subcategory },
          ...unique(categoryRows, "subcategoryId", "subcategory").map(([id, text]) => ({
            label: name(text), children: true, current: id === branchSubcategory,
            action: () => { branchSubcategory = id; showClassMenu(); }
          }))], levels[1]);
        if (branchSubcategory) {
          addColumn([...(narrow ? [back(name(categoryRows.find(r => r.subcategoryId === branchSubcategory).subcategory), () => { branchSubcategory = ""; showClassMenu(); })] : []), { label: "全部", action: () => chooseClass(branchCategory, branchSubcategory), current: chosen.subcategory === branchSubcategory && !chosen.point },
            ...unique(filter(categoryRows, { subcategory: branchSubcategory }), "pointId", "point").map(([id, text]) => ({
              label: name(text), current: id === chosen.point,
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
      search.disabled = !enabled;
      classButton.disabled = !enabled;
      const label = chosenLabel() || "全部分类";
      classButton.textContent = `${label} ▾`;
      classButton.title = `当前：${label}；点击母项展开子项，选择全部或具体${levels[2]}进行筛选`;
      if (enabled) renderTree(); else tree.replaceChildren();
      visible = enabled ? filter(rows, { ...chosen, query: search.value }) : [];
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
    // reset: start from the full list, used when the panel switches to other data such as another channel.
    async function open({ reset = false } = {}) {
      closeClassMenu();
      const request = ++generation;
      retry.hidden = true;
      if (reset) { Object.assign(chosen, { category: "", subcategory: "", point: "" }); expanded.clear(); search.value = ""; }
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
        counts.clear();
        counts.set("", rows.length);
        rows.forEach(row => [row.categoryId, row.subcategoryId, row.pointId]
          .forEach(id => counts.set(id, (counts.get(id) || 0) + 1)));
        // A class missing from reloaded data falls back to everything.
        if (chosen.category && !counts.has(chosen.point || chosen.subcategory || chosen.category)) {
          Object.assign(chosen, { category: "", subcategory: "", point: "" });
        }
        $(ids.meta).textContent = result.meta;
        $(ids.mobileMeta).textContent = result.mobileMeta;
        render();
      } catch (error) {
        if (request !== generation || !isEnglish()) return;
        rows = [];
        render();
        status.textContent = `加载失败：${error.message}。请检查句库文件并重新加载。`;
        retry.hidden = false;
      }
    }
    search.addEventListener("input", render);
    // Up / Down move between visible classes; Right opens a class or enters it, Left closes it or returns to its parent.
    tree.addEventListener("keydown", event => {
      const nodes = [...tree.querySelectorAll(".tree-library-node")];
      const index = nodes.indexOf(document.activeElement);
      if (index < 0 || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const node = nodes[index];
      const depth = Number(node.parentElement.dataset.depth);
      const open = node.getAttribute("aria-expanded");
      if (event.key === "ArrowUp") nodes[Math.max(0, index - 1)].focus();
      else if (event.key === "ArrowDown") nodes[Math.min(nodes.length - 1, index + 1)].focus();
      else if (event.key === "ArrowRight") {
        if (open === "false") toggle(node.dataset.key);
        else if (open === "true") nodes[index + 1]?.focus();
      } else if (open === "true") toggle(node.dataset.key);
      else if (depth > 1) nodes.slice(0, index).reverse().find(item => Number(item.parentElement.dataset.depth) === depth - 1)?.focus();
    });
    retry.addEventListener("click", () => open());
    use.addEventListener("click", () => { if (isEnglish() && visible.length) onUse(visible); });
    classButton.addEventListener("click", () => {
      if (!classMenu.hidden) { closeClassMenu(); return; }
      branchCategory = chosen.category;
      branchSubcategory = chosen.subcategory;
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
