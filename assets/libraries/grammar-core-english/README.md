# 英语核心语法例句：预览版

本版有 6 个大类、20 个小类、120 个语法点，每点 1 句中英对照。这是可修改的教学目录，不是英语语法的固定总数，也不是对各小类的穷尽覆盖。

## 文件用途

工程目录：`langLSRW/assets/libraries/grammar-core-english/`，与其他内置句库并列。现有构建脚本会复制 `assets/libraries`，无需另加资源复制配置。

- `grammar-core-120-preview.json`：唯一编辑源，供后续网页加载。
- `grammar-core-120-preview.txt`：同一批内容的阅读快照。修改 JSON 后，文本版不会自动同步。
- 网页“句库 → 语法句库”已接入：支持按大类、小类、语法点筛选与中英文搜索，可练习当前结果或从指定例句开始。工具栏“语法句库”选项可切换到完整句库。仅在英语模式下可练习；不调用 AI。

## 层级与字段

```text
schemaVersion                 数据格式版本
id / title / description      资料 ID、标题、说明
categories[]                  大类
  id / name                   稳定 ID、显示名称
  subcategories[]             小类
    id / name
    points[]                  语法点
      id / name
      examples[]              例句，可继续增加到 10 句或更多
        id                    唯一例句 ID
        en                    英文原句
        zh                    中文翻译
```

数组顺序就是显示顺序。名称中不重复存编号；网页组合序号与名称，例如 `1：词语短语`、`1-1：词类与构词`、`1-1-1：名词表示人或事物`。编号使用连字符分层、中文冒号分隔名称。文本快照使用相同格式。

## 手动添加与修改

1. 用支持 UTF-8 的文本编辑器修改 JSON；不要在 JSON 中加注释或末尾逗号。
2. 修改名称、英文、中文时保留原 ID；调整顺序、移动分类时也保留原 ID。ID 是标识，不是当前路径。
3. 添加例句时，复制同一语法点中一个例句对象，改写 `en`、`zh`，并分配一个尚未使用的新 ID。例如在 `.001` 后新增 `.002`。删除后不要重用已删除 ID。
4. 添加分类或语法点时，复制对应对象并为所有新对象更换唯一 ID。新 ID 建议采用英文短名；不以中文名称或数组位置作为标识。
5. 数量不作为 JSON 中的固定字段保存，网页从数组计算，避免手改后数字失真。增加内容不必修改 `schemaVersion`；改变字段结构或含义才需要升级格式版本。

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
