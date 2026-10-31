# 动词形式：完整大类语法分析

包含时态与体、主动与被动语态、情态动词与相关表达、非谓语动词，共30个语法点、300句。此次新增240句，保留已有60句。

按 traditional-school/8、schemaVersion 2 编写，未调用用户配置的 API。JSON 为唯一编辑源。本大类37句保留不连续谓语的格式限制标记，其余263句为 complete。

## 3-1：时态与体

### 3-1-1：一般现在时

#### 1. She drinks tea every morning.

她每天早上喝茶。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：drinks（动词（一般现在时））
- 宾语：tea（直接宾语（名词短语））
- 状语：every morning.（时间名词短语）
  - 定语：every（限定词）
  - 中心语：morning（名词）

- drinks 是一般现在时，配合 every morning 表示每天的习惯。

#### 2. The earth moves around the sun.

地球绕着太阳转。

句型：主语 + 谓语 + 状语

- 主语：The earth（名词短语）
  - 定语：The（冠词）
  - 中心语：earth（名词）
- 谓语：moves（动词（一般现在时））
- 状语：around the sun.（介词短语）
  - 其他：around（介词）
  - 宾语：the sun.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：sun（名词）

- moves 是一般现在时，表达地球绕太阳运动这一事实。

#### 3. I take the bus to work.

我乘公共汽车上班。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：take（动词（一般现在时））
- 宾语：the bus（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：bus（名词）
- 状语：to work.（介词短语）
  - 其他：to（介词）
  - 宾语：work.（介词宾语（名词短语））

- take 是一般现在时，通常表示经常乘公交车去上班。

#### 4. He teaches English on Fridays.

他每周五教英语。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：teaches（动词（一般现在时））
- 宾语：English（直接宾语（专有名词））
- 状语：on Fridays.（介词短语）
  - 其他：on（介词）
  - 宾语：Fridays.（介词宾语（名词短语））

- teaches 是一般现在时；on Fridays 表示每逢星期五。

#### 5. We usually eat dinner at seven.

我们通常七点吃晚饭。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 状语：usually（副词）
- 谓语：eat（动词（一般现在时））
- 宾语：dinner（直接宾语（名词短语））
- 状语：at seven.（介词短语）
  - 其他：at（介词）
  - 宾语：seven.（介词宾语（数词））

- eat 是一般现在时；usually 和 at seven 分别说明频率和时间。

#### 6. This shop sells local cheese.

这家商店卖当地奶酪。

句型：主语 + 谓语 + 宾语

- 主语：This shop（名词短语）
  - 定语：This（限定词）
  - 中心语：shop（名词）
- 谓语：sells（动词（一般现在时））
- 宾语：local cheese.（直接宾语（名词短语））
  - 定语：local（形容词）
  - 中心语：cheese（名词）

- sells 是一般现在时，描述商店通常销售的商品。

#### 7. My parents live in a small town.

我父母住在一个小镇上。

句型：主语 + 谓语 + 状语

- 主语：My parents（名词短语）
  - 定语：My（限定词）
  - 中心语：parents（名词）
- 谓语：live（动词（一般现在时））
- 状语：in a small town.（介词短语）
  - 其他：in（介词）
  - 宾语：a small town.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 定语：small（形容词）
    - 中心语：town（名词）

- live 是一般现在时，描述父母目前较稳定的居住情况。

#### 8. Water freezes at zero degrees Celsius.

水在零摄氏度结冰。

句型：主语 + 谓语 + 状语

- 主语：Water（名词短语）
- 谓语：freezes（动词（一般现在时））
- 状语：at zero degrees Celsius.（介词短语）
  - 其他：at（介词）
  - 宾语：zero degrees Celsius.（介词宾语（名词短语））
    - 定语：zero（数词）
    - 中心语：degrees（名词）
    - 定语：Celsius（温标名称）

- freezes 是一般现在时，描述水结冰的一般事实；at zero degrees Celsius 说明温度条件。

#### 9. She does not eat meat.

她不吃肉。

句型：否定句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：does（助动词；与后面动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：eat（动词原形；与前面的助动词配合）
- 宾语：meat.（直接宾语（名词短语））

- does 与 eat 共同构成一般现在时否定谓语；第三人称单数变化由 does 承担，eat 用原形。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. Do they open the museum on Mondays?

他们星期一开放博物馆吗？

句型：一般疑问句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Do（助动词；与后面动词共同构成谓语）
- 主语：they（人称代词）
- 中心语：open（动词原形；与前面的助动词配合）
- 宾语：the museum（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：museum（名词）
- 状语：on Mondays?（介词短语）
  - 其他：on（介词）
  - 宾语：Mondays?（介词宾语（名词短语））

- Do 提到主语前构成一般现在时一般疑问句；open 用原形。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

### 3-1-2：一般过去时

#### 1. We visited the museum yesterday.

我们昨天参观了博物馆。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：visited（动词（一般过去时））
- 宾语：the museum（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：museum（名词）
- 状语：yesterday.（副词）

- visited 是一般过去时，yesterday 明确指出过去时间。

#### 2. She called me last night.

她昨晚给我打了电话。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：called（动词（一般过去时））
- 宾语：me（直接宾语（人称代词））
- 状语：last night.（时间名词短语）
  - 定语：last（限定词）
  - 中心语：night（名词）

- called 是一般过去时；last night 是时间状语。

#### 3. I lost my wallet yesterday.

我昨天丢了钱包。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：lost（动词（一般过去时））
- 宾语：my wallet（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：wallet（名词）
- 状语：yesterday.（副词）

- lost 是 lose 的过去式；my wallet 是宾语，yesterday 是时间状语。

#### 4. They moved here in 2019.

他们2019年搬到了这里。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：moved（动词（一般过去时））
- 状语：here（副词）
- 状语：in 2019.（介词短语）
  - 其他：in（介词）
  - 宾语：2019.（介词宾语（数词））

- moved 是一般过去时，in 2019 表示过去的具体年份。

#### 5. He cooked dinner for us on Sunday.

他星期日给我们做了晚饭。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：cooked（动词（一般过去时））
- 宾语：dinner（直接宾语（名词短语））
- 状语：for us（介词短语）
  - 其他：for（介词）
  - 宾语：us（介词宾语（人称代词））
- 状语：on Sunday.（介词短语）
  - 其他：on（介词）
  - 宾语：Sunday.（介词宾语（名词短语））

- cooked 是一般过去时；for us 表示受益者，on Sunday 说明时间。

#### 6. We saw a rainbow after the storm.

暴风雨后我们看见了一道彩虹。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：saw（动词（一般过去时））
- 宾语：a rainbow（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：rainbow（名词）
- 状语：after the storm.（介词短语）
  - 其他：after（介词）
  - 宾语：the storm.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：storm（名词）

- saw 是 see 的过去式；after the storm 是时间状语。

#### 7. The lesson ended ten minutes ago.

那节课十分钟前结束了。

句型：主语 + 谓语 + 状语

- 主语：The lesson（名词短语）
  - 定语：The（冠词）
  - 中心语：lesson（名词）
- 谓语：ended（动词（一般过去时））
- 状语：ten minutes ago.（时间副词短语）
  - 状语：ten minutes（时间名词短语）
    - 定语：ten（基数词）
    - 中心语：minutes（名词）
  - 中心语：ago（副词）

- ended 是一般过去时；ten minutes ago 表示十分钟前。

#### 8. My father bought this table last year.

我父亲去年买了这张桌子。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：My father（名词短语）
  - 定语：My（限定词）
  - 中心语：father（名词）
- 谓语：bought（动词（一般过去时））
- 宾语：this table（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：table（名词）
- 状语：last year.（时间名词短语）
  - 定语：last（限定词）
  - 中心语：year（名词）

- bought 是 buy 的过去式；last year 表示去年。

#### 9. She did not come to the meeting.

她没有来参加会议。

句型：否定句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：did（助动词；与后面动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：come（动词原形；与前面的助动词配合）
- 状语：to the meeting.（介词短语）
  - 其他：to（介词）
  - 宾语：the meeting.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：meeting（名词）

- did 与 come 共同构成一般过去时否定谓语；过去时由 did 承担，come 用原形。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. Did you sleep well last night?

你昨晚睡得好吗？

句型：一般疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Did（助动词；与后面动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：sleep（动词原形；与前面的助动词配合）
- 状语：well（副词）
- 状语：last night?（时间名词短语）
  - 定语：last（限定词）
  - 中心语：night（名词）

- Did 放在主语前构成一般过去时一般疑问句；sleep 用原形，last night 说明时间。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

### 3-1-3：一般将来时

#### 1. I will call you tomorrow.

我明天会给你打电话。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：will call（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：call（动词原形）
- 宾语：you（直接宾语（人称代词））
- 状语：tomorrow.（副词）

- will call 是一般将来时谓语；tomorrow 表示将来时间。

#### 2. We will meet you at the entrance.

我们会在入口处与你见面。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：will meet（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：meet（动词原形）
- 宾语：you（直接宾语（人称代词））
- 状语：at the entrance.（介词短语）
  - 其他：at（介词）
  - 宾语：the entrance.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：entrance（名词）

- will meet 表示将来的见面安排或承诺；you 是宾语。

#### 3. She will be eighteen next month.

她下个月就十八岁了。

句型：主语 + 系动词 + 表语 + 状语

- 主语：She（人称代词）
- 谓语：will be（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：be（系动词原形）
- 表语：eighteen（数词）
- 状语：next month.（时间名词短语）
  - 定语：next（限定词）
  - 中心语：month（名词）

- will be 是将来时系动词结构；eighteen 作表语，表示年龄。

#### 4. I will carry that bag for you.

我来帮你拿那个包。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：will carry（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：carry（动词原形）
- 宾语：that bag（直接宾语（名词短语））
  - 定语：that（限定词）
  - 中心语：bag（名词）
- 状语：for you.（介词短语）
  - 其他：for（介词）
  - 宾语：you.（介词宾语（人称代词））

- will carry 在这里可表示主动提出帮助；that bag 是宾语。

#### 5. The weather will improve tomorrow.

明天天气会好转。

句型：主语 + 谓语 + 状语

- 主语：The weather（名词短语）
  - 定语：The（冠词）
  - 中心语：weather（名词）
- 谓语：will improve（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：improve（动词原形）
- 状语：tomorrow.（副词）

- will improve 表示对天气变化的预测；tomorrow 是时间状语。

#### 6. They will arrive before dinner.

他们会在晚饭前到达。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：will arrive（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：arrive（动词原形）
- 状语：before dinner.（介词短语）
  - 其他：before（介词）
  - 宾语：dinner.（介词宾语（名词短语））

- will arrive 表示将来抵达；before dinner 说明时间。

#### 7. He will explain the plan later.

他稍后会解释这个计划。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：will explain（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：explain（动词原形）
- 宾语：the plan（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：plan（名词）
- 状语：later.（副词）

- will explain 表示将来解释；the plan 是宾语，later 是时间状语。

#### 8. I will not forget your kindness.

我不会忘记你的好意。

句型：否定句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：I（人称代词）
- 其他：will（情态动词；与后面动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：forget（动词原形；与前面的助动词配合）
- 宾语：your kindness.（直接宾语（名词短语））
  - 定语：your（限定词）
  - 中心语：kindness（名词）

- will 与 forget 构成将来时谓语，not 表示否定；your kindness 是宾语。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 9. Will you join us for lunch?

你愿意和我们一起吃午饭吗？

句型：一般疑问句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Will（情态动词；与后面动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：join（动词原形；与前面的助动词配合）
- 宾语：us（直接宾语（人称代词））
- 状语：for lunch?（介词短语）
  - 其他：for（介词）
  - 宾语：lunch?（介词宾语（名词短语））

- Will 放在主语前构成将来时问句，也可用于邀请；join 是动词原形。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. The repairs will cost a lot.

维修会花很多钱。

句型：主语 + 谓语 + 宾语

- 主语：The repairs（名词短语）
  - 定语：The（冠词）
  - 中心语：repairs（名词）
- 谓语：will cost（一般将来时动词结构）
  - 其他：will（情态动词）
  - 中心语：cost（动词原形）
- 宾语：a lot.（直接宾语（名词短语））

- will cost 表示对未来费用的预测；a lot 是表示金额的名词性宾语。

### 3-1-4：现在进行时

#### 1. They are playing chess now.

他们现在正在下国际象棋。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：They（人称代词）
- 谓语：are playing（现在进行时动词结构）
  - 其他：are（助动词）
  - 中心语：playing（现在分词）
- 宾语：chess（直接宾语（名词短语））
- 状语：now.（副词）

- are playing 是现在进行时谓语，表示现在正在下棋。

#### 2. I am reading your message now.

我现在正在读你的消息。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：am reading（现在进行时动词结构）
  - 其他：am（助动词）
  - 中心语：reading（现在分词）
- 宾语：your message（直接宾语（名词短语））
  - 定语：your（限定词）
  - 中心语：message（名词）
- 状语：now.（副词）

- am reading 是现在进行时谓语；第一人称单数 I 与 am 搭配。

#### 3. She is talking to the manager.

她正在和经理谈话。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：is talking（现在进行时动词结构）
  - 其他：is（助动词）
  - 中心语：talking（现在分词）
- 状语：to the manager.（介词短语）
  - 其他：to（介词）
  - 宾语：the manager.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：manager（名词）

- is talking 是现在进行时；to the manager 说明交谈对象。

#### 4. We are waiting for the bus.

我们正在等公共汽车。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：are waiting（现在进行时动词结构）
  - 其他：are（助动词）
  - 中心语：waiting（现在分词）
- 状语：for the bus.（介词短语）
  - 其他：for（介词）
  - 宾语：the bus.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：bus（名词）

- are waiting 是现在进行时；for the bus 是介词短语，说明等待对象。

#### 5. The children are building a sandcastle.

孩子们正在堆沙堡。

句型：主语 + 谓语 + 宾语

- 主语：The children（名词短语）
  - 定语：The（冠词）
  - 中心语：children（名词）
- 谓语：are building（现在进行时动词结构）
  - 其他：are（助动词）
  - 中心语：building（现在分词）
- 宾语：a sandcastle.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：sandcastle（名词）

- are building 是现在进行时；a sandcastle 是宾语。

#### 6. He is staying with his aunt this week.

他这周暂住在姑姑家。

句型：主语 + 谓语 + 状语

- 主语：He（人称代词）
- 谓语：is staying（现在进行时动词结构）
  - 其他：is（助动词）
  - 中心语：staying（现在分词）
- 状语：with his aunt（介词短语）
  - 其他：with（介词）
  - 宾语：his aunt（介词宾语（名词短语））
    - 定语：his（限定词）
    - 中心语：aunt（名词）
- 状语：this week.（时间名词短语）
  - 定语：this（限定词）
  - 中心语：week（名词）

- is staying 是现在进行时，表示这周的暂时居住安排。

#### 7. The weather is getting warmer.

天气正在变暖。

句型：主语 + 系动词 + 表语

- 主语：The weather（名词短语）
  - 定语：The（冠词）
  - 中心语：weather（名词）
- 谓语：is getting（现在进行时动词结构）
  - 其他：is（助动词）
  - 中心语：getting（现在分词）
- 表语：warmer.（形容词比较级）

- is getting 是进行时系动词结构；warmer 是比较级表语，说明天气正在变暖。

#### 8. They are not listening to the radio.

他们没有在听广播。

句型：否定句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：They（人称代词）
- 其他：are（助动词；与后面动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：listening（现在分词；与前面的助动词配合）
- 状语：to the radio.（介词短语）
  - 其他：to（介词）
  - 宾语：the radio.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：radio（名词）

- are 与 listening 构成现在进行时谓语，not 表示否定；listening 是现在分词。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 9. Are you using this chair?

你正在用这把椅子吗？

句型：一般疑问句：主语 + 谓语 + 宾语

格式状态：部分分析（具体限制见解释）

- 其他：Are（助动词；与后面动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：using（现在分词；与前面的助动词配合）
- 宾语：this chair?（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：chair（名词）

- Are 提到主语前构成现在进行时一般疑问句；using 与 Are 共同构成谓语。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. Someone is playing the piano upstairs.

楼上有人正在弹钢琴。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：Someone（不定代词）
- 谓语：is playing（现在进行时动词结构）
  - 其他：is（助动词）
  - 中心语：playing（现在分词）
- 宾语：the piano（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：piano（名词）
- 状语：upstairs.（副词）

- Someone 按单数处理，用 is playing；the piano 是宾语，upstairs 是地点状语。

### 3-1-5：过去进行时

#### 1. I was cooking when you called.

你打电话时，我正在做饭。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：was cooking（过去进行时动词结构）
  - 其他：was（助动词）
  - 中心语：cooking（现在分词）
- 状语：when you called.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：you（人称代词）
  - 谓语：called（动词（一般过去时））

- was cooking 表示过去正在进行的动作；when you called 是时间状语从句。

#### 2. She was reading when the lights went out.

灯熄灭时，她正在读书。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：was reading（过去进行时动词结构）
  - 其他：was（助动词）
  - 中心语：reading（现在分词）
- 状语：when the lights went out.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the lights（名词短语）
    - 定语：the（冠词）
    - 中心语：lights（名词）
  - 谓语：went（动词（一般过去时））
  - 状语：out（副词）

- was reading 表示当时正在读书；when the lights went out 说明灯熄灭时这个时间点。

