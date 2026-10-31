/* Channel sentence library: 频道 -> 情景 -> 场景 -> 话题; one data file per channel, no AI requests or user-data writes. */
(() => {
  "use strict";
  const BASE = "assets/libraries/channel-english/";
  const VERSION = "20261031-3";
  // Difficulty levels from docs/CEFR_LEVELS.md; a sentence without `cefr` is unrated.
  const CEFR = ["A1", "A2", "B1", "B2", "C1", "C2"];

  function parseManifest(data) {
    if (!data || data.schemaVersion !== "1.0.0" || typeof data.id !== "string" || !data.id.trim()
        || !Array.isArray(data.channels) || !data.channels.length) {
      throw new Error("不支持的频道句库格式");
    }
    const ids = new Set();
    data.channels.forEach(channel => {
      if (!channel || typeof channel.id !== "string" || !/^[a-z0-9_-]+$/.test(channel.id) || ids.has(channel.id)
          || typeof channel.name !== "string" || !channel.name.trim()
          || typeof channel.file !== "string" || !/^[\w-]+\.json$/.test(channel.file)) {
        throw new Error("频道缺少名称、文件或唯一 ID");
      }
      ids.add(channel.id);
    });
    return data;
  }

  function parse(data, libraryId) {
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
      throw new Error("不支持的频道数据格式");
    }
    nodes(data.situations).forEach((situation, si) => {
      check(situation, "name");
      nodes(situation.scenes).forEach((scene, ci) => {
        check(scene, "name");
        nodes(scene.topics).forEach((topic, ti) => {
          check(topic, "name");
          // IDs keep their sequence number for good; display runs from easy to hard by `cefr`, then in the order
          // sentences were added, with unrated sentences last.
          const rank = example => example.cefr === undefined ? CEFR.length : CEFR.indexOf(example.cefr);
          const examples = nodes(topic.examples).map((example, order) => {
            check(example, "en");
            if (typeof example.zh !== "string" || !example.zh.trim()) throw new Error(`例句缺少中文翻译：${example.id}`);
            if (example.cefr !== undefined && !CEFR.includes(example.cefr)) throw new Error(`难度等级只能是 A1–C2：${example.id}`);
            return { example, order };
          });
          examples.sort((a, b) => rank(a.example) - rank(b.example) || a.order - b.order);
          examples.forEach(({ example }) => {
            rows.push({
              id: example.id, libraryId, channelId: data.id, channelName: data.name, text: example.en, translation: example.zh,
              categoryId: situation.id, subcategoryId: scene.id, pointId: topic.id,
              category: `${si + 1}：${situation.name}`,
              categoryOption: `${si + 1}：${situation.name}`,
              subcategory: `${si + 1}-${ci + 1}：${scene.name}`,
              point: `${si + 1}-${ci + 1}-${ti + 1}：${topic.name}`,
              ...(example.cefr ? { cefr: example.cefr } : {})
            });
          });
        });
      });
    });
    if (!rows.length) throw new Error("频道中没有例句");
    if (rows.some(row => row.cefr) && (typeof data.cefrRules !== "string" || !data.cefrRules.trim())) {
      throw new Error("含难度等级的频道文件缺少 cefrRules 规则版本");
    }
    return rows;
  }

  async function fetchJson(file) {
    const response = await fetch(`${BASE}${file}?v=${VERSION}`, { cache: "no-cache" });
    if (!response.ok) throw new Error(`读取失败（${response.status}）`);
    return response.json();
  }

  let manifestPending;
  let manifest;
  function loadManifest({ refresh = false } = {}) {
    if (manifest && !refresh) return Promise.resolve(manifest);
    if (!manifestPending) manifestPending = fetchJson("index.json")
      .then(data => { manifest = parseManifest(data); return manifest; })
      .finally(() => { manifestPending = null; });
    return manifestPending;
  }

  const channels = new Map();
  const pending = new Map();
  // Without a channel id, loads the first channel listed in index.json.
  async function load(channelId = "", { refresh = false } = {}) {
    const index = await loadManifest({ refresh });
    const entry = index.channels.find(channel => channel.id === channelId) || index.channels[0];
    if (channels.has(entry.id) && !refresh) return channels.get(entry.id);
    if (!pending.has(entry.id)) pending.set(entry.id, (async () => {
      const data = await fetchJson(entry.file);
      if (data.id !== entry.id) throw new Error(`频道文件与清单不一致：${entry.file}`);
      const result = { manifest: index, channel: entry, data, rows: parse(data, `${index.id}.${entry.id}`) };
      channels.set(entry.id, result);
      return result;
    })().finally(() => { pending.delete(entry.id); }));
    return pending.get(entry.id);
  }

  function init({ isEnglish, onUse }) {
    const select = document.getElementById("channelSelect");
    const view = window.langLSRWTreeLibrary.mount({
      ids: {
        category: "channelSituationSelect", subcategory: "channelSceneSelect", point: "channelTopicSelect",
        search: "channelLibrarySearch", list: "channelLibraryList", use: "useChannelLibraryBtn",
        status: "channelLibraryStatus", retry: "retryChannelLibraryBtn", classButton: "channelMobileClassBtn",
        classMenu: "channelMobileClassMenu", meta: "channelLibraryMeta", mobileMeta: "channelLibraryMobileMeta"
      },
      levels: ["情景", "场景", "话题"],
      loadingText: "正在加载频道句库…",
      async load() {
        const result = await load(select.value, { refresh: true });
        const previous = select.value;
        select.replaceChildren(...result.manifest.channels.map(channel => {
          const option = new Option(`${channel.name}频道`, channel.id);
          option.title = channel.description || `${channel.name}频道`;
          return option;
        }));
        select.value = previous && result.manifest.channels.some(channel => channel.id === previous) ? previous : result.channel.id;
        select.disabled = false;
        const scenes = result.data.situations.flatMap(situation => situation.scenes);
        const topics = scenes.reduce((n, scene) => n + scene.topics.length, 0);
        return {
          rows: result.rows,
          meta: `${result.data.situations.length} 情景 · ${scenes.length} 场景 · ${topics} 话题 · ${result.rows.length} 句`,
          mobileMeta: `${topics}个话题`
        };
      },
      renderText(row, english) { english.textContent = row.text; },
      isEnglish,
      onUse
    });
    select.addEventListener("change", () => view.open({ reset: true }));
    return view;
  }

  window.langLSRWChannelLibrary = { parseManifest, parse, load, init };
})();
