import{_ as s,o as n,c as t,a4 as p}from"./chunks/framework._in6GHBg.js";const g=JSON.parse('{"title":"复合场问题解题套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-composite.md","filePath":"physics/routine-composite.md"}'),e={name:"physics/routine-composite.md"};function l(i,a,c,d,o,r){return n(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="复合场问题解题套路" tabindex="-1">复合场问题解题套路 <a class="header-anchor" href="#复合场问题解题套路" aria-label="Permalink to &quot;复合场问题解题套路&quot;">​</a></h1><p><strong>模型编号</strong>: 23<br><strong>难度</strong>: ⭐⭐⭐⭐⭐<br><strong>核心</strong>: 电场 + 磁场 + 重力场 分段分析与衔接</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 电场+磁场、E+B+g、粒子在复合场中运动</p><p><strong>常见情境</strong>:</p><ul><li>粒子先在电场中加速/偏转，再进入磁场</li><li>粒子同时在电场和磁场中运动</li><li>考虑或不考虑重力</li></ul><hr><h2 id="标准解题步骤" tabindex="-1">标准解题步骤 <a class="header-anchor" href="#标准解题步骤" aria-label="Permalink to &quot;标准解题步骤&quot;">​</a></h2><h3 id="步骤1-分析各场的作用" tabindex="-1">步骤1：分析各场的作用 <a class="header-anchor" href="#步骤1-分析各场的作用" aria-label="Permalink to &quot;步骤1：分析各场的作用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【三场的作用】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>重力场(g):</span></span>
<span class="line"><span>    - 始终存在，方向竖直向下</span></span>
<span class="line"><span>    - 是否考虑：题目说明或看粒子质量</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>电场(E):</span></span>
<span class="line"><span>    - 电场力 F电 = qE，方向与场强方向有关（看电荷正负）</span></span>
<span class="line"><span>    - 做功与路径无关，W = qU</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>磁场(B):</span></span>
<span class="line"><span>    - 洛伦兹力 F洛 = qvB，方向用左手定则</span></span>
<span class="line"><span>    - 始终不做功，只改变速度方向</span></span></code></pre></div><h3 id="步骤2-判断运动类型-分情况" tabindex="-1">步骤2：判断运动类型（分情况） <a class="header-anchor" href="#步骤2-判断运动类型-分情况" aria-label="Permalink to &quot;步骤2：判断运动类型（分情况）&quot;">​</a></h3><p><strong>情况A：分区域运动（最常见）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>粒子先在电场区域运动，再进入磁场区域</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分析策略:</span></span>
<span class="line"><span>1. 分段分析：电场段 + 磁场段</span></span>
<span class="line"><span>2. 找衔接点：交界面处的速度（大小+方向）是关键！</span></span></code></pre></div><p><strong>情况B：同区域复合场（E+B+g同时存在）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分析策略:</span></span>
<span class="line"><span>1. 受力分析：重力 + 电场力 + 洛伦兹力</span></span>
<span class="line"><span>2. 判断合力情况:</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   - 合力为零: 匀速直线（速度选择器原理）</span></span>
<span class="line"><span>     qvB = qE + mg（或减，看方向）</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   - 合力不为零: 复杂曲线运动</span></span>
<span class="line"><span>     通常需要配速法或其他技巧（竞赛难度）</span></span></code></pre></div><h3 id="步骤3-电场段分析-类平抛或直线" tabindex="-1">步骤3：电场段分析（类平抛或直线） <a class="header-anchor" href="#步骤3-电场段分析-类平抛或直线" aria-label="Permalink to &quot;步骤3：电场段分析（类平抛或直线）&quot;">​</a></h3><p><strong>加速电场</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>qU = ½mv² - ½mv₀²  （动能定理）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>出射速度: v = √(v₀² + 2qU/m)</span></span></code></pre></div><p><strong>偏转电场</strong>（类平抛）:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>水平: x = v₀t，匀速</span></span>
<span class="line"><span>竖直: y = ½at²，a = qE/m = qU/md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>出射时:</span></span>
<span class="line"><span>水平速度: vx = v₀</span></span>
<span class="line"><span>竖直速度: vy = at = qUL/mdv₀</span></span>
<span class="line"><span>合速度大小: v = √(vx² + vy²)</span></span>
<span class="line"><span>速度方向: tanθ = vy/vx</span></span></code></pre></div><p><strong>关键</strong>: 出射时的速度方向！这是进入磁场的初始条件</p><h3 id="步骤4-磁场段分析-圆周运动" tabindex="-1">步骤4：磁场段分析（圆周运动） <a class="header-anchor" href="#步骤4-磁场段分析-圆周运动" aria-label="Permalink to &quot;步骤4：磁场段分析（圆周运动）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>进入磁场后，只受洛伦兹力: F洛 = qvB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>圆周运动:</span></span>
<span class="line"><span>半径: r = mv/qB  （v是进入磁场时的速度）</span></span>
<span class="line"><span>周期: T = 2πm/qB  （与速度无关）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【几何分析关键点】</span></span>
<span class="line"><span>1. 圆心位置：速度垂线交点</span></span>
<span class="line"><span>2. 圆心角：与偏转角的关系</span></span>
<span class="line"><span>3. 弦长：与半径的关系</span></span>
<span class="line"><span>4. 运动时间: t = θm/qB  （θ是圆心角，弧度）</span></span></code></pre></div><h3 id="步骤5-几何关系-难点" tabindex="-1">步骤5：几何关系（难点！） <a class="header-anchor" href="#步骤5-几何关系-难点" aria-label="Permalink to &quot;步骤5：几何关系（难点！）&quot;">​</a></h3><p><strong>常见几何模型</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 直线边界进出:</span></span>
<span class="line"><span>   入射角 = 出射角（对称）</span></span>
<span class="line"><span>   偏转角 = 2×圆心角</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 圆形磁场区域:</span></span>
<span class="line"><span>   指向圆心进，背离圆心出</span></span>
<span class="line"><span>   或：入射点、出射点、磁场圆心、轨迹圆心四边形</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 临界问题:</span></span>
<span class="line"><span>   刚好射出、刚好不射出</span></span>
<span class="line"><span>   找与边界相切的临界轨迹</span></span></code></pre></div><p><strong>常用三角函数关系</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>圆心角θ与偏转角的关系</span></span>
<span class="line"><span>弦长 L = 2r·sin(θ/2)</span></span>
<span class="line"><span>弧长 s = rθ</span></span></code></pre></div><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>复合场问题</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 分区域？还是同区域？</span></span>
<span class="line"><span>    │       │</span></span>
<span class="line"><span>    │       ├──→ 分区域：分段分析</span></span>
<span class="line"><span>    │       │       电场段 → 衔接点 → 磁场段</span></span>
<span class="line"><span>    │       │</span></span>
<span class="line"><span>    │       └──→ 同区域：受力分析</span></span>
<span class="line"><span>    │               合力为零？匀速</span></span>
<span class="line"><span>    │               合力不为零？复杂（配速法）</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 电场段</span></span>
<span class="line"><span>    │       类平抛：v₀水平，a = qE/m竖直</span></span>
<span class="line"><span>    │       或：直线加速</span></span>
<span class="line"><span>    │       【关键】出射速度大小+方向</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 磁场段</span></span>
<span class="line"><span>    │       圆周：r = mv/qB，T = 2πm/qB</span></span>
<span class="line"><span>    │       【关键】几何关系找圆心、圆心角</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 衔接点（最重要！）</span></span>
<span class="line"><span>            电场出射速度 = 磁场入射速度</span></span>
<span class="line"><span>            大小、方向都要传递正确</span></span></code></pre></div><hr><h2 id="常见组合套路" tabindex="-1">常见组合套路 <a class="header-anchor" href="#常见组合套路" aria-label="Permalink to &quot;常见组合套路&quot;">​</a></h2><h3 id="套路1-电加速-磁偏转-质谱仪原理" tabindex="-1">套路1：电加速 + 磁偏转（质谱仪原理） <a class="header-anchor" href="#套路1-电加速-磁偏转-质谱仪原理" aria-label="Permalink to &quot;套路1：电加速 + 磁偏转（质谱仪原理）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>步骤:</span></span>
<span class="line"><span>1. 电场加速: qU = ½mv²  →  v = √(2qU/m)</span></span>
<span class="line"><span>2. 磁场偏转: r = mv/qB = √(2mU/q)/B</span></span>
<span class="line"><span>3. 打在屏上位置: x = 2r（直径）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结论: 同位素分离，质量不同半径不同</span></span></code></pre></div><h3 id="套路2-电偏转-磁偏转-速度选择器-分离" tabindex="-1">套路2：电偏转 + 磁偏转（速度选择器+分离） <a class="header-anchor" href="#套路2-电偏转-磁偏转-速度选择器-分离" aria-label="Permalink to &quot;套路2：电偏转 + 磁偏转（速度选择器+分离）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>步骤:</span></span>
<span class="line"><span>1. 速度选择器: qE = qvB₁ → v = E/B₁</span></span>
<span class="line"><span>   （只有速度为E/B₁的粒子能直线通过）</span></span>
<span class="line"><span>2. 进入磁场B₂: r = mv/qB₂</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结论: 筛选特定速度的粒子，再按质荷比分离</span></span></code></pre></div><h3 id="套路3-磁偏转-电偏转-回旋加速器原理" tabindex="-1">套路3：磁偏转 + 电偏转（回旋加速器原理） <a class="header-anchor" href="#套路3-磁偏转-电偏转-回旋加速器原理" aria-label="Permalink to &quot;套路3：磁偏转 + 电偏转（回旋加速器原理）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>核心: 磁场中圆周，电场中加速</span></span>
<span class="line"><span>周期匹配: T电场 = T磁场 = 2πm/qB</span></span>
<span class="line"><span>最大动能: Ekm = q²B²R²/2m  （R是D形盒半径）</span></span></code></pre></div><hr><h2 id="常用公式速查" tabindex="-1">常用公式速查 <a class="header-anchor" href="#常用公式速查" aria-label="Permalink to &quot;常用公式速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">场景</th><th style="text-align:left;">公式</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">电场加速</td><td style="text-align:left;">qU = ½mv²</td><td style="text-align:left;">动能定理</td></tr><tr><td style="text-align:left;">电场偏转</td><td style="text-align:left;">y = qUL²/2mdv₀²</td><td style="text-align:left;">类平抛</td></tr><tr><td style="text-align:left;">速度偏角</td><td style="text-align:left;">tanθ = vy/vx = qUL/mdv₀²</td><td style="text-align:left;">出射方向</td></tr><tr><td style="text-align:left;">磁场半径</td><td style="text-align:left;">r = mv/qB</td><td style="text-align:left;">v是入射速度</td></tr><tr><td style="text-align:left;">磁场周期</td><td style="text-align:left;">T = 2πm/qB</td><td style="text-align:left;">与v无关</td></tr><tr><td style="text-align:left;">运动时间</td><td style="text-align:left;">t = θm/qB</td><td style="text-align:left;">θ是圆心角（弧度）</td></tr><tr><td style="text-align:left;">弦长</td><td style="text-align:left;">L = 2r·sin(θ/2)</td><td style="text-align:left;">几何关系</td></tr></tbody></table><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">电场出射速度方向搞错</td><td style="text-align:left;">类平抛的出射方向不是水平的，有偏角θ</td></tr><tr><td style="text-align:left;">磁场半径用错速度</td><td style="text-align:left;">r = mv/qB中的v是进入磁场时的速度，不是初速度</td></tr><tr><td style="text-align:left;">几何关系找不到圆心</td><td style="text-align:left;">速度垂线交点是圆心；入射点和出射点连线是弦</td></tr><tr><td style="text-align:left;">时间用t=s/v</td><td style="text-align:left;">用t = θm/qB更简单，θ是圆心角</td></tr><tr><td style="text-align:left;">忘了重力</td><td style="text-align:left;">看清题目：微观粒子一般不考虑重力，液滴/小球要考虑</td></tr><tr><td style="text-align:left;">正负电荷搞错</td><td style="text-align:left;">负电荷受力方向与正电荷相反</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 正确判断各力的方向（电场力看电荷正负，洛伦兹力用左手）</li><li>[ ] 电场段出射速度大小和方向计算正确</li><li>[ ] 衔接点速度传递正确（大小+方向）</li><li>[ ] 磁场中找圆心正确（速度垂线交点）</li><li>[ ] 几何关系正确（圆心角、弦长、半径关系）</li><li>[ ] 时间计算用t = θm/qB</li><li>[ ] 看清是否考虑重力</li></ul><hr><p><em>配套速查</em>: TS-000 速查总卡 → 模型23<br><em>详细推导</em>: TS-023-复合场详解（待创建）</p>`,51)])])}const b=s(e,[["render",l]]);export{g as __pageData,b as default};