#### 3. We were driving home at six yesterday.

昨天六点时，我们正在开车回家。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：were driving（过去进行时动词结构）
  - 其他：were（助动词）
  - 中心语：driving（现在分词）
- 状语：home（副词）
- 状语：at six yesterday.（时间状语短语）
  - 状语：at six（介词短语）
    - 其他：at（介词）
    - 宾语：six（介词宾语（数词））
  - 状语：yesterday（时间副词）

- were driving 是过去进行时；at six yesterday 表示昨天六点这个过去时刻。

#### 4. The children were sleeping when I arrived.

我到的时候，孩子们正在睡觉。

句型：主语 + 谓语 + 状语

- 主语：The children（名词短语）
  - 定语：The（冠词）
  - 中心语：children（名词）
- 谓语：were sleeping（过去进行时动词结构）
  - 其他：were（助动词）
  - 中心语：sleeping（现在分词）
- 状语：when I arrived.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：I（人称代词）
  - 谓语：arrived（动词（一般过去时））

- were sleeping 是过去进行时；when I arrived 是时间状语从句。

#### 5. He was repairing his bike all morning.

他一上午都在修自行车。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：was repairing（过去进行时动词结构）
  - 其他：was（助动词）
  - 中心语：repairing（现在分词）
- 宾语：his bike（直接宾语（名词短语））
  - 定语：his（限定词）
  - 中心语：bike（名词）
- 状语：all morning.（时间名词短语）
  - 定语：all（限定词）
  - 中心语：morning（名词）

- was repairing 是过去进行时；all morning 表示整个上午。

#### 6. It was snowing when we left.

我们离开时正在下雪。

句型：主语 + 谓语 + 状语

- 主语：It（人称代词）
- 谓语：was snowing（过去进行时动词结构）
  - 其他：was（助动词）
  - 中心语：snowing（现在分词）
- 状语：when we left.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：we（人称代词）
  - 谓语：left（动词（一般过去时））

- It 是天气表达中的形式主语；was snowing 表示当时正在下雪。

#### 7. They were talking while I was cooking.

我做饭时，他们正在聊天。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：were talking（过去进行时动词结构）
  - 其他：were（助动词）
  - 中心语：talking（现在分词）
- 状语：while I was cooking.（时间状语从句）
  - 其他：while（从属连词）
  - 主语：I（人称代词）
  - 谓语：was cooking（过去进行时动词结构）
    - 其他：was（助动词）
    - 中心语：cooking（现在分词）

- were talking 和 was cooking 都是过去进行时；while 从句表示两个动作同时进行。

#### 8. I was not paying attention at that moment.

那个时候我没有在留心听。

句型：否定句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：I（人称代词）
- 其他：was（助动词；与后面动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：paying（现在分词；与前面的助动词配合）
- 宾语：attention（直接宾语（名词短语））
- 状语：at that moment.（介词短语）
  - 其他：at（介词）
  - 宾语：that moment.（介词宾语（名词短语））
    - 定语：that（限定词）
    - 中心语：moment（名词）

- was 与 paying 构成过去进行时谓语，not 表示否定；attention 是宾语。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 9. Were you working at midnight?

午夜时你还在工作吗？

句型：一般疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Were（助动词；与后面动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：working（现在分词；与前面的助动词配合）
- 状语：at midnight?（介词短语）
  - 其他：at（介词）
  - 宾语：midnight?（介词宾语（名词短语））

- Were 提到主语前构成过去进行时一般疑问句；working 与 Were 共同构成谓语。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. The dog was barking outside at dawn.

黎明时，那只狗正在外面叫。

句型：主语 + 谓语 + 状语

- 主语：The dog（名词短语）
  - 定语：The（冠词）
  - 中心语：dog（名词）
- 谓语：was barking（过去进行时动词结构）
  - 其他：was（助动词）
  - 中心语：barking（现在分词）
- 状语：outside（副词）
- 状语：at dawn.（介词短语）
  - 其他：at（介词）
  - 宾语：dawn.（介词宾语（名词短语））

- was barking 是过去进行时；outside 和 at dawn 分别说明地点和时间。

### 3-1-6：将来进行时

#### 1. This time tomorrow, we will be flying to Rome.

明天这个时候，我们将正在飞往罗马的途中。

句型：主语 + 谓语 + 状语

- 状语：This time tomorrow,（时间名词短语）
  - 中心语：This time（名词短语）
    - 定语：This（限定词）
    - 中心语：time（名词）
  - 定语：tomorrow（时间副词）
- 主语：we（人称代词）
- 谓语：will be flying（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：flying（现在分词）
- 状语：to Rome.（介词短语）
  - 其他：to（介词）
  - 宾语：Rome.（介词宾语（专有名词））

- will be flying 是将来进行时；This time tomorrow 表示明天这个时候。

#### 2. At eight tonight, I will be studying.

今晚八点，我将正在学习。

句型：主语 + 谓语 + 状语

- 状语：At eight tonight,（时间状语短语）
  - 状语：At eight（介词短语）
    - 其他：At（介词）
    - 宾语：eight（介词宾语（数词））
  - 状语：tonight（时间副词）
- 主语：I（人称代词）
- 谓语：will be studying.（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：studying（现在分词）

- will be studying 是将来进行时，表示今晚八点将正在学习。

#### 3. She will be working when you arrive.

你到的时候，她将正在工作。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：will be working（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：working（现在分词）
- 状语：when you arrive.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：you（人称代词）
  - 谓语：arrive（动词（一般现在时））

- will be working 是将来进行时；when you arrive 用一般现在时表达将来的时间条件。

#### 4. We will be waiting outside the theater.

我们到时会在剧院外等候。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：will be waiting（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：waiting（现在分词）
- 状语：outside the theater.（介词短语）
  - 其他：outside（介词）
  - 宾语：the theater.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：theater（名词）

- will be waiting 是将来进行时；outside the theater 是地点状语。

#### 5. They will be traveling all day tomorrow.

他们明天一整天都将在旅途中。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：will be traveling（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：traveling（现在分词）
- 状语：all day tomorrow.（时间名词短语）
  - 中心语：all day（名词短语）
    - 定语：all（限定词）
    - 中心语：day（名词）
  - 定语：tomorrow（时间副词）

- will be traveling 是将来进行时；all day tomorrow 表示明天一整天。

#### 6. This time next week, he will be relaxing by the sea.

下周这个时候，他将正在海边休息。

句型：主语 + 谓语 + 状语

- 状语：This time next week,（时间名词短语）
  - 中心语：This time（名词短语）
    - 定语：This（限定词）
    - 中心语：time（名词）
  - 定语：next week（时间名词短语）
    - 定语：next（限定词）
    - 中心语：week（名词）
- 主语：he（人称代词）
- 谓语：will be relaxing（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：relaxing（现在分词）
- 状语：by the sea.（介词短语）
  - 其他：by（介词）
  - 宾语：the sea.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：sea（名词）

- will be relaxing 是将来进行时；This time next week 表示下周这个时候。

#### 7. I will be teaching from nine to eleven tomorrow.

明天九点到十一点，我将正在上课。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：will be teaching（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：teaching（现在分词）
- 状语：from nine to eleven（起止时间介词结构）
  - 状语：from nine（介词短语）
    - 其他：from（介词）
    - 宾语：nine（介词宾语（数词））
  - 状语：to eleven（介词短语）
    - 其他：to（介词）
    - 宾语：eleven（介词宾语（数词））
- 状语：tomorrow.（副词）

- will be teaching 是将来进行时；from nine to eleven 表示起止时段，tomorrow 指明日期。

#### 8. The children will be sleeping by then.

到那时，孩子们将正在睡觉。

句型：主语 + 谓语 + 状语

- 主语：The children（名词短语）
  - 定语：The（冠词）
  - 中心语：children（名词）
- 谓语：will be sleeping（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：sleeping（现在分词）
- 状语：by then.（介词短语）
  - 其他：by（介词）
  - 宾语：then.（介词宾语（副词））

- will be sleeping 是将来进行时；by then 表示到那时，不能仅因 by 就判断为完成时。

#### 9. Will you be using the car this evening?

你今晚会用车吗？

句型：一般疑问句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Will（情态动词；与后面动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：be using（谓语动词片段（非完整谓语）；与前面的助动词配合）
  - 其他：be（助动词原形）
  - 中心语：using（现在分词）
- 宾语：the car（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：car（名词）
- 状语：this evening?（时间名词短语）
  - 定语：this（限定词）
  - 中心语：evening（名词）

- Will 提到主语前形成将来进行时问句，和 be using 共同构成谓语；可用于询问对方的用车安排。
- 谓语组成被主语或 not 隔开；当前连续片段格式分别保留各部分，不能关联为一个谓语节点，因此标记格式限制，完整语法关系见前述说明。

#### 10. At noon tomorrow, we will be crossing the border.

明天中午，我们将正在过境。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：At noon tomorrow,（时间状语短语）
  - 状语：At noon（介词短语）
    - 其他：At（介词）
    - 宾语：noon（介词宾语（名词短语））
  - 状语：tomorrow（时间副词）
- 主语：we（人称代词）
- 谓语：will be crossing（将来进行时动词结构）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：crossing（现在分词）
- 宾语：the border.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：border（名词）

- will be crossing 是将来进行时；At noon tomorrow 表示明天中午，the border 是宾语。

### 3-1-7：现在完成时

#### 1. I have already finished my homework.

我已经做完作业了。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：I（人称代词）
- 其他：have（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：already（副词）
- 中心语：finished（谓语组成片段（过去分词））
- 宾语：my homework.（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：homework（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 谓语由 have 与 finished 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 2. She has just left the office.

她刚刚离开办公室。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：has（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：just（副词）
- 中心语：left（谓语组成片段（过去分词））
- 宾语：the office.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：office（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 谓语由 has 与 left 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 3. We have visited that museum twice.

我们已经去过那家博物馆两次了。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：have visited（现在完成时）
  - 其他：have（助动词）
  - 中心语：visited（过去分词）
- 宾语：that museum（直接宾语（名词短语））
  - 定语：that（限定词）
  - 中心语：museum（名词）
- 状语：twice.（副词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 本句主语是 We，主句谓语动词结构是 have visited。

#### 4. He has lost his keys.

他的钥匙丢了。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：has lost（现在完成时）
  - 其他：has（助动词）
  - 中心语：lost（过去分词）
- 宾语：his keys.（直接宾语（名词短语））
  - 定语：his（限定词）
  - 中心语：keys（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 本句主语是 He，主句谓语动词结构是 has lost。

#### 5. I have never tried skiing.

我从未尝试过滑雪。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：I（人称代词）
- 其他：have（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：never（否定副词）
- 中心语：tried（谓语组成片段（过去分词））
- 宾语：skiing.（直接宾语（动名词短语））

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- never 是否定频率副词；tried 后的 skiing 是动名词宾语。
- 谓语由 have 与 tried 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 6. They have lived here for five years.

他们在这里已经住了五年。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：have lived（现在完成时）
  - 其他：have（助动词）
  - 中心语：lived（过去分词）
- 状语：here（副词）
- 状语：for five years.（介词短语）
  - 其他：for（介词）
  - 宾语：five years.（介词宾语（名词短语））
    - 定语：five（数词）
    - 中心语：years（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 本句主语是 They，主句谓语动词结构是 have lived。

#### 7. The rain has stopped.

雨已经停了。

句型：主语 + 谓语

- 主语：The rain（名词短语）
  - 定语：The（冠词）
  - 中心语：rain（名词）
- 谓语：has stopped.（现在完成时）
  - 其他：has（助动词）
  - 中心语：stopped（过去分词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 本句主语是 The rain，主句谓语动词结构是 has stopped。

#### 8. Have you seen my glasses?

你看到我的眼镜了吗？

句型：疑问句：主语 + 谓语 + 宾语

格式状态：部分分析（具体限制见解释）

- 其他：Have（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：seen（谓语组成片段（过去分词））
- 宾语：my glasses?（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：glasses（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 谓语由 Have 与 seen 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. She has not replied yet.

她还没有回复。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：has（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：replied（谓语组成片段（过去分词））
- 状语：yet.（副词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 谓语由 has 与 replied 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. Our team has won three games this season.

我们队本赛季已经赢了三场比赛。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：Our team（名词短语）
  - 定语：Our（限定词）
  - 中心语：team（名词）
- 谓语：has won（现在完成时）
  - 其他：has（助动词）
  - 中心语：won（过去分词）
- 宾语：three games（直接宾语（名词短语））
  - 定语：three（数词）
  - 中心语：games（名词）
- 状语：this season.（时间名词短语）
  - 定语：this（限定词）
  - 中心语：season（名词）

- 现在完成时将过去的动作或经历与现在联系起来；谓语由 have/has 与过去分词构成。
- 本句主语是 Our team，主句谓语动词结构是 has won。

### 3-1-8：过去完成时

#### 1. The train had left before we reached the station.

我们到达车站前，火车已经开走了。

句型：主语 + 谓语 + 状语

- 主语：The train（名词短语）
  - 定语：The（冠词）
  - 中心语：train（名词）
- 谓语：had left（过去完成时）
  - 其他：had（助动词）
  - 中心语：left（过去分词）
- 状语：before we reached the station.（时间状语从句）
  - 其他：before（从属连词）
  - 主语：we（人称代词）
  - 谓语：reached（动词（一般过去时））
  - 宾语：the station（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：station（名词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 本句主语是 The train，主句谓语动词结构是 had left。

#### 2. She had finished cooking when we arrived.

我们到时，她已经做好饭了。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：had finished（过去完成时）
  - 其他：had（助动词）
  - 中心语：finished（过去分词）
- 宾语：cooking（直接宾语（动名词短语））
- 状语：when we arrived.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：we（人称代词）
  - 谓语：arrived（动词（一般过去时））

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 本句主语是 She，主句谓语动词结构是 had finished。

#### 3. I realized that I had forgotten my passport.

我意识到自己忘带护照了。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：realized（动词（一般过去时））
- 宾语：that I had forgotten my passport.（宾语从句）
  - 其他：that（从属连词）
  - 主语：I（人称代词）
  - 谓语：had forgotten（过去完成时）
    - 其他：had（助动词）
    - 中心语：forgotten（过去分词）
  - 宾语：my passport（直接宾语（名词短语））
    - 定语：my（限定词）
    - 中心语：passport（名词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- that 引导 realized 的宾语从句；had forgotten 位于从句内部。

#### 4. They had never flown before that trip.

那次旅行之前，他们从未坐过飞机。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：They（人称代词）
- 其他：had（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：never（否定副词）
- 中心语：flown（谓语组成片段（过去分词））
- 状语：before that trip.（介词短语）
  - 其他：before（介词）
  - 宾语：that trip.（介词宾语（名词短语））
    - 定语：that（限定词）
    - 中心语：trip（名词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 谓语由 had 与 flown 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 5. By midnight, everyone had gone home.

到午夜时，所有人都已经回家了。

句型：主语 + 谓语 + 状语

- 状语：By midnight,（介词短语）
  - 其他：By（介词）
  - 宾语：midnight,（介词宾语（名词短语））
- 主语：everyone（不定代词）
- 谓语：had gone（过去完成时）
  - 其他：had（助动词）
  - 中心语：gone（过去分词）
- 状语：home.（副词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 本句主语是 everyone，主句谓语动词结构是 had gone。

#### 6. He recognized the song because he had heard it before.

他认出了那首歌，因为以前听过。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：recognized（动词（一般过去时））
- 宾语：the song（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：song（名词）
- 状语：because he had heard it before.（原因状语从句）
  - 其他：because（从属连词）
  - 主语：he（人称代词）
  - 谓语：had heard（过去完成时）
    - 其他：had（助动词）
    - 中心语：heard（过去分词）
  - 宾语：it（直接宾语（人称代词））
  - 状语：before（副词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 本句主语是 He，主句谓语动词结构是 recognized。

#### 7. The film had already started when I sat down.

我坐下时，电影已经开始了。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：The film（名词短语）
  - 定语：The（冠词）
  - 中心语：film（名词）
- 其他：had（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：already（副词）
- 中心语：started（谓语组成片段（过去分词））
- 状语：when I sat down.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：I（人称代词）
  - 谓语：sat（动词（一般过去时））
  - 状语：down（副词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 谓语由 had 与 started 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 8. We had not met before the conference.

那次会议之前，我们没有见过面。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：We（人称代词）
- 其他：had（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：met（谓语组成片段（过去分词））
- 状语：before the conference.（介词短语）
  - 其他：before（介词）
  - 宾语：the conference.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：conference（名词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 谓语由 had 与 met 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. Had you booked a room before you left?

你出发前订好房间了吗？

句型：疑问句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Had（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：booked（谓语组成片段（过去分词））
- 宾语：a room（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：room（名词）
- 状语：before you left?（时间状语从句）
  - 其他：before（从属连词）
  - 主语：you（人称代词）
  - 谓语：left（动词（一般过去时））

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 谓语由 Had 与 booked 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. The ground was wet because it had rained overnight.

地面是湿的，因为夜里下过雨。

句型：主语 + 系动词 + 表语 + 状语

- 主语：The ground（名词短语）
  - 定语：The（冠词）
  - 中心语：ground（名词）
