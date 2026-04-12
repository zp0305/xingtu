import{_ as a,o as n,c as p,a4 as t}from"./chunks/framework._in6GHBg.js";const g=JSON.parse('{"title":"传送带模型解题套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-conveyor.md","filePath":"physics/routine-conveyor.md"}'),e={name:"physics/routine-conveyor.md"};function l(i,s,o,c,r,d){return n(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="传送带模型解题套路" tabindex="-1">传送带模型解题套路 <a class="header-anchor" href="#传送带模型解题套路" aria-label="Permalink to &quot;传送带模型解题套路&quot;">​</a></h1><p><strong>模型编号</strong>: 10<br><strong>难度</strong>: ⭐⭐⭐⭐<br><strong>核心</strong>: 摩擦力突变 + 分段分析</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 传送带、相对滑动、共速、划痕</p><p><strong>常见情境</strong>:</p><ul><li>物块轻放在匀速转动的传送带上</li><li>物块以一定初速度冲上传送带</li><li>倾斜传送带（加重力分量）</li></ul><hr><h2 id="标准解题步骤" tabindex="-1">标准解题步骤 <a class="header-anchor" href="#标准解题步骤" aria-label="Permalink to &quot;标准解题步骤&quot;">​</a></h2><h3 id="步骤1-判断初始状态" tabindex="-1">步骤1：判断初始状态 <a class="header-anchor" href="#步骤1-判断初始状态" aria-label="Permalink to &quot;步骤1：判断初始状态&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>物块初速度v₀，传送带速度v带</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if v₀ &lt; v带:</span></span>
<span class="line"><span>    物块相对传送带向后滑动 → 摩擦力向前（动力）</span></span>
<span class="line"><span>    物块加速</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>if v₀ &gt; v带:</span></span>
<span class="line"><span>    物块相对传送带向前滑动 → 摩擦力向后（阻力）</span></span>
<span class="line"><span>    物块减速</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>if v₀ = v带:</span></span>
<span class="line"><span>    无相对滑动 → 无摩擦力（或静摩擦平衡）</span></span>
<span class="line"><span>    匀速运动</span></span></code></pre></div><h3 id="步骤2-求加速度-第一阶段" tabindex="-1">步骤2：求加速度（第一阶段） <a class="header-anchor" href="#步骤2-求加速度-第一阶段" aria-label="Permalink to &quot;步骤2：求加速度（第一阶段）&quot;">​</a></h3><p><strong>水平传送带</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = μg  （滑动摩擦力提供加速度）</span></span>
<span class="line"><span>方向：与相对滑动方向相反</span></span></code></pre></div><p><strong>倾斜传送带</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if 物块向上运动:</span></span>
<span class="line"><span>    a = g(sinθ + μcosθ)  减速</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>if 物块向下运动:</span></span>
<span class="line"><span>    比较 μ 与 tanθ:</span></span>
<span class="line"><span>    - μ &gt; tanθ: a = g(sinθ - μcosθ)  减速到匀速</span></span>
<span class="line"><span>    - μ &lt; tanθ: a = g(sinθ - μcosθ)  一直加速</span></span></code></pre></div><h3 id="步骤3-找共速点-临界点" tabindex="-1">步骤3：找共速点（临界点） <a class="header-anchor" href="#步骤3-找共速点-临界点" aria-label="Permalink to &quot;步骤3：找共速点（临界点）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>关键问题：物块在到达终点前能否与传送带共速？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算共速所需时间：t₁ = (v带 - v₀) / a</span></span>
<span class="line"><span>计算共速所需位移：x₁ = v₀t₁ + ½at₁²</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if x₁ &lt; L（传送带长度）:</span></span>
<span class="line"><span>    能共速！分两段：</span></span>
<span class="line"><span>    - 第一段（0~t₁）：匀加速/减速，滑动摩擦</span></span>
<span class="line"><span>    - 第二段（t₁~t₂）：匀速，静摩擦或无摩擦</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>if x₁ ≥ L:</span></span>
<span class="line"><span>    不能共速！全程匀加速/减速</span></span></code></pre></div><h3 id="步骤4-分段计算" tabindex="-1">步骤4：分段计算 <a class="header-anchor" href="#步骤4-分段计算" aria-label="Permalink to &quot;步骤4：分段计算&quot;">​</a></h3><p><strong>第一段</strong>（滑动摩擦阶段）:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>时间：t₁</span></span>
<span class="line"><span>位移：x₁ = v₀t₁ + ½at₁² = (v带² - v₀²) / 2a</span></span>
<span class="line"><span>末速度：v₁ = v带</span></span>
<span class="line"><span>热量：Q₁ = f·s相对 = μmg·(v带·t₁ - x₁)</span></span></code></pre></div><p><strong>第二段</strong>（如有）:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>时间：t₂ = (L - x₁) / v带</span></span>
<span class="line"><span>位移：x₂ = L - x₁</span></span>
<span class="line"><span>热量：Q₂ = 0（无相对滑动）</span></span></code></pre></div><p><strong>总时间</strong>: t = t₁ + t₂<br><strong>总热量</strong>: Q = Q₁ + Q₂</p><h3 id="步骤5-求相对位移-划痕长度" tabindex="-1">步骤5：求相对位移（划痕长度） <a class="header-anchor" href="#步骤5-求相对位移-划痕长度" aria-label="Permalink to &quot;步骤5：求相对位移（划痕长度）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【核心公式】</span></span>
<span class="line"><span>划痕长度 = 相对位移 = |s带 - s物|</span></span>
<span class="line"><span></span></span>
<span class="line"><span>s带 = v带 × t₁（第一段传送带位移）</span></span>
<span class="line"><span>s物 = x₁（第一段物块位移）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>划痕长度 Δx = v带·t₁ - x₁</span></span></code></pre></div><p><strong>注意</strong>: 如果物块先加速后减速（往返情况），要分段计算相对位移，<strong>划痕长度取最大相对位移</strong>，不是代数和！</p><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>传送带问题</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 判断v₀与v带关系 → 确定摩擦力方向</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 求加速度a = μg（或倾斜情况）</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 计算共速位移x₁，判断能否共速</span></span>
<span class="line"><span>    │       │</span></span>
<span class="line"><span>    │       ├──→ x₁ &lt; L: 分两段（加速+匀速）</span></span>
<span class="line"><span>    │       └──→ x₁ ≥ L: 一段（全程加速）</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 分段计算时间、位移、热量</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 相对位移 = |s带 - s物|（划痕长度）</span></span></code></pre></div><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">认为摩擦力始终做正功</td><td style="text-align:left;">摩擦力方向与相对运动方向相反，可能是动力也可能是阻力</td></tr><tr><td style="text-align:left;">划痕长度 = 物块位移</td><td style="text-align:left;">划痕是<strong>相对位移</strong>，不是物块对地位移</td></tr><tr><td style="text-align:left;">共速后还有滑动摩擦</td><td style="text-align:left;">共速后无相对滑动，是<strong>静摩擦</strong>或<strong>无摩擦</strong></td></tr><tr><td style="text-align:left;">往返问题划痕相加</td><td style="text-align:left;">划痕取<strong>最大相对位移</strong>，不是代数和</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 正确判断了摩擦力方向（与相对运动方向相反）</li><li>[ ] 计算了共速点，判断了是否分段</li><li>[ ] 共速后摩擦力变了（滑动→静/无）</li><li>[ ] 相对位移计算正确（不是物块对地位移）</li><li>[ ] 热量计算用了Q = f·s相对</li></ul><hr><p><em>配套速查</em>: TS-000 速查总卡 → 模型10<br><em>详细推导</em>: TS-010-传送带模型详解（待创建）</p>`,38)])])}const u=a(e,[["render",l]]);export{g as __pageData,u as default};
