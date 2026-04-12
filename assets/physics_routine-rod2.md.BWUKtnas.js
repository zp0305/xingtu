import{_ as s,o as n,c as t,a4 as l}from"./chunks/framework._in6GHBg.js";const v=JSON.parse('{"title":"电磁感应双杆切割套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-rod2.md","filePath":"physics/routine-rod2.md"}'),e={name:"physics/routine-rod2.md"};function p(i,a,d,r,c,o){return n(),t("div",null,[...a[0]||(a[0]=[l(`<h1 id="电磁感应双杆切割套路" tabindex="-1">电磁感应双杆切割套路 <a class="header-anchor" href="#电磁感应双杆切割套路" aria-label="Permalink to &quot;电磁感应双杆切割套路&quot;">​</a></h1><p><strong>模型编号</strong>: 25<br><strong>难度</strong>: ⭐⭐⭐⭐⭐<br><strong>核心</strong>: 电磁感应 + 动量守恒 + 能量守恒的综合</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 双杆、导轨、切割磁感线、最终共速、焦耳热</p><p><strong>常见情境</strong>:</p><ul><li>两杆在导轨上，一杆有初速度，一杆静止</li><li>两杆都受到安培力，形成回路</li><li>最终达到共同速度</li></ul><hr><h2 id="标准解题步骤" tabindex="-1">标准解题步骤 <a class="header-anchor" href="#标准解题步骤" aria-label="Permalink to &quot;标准解题步骤&quot;">​</a></h2><h3 id="步骤1-分析初始状态和回路" tabindex="-1">步骤1：分析初始状态和回路 <a class="header-anchor" href="#步骤1-分析初始状态和回路" aria-label="Permalink to &quot;步骤1：分析初始状态和回路&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>两杆: 杆1（质量m₁，初速度v₁），杆2（质量m₂，初速度v₂）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关键: 两杆都切割磁感线，都产生感应电动势！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回路总电动势: ε = BL(v₁ - v₂) = BL·Δv</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方向判断: 两杆产生的电动势方向相反，看哪个大</span></span></code></pre></div><h3 id="步骤2-分析安培力和运动趋势" tabindex="-1">步骤2：分析安培力和运动趋势 <a class="header-anchor" href="#步骤2-分析安培力和运动趋势" aria-label="Permalink to &quot;步骤2：分析安培力和运动趋势&quot;">​</a></h3><p><strong>安培力大小</strong>: 两杆串联，电流相同，安培力大小相等</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>F安 = BIL = B²L²(v₁-v₂)/R总</span></span></code></pre></div><p><strong>安培力方向</strong>:</p><ul><li>杆1：阻碍v₁，与v₁方向相反</li><li>杆2：阻碍v₂，与v₂方向相反</li></ul><p><strong>运动趋势</strong>:</p><ul><li>v₁ &gt; v₂: 杆1减速，杆2加速</li><li>v₁ &lt; v₂: 杆1加速，杆2减速</li><li>最终: v₁ = v₂ = v共（无相对运动，无感应电流）</li></ul><h3 id="步骤3-动量守恒分析-关键" tabindex="-1">步骤3：动量守恒分析（关键！） <a class="header-anchor" href="#步骤3-动量守恒分析-关键" aria-label="Permalink to &quot;步骤3：动量守恒分析（关键！）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【核心洞察】</span></span>
<span class="line"><span>两杆受的安培力大小相等、方向相反（作用力反作用力）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对系统: F合外力 = 0（忽略导轨摩擦）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此: 系统动量守恒！</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动量守恒方程:</span></span>
<span class="line"><span>m₁v₁ + m₂v₂ = (m₁ + m₂)v共</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解得共同速度:</span></span>
<span class="line"><span>v共 = (m₁v₁ + m₂v₂)/(m₁ + m₂)</span></span></code></pre></div><h3 id="步骤4-能量分析-焦耳热计算" tabindex="-1">步骤4：能量分析（焦耳热计算） <a class="header-anchor" href="#步骤4-能量分析-焦耳热计算" aria-label="Permalink to &quot;步骤4：能量分析（焦耳热计算）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【核心关系】</span></span>
<span class="line"><span>系统动能损失 = 回路焦耳热</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Q = ΔEk = ½m₁v₁² + ½m₂v₂² - ½(m₁+m₂)v共²</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将v共代入，化简:</span></span>
<span class="line"><span>Q = ½·m₁m₂/(m₁+m₂)·(v₁-v₂)²</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这就是著名的&quot;折合质量法&quot;</span></span></code></pre></div><h3 id="步骤5-电荷量计算" tabindex="-1">步骤5：电荷量计算 <a class="header-anchor" href="#步骤5-电荷量计算" aria-label="Permalink to &quot;步骤5：电荷量计算&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【冲量法】</span></span>
<span class="line"><span>对杆2（从静止加速到v共）:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安培力冲量 = 动量变化</span></span>
<span class="line"><span>F安·Δt = m₂v共</span></span>
<span class="line"><span></span></span>
<span class="line"><span>而: F安 = BIL，q = I·Δt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因此: BLq = m₂v共</span></span>
<span class="line"><span></span></span>
<span class="line"><span>q = m₂v共/BL = m₁m₂(v₁-v₂)/[(m₁+m₂)BL]</span></span></code></pre></div><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>双杆切割</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 分析回路</span></span>
<span class="line"><span>    │       ε = BL(v₁-v₂)</span></span>
<span class="line"><span>    │       方向看哪个速度大</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 分析安培力</span></span>
<span class="line"><span>    │       两杆安培力大小相等、方向相反</span></span>
<span class="line"><span>    │       系统合外力为零</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 动量守恒（关键！）</span></span>
<span class="line"><span>    │       m₁v₁ + m₂v₂ = (m₁+m₂)v共</span></span>
<span class="line"><span>    │       求v共</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 能量分析</span></span>
<span class="line"><span>    │       Q = ΔEk = 初动能 - 末动能</span></span>
<span class="line"><span>    │       = ½m₁v₁² + ½m₂v₂² - ½(m₁+m₂)v共²</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 电荷量（冲量法）</span></span>
<span class="line"><span>            BLq = Δp</span></span>
<span class="line"><span>            q = mΔv/BL</span></span></code></pre></div><hr><h2 id="常用公式速查" tabindex="-1">常用公式速查 <a class="header-anchor" href="#常用公式速查" aria-label="Permalink to &quot;常用公式速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">物理量</th><th style="text-align:left;">公式</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">共同速度</td><td style="text-align:left;">v共 = (m₁v₁+m₂v₂)/(m₁+m₂)</td><td style="text-align:left;">动量守恒</td></tr><tr><td style="text-align:left;">焦耳热</td><td style="text-align:left;">Q = ½m₁v₁²+½m₂v₂²-½(m₁+m₂)v共²</td><td style="text-align:left;">能量守恒</td></tr><tr><td style="text-align:left;">折合质量热</td><td style="text-align:left;">Q = ½μ(Δv)²</td><td style="text-align:left;">μ=m₁m₂/(m₁+m₂)</td></tr><tr><td style="text-align:left;">电荷量</td><td style="text-align:left;">q = m₁(v₁-v共)/BL = m₂(v共-v₂)/BL</td><td style="text-align:left;">冲量法</td></tr></tbody></table><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">认为两杆电动势相加</td><td style="text-align:left;">方向相反，看哪个大，ε = BL|v₁-v₂|</td></tr><tr><td style="text-align:left;">忘了动量守恒条件</td><td style="text-align:left;">安培力是内力，系统动量守恒</td></tr><tr><td style="text-align:left;">热量计算用I²Rt</td><td style="text-align:left;">电流变化，用能量守恒更简单</td></tr><tr><td style="text-align:left;">认为最终都静止</td><td style="text-align:left;">最终是共同速度v共，不是静止</td></tr><tr><td style="text-align:left;">电荷量用I·t积分</td><td style="text-align:left;">用冲量法BLq=Δp更简单</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 正确判断两杆电动势方向（可能相减）</li><li>[ ] 确认系统动量守恒（安培力是内力）</li><li>[ ] 列出动量守恒方程求v共</li><li>[ ] 热量用能量守恒计算（不是I²Rt）</li><li>[ ] 电荷量用冲量法BLq=Δp计算</li></ul><hr><p><em>配套速查</em>: TS-000 速查总卡 → 模型25<br><em>详细推导</em>: TS-025-双杆切割详解（待创建）</p>`,38)])])}const m=s(e,[["render",p]]);export{v as __pageData,m as default};