- 谓语：was（系动词（一般过去时））
- 表语：wet（形容词）
- 状语：because it had rained overnight.（原因状语从句）
  - 其他：because（从属连词）
  - 主语：it（人称代词）
  - 谓语：had rained（过去完成时）
    - 其他：had（助动词）
    - 中心语：rained（过去分词）
  - 状语：overnight（副词）

- 过去完成时表示在过去参照时间之前已经发生的动作；谓语包含 had 与过去分词。
- 本句主语是 The ground，主句谓语动词结构是 was。

### 3-1-9：将来完成时

#### 1. By Friday, she will have finished the report.

到星期五，她将已经完成这份报告。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：By Friday,（介词短语）
  - 其他：By（介词）
  - 宾语：Friday,（介词宾语（名词短语））
- 主语：she（人称代词）
- 谓语：will have finished（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：finished（过去分词）
- 宾语：the report.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：report（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 she，主句谓语动词结构是 will have finished。

#### 2. By noon, I will have sent all the invitations.

到中午，我将已经寄出所有邀请函。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：By noon,（介词短语）
  - 其他：By（介词）
  - 宾语：noon,（介词宾语（名词短语））
- 主语：I（人称代词）
- 谓语：will have sent（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：sent（过去分词）
- 宾语：all the invitations.（直接宾语（名词短语））
  - 定语：all（限定词）
  - 定语：the（冠词）
  - 中心语：invitations（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 I，主句谓语动词结构是 will have sent。

#### 3. She will have graduated by next summer.

到明年夏天，她将已经毕业。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：will have graduated（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：graduated（过去分词）
- 状语：by next summer.（介词短语）
  - 其他：by（介词）
  - 宾语：next summer.（介词宾语（名词短语））
    - 定语：next（限定词）
    - 中心语：summer（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 She，主句谓语动词结构是 will have graduated。

#### 4. We will have saved enough money by December.

到十二月，我们将已经存够钱。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：will have saved（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：saved（过去分词）
- 宾语：enough money（直接宾语（名词短语））
  - 定语：enough（限定词）
  - 中心语：money（名词）
- 状语：by December.（介词短语）
  - 其他：by（介词）
  - 宾语：December.（介词宾语（名词短语））

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 We，主句谓语动词结构是 will have saved。

#### 5. The train will have left by the time you arrive.

等你到时，火车将已经开走了。

句型：主语 + 谓语 + 状语

- 主语：The train（名词短语）
  - 定语：The（冠词）
  - 中心语：train（名词）
- 谓语：will have left（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：left（过去分词）
- 状语：by the time you arrive.（时间状语从句）
  - 其他：by the time（从属连词短语）
  - 主语：you（人称代词）
  - 谓语：arrive（动词（一般现在时））

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 The train，主句谓语动词结构是 will have left。

#### 6. He will have read the book before our next lesson.

下次上课前，他将已经读完那本书。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：will have read（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：read（过去分词）
- 宾语：the book（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：book（名词）
- 状语：before our next lesson.（介词短语）
  - 其他：before（介词）
  - 宾语：our next lesson.（介词宾语（名词短语））
    - 定语：our（限定词）
    - 定语：next（限定词）
    - 中心语：lesson（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 He，主句谓语动词结构是 will have read。

#### 7. By tonight, they will have painted every room.

到今晚，他们将已经粉刷完所有房间。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：By tonight,（介词短语）
  - 其他：By（介词）
  - 宾语：tonight,（介词宾语（副词））
- 主语：they（人称代词）
- 谓语：will have painted（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：painted（过去分词）
- 宾语：every room.（直接宾语（名词短语））
  - 定语：every（限定词）
  - 中心语：room（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 they，主句谓语动词结构是 will have painted。

#### 8. I will not have finished by five.

到五点时，我还完成不了。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：I（人称代词）
- 其他：will（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：have finished（谓语组成片段（现在完成时））
  - 其他：have（助动词）
  - 中心语：finished（过去分词）
- 状语：by five.（介词短语）
  - 其他：by（介词）
  - 宾语：five.（介词宾语（名词短语））

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 谓语由 will 与 have finished 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. Will you have completed the course by June?

到六月，你会已经完成这门课程吗？

句型：疑问句：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Will（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：have completed（谓语组成片段（现在完成时））
  - 其他：have（助动词）
  - 中心语：completed（过去分词）
- 宾语：the course（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：course（名词）
- 状语：by June?（介词短语）
  - 其他：by（介词）
  - 宾语：June?（介词宾语（名词短语））

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 谓语由 Will 与 have completed 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. By the end of this month, we will have lived here for a year.

到本月底，我们住在这里就满一年了。

句型：主语 + 谓语 + 状语

- 状语：By the end of this month,（介词短语）
  - 其他：By（介词）
  - 宾语：the end of this month,（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：end（名词）
    - 定语：of this month（介词短语）
      - 其他：of（介词）
      - 宾语：this month（介词宾语（名词短语））
        - 定语：this（限定词）
        - 中心语：month（名词）
- 主语：we（人称代词）
- 谓语：will have lived（将来完成时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 中心语：lived（过去分词）
- 状语：here（副词）
- 状语：for a year.（介词短语）
  - 其他：for（介词）
  - 宾语：a year.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：year（名词）

- 将来完成时表示到将来参照时间已经完成或达到的状态；谓语包含 will have 与过去分词。
- 本句主语是 we，主句谓语动词结构是 will have lived。

### 3-1-10：现在完成进行时

#### 1. I have been studying for two hours.

我已经连续学习两个小时了。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：have been studying（现在完成进行时）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：studying（现在分词）
- 状语：for two hours.（介词短语）
  - 其他：for（介词）
  - 宾语：two hours.（介词宾语（名词短语））
    - 定语：two（数词）
    - 中心语：hours（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 I，主句谓语动词结构是 have been studying。

#### 2. She has been working since dawn.

她从黎明开始一直工作到现在。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：has been working（现在完成进行时）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：working（现在分词）
- 状语：since dawn.（介词短语）
  - 其他：since（介词）
  - 宾语：dawn.（介词宾语（名词短语））

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 She，主句谓语动词结构是 has been working。

#### 3. We have been waiting for the bus for thirty minutes.

我们已经等公共汽车三十分钟了。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：have been waiting（现在完成进行时）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：waiting（现在分词）
- 状语：for the bus（介词短语）
  - 其他：for（介词）
  - 宾语：the bus（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：bus（名词）
- 状语：for thirty minutes.（介词短语）
  - 其他：for（介词）
  - 宾语：thirty minutes.（介词宾语（名词短语））
    - 定语：thirty（数词）
    - 中心语：minutes（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 We，主句谓语动词结构是 have been waiting。

#### 4. It has been raining all morning.

整个上午一直在下雨。

句型：主语 + 谓语 + 状语

- 主语：It（人称代词）
- 谓语：has been raining（现在完成进行时）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：raining（现在分词）
- 状语：all morning.（时间名词短语）
  - 定语：all（限定词）
  - 中心语：morning（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 It，主句谓语动词结构是 has been raining。

#### 5. He has been learning Japanese for a year.

他学习日语已经一年了。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：has been learning（现在完成进行时）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：learning（现在分词）
- 宾语：Japanese（直接宾语（专有名词））
- 状语：for a year.（介词短语）
  - 其他：for（介词）
  - 宾语：a year.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：year（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 He，主句谓语动词结构是 has been learning。

#### 6. They have been repairing the road this week.

他们这周一直在修路。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：They（人称代词）
- 谓语：have been repairing（现在完成进行时）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：repairing（现在分词）
- 宾语：the road（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：road（名词）
- 状语：this week.（时间名词短语）
  - 定语：this（限定词）
  - 中心语：week（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 They，主句谓语动词结构是 have been repairing。

#### 7. I have been looking for my keys.

我一直在找钥匙。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：have been looking（现在完成进行时）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：looking（现在分词）
- 状语：for my keys.（介词短语）
  - 其他：for（介词）
  - 宾语：my keys.（介词宾语（名词短语））
    - 定语：my（限定词）
    - 中心语：keys（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 I，主句谓语动词结构是 have been looking。

#### 8. The baby has been crying for ten minutes.

宝宝已经哭了十分钟了。

句型：主语 + 谓语 + 状语

- 主语：The baby（名词短语）
  - 定语：The（冠词）
  - 中心语：baby（名词）
- 谓语：has been crying（现在完成进行时）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：crying（现在分词）
- 状语：for ten minutes.（介词短语）
  - 其他：for（介词）
  - 宾语：ten minutes.（介词宾语（名词短语））
    - 定语：ten（数词）
    - 中心语：minutes（名词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 本句主语是 The baby，主句谓语动词结构是 has been crying。

#### 9. Have you been sleeping well lately?

你最近睡得好吗？

句型：疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Have（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：been sleeping（谓语组成片段（动词结构））
  - 其他：been（助动词）
  - 中心语：sleeping（现在分词）
- 状语：well（副词）
- 状语：lately?（副词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- 谓语由 Have 与 been sleeping 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. She has not been feeling well recently.

她最近一直感觉不舒服。

句型：主语 + 系动词 + 表语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：has（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：been feeling（谓语组成片段（动词结构））
  - 其他：been（助动词）
  - 中心语：feeling（现在分词）
- 表语：well（形容词）
- 状语：recently.（副词）

- 现在完成进行时强调持续到现在或刚刚结束的过程，谓语含 have/has been 与现在分词。
- well 在这里是表示身体健康的形容词，作 feeling 的表语。
- 谓语由 has 与 been feeling 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

### 3-1-11：过去完成进行时

#### 1. He had been waiting for an hour when the bus arrived.

公共汽车到达时，他已经等了一个小时。

句型：主语 + 谓语 + 状语

- 主语：He（人称代词）
- 谓语：had been waiting（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：waiting（现在分词）
- 状语：for an hour（介词短语）
  - 其他：for（介词）
  - 宾语：an hour（介词宾语（名词短语））
    - 定语：an（冠词）
    - 中心语：hour（名词）
- 状语：when the bus arrived.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the bus（名词短语）
    - 定语：the（冠词）
    - 中心语：bus（名词）
  - 谓语：arrived（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 He，主句谓语动词结构是 had been waiting。

#### 2. I had been studying for three hours when she called.

她打电话时，我已经连续学习三个小时了。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：had been studying（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：studying（现在分词）
- 状语：for three hours（介词短语）
  - 其他：for（介词）
  - 宾语：three hours（介词宾语（名词短语））
    - 定语：three（数词）
    - 中心语：hours（名词）
- 状语：when she called.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：she（人称代词）
  - 谓语：called（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 I，主句谓语动词结构是 had been studying。

#### 3. They had been driving all night before they stopped.

停车休息前，他们已经开了一整夜的车。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：had been driving（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：driving（现在分词）
- 状语：all night（时间名词短语）
  - 定语：all（限定词）
  - 中心语：night（名词）
- 状语：before they stopped.（时间状语从句）
  - 其他：before（从属连词）
  - 主语：they（人称代词）
  - 谓语：stopped（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 They，主句谓语动词结构是 had been driving。

#### 4. She was tired because she had been gardening.

她很累，因为此前一直在园子里干活。

句型：主语 + 系动词 + 表语 + 状语

- 主语：She（人称代词）
- 谓语：was（系动词（一般过去时））
- 表语：tired（形容词）
- 状语：because she had been gardening.（原因状语从句）
  - 其他：because（从属连词）
  - 主语：she（人称代词）
  - 谓语：had been gardening（过去完成进行时）
    - 其他：had（助动词）
    - 其他：been（助动词）
    - 中心语：gardening（现在分词）

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 She，主句谓语动词结构是 was。

#### 5. We had been living there for a year when the factory closed.

工厂关闭时，我们已经在那里住了一年。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：had been living（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：living（现在分词）
- 状语：there（副词）
- 状语：for a year（介词短语）
  - 其他：for（介词）
  - 宾语：a year（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：year（名词）
- 状语：when the factory closed.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the factory（名词短语）
    - 定语：the（冠词）
    - 中心语：factory（名词）
  - 谓语：closed（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 We，主句谓语动词结构是 had been living。

#### 6. He had been practicing for weeks before the concert.

音乐会之前，他已经练习了好几个星期。

句型：主语 + 谓语 + 状语

- 主语：He（人称代词）
- 谓语：had been practicing（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：practicing（现在分词）
- 状语：for weeks（介词短语）
  - 其他：for（介词）
  - 宾语：weeks（介词宾语（名词短语））
- 状语：before the concert.（介词短语）
  - 其他：before（介词）
  - 宾语：the concert.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：concert（名词）

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 He，主句谓语动词结构是 had been practicing。

#### 7. It had been snowing for hours when the roads closed.

道路封闭时，雪已经下了好几个小时。

句型：主语 + 谓语 + 状语

- 主语：It（人称代词）
- 谓语：had been snowing（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：snowing（现在分词）
- 状语：for hours（介词短语）
  - 其他：for（介词）
  - 宾语：hours（介词宾语（名词短语））
- 状语：when the roads closed.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the roads（名词短语）
    - 定语：the（冠词）
    - 中心语：roads（名词）
  - 谓语：closed（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 It，主句谓语动词结构是 had been snowing。

#### 8. The children had been playing outside before dinner.

吃晚饭前，孩子们一直在外面玩。

句型：主语 + 谓语 + 状语

- 主语：The children（名词短语）
  - 定语：The（冠词）
  - 中心语：children（名词）
- 谓语：had been playing（过去完成进行时）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：playing（现在分词）
- 状语：outside（副词）
- 状语：before dinner.（介词短语）
  - 其他：before（介词）
  - 宾语：dinner.（介词宾语（名词短语））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 本句主语是 The children，主句谓语动词结构是 had been playing。

#### 9. Had you been waiting long when the doctor arrived?

医生到时，你已经等了很久吗？

句型：疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Had（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：been waiting（谓语组成片段（动词结构））
  - 其他：been（助动词）
  - 中心语：waiting（现在分词）
- 状语：long（副词）
- 状语：when the doctor arrived?（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the doctor（名词短语）
    - 定语：the（冠词）
    - 中心语：doctor（名词）
  - 谓语：arrived（动词（一般过去时））

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- 谓语由 Had 与 been waiting 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. My eyes hurt because I had been reading in dim light.

我的眼睛疼，因为此前一直在昏暗的光线下阅读。

句型：主语 + 谓语 + 状语

- 主语：My eyes（名词短语）
  - 定语：My（限定词）
  - 中心语：eyes（名词）
- 谓语：hurt（动词（一般过去时））
- 状语：because I had been reading in dim light.（原因状语从句）
  - 其他：because（从属连词）
  - 主语：I（人称代词）
  - 谓语：had been reading（过去完成进行时）
    - 其他：had（助动词）
    - 其他：been（助动词）
    - 中心语：reading（现在分词）
  - 状语：in dim light（介词短语）
    - 其他：in（介词）
    - 宾语：dim light（介词宾语（名词短语））
      - 定语：dim（形容词）
      - 中心语：light（名词）

- 过去完成进行时强调持续到某个过去参照时间的过程，谓语含 had been 与现在分词。
- hurt 的现在式与过去式同形；本句结合 had been reading 按过去语境分析。

### 3-1-12：将来完成进行时

#### 1. By June, she will have been teaching here for ten years.

到六月，她在这里任教就满十年了。

句型：主语 + 谓语 + 状语

- 状语：By June,（介词短语）
  - 其他：By（介词）
  - 宾语：June,（介词宾语（名词短语））
- 主语：she（人称代词）
- 谓语：will have been teaching（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：teaching（现在分词）
- 状语：here（副词）
- 状语：for ten years.（介词短语）
  - 其他：for（介词）
  - 宾语：ten years.（介词宾语（名词短语））
    - 定语：ten（数词）
    - 中心语：years（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 she，主句谓语动词结构是 will have been teaching。

#### 2. By noon, I will have been working for six hours.

到中午，我就已经连续工作六个小时了。

句型：主语 + 谓语 + 状语

- 状语：By noon,（介词短语）
  - 其他：By（介词）
  - 宾语：noon,（介词宾语（名词短语））
- 主语：I（人称代词）
- 谓语：will have been working（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：working（现在分词）
- 状语：for six hours.（介词短语）
  - 其他：for（介词）
  - 宾语：six hours.（介词宾语（名词短语））
    - 定语：six（数词）
    - 中心语：hours（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 I，主句谓语动词结构是 will have been working。

#### 3. By next month, he will have been studying French for two years.

到下个月，他学习法语就满两年了。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：By next month,（介词短语）
  - 其他：By（介词）
  - 宾语：next month,（介词宾语（名词短语））
    - 定语：next（限定词）
    - 中心语：month（名词）
- 主语：he（人称代词）
- 谓语：will have been studying（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：studying（现在分词）
- 宾语：French（直接宾语（专有名词））
- 状语：for two years.（介词短语）
  - 其他：for（介词）
  - 宾语：two years.（介词宾语（名词短语））
    - 定语：two（数词）
    - 中心语：years（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 he，主句谓语动词结构是 will have been studying。

#### 4. When we arrive, they will have been waiting for an hour.

我们到时，他们就已经等了一个小时了。

句型：主语 + 谓语 + 状语

- 状语：When we arrive,（时间状语从句）
  - 其他：When（从属连词）
  - 主语：we（人称代词）
  - 谓语：arrive（动词（一般现在时））
