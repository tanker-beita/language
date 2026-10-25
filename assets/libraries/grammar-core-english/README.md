# 英语核心语法例句

本版有 6 个大类、20 个小类、120 个语法点，每点 10 句，共 1,200 句中英对照。这是可修改的教学目录，不是英语语法的固定总数，也不是对各小类的穷尽覆盖。文件名沿用 `preview`，内容数量由 JSON 实际数据决定。

## 文件用途

工程目录：`langLSRW/assets/libraries/grammar-core-english/`，与其他内置句库并列。现有构建脚本会复制 `assets/libraries`，无需另加资源复制配置。

- `grammar-core-120-preview.json`：唯一编辑源，网页实际加载此文件。
- `grammar-core-120-preview.txt`：同一批内容的阅读快照。修改 JSON 后，在 `langLSRW` 目录运行 `npm run build:grammar-reading` 更新文本版。
- 网页“句库 → 语法句库”已接入：支持按大类、小类、语法点筛选与中英文搜索，可练习当前结果或从指定例句开始。工具栏“语法句库”选项可切换到完整句库。仅在英语模式下可练习；不调用 AI。

## 层级与字段

```text
schemaVersion                 数据格式版本
id / title / description      资料 ID、标题、说明
categories[]                  大类
  id / name                   稳定 ID、显示名称
  description                 可选的大类简短说明，显示在大类下拉框名称后的括号内
  subcategories[]             小类
    id / name
    points[]                  语法点
      id / name
      examples[]              当前每点 10 句，允许继续增删
        id                    唯一例句 ID
        en                    英文原句
        zh                    中文翻译
        keywords[]            体现该语法点的原文单词或连续短语，网页高亮显示
```

数组顺序就是显示顺序。名称中不重复存编号；网页组合序号与名称，例如 `1：词语短语`、`1-1：词类与构词`、`1-1-1：名词表示人或事物`。编号使用连字符分层、中文冒号分隔名称。文本快照使用相同格式。

## 手动添加与修改

1. 用支持 UTF-8 的文本编辑器修改 JSON；不要在 JSON 中加注释或末尾逗号。
2. 当前是研发阶段，名称、内容和 ID 都允许调整，不要求保留旧 ID。每个 ID 在当前文件中必须唯一；网页练习位置按 ID 记录，重新编号后旧位置可能无法恢复。
3. 添加例句时，复制同一语法点中一个例句对象，改写 `en`、`zh`，并分配一个尚未使用的新 ID。当前每组按 `.001` 至 `.010` 编号，新增可用 `.011`；也可以根据研发需要重新编排。
4. 添加分类或语法点时，复制对应对象并为所有新对象更换唯一 ID。新 ID 建议采用英文短名；不以中文名称或数组位置作为标识。
5. 数量不作为 JSON 中的固定字段保存，网页从数组计算，避免手改后数字失真。增加内容不必修改 `schemaVersion`；改变字段结构或含义才需要升级格式版本。

每句的 `keywords` 用于指出当前语法点的位置。例如 `I lost my wallet yesterday.` 标为 `["lost"]`；`I have already finished my homework.` 标为 `["have", "finished"]`，不把中间的副词强行并入关键词。连续的动词结构可写成一个短语，如 `["is being repaired"]`；分开的结构用多个数组项，从句可以标出完整从句。同一句涉及其他语法现象时，优先标注当前分类要讲解的部分。

当前 1,200 句均有关键词。手动添加时允许省略该可选字段，省略后显示普通原文；填写时必须是非空字符串数组，每项须与原句的完整单词或连续短语匹配，不允许重复、首尾空格或只匹配单词内部的片段。匹配不区分大小写，并高亮所有相同出现位置；重叠标注合并，原句文本不变。编辑英文后应同时检查关键词。关键词只影响语法句库的视觉提示，不改变听写文本或自动触发 AI。此字段是向后兼容的可选扩展，数据格式版本仍为 `1.0.0`。

## 网页加载与查找示例

从本地 HTTP 服务加载，不要直接用 `file://` 打开网页。以下路径假设网页位于 `langLSRW` 根目录：

```js
const response = await fetch('./assets/libraries/grammar-core-english/grammar-core-120-preview.json');
if (!response.ok) throw new Error(`加载失败：${response.status}`);
const data = await response.json();
if (data.schemaVersion !== '1.0.0' || !Array.isArray(data.categories)) {
  throw new Error('不支持的例句格式');
}

// 同一数据既能分层显示，也能展平后搜索。
const rows = data.categories.flatMap(category =>
  category.subcategories.flatMap(subcategory =>
    subcategory.points.flatMap(point =>
      point.examples.map(example => ({
        categoryId: category.id,
        category: category.name,
        subcategoryId: subcategory.id,
        subcategory: subcategory.name,
        pointId: point.id,
        point: point.name,
        ...example,
      }))
    )
  )
);

const byId = new Map(rows.map(row => [row.id, row]));
function search(query) {
  const term = query.trim().toLocaleLowerCase();
  return rows.filter(row =>
    [row.category, row.subcategory, row.point, row.en, row.zh]
      .some(text => text.toLocaleLowerCase().includes(term))
  );
}

const results = search('主谓一致');
```

渲染手动编辑的文本时使用 `textContent`，避免直接写入 `innerHTML`。网页加载本身不会保存修改；将来若增加网页编辑，需要另做导出或写入功能。
