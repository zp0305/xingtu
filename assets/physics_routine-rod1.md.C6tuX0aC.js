import{_ as s,o as n,c as t,a4 as e}from"./chunks/framework._in6GHBg.js";const g=JSON.parse('{"title":"电磁感应单杆切割套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-rod1.md","filePath":"physics/routine-rod1.md"}'),p={name:"physics/routine-rod1.md"};function l(i,a,d,c,o,r){return n(),t("div",null,[...a[0]||(a[0]=[e(`<h1 id="电磁感应单杆切割套路" tabindex="-1">电磁感应单杆切割套路 <a class="header-anchor" href="#电磁感应单杆切割套路" aria-label="Permalink to &quot;电磁感应单杆切割套路&quot;">​</a></h1><p><strong>模型编号</strong>: 24<br><strong>难度</strong>: ⭐⭐⭐⭐<br><strong>核心</strong>: 电磁感应 + 力学 + 能量的综合</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 导体棒、导轨、切割磁感线、安培力、感应电流</p><p><strong>常见情境</strong>:</p><ul><li>单杆在倾斜/水平导轨上滑动</li><li>有初速度，或受恒定外力，或受恒定功率</li><li>可能涉及电容、电阻等元件</li></ul><hr><h2 id="标准解题步骤" tabindex="-1">标准解题步骤 <a class="header-anchor" href="#标准解题步骤" aria-label="Permalink to &quot;标准解题步骤&quot;">​</a></h2><h3 id="步骤1-分析初始状态" tabindex="-1">步骤1：分析初始状态 <a class="header-anchor" href="#步骤1-分析初始状态" aria-label="Permalink to &quot;步骤1：分析初始状态&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>三要素检查:</span></span>
<span class="line"><span>□ 磁场方向（垂直导轨平面？）</span></span>
<span class="line"><span>□ 导轨倾斜还是水平</span></span>
<span class="line"><span>□ 杆的初速度或外力情况</span></span></code></pre></div><h3 id="步骤2-电磁学分析-感应电动势、电流、安培力" tabindex="-1">步骤2：电磁学分析（感应电动势、电流、安培力） <a class="header-anchor" href="#步骤2-电磁学分析-感应电动势、电流、安培力" aria-label="Permalink to &quot;步骤2：电磁学分析（感应电动势、电流、安培力）&quot;">​</a></h3><p><strong>基本公式</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>感应电动势: ε = BLv  （v是杆的速度）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>回路电流: I = ε/R = BLv/R  （R为回路总电阻）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安培力: F安 = BIL = B²L²v/R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>方向: 用左手定则或楞次定律（阻碍相对运动）</span></span></code></pre></div><p><strong>关键理解</strong>: 安培力始终阻碍杆的运动（电磁阻尼）</p><h3 id="步骤3-力学分析-牛顿第二定律" tabindex="-1">步骤3：力学分析（牛顿第二定律） <a class="header-anchor" href="#步骤3-力学分析-牛顿第二定律" aria-label="Permalink to &quot;步骤3：力学分析（牛顿第二定律）&quot;">​</a></h3><p><strong>情况1：水平导轨，有初速度v₀，无外力</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>受力: 只有安培力（阻力）</span></span>
<span class="line"><span>牛顿定律: -F安 = ma</span></span>
<span class="line"><span>即: -B²L²v/R = ma = m(dv/dt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个变减速运动，最终v→0</span></span></code></pre></div><p><strong>情况2：水平导轨，恒定外力F</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>受力: F（动力）- F安（阻力）</span></span>
<span class="line"><span>牛顿定律: F - B²L²v/R = ma</span></span>
<span class="line"><span></span></span>
<span class="line"><span>随着v增大，F安增大，a减小</span></span>
<span class="line"><span>最终匀速: F = F安，即 F = B²L²vₘ/R</span></span>
<span class="line"><span>最大速度: vₘ = FR/B²L²</span></span></code></pre></div><p><strong>情况3：倾斜导轨，倾角θ，无外力</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>受力: mgsinθ（下滑力）- F安（阻力）</span></span>
<span class="line"><span>牛顿定律: mgsinθ - B²L²v/R = ma</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最终匀速: mgsinθ = B²L²vₘ/R</span></span>
<span class="line"><span>最大速度: vₘ = mgRsinθ/B²L²</span></span></code></pre></div><h3 id="步骤4-判断运动类型" tabindex="-1">步骤4：判断运动类型 <a class="header-anchor" href="#步骤4-判断运动类型" aria-label="Permalink to &quot;步骤4：判断运动类型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【常见运动类型】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 变加速→匀速:</span></span>
<span class="line"><span>   有恒定外力（重力分力或拉力）</span></span>
<span class="line"><span>   最终达到最大速度匀速运动</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>2. 变减速→静止:</span></span>
<span class="line"><span>   只有初速度，无外力</span></span>
<span class="line"><span>   最终停下来</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>3. 恒定加速度:</span></span>
<span class="line"><span>   需要外力随时间变化（少见）</span></span></code></pre></div><h3 id="步骤5-能量分析-关键" tabindex="-1">步骤5：能量分析（关键！） <a class="header-anchor" href="#步骤5-能量分析-关键" aria-label="Permalink to &quot;步骤5：能量分析（关键！）&quot;">​</a></h3><p><strong>核心关系</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>外力做功（或重力做功）= 杆动能变化 + 回路焦耳热</span></span>
<span class="line"><span></span></span>
<span class="line"><span>或: 外力功率 = 动能变化率 + 热功率</span></span></code></pre></div><p><strong>热量计算</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>方法1: Q = I²Rt  （需要知道I和t）</span></span>
<span class="line"><span>方法2: Q = F安·s相对  （安培力做功的绝对值）</span></span>
<span class="line"><span>方法3: 能量守恒  ΔE机 = Q  （推荐）</span></span></code></pre></div><p><strong>电荷量计算</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>q = I·Δt = (ΔΦ/R) = BLs/R</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中s是杆的位移</span></span></code></pre></div><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>单杆切割</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 电磁学分析</span></span>
<span class="line"><span>    │       ε = BLv</span></span>
<span class="line"><span>    │       I = BLv/R</span></span>
<span class="line"><span>    │       F安 = B²L²v/R</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 力学分析（牛顿定律）</span></span>
<span class="line"><span>    │       F合 = ma</span></span>
<span class="line"><span>    │       分析F合与v的关系</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 判断运动类型</span></span>
<span class="line"><span>    │       变加速→匀速？</span></span>
<span class="line"><span>    │       变减速→静止？</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 求最大速度（如有）</span></span>
<span class="line"><span>    │       a=0时: F外 = F安</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 能量分析</span></span>
<span class="line"><span>            外力功 = ΔEk + Q</span></span>
<span class="line"><span>            或: ΔE机 = Q</span></span></code></pre></div><hr><h2 id="常用公式速查" tabindex="-1">常用公式速查 <a class="header-anchor" href="#常用公式速查" aria-label="Permalink to &quot;常用公式速查&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">物理量</th><th style="text-align:left;">公式</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">感应电动势</td><td style="text-align:left;">ε = BLv</td><td style="text-align:left;">v是瞬时速度</td></tr><tr><td style="text-align:left;">感应电流</td><td style="text-align:left;">I = BLv/R</td><td style="text-align:left;">R是回路总电阻</td></tr><tr><td style="text-align:left;">安培力</td><td style="text-align:left;">F安 = B²L²v/R</td><td style="text-align:left;">方向用左手定则</td></tr><tr><td style="text-align:left;">最大速度</td><td style="text-align:left;">vₘ = F外·R/B²L²</td><td style="text-align:left;">a=0时的平衡速度</td></tr><tr><td style="text-align:left;">电荷量</td><td style="text-align:left;">q = BLs/R</td><td style="text-align:left;">s是位移</td></tr></tbody></table><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">安培力方向搞错</td><td style="text-align:left;">楞次定律：安培力阻碍相对运动；或用左手定则</td></tr><tr><td style="text-align:left;">最大速度时a≠0</td><td style="text-align:left;">最大速度时a=0，F合=0，不是其他条件</td></tr><tr><td style="text-align:left;">热量计算用错公式</td><td style="text-align:left;">推荐用能量守恒，Q = ΔE机</td></tr><tr><td style="text-align:left;">电荷量计算用I·t</td><td style="text-align:left;">用q = ΔΦ/R = BLs/R更简单</td></tr><tr><td style="text-align:left;">忘了总电阻</td><td style="text-align:left;">R是回路总电阻，不只是杆的电阻</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 正确写出ε = BLv（方向用右手定则）</li><li>[ ] 正确判断安培力方向（左手定则/楞次定律）</li><li>[ ] 列出牛顿定律方程时注意安培力是变力</li><li>[ ] 最大速度条件：a=0，不是v=0</li><li>[ ] 热量用能量守恒计算</li><li>[ ] 电荷量用q = BLs/R计算</li></ul><hr><p><em>配套速查</em>: TS-000 速查总卡 → 模型24<br><em>详细推导</em>: TS-024-单杆切割详解（待创建）</p>`,45)])])}const b=s(p,[["render",l]]);export{g as __pageData,b as default};