- 主语：they（人称代词）
- 谓语：will have been waiting（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：waiting（现在分词）
- 状语：for an hour.（介词短语）
  - 其他：for（介词）
  - 宾语：an hour.（介词宾语（名词短语））
    - 定语：an（冠词）
    - 中心语：hour（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- When we arrive 是时间状语从句，用一般现在时表达将来。

#### 5. By sunset, we will have been walking for eight hours.

到日落时，我们就已经连续走了八个小时了。

句型：主语 + 谓语 + 状语

- 状语：By sunset,（介词短语）
  - 其他：By（介词）
  - 宾语：sunset,（介词宾语（名词短语））
- 主语：we（人称代词）
- 谓语：will have been walking（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：walking（现在分词）
- 状语：for eight hours.（介词短语）
  - 其他：for（介词）
  - 宾语：eight hours.（介词宾语（名词短语））
    - 定语：eight（数词）
    - 中心语：hours（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 we，主句谓语动词结构是 will have been walking。

#### 6. By Friday, the team will have been testing the software for a week.

到星期五，团队测试这款软件就满一周了。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：By Friday,（介词短语）
  - 其他：By（介词）
  - 宾语：Friday,（介词宾语（名词短语））
- 主语：the team（名词短语）
  - 定语：the（冠词）
  - 中心语：team（名词）
- 谓语：will have been testing（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：testing（现在分词）
- 宾语：the software（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：software（名词）
- 状语：for a week.（介词短语）
  - 其他：for（介词）
  - 宾语：a week.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：week（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 the team，主句谓语动词结构是 will have been testing。

#### 7. By July, she will have been living abroad for five years.

到七月，她在国外生活就满五年了。

句型：主语 + 谓语 + 状语

- 状语：By July,（介词短语）
  - 其他：By（介词）
  - 宾语：July,（介词宾语（名词短语））
- 主语：she（人称代词）
- 谓语：will have been living（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：living（现在分词）
- 状语：abroad（副词）
- 状语：for five years.（介词短语）
  - 其他：for（介词）
  - 宾语：five years.（介词宾语（名词短语））
    - 定语：five（数词）
    - 中心语：years（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 she，主句谓语动词结构是 will have been living。

#### 8. At ten tonight, he will have been driving for four hours.

今晚十点时，他就已经连续开车四个小时了。

句型：主语 + 谓语 + 状语

- 状语：At ten tonight,（时间状语短语）
  - 状语：At ten（介词短语）
    - 其他：At（介词）
    - 宾语：ten（介词宾语（名词短语））
  - 状语：tonight（时间副词）
- 主语：he（人称代词）
- 谓语：will have been driving（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：driving（现在分词）
- 状语：for four hours.（介词短语）
  - 其他：for（介词）
  - 宾语：four hours.（介词宾语（名词短语））
    - 定语：four（数词）
    - 中心语：hours（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 he，主句谓语动词结构是 will have been driving。

#### 9. By the end of the season, they will have been training together for nine months.

到赛季结束时，他们一起训练就满九个月了。

句型：主语 + 谓语 + 状语

- 状语：By the end of the season,（介词短语）
  - 其他：By（介词）
  - 宾语：the end of the season,（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：end（名词）
    - 定语：of the season（介词短语）
      - 其他：of（介词）
      - 宾语：the season（介词宾语（名词短语））
        - 定语：the（冠词）
        - 中心语：season（名词）
- 主语：they（人称代词）
- 谓语：will have been training（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：training（现在分词）
- 状语：together（副词）
- 状语：for nine months.（介词短语）
  - 其他：for（介词）
  - 宾语：nine months.（介词宾语（名词短语））
    - 定语：nine（数词）
    - 中心语：months（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 they，主句谓语动词结构是 will have been training。

#### 10. By tomorrow morning, it will have been raining for two days.

到明天早上，雨就已经连续下了两天了。

句型：主语 + 谓语 + 状语

- 状语：By tomorrow morning,（介词短语）
  - 其他：By（介词）
  - 宾语：tomorrow morning,（介词宾语（名词短语））
    - 定语：tomorrow（形容词）
    - 中心语：morning（名词）
- 主语：it（人称代词）
- 谓语：will have been raining（将来完成进行时）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：raining（现在分词）
- 状语：for two days.（介词短语）
  - 其他：for（介词）
  - 宾语：two days.（介词宾语（名词短语））
    - 定语：two（数词）
    - 中心语：days（名词）

- 将来完成进行时说明到将来参照时间已持续多久，谓语含 will have been 与现在分词。
- 本句主语是 it，主句谓语动词结构是 will have been raining。

## 3-2：主动与被动语态

### 3-2-1：主动语态

#### 1. The chef prepared the meal.

厨师准备了这顿饭。

句型：主语 + 谓语 + 宾语

- 主语：The chef（名词短语）
  - 定语：The（冠词）
  - 中心语：chef（名词）
- 谓语：prepared（动词（一般过去时））
- 宾语：the meal.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：meal（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The chef，主句谓语动词结构是 prepared。

#### 2. The gardener watered the flowers.

园丁给花浇了水。

句型：主语 + 谓语 + 宾语

- 主语：The gardener（名词短语）
  - 定语：The（冠词）
  - 中心语：gardener（名词）
- 谓语：watered（动词（一般过去时））
- 宾语：the flowers.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：flowers（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The gardener，主句谓语动词结构是 watered。

#### 3. My sister wrote this poem.

我妹妹写了这首诗。

句型：主语 + 谓语 + 宾语

- 主语：My sister（名词短语）
  - 定语：My（限定词）
  - 中心语：sister（名词）
- 谓语：wrote（动词（一般过去时））
- 宾语：this poem.（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：poem（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 My sister，主句谓语动词结构是 wrote。

#### 4. The wind broke a window.

风刮坏了一扇窗户。

句型：主语 + 谓语 + 宾语

- 主语：The wind（名词短语）
  - 定语：The（冠词）
  - 中心语：wind（名词）
- 谓语：broke（动词（一般过去时））
- 宾语：a window.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：window（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The wind，主句谓语动词结构是 broke。

#### 5. Someone has moved my chair.

有人挪了我的椅子。

句型：主语 + 谓语 + 宾语

- 主语：Someone（不定代词）
- 谓语：has moved（现在完成时）
  - 其他：has（助动词）
  - 中心语：moved（过去分词）
- 宾语：my chair.（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：chair（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 Someone，主句谓语动词结构是 has moved。

#### 6. The workers are building a school.

工人们正在建一所学校。

句型：主语 + 谓语 + 宾语

- 主语：The workers（名词短语）
  - 定语：The（冠词）
  - 中心语：workers（名词）
- 谓语：are building（现在进行时）
  - 其他：are（助动词）
  - 中心语：building（现在分词）
- 宾语：a school.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：school（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The workers，主句谓语动词结构是 are building。

#### 7. Our teacher explains the rules clearly.

我们的老师清楚地解释规则。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：Our teacher（名词短语）
  - 定语：Our（限定词）
  - 中心语：teacher（名词）
- 谓语：explains（动词（一般现在时））
- 宾语：the rules（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：rules（名词）
- 状语：clearly.（副词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 Our teacher，主句谓语动词结构是 explains。

#### 8. The dog chased the ball.

那只狗追着球跑。

句型：主语 + 谓语 + 宾语

- 主语：The dog（名词短语）
  - 定语：The（冠词）
  - 中心语：dog（名词）
- 谓语：chased（动词（一般过去时））
- 宾语：the ball.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：ball（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The dog，主句谓语动词结构是 chased。

#### 9. They will deliver the furniture tomorrow.

他们明天会送来家具。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：They（人称代词）
- 谓语：will deliver（一般将来时）
  - 其他：will（情态动词）
  - 中心语：deliver（动词原形）
- 宾语：the furniture（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：furniture（名词）
- 状语：tomorrow.（副词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 They，主句谓语动词结构是 will deliver。

#### 10. The storm damaged several roofs.

暴风雨损坏了几个屋顶。

句型：主语 + 谓语 + 宾语

- 主语：The storm（名词短语）
  - 定语：The（冠词）
  - 中心语：storm（名词）
- 谓语：damaged（动词（一般过去时））
- 宾语：several roofs.（直接宾语（名词短语））
  - 定语：several（限定词）
  - 中心语：roofs（名词）

- 本句采用主动语态，主语是动作的发出者或造成变化的事物。
- 本句主语是 The storm，主句谓语动词结构是 damaged。

### 3-2-2：一般时态的被动语态

#### 1. The windows are cleaned every week.

这些窗户每周都会被擦洗。

句型：主语 + 谓语 + 状语

- 主语：The windows（名词短语）
  - 定语：The（冠词）
  - 中心语：windows（名词）
- 谓语：are cleaned（一般现在时被动语态）
  - 其他：are（助动词）
  - 中心语：cleaned（过去分词）
- 状语：every week.（时间名词短语）
  - 定语：every（限定词）
  - 中心语：week（名词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The windows，主句谓语动词结构是 are cleaned。

#### 2. This room is used for meetings.

这个房间用于开会。

句型：主语 + 谓语 + 状语

- 主语：This room（名词短语）
  - 定语：This（限定词）
  - 中心语：room（名词）
- 谓语：is used（一般现在时被动语态）
  - 其他：is（助动词）
  - 中心语：used（过去分词）
- 状语：for meetings.（介词短语）
  - 其他：for（介词）
  - 宾语：meetings.（介词宾语（名词短语））

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 This room，主句谓语动词结构是 is used。

#### 3. The letter was sent yesterday.

那封信昨天寄出了。

句型：主语 + 谓语 + 状语

- 主语：The letter（名词短语）
  - 定语：The（冠词）
  - 中心语：letter（名词）
- 谓语：was sent（一般过去时被动语态）
  - 其他：was（助动词）
  - 中心语：sent（过去分词）
- 状语：yesterday.（副词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The letter，主句谓语动词结构是 was sent。

#### 4. Rice is grown in this region.

这个地区种植水稻。

句型：主语 + 谓语 + 状语

- 主语：Rice（名词短语）
- 谓语：is grown（一般现在时被动语态）
  - 其他：is（助动词）
  - 中心语：grown（过去分词）
- 状语：in this region.（介词短语）
  - 其他：in（介词）
  - 宾语：this region.（介词宾语（名词短语））
    - 定语：this（限定词）
    - 中心语：region（名词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 Rice，主句谓语动词结构是 is grown。

#### 5. The museum was opened in 1980.

这家博物馆于1980年开放。

句型：主语 + 谓语 + 状语

- 主语：The museum（名词短语）
  - 定语：The（冠词）
  - 中心语：museum（名词）
- 谓语：was opened（一般过去时被动语态）
  - 其他：was（助动词）
  - 中心语：opened（过去分词）
- 状语：in 1980.（介词短语）
  - 其他：in（介词）
  - 宾语：1980.（介词宾语（名词短语））

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The museum，主句谓语动词结构是 was opened。

#### 6. The results will be announced tomorrow.

结果将在明天公布。

句型：主语 + 谓语 + 状语

- 主语：The results（名词短语）
  - 定语：The（冠词）
  - 中心语：results（名词）
- 谓语：will be announced（一般将来时被动语态）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：announced（过去分词）
- 状语：tomorrow.（副词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The results，主句谓语动词结构是 will be announced。

#### 7. These shoes are made by hand.

这些鞋是手工制作的。

句型：主语 + 谓语 + 状语

- 主语：These shoes（名词短语）
  - 定语：These（限定词）
  - 中心语：shoes（名词）
- 谓语：are made（一般现在时被动语态）
  - 其他：are（助动词）
  - 中心语：made（过去分词）
- 状语：by hand.（介词短语）
  - 其他：by（介词）
  - 宾语：hand.（介词宾语（名词短语））

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- by hand 表示手工制作的方式，不是被动句的施事者。

#### 8. The road was closed after the accident.

事故发生后，道路被封闭了。

句型：主语 + 谓语 + 状语

- 主语：The road（名词短语）
  - 定语：The（冠词）
  - 中心语：road（名词）
- 谓语：was closed（一般过去时被动语态）
  - 其他：was（助动词）
  - 中心语：closed（过去分词）
- 状语：after the accident.（介词短语）
  - 其他：after（介词）
  - 宾语：the accident.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：accident（名词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The road，主句谓语动词结构是 was closed。

#### 9. English is spoken in many countries.

许多国家都使用英语。

句型：主语 + 谓语 + 状语

- 主语：English（专有名词）
- 谓语：is spoken（一般现在时被动语态）
  - 其他：is（助动词）
  - 中心语：spoken（过去分词）
- 状语：in many countries.（介词短语）
  - 其他：in（介词）
  - 宾语：many countries.（介词宾语（名词短语））
    - 定语：many（形容词）
    - 中心语：countries（名词）

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 English，主句谓语动词结构是 is spoken。

#### 10. The package will be delivered on Monday.

包裹将在星期一送达。

句型：主语 + 谓语 + 状语

- 主语：The package（名词短语）
  - 定语：The（冠词）
  - 中心语：package（名词）
- 谓语：will be delivered（一般将来时被动语态）
  - 其他：will（情态动词）
  - 其他：be（助动词）
  - 中心语：delivered（过去分词）
- 状语：on Monday.（介词短语）
  - 其他：on（介词）
  - 宾语：Monday.（介词宾语（名词短语））

- 被动语态按表层结构分析：受影响的人或事物作主语，be 与过去分词共同构成谓语。
- 本句主语是 The package，主句谓语动词结构是 will be delivered。

### 3-2-3：进行时态的被动语态

#### 1. The bridge is being repaired.

这座桥正在维修。

句型：主语 + 谓语

- 主语：The bridge（名词短语）
  - 定语：The（冠词）
  - 中心语：bridge（名词）
- 谓语：is being repaired.（现在进行时被动语态）
  - 其他：is（助动词）
  - 其他：being（助动词）
  - 中心语：repaired（过去分词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The bridge，主句谓语动词结构是 is being repaired。

#### 2. The rooms are being painted.

这些房间正在粉刷。

句型：主语 + 谓语

- 主语：The rooms（名词短语）
  - 定语：The（冠词）
  - 中心语：rooms（名词）
- 谓语：are being painted.（现在进行时被动语态）
  - 其他：are（助动词）
  - 其他：being（助动词）
  - 中心语：painted（过去分词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The rooms，主句谓语动词结构是 are being painted。

#### 3. My car is being serviced today.

我的车今天正在保养。

句型：主语 + 谓语 + 状语

- 主语：My car（名词短语）
  - 定语：My（限定词）
  - 中心语：car（名词）
- 谓语：is being serviced（现在进行时被动语态）
  - 其他：is（助动词）
  - 其他：being（助动词）
  - 中心语：serviced（过去分词）
- 状语：today.（副词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 My car，主句谓语动词结构是 is being serviced。

#### 4. The documents are being checked.

这些文件正在审核。

句型：主语 + 谓语

- 主语：The documents（名词短语）
  - 定语：The（冠词）
  - 中心语：documents（名词）
- 谓语：are being checked.（现在进行时被动语态）
  - 其他：are（助动词）
  - 其他：being（助动词）
  - 中心语：checked（过去分词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The documents，主句谓语动词结构是 are being checked。

#### 5. The road was being widened when we moved here.

我们搬到这里时，这条路正在拓宽。

句型：主语 + 谓语 + 状语

- 主语：The road（名词短语）
  - 定语：The（冠词）
  - 中心语：road（名词）
- 谓语：was being widened（过去进行时被动语态）
  - 其他：was（助动词）
  - 其他：being（助动词）
  - 中心语：widened（过去分词）
- 状语：when we moved here.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：we（人称代词）
  - 谓语：moved（动词（一般过去时））
  - 状语：here（副词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The road，主句谓语动词结构是 was being widened。

#### 6. Dinner was being prepared when the guests arrived.

客人到时，晚饭正在准备中。

句型：主语 + 谓语 + 状语

- 主语：Dinner（名词短语）
- 谓语：was being prepared（过去进行时被动语态）
  - 其他：was（助动词）
  - 其他：being（助动词）
  - 中心语：prepared（过去分词）
- 状语：when the guests arrived.（时间状语从句）
  - 其他：when（从属连词）
  - 主语：the guests（名词短语）
    - 定语：the（冠词）
    - 中心语：guests（名词）
  - 谓语：arrived（动词（一般过去时））

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 Dinner，主句谓语动词结构是 was being prepared。

#### 7. The students are being shown around the museum.

学生们正被带领着参观博物馆。

句型：主语 + 谓语 + 状语

- 主语：The students（名词短语）
  - 定语：The（冠词）
  - 中心语：students（名词）
- 谓语：are being shown（现在进行时被动语态）
  - 其他：are（助动词）
  - 其他：being（助动词）
  - 中心语：shown（过去分词）
- 状语：around the museum.（介词短语）
  - 其他：around（介词）
  - 宾语：the museum.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：museum（名词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- The students 是被引导参观的人，仍作被动句主语；around the museum 表示参观路线。

#### 8. A new hospital is being built nearby.

附近正在建一所新医院。

句型：主语 + 谓语 + 状语

- 主语：A new hospital（名词短语）
  - 定语：A（冠词）
  - 定语：new（形容词）
  - 中心语：hospital（名词）
- 谓语：is being built（现在进行时被动语态）
  - 其他：is（助动词）
  - 其他：being（助动词）
  - 中心语：built（过去分词）
- 状语：nearby.（副词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 A new hospital，主句谓语动词结构是 is being built。

#### 9. The suspect was being questioned at noon.

中午时，嫌疑人正在接受讯问。

句型：主语 + 谓语 + 状语

- 主语：The suspect（名词短语）
  - 定语：The（冠词）
  - 中心语：suspect（名词）
- 谓语：was being questioned（过去进行时被动语态）
  - 其他：was（助动词）
  - 其他：being（助动词）
  - 中心语：questioned（过去分词）
- 状语：at noon.（介词短语）
  - 其他：at（介词）
  - 宾语：noon.（介词宾语（名词短语））

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The suspect，主句谓语动词结构是 was being questioned。

#### 10. The old computers are being replaced.

那些旧电脑正在被更换。

句型：主语 + 谓语

- 主语：The old computers（名词短语）
  - 定语：The（冠词）
  - 定语：old（形容词）
  - 中心语：computers（名词）
- 谓语：are being replaced.（现在进行时被动语态）
  - 其他：are（助动词）
  - 其他：being（助动词）
  - 中心语：replaced（过去分词）

- 进行时被动语态含 be being 与过去分词，表示某事正在被进行。
- 本句主语是 The old computers，主句谓语动词结构是 are being replaced。

### 3-2-4：完成时态的被动语态

#### 1. The invitations have been sent.

邀请函已经寄出了。

句型：主语 + 谓语

- 主语：The invitations（名词短语）
  - 定语：The（冠词）
  - 中心语：invitations（名词）
- 谓语：have been sent.（现在完成时被动语态）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：sent（过去分词）

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The invitations，主句谓语动词结构是 have been sent。

#### 2. The work has been completed.

工作已经完成了。

句型：主语 + 谓语

- 主语：The work（名词短语）
  - 定语：The（冠词）
  - 中心语：work（名词）
- 谓语：has been completed.（现在完成时被动语态）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：completed（过去分词）

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The work，主句谓语动词结构是 has been completed。

#### 3. All the tickets have been sold.

所有票都已经售出了。

句型：主语 + 谓语

- 主语：All the tickets（名词短语）
  - 定语：All（限定词）
  - 定语：the（冠词）
  - 中心语：tickets（名词）
- 谓语：have been sold.（现在完成时被动语态）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：sold（过去分词）

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 All the tickets，主句谓语动词结构是 have been sold。

#### 4. The door had been locked before we arrived.

我们到达之前，门就已经锁上了。

句型：主语 + 谓语 + 状语

- 主语：The door（名词短语）
  - 定语：The（冠词）
  - 中心语：door（名词）
- 谓语：had been locked（过去完成时被动语态）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：locked（过去分词）
- 状语：before we arrived.（时间状语从句）
  - 其他：before（从属连词）
  - 主语：we（人称代词）
  - 谓语：arrived（动词（一般过去时））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The door，主句谓语动词结构是 had been locked。

#### 5. The report has been translated into Chinese.

报告已经翻译成中文了。

句型：主语 + 谓语 + 状语

- 主语：The report（名词短语）
  - 定语：The（冠词）
  - 中心语：report（名词）
- 谓语：has been translated（现在完成时被动语态）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：translated（过去分词）
- 状语：into Chinese.（介词短语）
  - 其他：into（介词）
  - 宾语：Chinese.（介词宾语（专有名词））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The report，主句谓语动词结构是 has been translated。

#### 6. The mistake had been corrected by noon.

到中午时，那个错误已经纠正了。

句型：主语 + 谓语 + 状语

- 主语：The mistake（名词短语）
  - 定语：The（冠词）
  - 中心语：mistake（名词）
- 谓语：had been corrected（过去完成时被动语态）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：corrected（过去分词）
- 状语：by noon.（介词短语）
  - 其他：by（介词）
  - 宾语：noon.（介词宾语（名词短语））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The mistake，主句谓语动词结构是 had been corrected。

#### 7. The bridge will have been finished by December.

到十二月，这座桥将已经建成。

句型：主语 + 谓语 + 状语

- 主语：The bridge（名词短语）
  - 定语：The（冠词）
  - 中心语：bridge（名词）
- 谓语：will have been finished（将来完成时被动语态）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：finished（过去分词）
- 状语：by December.（介词短语）
  - 其他：by（介词）
  - 宾语：December.（介词宾语（名词短语））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The bridge，主句谓语动词结构是 will have been finished。

#### 8. My wallet has been found.

我的钱包已经找到了。

句型：主语 + 谓语

- 主语：My wallet（名词短语）
  - 定语：My（限定词）
  - 中心语：wallet（名词）
- 谓语：has been found.（现在完成时被动语态）
  - 其他：has（助动词）
  - 其他：been（助动词）
  - 中心语：found（过去分词）

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 My wallet，主句谓语动词结构是 has been found。

#### 9. The room had been cleaned before the visitors came.

来访者到来前，房间已经打扫干净了。

句型：主语 + 谓语 + 状语

- 主语：The room（名词短语）
  - 定语：The（冠词）
  - 中心语：room（名词）
- 谓语：had been cleaned（过去完成时被动语态）
  - 其他：had（助动词）
  - 其他：been（助动词）
  - 中心语：cleaned（过去分词）
- 状语：before the visitors came.（时间状语从句）
  - 其他：before（从属连词）
  - 主语：the visitors（名词短语）
    - 定语：the（冠词）
    - 中心语：visitors（名词）
  - 谓语：came（动词（一般过去时））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The room，主句谓语动词结构是 had been cleaned。

#### 10. The repairs will have been completed by Friday.

到星期五，维修将已经完成。

句型：主语 + 谓语 + 状语

- 主语：The repairs（名词短语）
  - 定语：The（冠词）
  - 中心语：repairs（名词）
- 谓语：will have been completed（将来完成时被动语态）
  - 其他：will（情态动词）
  - 其他：have（助动词）
  - 其他：been（助动词）
  - 中心语：completed（过去分词）
- 状语：by Friday.（介词短语）
  - 其他：by（介词）
  - 宾语：Friday.（介词宾语（名词短语））

- 完成时被动语态含 have/has/had been 与过去分词；will have been 则表示将来完成时被动语态。
- 本句主语是 The repairs，主句谓语动词结构是 will have been completed。

## 3-3：情态动词与相关表达

### 3-3-1：能力

#### 1. My sister can swim very well.

我妹妹游泳游得很好。

句型：主语 + 谓语 + 状语

- 主语：My sister（名词短语）
  - 定语：My（限定词）
  - 中心语：sister（名词）
- 谓语：can swim（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：swim（动词原形）
- 状语：very well.（副词短语）
  - 状语：very（程度表达）
  - 中心语：well（副词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 My sister，主句谓语动词结构是 can swim。

#### 2. I can read simple French texts.

我能读懂简单的法语文章。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：can read（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：read（动词原形）
- 宾语：simple French texts.（直接宾语（名词短语））
  - 定语：simple（形容词）
  - 定语：French（形容词）
  - 中心语：texts（名词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 I，主句谓语动词结构是 can read。

#### 3. He can lift this box alone.

他能独自抬起这个箱子。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：can lift（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：lift（动词原形）
- 宾语：this box（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：box（名词）
- 状语：alone.（副词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 He，主句谓语动词结构是 can lift。

#### 4. They can solve the problem together.

他们能一起解决这个问题。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：They（人称代词）
- 谓语：can solve（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：solve（动词原形）
- 宾语：the problem（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：problem（名词）
- 状语：together.（副词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 They，主句谓语动词结构是 can solve。

#### 5. She could ride a bike at five.

她五岁时就会骑自行车了。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：could ride（情态动词结构）
  - 其他：could（情态动词）
  - 中心语：ride（动词原形）
- 宾语：a bike（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：bike（名词）
- 状语：at five.（介词短语）
  - 其他：at（介词）
  - 宾语：five.（介词宾语（名词短语））

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- could ride 表示过去的能力，at five 表示五岁时。

#### 6. My grandfather could speak four languages.

我祖父会说四种语言。

句型：主语 + 谓语 + 宾语

- 主语：My grandfather（名词短语）
  - 定语：My（限定词）
  - 中心语：grandfather（名词）
- 谓语：could speak（情态动词结构）
  - 其他：could（情态动词）
  - 中心语：speak（动词原形）
- 宾语：four languages.（直接宾语（名词短语））
  - 定语：four（数词）
  - 中心语：languages（名词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 My grandfather，主句谓语动词结构是 could speak。

#### 7. We cannot hear you from here.

我们在这里听不到你说话。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：cannot hear（情态动词结构）
  - 其他：cannot（情态动词）
  - 中心语：hear（动词原形）
- 宾语：you（直接宾语（人称代词））
- 状语：from here.（介词短语）
  - 其他：from（介词）
  - 宾语：here.（介词宾语（副词））

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 本句主语是 We，主句谓语动词结构是 cannot hear。

#### 8. Can your brother play the guitar?

你哥哥会弹吉他吗？

句型：疑问句：主语 + 谓语 + 宾语

格式状态：部分分析（具体限制见解释）

- 其他：Can（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：your brother（名词短语）
  - 定语：your（限定词）
  - 中心语：brother（名词）
- 中心语：play（谓语组成片段（动词原形））
- 宾语：the guitar?（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：guitar（名词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- 谓语由 Can 与 play 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. After the operation, she was able to walk again.

手术后，她又能走路了。

句型：主语 + 系动词 + 表语 + 状语

- 状语：After the operation,（介词短语）
  - 其他：After（介词）
  - 宾语：the operation,（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：operation（名词）
- 主语：she（人称代词）
- 谓语：was（系动词（一般过去时））
- 表语：able to walk again.（形容词短语）
  - 中心语：able（形容词）
  - 状语：to walk again（不定式短语；说明能力的具体内容）
    - 其他：to（不定式标记）
    - 中心语：walk（动词原形）
    - 状语：again（副词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- was 是系动词，able to walk again 是表语；此处表示手术后恢复了行走能力。

#### 10. With practice, you will be able to type faster.

经过练习，你将能打字打得更快。

句型：主语 + 系动词 + 表语 + 状语

- 状语：With practice,（介词短语）
  - 其他：With（介词）
  - 宾语：practice,（介词宾语（名词短语））
- 主语：you（人称代词）
- 谓语：will be（一般将来时）
  - 其他：will（情态动词）
  - 中心语：be（系动词原形）
- 表语：able to type faster.（形容词短语）
  - 中心语：able（形容词）
  - 状语：to type faster（不定式短语；说明能力的具体内容）
    - 其他：to（不定式标记）
    - 中心语：type（动词原形）
    - 状语：faster（副词）

- 这里的情态表达说明能力；结合语境区分现在能力、过去能力及某次实际做到的事情。
- will be 是将来时系动词结构，able to type faster 是表语；不把整个表语并入谓语。

### 3-3-2：许可

#### 1. You may use my phone.

你可以用我的手机。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：may use（情态动词结构）
  - 其他：may（情态动词）
  - 中心语：use（动词原形）
- 宾语：my phone.（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：phone（名词）

- 本句表达允许、许可或礼貌地征求许可。
- 本句主语是 You，主句谓语动词结构是 may use。

#### 2. May I open the window?

我可以打开窗户吗？

句型：疑问句：主语 + 谓语 + 宾语

格式状态：部分分析（具体限制见解释）

- 其他：May（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：I（人称代词）
- 中心语：open（谓语组成片段（动词原形））
- 宾语：the window?（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：window（名词）

- 本句表达允许、许可或礼貌地征求许可。
- 谓语由 May 与 open 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 3. You can borrow my dictionary.

你可以借我的词典。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：can borrow（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：borrow（动词原形）
- 宾语：my dictionary.（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：dictionary（名词）

- 本句表达允许、许可或礼貌地征求许可。
- 本句主语是 You，主句谓语动词结构是 can borrow。

#### 4. Could I leave a little early today?

我今天可以早走一会儿吗？

句型：疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Could（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：I（人称代词）
- 中心语：leave（谓语组成片段（动词原形））
- 状语：a little early（副词短语）
  - 状语：a little（程度表达）
  - 中心语：early（副词）
- 状语：today?（副词）

- 本句表达允许、许可或礼貌地征求许可。
- Could 表示礼貌请求，不表示过去时间。
- 谓语由 Could 与 leave 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 5. Students may use the library after class.

学生们课后可以使用图书馆。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：Students（名词短语）
- 谓语：may use（情态动词结构）
  - 其他：may（情态动词）
  - 中心语：use（动词原形）
- 宾语：the library（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：library（名词）
- 状语：after class.（介词短语）
  - 其他：after（介词）
  - 宾语：class.（介词宾语（名词短语））

- 本句表达允许、许可或礼貌地征求许可。
- 本句主语是 Students，主句谓语动词结构是 may use。

#### 6. You may sit wherever you like.

你可以坐在任何你喜欢的位置。

句型：主语 + 谓语 + 状语

- 主语：You（人称代词）
- 谓语：may sit（情态动词结构）
  - 其他：may（情态动词）
  - 中心语：sit（动词原形）
- 状语：wherever you like.（地点状语从句）
  - 其他：wherever（从属连词）
  - 主语：you（人称代词）
  - 谓语：like（动词（一般现在时））

- 本句表达允许、许可或礼貌地征求许可。
- wherever you like 是地点状语从句，表示任何你喜欢的位置。

#### 7. Can we park here overnight?

我们可以在这里停一夜车吗？

句型：疑问句：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 其他：Can（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：we（人称代词）
- 中心语：park（谓语组成片段（动词原形））
- 状语：here（副词）
- 状语：overnight?（副词）

- 本句表达允许、许可或礼貌地征求许可。
- 谓语由 Can 与 park 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 8. You may not enter this room.

你不可以进入这个房间。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：You（人称代词）
- 其他：may（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：enter（谓语组成片段（动词原形））
- 宾语：this room.（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：room（名词）

- 本句表达允许、许可或礼貌地征求许可。
- 在本许可语境中 may not 表示不允许进入；其他语境中也可能表示未必。
- 谓语由 may 与 enter 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. Visitors are allowed to take photos here.

游客可以在这里拍照。

句型：主语 + 谓语 + 主语补足语 + 状语

- 主语：Visitors（名词短语）
- 谓语：are allowed（一般现在时被动语态）
  - 其他：are（助动词）
  - 中心语：allowed（过去分词）
- 补语：to take photos（主语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：take（动词原形）
  - 宾语：photos（直接宾语（名词短语））
- 状语：here.（副词）

- 本句表达允许、许可或礼貌地征求许可。
- are allowed 是被动谓语；to take photos 是说明主语获准行为的不定式补足语。

#### 10. We were allowed to leave after lunch.

我们获准在午饭后离开。

句型：主语 + 谓语 + 主语补足语 + 状语

- 主语：We（人称代词）
- 谓语：were allowed（一般过去时被动语态）
  - 其他：were（助动词）
  - 中心语：allowed（过去分词）
- 补语：to leave（主语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：leave（动词原形）
- 状语：after lunch.（介词短语）
  - 其他：after（介词）
  - 宾语：lunch.（介词宾语（名词短语））

- 本句表达允许、许可或礼貌地征求许可。
- were allowed 是被动谓语；to leave 补充说明主语获准进行的行为。

### 3-3-3：义务与必要性

#### 1. You must wear a seat belt.

你必须系安全带。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：must wear（情态动词结构）
  - 其他：must（情态动词）
  - 中心语：wear（动词原形）
- 宾语：a seat belt.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 定语：seat（名词）
  - 中心语：belt（名词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 You，主句谓语动词结构是 must wear。

#### 2. You have to show your ticket.

你必须出示车票。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：have to show（半情态动词结构）
  - 其他：have（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：show（动词原形）
- 宾语：your ticket.（直接宾语（名词短语））
  - 定语：your（限定词）
  - 中心语：ticket（名词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 You，主句谓语动词结构是 have to show。

#### 3. We must finish this before noon.

我们必须在中午前完成这件事。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：must finish（情态动词结构）
  - 其他：must（情态动词）
  - 中心语：finish（动词原形）
- 宾语：this（直接宾语（指示代词））
- 状语：before noon.（介词短语）
  - 其他：before（介词）
  - 宾语：noon.（介词宾语（名词短语））

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 We，主句谓语动词结构是 must finish。

#### 4. She needs to renew her passport.

她需要换发护照。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：needs（动词（一般现在时））
- 宾语：to renew her passport.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：renew（动词原形）
  - 宾语：her passport（直接宾语（名词短语））
    - 定语：her（限定词）
    - 中心语：passport（名词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- needs 是实义动词；to renew her passport 是不定式宾语，表达需要做的事情。

#### 5. All visitors must sign in.

所有来访者都必须登记。

句型：主语 + 谓语 + 状语

- 主语：All visitors（名词短语）
  - 定语：All（限定词）
  - 中心语：visitors（名词）
- 谓语：must sign（情态动词结构）
  - 其他：must（情态动词）
  - 中心语：sign（动词原形）
- 状语：in.（副词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 All visitors，主句谓语动词结构是 must sign。

#### 6. I had to work late yesterday.

我昨天不得不工作到很晚。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：had to work（半情态动词结构）
  - 其他：had（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：work（动词原形）
- 状语：late（副词）
- 状语：yesterday.（副词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 I，主句谓语动词结构是 had to work。

#### 7. You must not touch those wires.

你绝对不能碰那些电线。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：You（人称代词）
- 其他：must（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：touch（谓语组成片段（动词原形））
- 宾语：those wires.（直接宾语（名词短语））
  - 定语：those（限定词）
  - 中心语：wires（名词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- must not 表示禁止触碰，不表示没有必要触碰。
- 谓语由 must 与 touch 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 8. We do not have to leave yet.

我们还不必离开。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：We（人称代词）
- 其他：do（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：have to leave（谓语组成片段（半情态动词结构））
  - 其他：have（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：leave（动词原形）
- 状语：yet.（副词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- do not have to 表示不必，不是禁止；否定由 do not 表达。
- 谓语由 do 与 have to leave 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 9. He will have to take the exam again.

他将不得不重新参加考试。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：will have to take（半情态动词结构）
  - 其他：will（半情态结构组成）
  - 其他：have（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：take（动词原形）
- 宾语：the exam（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：exam（名词）
- 状语：again.（副词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- 本句主语是 He，主句谓语动词结构是 will have to take。

#### 10. You need not bring your own towel.

你不必自带毛巾。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：You（人称代词）
- 其他：need（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：bring（谓语组成片段（现在分词））
- 宾语：your own towel.（直接宾语（名词短语））
  - 定语：your（限定词）
  - 定语：own（限定词）
  - 中心语：towel（名词）

- 本句表达义务、必要性或相应否定；必须区分不必做与禁止做。
- need 在这里是情态动词，need not 表示不必，后接 bring 原形。
- 谓语由 need 与 bring 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

### 3-3-4：建议

#### 1. You should get some rest.

你应该休息一下。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：should get（情态动词结构）
  - 其他：should（情态动词）
  - 中心语：get（动词原形）
- 宾语：some rest.（直接宾语（名词短语））
  - 定语：some（限定词）
  - 中心语：rest（名词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 You，主句谓语动词结构是 should get。

#### 2. You should drink more water.

你应该多喝水。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：should drink（情态动词结构）
  - 其他：should（情态动词）
  - 中心语：drink（动词原形）
- 宾语：more water.（直接宾语（名词短语））
  - 定语：more（形容词）
  - 中心语：water（名词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 You，主句谓语动词结构是 should drink。

#### 3. He ought to apologize to her.

他应该向她道歉。

句型：主语 + 谓语 + 状语

- 主语：He（人称代词）
- 谓语：ought to apologize（半情态动词结构）
  - 其他：ought（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：apologize（动词原形）
- 状语：to her.（介词短语）
  - 其他：to（介词）
  - 宾语：her.（介词宾语（人称代词））

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 He，主句谓语动词结构是 ought to apologize。

#### 4. We should check the map first.

我们应该先查看地图。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：should check（情态动词结构）
  - 其他：should（情态动词）
  - 中心语：check（动词原形）
- 宾语：the map（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：map（名词）
- 状语：first.（副词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 We，主句谓语动词结构是 should check。

#### 5. You had better take an umbrella.

你最好带把雨伞。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：had better take（半情态动词结构）
  - 其他：had（半情态结构组成）
  - 其他：better（半情态结构组成）
  - 中心语：take（过去分词）
- 宾语：an umbrella.（直接宾语（名词短语））
  - 定语：an（冠词）
  - 中心语：umbrella（名词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- had better 是固定的建议表达，这里的 had 不表示过去时间。

#### 6. She should not work so late.

她不应该工作到那么晚。

句型：主语 + 谓语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：She（人称代词）
- 其他：should（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：work（谓语组成片段（动词原形））
- 状语：so late.（副词短语）
  - 状语：so（程度表达）
  - 中心语：late（副词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 谓语由 should 与 work 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 7. You ought to keep a copy of the receipt.

你应该保留一份收据副本。

句型：主语 + 谓语 + 宾语

- 主语：You（人称代词）
- 谓语：ought to keep（半情态动词结构）
  - 其他：ought（半情态结构组成）
  - 其他：to（半情态结构组成）
  - 中心语：keep（动词原形）
- 宾语：a copy of the receipt.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 中心语：copy（名词）
  - 定语：of the receipt（介词短语）
    - 其他：of（介词）
    - 宾语：the receipt（介词宾语（名词短语））
      - 定语：the（冠词）
      - 中心语：receipt（名词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 You，主句谓语动词结构是 ought to keep。

#### 8. We had better leave before the traffic gets worse.

我们最好趁交通更拥堵之前出发。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：had better leave（半情态动词结构）
  - 其他：had（半情态结构组成）
  - 其他：better（半情态结构组成）
  - 中心语：leave（过去分词）
- 状语：before the traffic gets worse.（时间状语从句）
  - 其他：before（从属连词）
  - 主语：the traffic（名词短语）
    - 定语：the（冠词）
    - 中心语：traffic（名词）
  - 谓语：gets（系动词（一般现在时））
  - 表语：worse（形容词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- had better 表示建议；before 从句中的 gets 是系动词，worse 是表语。

#### 9. You should ask for help if you need it.

如果需要，你应该寻求帮助。

句型：主语 + 谓语 + 状语

- 主语：You（人称代词）
- 谓语：should ask（情态动词结构）
  - 其他：should（情态动词）
  - 中心语：ask（动词原形）
- 状语：for help（介词短语）
  - 其他：for（介词）
  - 宾语：help（介词宾语（名词短语））
- 状语：if you need it.（条件状语从句）
  - 其他：if（从属连词）
  - 主语：you（人称代词）
  - 谓语：need（动词（一般现在时））
  - 宾语：it（直接宾语（人称代词））

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- 本句主语是 You，主句谓语动词结构是 should ask。

#### 10. He had better not miss the last train.

他最好别错过末班火车。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：He（人称代词）
- 其他：had better（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：miss（谓语组成片段（动词原形））
- 宾语：the last train.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 定语：last（限定词）
  - 中心语：train（名词）

- 本句的情态表达用于建议；情态结构与后面的动词共同表示谓语。
- had better not 表示最好不要；not 位于固定表达 had better 之后。
- 谓语由 had better 与 miss 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

### 3-3-5：可能性推测

#### 1. It might rain this afternoon.

今天下午可能会下雨。

句型：主语 + 谓语 + 状语

- 主语：It（人称代词）
- 谓语：might rain（情态动词结构）
  - 其他：might（情态动词）
  - 中心语：rain（动词原形）
- 状语：this afternoon.（时间名词短语）
  - 定语：this（限定词）
  - 中心语：afternoon（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 It，主句谓语动词结构是 might rain。

#### 2. She may be at the library.

她可能在图书馆。

句型：主语 + 系动词 + 表语

- 主语：She（人称代词）
- 谓语：may be（情态动词结构）
  - 其他：may（情态动词）
  - 中心语：be（系动词原形）
- 表语：at the library.（介词短语）
  - 其他：at（介词）
  - 宾语：the library.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：library（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 She，主句谓语动词结构是 may be。

#### 3. This could be the answer.

这可能就是答案。

句型：主语 + 系动词 + 表语

- 主语：This（指示代词）
- 谓语：could be（情态动词结构）
  - 其他：could（情态动词）
  - 中心语：be（系动词原形）
- 表语：the answer.（名词短语）
  - 定语：the（冠词）
  - 中心语：answer（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 This，主句谓语动词结构是 could be。

#### 4. They might arrive before lunch.

他们可能午饭前到。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：might arrive（情态动词结构）
  - 其他：might（情态动词）
  - 中心语：arrive（动词原形）
- 状语：before lunch.（介词短语）
  - 其他：before（介词）
  - 宾语：lunch.（介词宾语（名词短语））

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 They，主句谓语动词结构是 might arrive。

#### 5. He must be tired after the journey.

旅途结束后，他一定很累。

句型：主语 + 系动词 + 表语 + 状语

- 主语：He（人称代词）
- 谓语：must be（情态动词结构）
  - 其他：must（情态动词）
  - 中心语：be（系动词原形）
- 表语：tired（形容词）
- 状语：after the journey.（介词短语）
  - 其他：after（介词）
  - 宾语：the journey.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：journey（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- must be tired 是根据旅途作出的较有把握的推断；tired 是表语。

#### 6. That cannot be the right address.

那个地址不可能是对的。

句型：主语 + 系动词 + 表语

- 主语：That（指示代词）
- 谓语：cannot be（情态动词结构）
  - 其他：cannot（情态动词）
  - 中心语：be（系动词原形）
- 表语：the right address.（名词短语）
  - 定语：the（冠词）
  - 定语：right（形容词）
  - 中心语：address（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- cannot be 表示不可能是，the right address 是表语。

#### 7. The keys may be in your coat pocket.

钥匙可能在你的外套口袋里。

句型：主语 + 系动词 + 表语

- 主语：The keys（名词短语）
  - 定语：The（冠词）
  - 中心语：keys（名词）
- 谓语：may be（情态动词结构）
  - 其他：may（情态动词）
  - 中心语：be（系动词原形）
- 表语：in your coat pocket.（介词短语）
  - 其他：in（介词）
  - 宾语：your coat pocket.（介词宾语（名词短语））
    - 定语：your（限定词）
    - 定语：coat（名词）
    - 中心语：pocket（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 The keys，主句谓语动词结构是 may be。

#### 8. We could get lost without a map.

没有地图，我们可能会迷路。

句型：主语 + 系动词 + 表语 + 状语

- 主语：We（人称代词）
- 谓语：could get（情态动词结构）
  - 其他：could（情态动词）
  - 中心语：get（动词原形）
- 表语：lost（形容词）
- 状语：without a map.（介词短语）
  - 其他：without（介词）
  - 宾语：a map.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：map（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- 本句主语是 We，主句谓语动词结构是 could get。

#### 9. There might be another entrance.

可能还有另一个入口。

句型：There + 情态动词结构 + 主语

- 其他：There（存在句引导词）
- 谓语：might be（情态动词结构）
  - 其他：might（情态动词）
  - 中心语：be（系动词原形）
- 主语：another entrance.（名词短语）
  - 定语：another（限定词）
  - 中心语：entrance（名词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- There 是存在句引导词；another entrance 是主语，might 表示可能。

#### 10. The lights are on, so someone must be home.

灯亮着，所以一定有人在家。

句型：主语 + 系动词 + 表语；so + 主语 + 情态系动词结构 + 表语

- 其他：The lights are on,（独立分句）
  - 主语：The lights（名词短语）
    - 定语：The（冠词）
    - 中心语：lights（名词）
  - 谓语：are（系动词（一般现在时））
  - 表语：on（地点副词）
- 其他：so（并列连词）
- 其他：someone must be home.（独立分句）
  - 主语：someone（不定代词）
  - 谓语：must be（情态动词结构）
    - 其他：must（情态动词）
    - 中心语：be（系动词原形）
  - 表语：home（地点副词）

- 这里的情态表达用于可能性或推断，不应机械地解释为义务。
- so 连接两个分句；后句 must be home 表示依据灯亮作出的推断，home 为地点表语。

### 3-3-6：对过去的推测

#### 1. She must have forgotten our meeting.

她一定是忘了我们的约会。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：must have forgotten（情态动词结构）
  - 其他：must（情态动词）
  - 其他：have（助动词）
  - 中心语：forgotten（过去分词）
- 宾语：our meeting.（直接宾语（名词短语））
  - 定语：our（限定词）
  - 中心语：meeting（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 She，主句谓语动词结构是 must have forgotten。

#### 2. He must have missed the bus.

他一定是没赶上公共汽车。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：must have missed（情态动词结构）
  - 其他：must（情态动词）
  - 其他：have（助动词）
  - 中心语：missed（过去分词）
- 宾语：the bus.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：bus（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 He，主句谓语动词结构是 must have missed。

#### 3. They may have taken a different route.

他们可能走了另一条路。

句型：主语 + 谓语 + 宾语

- 主语：They（人称代词）
- 谓语：may have taken（情态动词结构）
  - 其他：may（情态动词）
  - 其他：have（助动词）
  - 中心语：taken（过去分词）
- 宾语：a different route.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 定语：different（形容词）
  - 中心语：route（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 They，主句谓语动词结构是 may have taken。

#### 4. I might have left my notebook at school.

我可能把笔记本落在学校了。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：might have left（情态动词结构）
  - 其他：might（情态动词）
  - 其他：have（助动词）
  - 中心语：left（过去分词）
- 宾语：my notebook（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：notebook（名词）
- 状语：at school.（介词短语）
  - 其他：at（介词）
  - 宾语：school.（介词宾语（名词短语））

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 I，主句谓语动词结构是 might have left。

#### 5. She cannot have finished already.

她不可能已经完成了。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：cannot have finished（情态动词结构）
  - 其他：cannot（情态动词）
  - 其他：have（助动词）
  - 中心语：finished（过去分词）
- 状语：already.（副词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- cannot have finished 表示对过去完成情况的否定推断。

#### 6. Someone must have moved the furniture.

一定有人移动过家具。

句型：主语 + 谓语 + 宾语

- 主语：Someone（不定代词）
- 谓语：must have moved（情态动词结构）
  - 其他：must（情态动词）
  - 其他：have（助动词）
  - 中心语：moved（过去分词）
- 宾语：the furniture.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：furniture（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 Someone，主句谓语动词结构是 must have moved。

#### 7. We could have misunderstood the instructions.

我们可能误解了说明。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：could have misunderstood（情态动词结构）
  - 其他：could（情态动词）
  - 其他：have（助动词）
  - 中心语：misunderstood（过去分词）
- 宾语：the instructions.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：instructions（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- could have misunderstood 在这里按过去可能性理解；在其他上下文中 could have 也可表达未实现的可能。

#### 8. The package may have arrived yesterday.

包裹可能昨天就到了。

句型：主语 + 谓语 + 状语

- 主语：The package（名词短语）
  - 定语：The（冠词）
  - 中心语：package（名词）
- 谓语：may have arrived（情态动词结构）
  - 其他：may（情态动词）
  - 其他：have（助动词）
  - 中心语：arrived（过去分词）
- 状语：yesterday.（副词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 The package，主句谓语动词结构是 may have arrived。

#### 9. He could not have seen us in the dark.

天那么黑，他不可能看见了我们。

句型：主语 + 谓语 + 宾语 + 状语

格式状态：部分分析（具体限制见解释）

- 主语：He（人称代词）
- 其他：could（情态或助动词结构；与后面的动词共同构成谓语）
- 状语：not（否定副词）
- 中心语：have seen（谓语组成片段（现在完成时））
  - 其他：have（助动词）
  - 中心语：seen（过去分词）
- 宾语：us（直接宾语（人称代词））
- 状语：in the dark.（介词短语）
  - 其他：in（介词）
  - 宾语：the dark.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：dark（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 谓语由 could 与 have seen 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. The dog must have eaten the sandwich.

一定是那只狗吃了三明治。

句型：主语 + 谓语 + 宾语

- 主语：The dog（名词短语）
  - 定语：The（冠词）
  - 中心语：dog（名词）
- 谓语：must have eaten（情态动词结构）
  - 其他：must（情态动词）
  - 其他：have（助动词）
  - 中心语：eaten（过去分词）
- 宾语：the sandwich.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：sandwich（名词）

- 情态动词与 have、过去分词共同对过去情况作推测，不是一般将来完成时。
- 本句主语是 The dog，主句谓语动词结构是 must have eaten。

## 3-4：非谓语动词

### 3-4-1：不定式作宾语

#### 1. I hope to see you soon.

我希望很快见到你。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：hope（动词（一般现在时））
- 宾语：to see you soon.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：see（动词原形）
  - 宾语：you（直接宾语（人称代词））
  - 状语：soon（副词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 I，主句谓语动词结构是 hope。

#### 2. She decided to study abroad.

她决定出国留学。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：decided（动词（一般过去时））
- 宾语：to study abroad.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：study（动词原形）
  - 状语：abroad（副词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 She，主句谓语动词结构是 decided。

#### 3. We plan to visit the coast.

我们计划去海边游玩。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：plan（动词（一般现在时））
- 宾语：to visit the coast.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：visit（动词原形）
  - 宾语：the coast（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：coast（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 We，主句谓语动词结构是 plan。

#### 4. He refused to answer the question.

他拒绝回答那个问题。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：refused（动词（一般过去时））
- 宾语：to answer the question.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：answer（动词原形）
  - 宾语：the question（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：question（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 He，主句谓语动词结构是 refused。

#### 5. I want to learn the piano.

我想学钢琴。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：want（动词（一般现在时））
- 宾语：to learn the piano.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：learn（动词原形）
  - 宾语：the piano（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：piano（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 I，主句谓语动词结构是 want。

#### 6. They agreed to meet at noon.

他们同意中午见面。

句型：主语 + 谓语 + 宾语

- 主语：They（人称代词）
- 谓语：agreed（动词（一般过去时））
- 宾语：to meet at noon.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：meet（动词原形）
  - 状语：at noon（介词短语）
    - 其他：at（介词）
    - 宾语：noon（介词宾语（名词短语））

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 They，主句谓语动词结构是 agreed。

#### 7. She promised to send the photos.

她答应把照片发过来。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：promised（动词（一般过去时））
- 宾语：to send the photos.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：send（动词原形）
  - 宾语：the photos（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：photos（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 She，主句谓语动词结构是 promised。

#### 8. He managed to repair the radio.

他设法修好了收音机。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：managed（动词（一般过去时））
- 宾语：to repair the radio.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：repair（动词原形）
  - 宾语：the radio（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：radio（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 He，主句谓语动词结构是 managed。

#### 9. We expect to arrive before dark.

我们预计天黑前到达。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：expect（动词（一般现在时））
- 宾语：to arrive before dark.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：arrive（动词原形）
  - 状语：before dark（介词短语）
    - 其他：before（介词）
    - 宾语：dark（介词宾语（名词短语））

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 We，主句谓语动词结构是 expect。

#### 10. I cannot afford to buy a new car.

我买不起新车。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：cannot afford（情态动词结构）
  - 其他：cannot（情态动词）
  - 中心语：afford（动词原形）
- 宾语：to buy a new car.（直接宾语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：buy（动词原形）
  - 宾语：a new car（直接宾语（名词短语））
    - 定语：a（冠词）
    - 定语：new（形容词）
    - 中心语：car（名词）

- 不定式短语直接说明主句动词的内容对象，按本库传统教学规范作宾语。
- 本句主语是 I，主句谓语动词结构是 cannot afford。

### 3-4-2：不定式作目的状语

#### 1. She went to the library to study.

她去图书馆学习。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：went（动词（一般过去时））
- 状语：to the library（介词短语）
  - 其他：to（介词）
  - 宾语：the library（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：library（名词）
- 状语：to study.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：study（动词原形）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 She，主句谓语动词结构是 went。

#### 2. He saved money to buy a bicycle.

他存钱是为了买一辆自行车。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：saved（动词（一般过去时））
- 宾语：money（直接宾语（名词短语））
- 状语：to buy a bicycle.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：buy（动词原形）
  - 宾语：a bicycle（直接宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：bicycle（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 He，主句谓语动词结构是 saved。

#### 3. We stopped to ask for directions.

我们停下来问路。

句型：主语 + 谓语 + 状语

- 主语：We（人称代词）
- 谓语：stopped（动词（一般过去时））
- 状语：to ask for directions.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：ask（动词原形）
  - 状语：for directions（介词短语）
    - 其他：for（介词）
    - 宾语：directions（介词宾语（名词短语））

- 不定式短语说明主句动作的目的，作目的状语。
- stopped to ask 表示停下来是为了询问，不同于停止询问的 stopped asking。

#### 4. She opened the window to let in fresh air.

她打开窗户让新鲜空气进来。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：opened（动词（一般过去时））
- 宾语：the window（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：window（名词）
- 状语：to let in fresh air.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：let（动词原形）
  - 状语：in（副词）
  - 宾语：fresh air（直接宾语（名词短语））
    - 定语：fresh（形容词）
    - 中心语：air（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 She，主句谓语动词结构是 opened。

#### 5. I called to confirm the reservation.

我打电话是为了确认预订。

句型：主语 + 谓语 + 状语

- 主语：I（人称代词）
- 谓语：called（动词（一般过去时））
- 状语：to confirm the reservation.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：confirm（动词原形）
  - 宾语：the reservation（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：reservation（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 I，主句谓语动词结构是 called。

#### 6. They left early to avoid the traffic.

他们早早出发，以避开交通拥堵。

句型：主语 + 谓语 + 状语

- 主语：They（人称代词）
- 谓语：left（动词（一般过去时））
- 状语：early（副词）
- 状语：to avoid the traffic.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：avoid（动词原形）
  - 宾语：the traffic（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：traffic（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 They，主句谓语动词结构是 left。

#### 7. He wore gloves to protect his hands.

他戴手套来保护双手。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：wore（动词（一般过去时））
- 宾语：gloves（直接宾语（名词短语））
- 状语：to protect his hands.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：protect（动词原形）
  - 宾语：his hands（直接宾语（名词短语））
    - 定语：his（限定词）
    - 中心语：hands（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 He，主句谓语动词结构是 wore。

#### 8. We use this app to practice English.

我们用这个应用练习英语。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：We（人称代词）
- 谓语：use（动词（一般现在时））
- 宾语：this app（直接宾语（名词短语））
  - 定语：this（限定词）
  - 中心语：app（名词）
- 状语：to practice English.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：practice（动词原形）
  - 宾语：English（直接宾语（专有名词））

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 We，主句谓语动词结构是 use。

#### 9. She went outside to make a phone call.

她出去打了个电话。

句型：主语 + 谓语 + 状语

- 主语：She（人称代词）
- 谓语：went（动词（一般过去时））
- 状语：outside（副词）
- 状语：to make a phone call.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：make（动词原形）
  - 宾语：a phone call（直接宾语（名词短语））
    - 定语：a（冠词）
    - 定语：phone（名词）
    - 中心语：call（名词）

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 She，主句谓语动词结构是 went。

#### 10. I set an alarm to wake up on time.

我设了闹钟，以便准时起床。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：I（人称代词）
- 谓语：set（动词（一般过去时））
- 宾语：an alarm（直接宾语（名词短语））
  - 定语：an（冠词）
  - 中心语：alarm（名词）
- 状语：to wake up on time.（目的状语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：wake（动词原形）
  - 状语：up（副词）
  - 状语：on time（介词短语）
    - 其他：on（介词）
    - 宾语：time（介词宾语（名词短语））

- 不定式短语说明主句动作的目的，作目的状语。
- 本句主语是 I，主句谓语动词结构是 set。

### 3-4-3：不定式作宾语补足语

#### 1. The teacher asked us to wait outside.

老师让我们在外面等候。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：The teacher（名词短语）
  - 定语：The（冠词）
  - 中心语：teacher（名词）
- 谓语：asked（动词（一般过去时））
- 宾语：us（直接宾语（人称代词））
- 补语：to wait outside.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：wait（动词原形）
  - 状语：outside（副词）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 The teacher，主句谓语动词结构是 asked。

#### 2. She wants me to stay.

她想让我留下。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：She（人称代词）
- 谓语：wants（动词（一般现在时））
- 宾语：me（直接宾语（人称代词））
- 补语：to stay.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：stay（动词原形）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 She，主句谓语动词结构是 wants。

#### 3. We invited them to join us.

我们邀请他们加入我们。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：We（人称代词）
- 谓语：invited（动词（一般过去时））
- 宾语：them（直接宾语（人称代词））
- 补语：to join us.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：join（动词原形）
  - 宾语：us（直接宾语（人称代词））

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 We，主句谓语动词结构是 invited。

#### 4. He reminded her to lock the door.

他提醒她锁门。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：He（人称代词）
- 谓语：reminded（动词（一般过去时））
- 宾语：her（直接宾语（人称代词））
- 补语：to lock the door.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：lock（动词原形）
  - 宾语：the door（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：door（名词）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 He，主句谓语动词结构是 reminded。

#### 5. The doctor advised him to rest.

医生建议他休息。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：The doctor（名词短语）
  - 定语：The（冠词）
  - 中心语：doctor（名词）
- 谓语：advised（动词（一般过去时））
- 宾语：him（直接宾语（人称代词））
- 补语：to rest.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：rest（动词原形）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 The doctor，主句谓语动词结构是 advised。

#### 6. I expect you to be on time.

我希望你准时到。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：I（人称代词）
- 谓语：expect（动词（一般现在时））
- 宾语：you（直接宾语（人称代词））
- 补语：to be on time.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 谓语：be（系动词（非谓语形式））
  - 表语：on time（介词短语）
    - 其他：on（介词）
    - 宾语：time（介词宾语（名词短语））

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 I，主句谓语动词结构是 expect。

#### 7. They allowed us to use the kitchen.

他们允许我们使用厨房。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：They（人称代词）
- 谓语：allowed（动词（一般过去时））
- 宾语：us（直接宾语（人称代词））
- 补语：to use the kitchen.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：use（动词原形）
  - 宾语：the kitchen（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：kitchen（名词）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 They，主句谓语动词结构是 allowed。

#### 8. My parents encouraged me to apply.

我父母鼓励我申请。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：My parents（名词短语）
  - 定语：My（限定词）
  - 中心语：parents（名词）
- 谓语：encouraged（动词（一般过去时））
- 宾语：me（直接宾语（人称代词））
- 补语：to apply.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：apply（动词原形）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 My parents，主句谓语动词结构是 encouraged。

#### 9. She taught her son to swim.

她教儿子游泳。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：She（人称代词）
- 谓语：taught（动词（一般过去时））
- 宾语：her son（直接宾语（名词短语））
  - 定语：her（限定词）
  - 中心语：son（名词）
- 补语：to swim.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：swim（动词原形）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句按教某人做某事分析：her son 是宾语，to swim 是宾语补足语。

#### 10. The guard ordered everyone to leave.

警卫命令所有人离开。

句型：主语 + 谓语 + 宾语 + 宾语补足语

- 主语：The guard（名词短语）
  - 定语：The（冠词）
  - 中心语：guard（名词）
- 谓语：ordered（动词（一般过去时））
- 宾语：everyone（直接宾语（不定代词））
- 补语：to leave.（宾语补足语（不定式短语））
  - 其他：to（不定式标记）
  - 中心语：leave（动词原形）

- 不定式短语补充说明宾语要执行的动作，作宾语补足语，不能与前面的宾语合成双宾语。
- 本句主语是 The guard，主句谓语动词结构是 ordered。

### 3-4-4：动名词作主语

#### 1. Reading improves your vocabulary.

阅读能增加你的词汇量。

句型：动名词主语 + 谓语 + 宾语

- 主语：Reading（动名词短语）
- 谓语：improves（动词（一般现在时））
- 宾语：your vocabulary.（直接宾语（名词短语））
  - 定语：your（限定词）
  - 中心语：vocabulary（名词）

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Reading，主句谓语动词结构是 improves。

#### 2. Swimming keeps me healthy.

游泳让我保持健康。

句型：动名词主语 + 谓语 + 宾语 + 宾语补足语

- 主语：Swimming（动名词短语）
- 谓语：keeps（动词（一般现在时））
- 宾语：me（直接宾语（人称代词））
- 补语：healthy.（宾语补足语（形容词））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Swimming，主句谓语动词结构是 keeps。

#### 3. Learning a language takes patience.

学习一门语言需要耐心。

句型：动名词主语 + 谓语 + 宾语

- 主语：Learning a language（动名词短语）
  - 中心语：Learning（动名词）
  - 宾语：a language（直接宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：language（名词）
- 谓语：takes（动词（一般现在时））
- 宾语：patience.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Learning a language，主句谓语动词结构是 takes。

#### 4. Walking after dinner helps digestion.

晚饭后散步有助于消化。

句型：动名词主语 + 谓语 + 宾语

- 主语：Walking after dinner（动名词短语）
  - 中心语：Walking（动名词）
  - 状语：after dinner（介词短语）
    - 其他：after（介词）
    - 宾语：dinner（介词宾语（名词短语））
- 谓语：helps（动词（一般现在时））
- 宾语：digestion.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Walking after dinner，主句谓语动词结构是 helps。

#### 5. Cooking for friends makes her happy.

给朋友做饭让她开心。

句型：动名词主语 + 谓语 + 宾语 + 宾语补足语

- 主语：Cooking for friends（动名词短语）
  - 中心语：Cooking（动名词）
  - 状语：for friends（介词短语）
    - 其他：for（介词）
    - 宾语：friends（介词宾语（名词短语））
- 谓语：makes（动词（一般现在时））
- 宾语：her（直接宾语（人称代词））
- 补语：happy.（宾语补足语（形容词））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Cooking for friends，主句谓语动词结构是 makes。

#### 6. Smoking damages your lungs.

吸烟损害肺部。

句型：动名词主语 + 谓语 + 宾语

- 主语：Smoking（动名词短语）
- 谓语：damages（动词（一般现在时））
- 宾语：your lungs.（直接宾语（名词短语））
  - 定语：your（限定词）
  - 中心语：lungs（名词）

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Smoking，主句谓语动词结构是 damages。

#### 7. Traveling alone builds confidence.

独自旅行能增强自信。

句型：动名词主语 + 谓语 + 宾语

- 主语：Traveling alone（动名词短语）
  - 中心语：Traveling（动名词）
  - 状语：alone（副词）
- 谓语：builds（动词（一般现在时））
- 宾语：confidence.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Traveling alone，主句谓语动词结构是 builds。

#### 8. Getting enough sleep improves concentration.

睡眠充足能提高注意力。

句型：动名词主语 + 谓语 + 宾语

- 主语：Getting enough sleep（动名词短语）
  - 中心语：Getting（动名词）
  - 宾语：enough sleep（直接宾语（名词短语））
    - 定语：enough（限定词）
    - 中心语：sleep（名词）
- 谓语：improves（动词（一般现在时））
- 宾语：concentration.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Getting enough sleep，主句谓语动词结构是 improves。

#### 9. Listening carefully prevents mistakes.

仔细听能避免错误。

句型：动名词主语 + 谓语 + 宾语

- 主语：Listening carefully（动名词短语）
  - 中心语：Listening（动名词）
  - 状语：carefully（副词）
- 谓语：prevents（动词（一般现在时））
- 宾语：mistakes.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- 本句主语是 Listening carefully，主句谓语动词结构是 prevents。

#### 10. Growing vegetables saves us money.

种菜能帮我们省钱。

句型：动名词主语 + 谓语 + 间接宾语 + 直接宾语

- 主语：Growing vegetables（动名词短语）
  - 中心语：Growing（动名词）
  - 宾语：vegetables（直接宾语（名词短语））
- 谓语：saves（动词（一般现在时））
- 宾语：us（间接宾语（人称代词））
- 宾语：money.（直接宾语（名词短语））

- 动名词或动名词短语整体作主语，表示一种活动，谓语按单数处理。
- Growing vegetables 整体作主语；us 是间接宾语，money 是直接宾语。

### 3-4-5：动名词作宾语

#### 1. He enjoys cooking for his family.

他喜欢给家人做饭。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：enjoys（动词（一般现在时））
- 宾语：cooking for his family.（直接宾语（动名词短语））
  - 中心语：cooking（动名词）
  - 状语：for his family（介词短语）
    - 其他：for（介词）
    - 宾语：his family（介词宾语（名词短语））
      - 定语：his（限定词）
      - 中心语：family（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 He，主句谓语动词结构是 enjoys。

#### 2. She avoids driving at night.

她避免在夜间开车。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：avoids（动词（一般现在时））
- 宾语：driving at night.（直接宾语（动名词短语））
  - 中心语：driving（动名词）
  - 状语：at night（介词短语）
    - 其他：at（介词）
    - 宾语：night（介词宾语（名词短语））

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 She，主句谓语动词结构是 avoids。

#### 3. I finished reading the article.

我读完了那篇文章。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：finished（动词（一般过去时））
- 宾语：reading the article.（直接宾语（动名词短语））
  - 中心语：reading（动名词）
  - 宾语：the article（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：article（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 I，主句谓语动词结构是 finished。

#### 4. We considered moving to the country.

我们考虑过搬到乡下。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：considered（动词（一般过去时））
- 宾语：moving to the country.（直接宾语（动名词短语））
  - 中心语：moving（动名词）
  - 状语：to the country（介词短语）
    - 其他：to（介词）
    - 宾语：the country（介词宾语（名词短语））
      - 定语：the（冠词）
      - 中心语：country（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 We，主句谓语动词结构是 considered。

#### 5. He admitted breaking the window.

他承认打破了窗户。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：admitted（动词（一般过去时））
- 宾语：breaking the window.（直接宾语（动名词短语））
  - 中心语：breaking（动名词）
  - 宾语：the window（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：window（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 He，主句谓语动词结构是 admitted。

#### 6. They suggested taking a taxi.

他们建议坐出租车。

句型：主语 + 谓语 + 宾语

- 主语：They（人称代词）
- 谓语：suggested（动词（一般过去时））
- 宾语：taking a taxi.（直接宾语（动名词短语））
  - 中心语：taking（动名词）
  - 宾语：a taxi（直接宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：taxi（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 They，主句谓语动词结构是 suggested。

#### 7. She practices speaking English daily.

她每天练习说英语。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：She（人称代词）
- 谓语：practices（动词（一般现在时））
- 宾语：speaking English（直接宾语（动名词短语））
  - 中心语：speaking（动名词）
  - 宾语：English（直接宾语（专有名词））
- 状语：daily.（副词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 She，主句谓语动词结构是 practices。

#### 8. I miss walking by the sea.

我怀念在海边散步的日子。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：miss（动词（一般现在时））
- 宾语：walking by the sea.（直接宾语（动名词短语））
  - 中心语：walking（动名词）
  - 状语：by the sea（介词短语）
    - 其他：by（介词）
    - 宾语：the sea（介词宾语（名词短语））
      - 定语：the（冠词）
      - 中心语：sea（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 I，主句谓语动词结构是 miss。

#### 9. Would you mind opening the door?

你介意开一下门吗？

句型：疑问句：主语 + 谓语 + 宾语

格式状态：部分分析（具体限制见解释）

- 其他：Would（情态或助动词结构；与后面的动词共同构成谓语）
- 主语：you（人称代词）
- 中心语：mind（谓语组成片段（动词原形））
- 宾语：opening the door?（直接宾语（动名词短语））
  - 中心语：opening（动名词）
  - 宾语：the door（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：door（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- Would you mind 是礼貌请求，mind 后接动名词宾语 opening the door，不表示过去将来。
- 谓语由 Would 与 mind 共同构成，中间隔有主语或副词；当前连续片段格式不能将这些部分关联为一个节点，故标记格式限制。

#### 10. He denied taking the money.

他否认拿了那笔钱。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：denied（动词（一般过去时））
- 宾语：taking the money.（直接宾语（动名词短语））
  - 中心语：taking（动名词）
  - 宾语：the money（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：money（名词）

- 动名词或动名词短语作主句动词的宾语，内部仍可带宾语和状语。
- 本句主语是 He，主句谓语动词结构是 denied。

### 3-4-6：现在分词作定语

#### 1. The girl standing by the door is my cousin.

站在门边的女孩是我表妹。

句型：主语 + 系动词 + 表语

- 主语：The girl standing by the door（名词短语）
  - 定语：The（冠词）
  - 中心语：girl（名词）
  - 定语：standing by the door（现在分词短语）
    - 中心语：standing（现在分词）
    - 状语：by the door（介词短语）
      - 其他：by（介词）
      - 宾语：the door（介词宾语（名词短语））
        - 定语：the（冠词）
        - 中心语：door（名词）
- 谓语：is（系动词（一般现在时））
- 表语：my cousin.（名词短语）
  - 定语：my（限定词）
  - 中心语：cousin（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The girl standing by the door，主句谓语动词结构是 is。

#### 2. The boy carrying the red bag is my brother.

背着红色书包的男孩是我弟弟。

句型：主语 + 系动词 + 表语

- 主语：The boy carrying the red bag（名词短语）
  - 定语：The（冠词）
  - 中心语：boy（名词）
  - 定语：carrying the red bag（现在分词短语）
    - 中心语：carrying（现在分词）
    - 宾语：the red bag（直接宾语（名词短语））
      - 定语：the（冠词）
      - 定语：red（形容词）
      - 中心语：bag（名词）
- 谓语：is（系动词（一般现在时））
- 表语：my brother.（名词短语）
  - 定语：my（限定词）
  - 中心语：brother（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The boy carrying the red bag，主句谓语动词结构是 is。

#### 3. I heard a crying baby.

我听到了一个正在哭的宝宝。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：heard（动词（一般过去时））
- 宾语：a crying baby.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 定语：crying（现在分词）
  - 中心语：baby（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 I，主句谓语动词结构是 heard。

#### 4. The people waiting outside looked cold.

在外面等候的人看起来很冷。

句型：主语 + 系动词 + 表语

- 主语：The people waiting outside（名词短语）
  - 定语：The（冠词）
  - 中心语：people（名词）
  - 定语：waiting outside（现在分词短语）
    - 中心语：waiting（现在分词）
    - 状语：outside（副词）
- 谓语：looked（系动词（一般过去时））
- 表语：cold.（形容词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The people waiting outside，主句谓语动词结构是 looked。

#### 5. The dog sleeping on the sofa is old.

睡在沙发上的那只狗年纪大了。

句型：主语 + 系动词 + 表语

- 主语：The dog sleeping on the sofa（名词短语）
  - 定语：The（冠词）
  - 中心语：dog（名词）
  - 定语：sleeping on the sofa（现在分词短语）
    - 中心语：sleeping（现在分词）
    - 状语：on the sofa（介词短语）
      - 其他：on（介词）
      - 宾语：the sofa（介词宾语（名词短语））
        - 定语：the（冠词）
        - 中心语：sofa（名词）
- 谓语：is（系动词（一般现在时））
- 表语：old.（形容词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The dog sleeping on the sofa，主句谓语动词结构是 is。

#### 6. We watched the rising sun.

我们看着正在升起的太阳。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：watched（动词（一般过去时））
- 宾语：the rising sun.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 定语：rising（现在分词）
  - 中心语：sun（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 We，主句谓语动词结构是 watched。

#### 7. The woman talking to the teacher is my mother.

正在和老师谈话的女士是我母亲。

句型：主语 + 系动词 + 表语

- 主语：The woman talking to the teacher（名词短语）
  - 定语：The（冠词）
  - 中心语：woman（名词）
  - 定语：talking to the teacher（现在分词短语）
    - 中心语：talking（现在分词）
    - 状语：to the teacher（介词短语）
      - 其他：to（介词）
      - 宾语：the teacher（介词宾语（名词短语））
        - 定语：the（冠词）
        - 中心语：teacher（名词）
- 谓语：is（系动词（一般现在时））
- 表语：my mother.（名词短语）
  - 定语：my（限定词）
  - 中心语：mother（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The woman talking to the teacher，主句谓语动词结构是 is。

#### 8. Please stay away from the moving train.

请远离正在行驶的火车。

句型：祈使句（省略主语）：谓语 + 状语

- 状语：Please（礼貌副词）
- 谓语：stay（动词（祈使句原形））
- 状语：away（副词）
- 状语：from the moving train.（介词短语）
  - 其他：from（介词）
  - 宾语：the moving train.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 定语：moving（现在分词）
    - 中心语：train（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。

#### 9. The students working in pairs finished first.

两人一组做题的学生最先完成了。

句型：主语 + 谓语 + 状语

- 主语：The students working in pairs（名词短语）
  - 定语：The（冠词）
  - 中心语：students（名词）
  - 定语：working in pairs（现在分词短语）
    - 中心语：working（现在分词）
    - 状语：in pairs（介词短语）
      - 其他：in（介词）
      - 宾语：pairs（介词宾语（名词短语））
- 谓语：finished（动词（一般过去时））
- 状语：first.（副词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 The students working in pairs，主句谓语动词结构是 finished。

#### 10. He picked up a burning stick.

他捡起了一根正在燃烧的木棍。

句型：主语 + 谓语 + 宾语 + 状语

- 主语：He（人称代词）
- 谓语：picked（动词（一般过去时））
- 状语：up（副词）
- 宾语：a burning stick.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 定语：burning（现在分词）
  - 中心语：stick（名词）

- 现在分词作定语，修饰名词；较长的分词短语后置，通常与被修饰名词构成主动关系。
- 本句主语是 He，主句谓语动词结构是 picked。

### 3-4-7：过去分词作定语

#### 1. The car parked outside belongs to my uncle.

停在外面的那辆车是我叔叔的。

句型：主语 + 谓语 + 状语

- 主语：The car parked outside（名词短语）
  - 定语：The（冠词）
  - 中心语：car（名词）
  - 定语：parked outside（过去分词短语）
    - 中心语：parked（过去分词）
    - 状语：outside（副词）
- 谓语：belongs（动词（一般现在时））
- 状语：to my uncle.（介词短语）
  - 其他：to（介词）
  - 宾语：my uncle.（介词宾语（名词短语））
    - 定语：my（限定词）
    - 中心语：uncle（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The car parked outside，主句谓语动词结构是 belongs。

#### 2. The letter written in blue ink is mine.

用蓝墨水写的那封信是我的。

句型：主语 + 系动词 + 表语

- 主语：The letter written in blue ink（名词短语）
  - 定语：The（冠词）
  - 中心语：letter（名词）
  - 定语：written in blue ink（过去分词短语）
    - 中心语：written（过去分词）
    - 状语：in blue ink（介词短语）
      - 其他：in（介词）
      - 宾语：blue ink（介词宾语（名词短语））
        - 定语：blue（形容词）
        - 中心语：ink（名词）
- 谓语：is（系动词（一般现在时））
- 表语：mine.（名词性物主代词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The letter written in blue ink，主句谓语动词结构是 is。

#### 3. We replaced the broken window.

我们更换了那扇破窗户。

句型：主语 + 谓语 + 宾语

- 主语：We（人称代词）
- 谓语：replaced（动词（一般过去时））
- 宾语：the broken window.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 定语：broken（过去分词）
  - 中心语：window（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 We，主句谓语动词结构是 replaced。

#### 4. The meal prepared by my father was delicious.

我父亲做的饭很好吃。

句型：主语 + 系动词 + 表语

- 主语：The meal prepared by my father（名词短语）
  - 定语：The（冠词）
  - 中心语：meal（名词）
  - 定语：prepared by my father（过去分词短语）
    - 中心语：prepared（过去分词）
    - 状语：by my father（介词短语）
      - 其他：by（介词）
      - 宾语：my father（介词宾语（名词短语））
        - 定语：my（限定词）
        - 中心语：father（名词）
- 谓语：was（系动词（一般过去时））
- 表语：delicious.（形容词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The meal prepared by my father，主句谓语动词结构是 was。

#### 5. She found a lost kitten.

她发现了一只走失的小猫。

句型：主语 + 谓语 + 宾语

- 主语：She（人称代词）
- 谓语：found（动词（一般过去时））
- 宾语：a lost kitten.（直接宾语（名词短语））
  - 定语：a（冠词）
  - 定语：lost（过去分词）
  - 中心语：kitten（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 She，主句谓语动词结构是 found。

#### 6. The books borrowed yesterday are on the desk.

昨天借的书在书桌上。

句型：主语 + 系动词 + 表语

- 主语：The books borrowed yesterday（名词短语）
  - 定语：The（冠词）
  - 中心语：books（名词）
  - 定语：borrowed yesterday（过去分词短语）
    - 中心语：borrowed（过去分词）
    - 状语：yesterday（副词）
- 谓语：are（系动词（一般现在时））
- 表语：on the desk.（介词短语）
  - 其他：on（介词）
  - 宾语：the desk.（介词宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：desk（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The books borrowed yesterday，主句谓语动词结构是 are。

#### 7. He collected the fallen leaves.

他收集了落叶。

句型：主语 + 谓语 + 宾语

- 主语：He（人称代词）
- 谓语：collected（动词（一般过去时））
- 宾语：the fallen leaves.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 定语：fallen（过去分词）
  - 中心语：leaves（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- fallen 在这里表示叶子已经落下，是不及物动词 fall 的过去分词，不表示被动。

#### 8. The bridge built last year is already busy.

去年建的那座桥已经很繁忙了。

句型：主语 + 系动词 + 表语 + 状语

- 主语：The bridge built last year（名词短语）
  - 定语：The（冠词）
  - 中心语：bridge（名词）
  - 定语：built last year（过去分词短语）
    - 中心语：built（过去分词）
    - 状语：last year（时间名词短语）
      - 定语：last（限定词）
      - 中心语：year（名词）
- 谓语：is（系动词（一般现在时））
- 状语：already（副词）
- 表语：busy.（形容词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The bridge built last year，主句谓语动词结构是 is。

#### 9. I prefer freshly baked bread.

我更喜欢刚烤好的面包。

句型：主语 + 谓语 + 宾语

- 主语：I（人称代词）
- 谓语：prefer（动词（一般现在时））
- 宾语：freshly baked bread.（直接宾语（名词短语））
  - 定语：freshly baked（过去分词短语）
    - 状语：freshly（副词）
    - 中心语：baked（过去分词）
  - 中心语：bread（名词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- freshly 修饰 baked，freshly baked 整体作定语，修饰 bread。

#### 10. The documents signed by the manager are ready.

经理签过字的文件已经准备好了。

句型：主语 + 系动词 + 表语

- 主语：The documents signed by the manager（名词短语）
  - 定语：The（冠词）
  - 中心语：documents（名词）
  - 定语：signed by the manager（过去分词短语）
    - 中心语：signed（过去分词）
    - 状语：by the manager（介词短语）
      - 其他：by（介词）
      - 宾语：the manager（介词宾语（名词短语））
        - 定语：the（冠词）
        - 中心语：manager（名词）
- 谓语：are（系动词（一般现在时））
- 表语：ready.（形容词）

- 过去分词作定语，常说明被动或完成的状态；具体关系由句义确定，不是所有过去分词都表示被动。
- 本句主语是 The documents signed by the manager，主句谓语动词结构是 are。

### 3-4-8：分词作状语

#### 1. Feeling tired, she went to bed early.

因为觉得累，她早早就上床睡觉了。

句型：主语 + 谓语 + 状语

- 状语：Feeling tired,（现在分词短语）
  - 谓语：Feeling（系动词（非谓语形式））
  - 表语：tired（形容词）
- 主语：she（人称代词）
- 谓语：went（动词（一般过去时））
- 状语：to bed（介词短语）
  - 其他：to（介词）
  - 宾语：bed（介词宾语（名词短语））
- 状语：early.（副词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Feeling tired 表示原因，逻辑主语是 she；tired 是分词结构内部的表语。

#### 2. Walking home, I met an old friend.

我走路回家时遇到了一位老朋友。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：Walking home,（现在分词短语）
  - 中心语：Walking（现在分词）
  - 状语：home（副词）
- 主语：I（人称代词）
- 谓语：met（动词（一般过去时））
- 宾语：an old friend.（直接宾语（名词短语））
  - 定语：an（冠词）
  - 定语：old（形容词）
  - 中心语：friend（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Walking home 表示时间或伴随，逻辑主语是 I。

#### 3. Not knowing the answer, he stayed silent.

因为不知道答案，他没有说话。

句型：主语 + 系动词 + 表语 + 状语

- 状语：Not knowing the answer,（现在分词短语）
  - 状语：Not（否定副词）
  - 中心语：knowing（现在分词）
  - 宾语：the answer（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：answer（名词）
- 主语：he（人称代词）
- 谓语：stayed（系动词（一般过去时））
- 表语：silent.（形容词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Not knowing the answer 表示原因；not 否定 knowing，逻辑主语为 he。

#### 4. Having finished her work, she went outside.

完成工作后，她去了外面。

句型：主语 + 谓语 + 状语

- 状语：Having finished her work,（完成式分词短语）
  - 谓语：Having finished（完成式分词结构）
    - 其他：Having（助动词）
    - 中心语：finished（过去分词）
  - 宾语：her work（直接宾语（名词短语））
    - 定语：her（限定词）
    - 中心语：work（名词）
- 主语：she（人称代词）
- 谓语：went（动词（一般过去时））
- 状语：outside.（副词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Having finished 使用完成式分词，表示完成工作先于外出，逻辑主语为 she。

#### 5. Seen from above, the lake looks like a heart.

从上面看，这个湖像一颗心。

句型：主语 + 系动词 + 表语 + 状语

- 状语：Seen from above,（过去分词短语）
  - 中心语：Seen（过去分词）
  - 状语：from above（介词短语）
    - 其他：from（介词）
    - 宾语：above（介词宾语（副词））
- 主语：the lake（名词短语）
  - 定语：the（冠词）
  - 中心语：lake（名词）
- 谓语：looks（系动词（一般现在时））
- 表语：like a heart.（介词短语）
  - 其他：like（介词）
  - 宾语：a heart.（介词宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：heart（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Seen from above 表示从上方看时的观察条件；被观察的是主句主语 the lake。

#### 6. Surprised by the news, I called my sister.

因为对这个消息感到惊讶，我给姐姐打了电话。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：Surprised by the news,（过去分词短语）
  - 中心语：Surprised（过去分词）
  - 状语：by the news（介词短语）
    - 其他：by（介词）
    - 宾语：the news（介词宾语（名词短语））
      - 定语：the（冠词）
      - 中心语：news（名词）
- 主语：I（人称代词）
- 谓语：called（动词（一般过去时））
- 宾语：my sister.（直接宾语（名词短语））
  - 定语：my（限定词）
  - 中心语：sister（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Surprised by the news 表示原因或当时状态，逻辑主语是 I。

#### 7. Holding a map, he approached the station.

他拿着地图朝车站走去。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：Holding a map,（现在分词短语）
  - 中心语：Holding（现在分词）
  - 宾语：a map（直接宾语（名词短语））
    - 定语：a（冠词）
    - 中心语：map（名词）
- 主语：he（人称代词）
- 谓语：approached（动词（一般过去时））
- 宾语：the station.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：station（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Holding a map 表示伴随动作，拿地图的人是主语 he。

#### 8. Having missed the bus, we walked home.

因为没赶上公共汽车，我们走回了家。

句型：主语 + 谓语 + 状语

- 状语：Having missed the bus,（完成式分词短语）
  - 谓语：Having missed（完成式分词结构）
    - 其他：Having（助动词）
    - 中心语：missed（过去分词）
  - 宾语：the bus（直接宾语（名词短语））
    - 定语：the（冠词）
    - 中心语：bus（名词）
- 主语：we（人称代词）
- 谓语：walked（动词（一般过去时））
- 状语：home.（副词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Having missed 使用完成式分词，错过公交车先于步行回家，并说明原因。

#### 9. Given enough time, I can finish the task.

如果有足够的时间，我能完成这项任务。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：Given enough time,（过去分词短语）
  - 中心语：Given（过去分词）
  - 宾语：enough time（直接宾语（名词短语））
    - 定语：enough（限定词）
    - 中心语：time（名词）
- 主语：I（人称代词）
- 谓语：can finish（情态动词结构）
  - 其他：can（情态动词）
  - 中心语：finish（动词原形）
- 宾语：the task.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：task（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Given enough time 表示条件，I 是被给予时间的人；enough time 是分词结构内部保留的宾语。

#### 10. Smiling politely, she refused the offer.

她礼貌地微笑着，拒绝了这个提议。

句型：主语 + 谓语 + 宾语 + 状语

- 状语：Smiling politely,（现在分词短语）
  - 中心语：Smiling（现在分词）
  - 状语：politely（副词）
- 主语：she（人称代词）
- 谓语：refused（动词（一般过去时））
- 宾语：the offer.（直接宾语（名词短语））
  - 定语：the（冠词）
  - 中心语：offer（名词）

- 分词短语作状语，其逻辑主语与主句主语一致；具体可表示原因、时间、条件或伴随。
- Smiling politely 表示伴随动作或方式；微笑和拒绝的执行者都是 she。

