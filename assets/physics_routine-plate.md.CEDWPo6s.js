import{_ as s,o as n,c as p,a4 as e}from"./chunks/framework._in6GHBg.js";const g=JSON.parse('{"title":"板块模型解题套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-plate.md","filePath":"physics/routine-plate.md"}'),t={name:"physics/routine-plate.md"};function l(i,a,o,c,r,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="板块模型解题套路" tabindex="-1">板块模型解题套路 <a class="header-anchor" href="#板块模型解题套路" aria-label="Permalink to &quot;板块模型解题套路&quot;">​</a></h1><p><strong>模型编号</strong>: 11<br><strong>难度</strong>: ⭐⭐⭐⭐<br><strong>核心</strong>: 多物体受力分析 + 相对滑动判断</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 木板+滑块、相对滑动、共同速度、不掉下去</p><p><strong>常见情境</strong>:</p><ul><li>滑块以初速度滑上静止木板</li><li>木板受拉力，滑块在木板上</li><li>两者都有初速度，方向相同或相反</li></ul><hr><h2 id="标准解题步骤" tabindex="-1">标准解题步骤 <a class="header-anchor" href="#标准解题步骤" aria-label="Permalink to &quot;标准解题步骤&quot;">​</a></h2><h3 id="步骤1-分别受力分析" tabindex="-1">步骤1：分别受力分析 <a class="header-anchor" href="#步骤1-分别受力分析" aria-label="Permalink to &quot;步骤1：分别受力分析&quot;">​</a></h3><p><strong>假设</strong>: 滑块A（质量m，初速度v₁），木板B（质量M，初速度v₂）</p><p><strong>关键判断</strong>: 两者是否相对滑动？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>假设两者相对静止（一起运动）:</span></span>
<span class="line"><span>    整体加速度 a共 = F外 / (m+M)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    滑块A需要的静摩擦力: f需 = m·a共</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    最大静摩擦力: fmax = μ·N = μmg</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if f需 ≤ fmax:</span></span>
<span class="line"><span>        相对静止假设成立！两者以a共一起运动</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    if f需 &gt; fmax:</span></span>
<span class="line"><span>        相对滑动！分别分析</span></span></code></pre></div><h3 id="步骤2-相对滑动时的加速度" tabindex="-1">步骤2：相对滑动时的加速度 <a class="header-anchor" href="#步骤2-相对滑动时的加速度" aria-label="Permalink to &quot;步骤2：相对滑动时的加速度&quot;">​</a></h3><p><strong>滑块A</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>水平方向只受滑动摩擦力: f = μmg</span></span>
<span class="line"><span>加速度: aA = μg  （方向与相对运动方向相反）</span></span></code></pre></div><p><strong>木板B</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>水平方向受外力F和滑块摩擦力（反作用力）</span></span>
<span class="line"><span>加速度: aB = (F ± μmg) / M  （±取决于摩擦力方向）</span></span></code></pre></div><h3 id="步骤3-找共速条件-临界点" tabindex="-1">步骤3：找共速条件（临界点） <a class="header-anchor" href="#步骤3-找共速条件-临界点" aria-label="Permalink to &quot;步骤3：找共速条件（临界点）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>设经过时间t两者速度相等:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>v₁ + aA·t = v₂ + aB·t</span></span>
<span class="line"><span></span></span>
<span class="line"><span>解得: t = (v₂ - v₁) / (aA - aB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>共速时的速度: v共 = v₁ + aA·t</span></span></code></pre></div><p><strong>判断</strong>:</p><ul><li>如果在物块掉下去之前能共速，则分两段（滑动段+共同段）</li><li>如果不能共速，则一直滑动直到分离</li></ul><h3 id="步骤4-相对位移计算-临界条件" tabindex="-1">步骤4：相对位移计算（临界条件） <a class="header-anchor" href="#步骤4-相对位移计算-临界条件" aria-label="Permalink to &quot;步骤4：相对位移计算（临界条件）&quot;">​</a></h3><p><strong>典型问题</strong>: 滑块刚好不掉下去，木板至少多长？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【核心公式】</span></span>
<span class="line"><span>木板最小长度 L = 相对位移 = |xA - xB|</span></span>
<span class="line"><span></span></span>
<span class="line"><span>xA = v₁t + ½aA·t²  （滑块对地位移）</span></span>
<span class="line"><span>xB = v₂t + ½aB·t²  （木板对地位移）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>L = |xA - xB|</span></span></code></pre></div><p><strong>图像法辅助</strong>: 画v-t图，相对位移 = 两图线之间的面积</p><h3 id="步骤5-能量分析-热量计算" tabindex="-1">步骤5：能量分析（热量计算） <a class="header-anchor" href="#步骤5-能量分析-热量计算" aria-label="Permalink to &quot;步骤5：能量分析（热量计算）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>【热量公式】</span></span>
<span class="line"><span>Q = f·s相对 = μmg·L</span></span>
<span class="line"><span></span></span>
<span class="line"><span>【能量关系】</span></span>
<span class="line"><span>系统动能损失 = 热量（如果无其他外力做功）</span></span></code></pre></div><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>板块问题</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 分别受力分析，假设相对静止</span></span>
<span class="line"><span>    │       │</span></span>
<span class="line"><span>    │       ├──→ f需 ≤ fmax: 一起运动，简单</span></span>
<span class="line"><span>    │       └──→ f需 &gt; fmax: 相对滑动，分别求a</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 相对滑动时:</span></span>
<span class="line"><span>    │       滑块aA = μg</span></span>
<span class="line"><span>    │       木板aB = (F ± μmg)/M</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 找共速点（速度相等条件）</span></span>
<span class="line"><span>    │       v₁ + aA·t = v₂ + aB·t</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 计算相对位移（木板长度临界）</span></span>
<span class="line"><span>    │       L = |xA - xB|</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 能量分析: Q = μmg·L</span></span></code></pre></div><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">默认一定相对滑动</td><td style="text-align:left;">先判断f需和fmax，可能一起运动</td></tr><tr><td style="text-align:left;">摩擦力方向搞错</td><td style="text-align:left;">滑块受的摩擦力与相对运动方向相反；木板受的摩擦力与滑块受的摩擦力是作用力反作用力</td></tr><tr><td style="text-align:left;">相对位移公式记错</td><td style="text-align:left;">L = |xA - xB|，不是xA+xB</td></tr><tr><td style="text-align:left;">热量用错位移</td><td style="text-align:left;">热量Q = f·s相对，不是f·xA或f·xB</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 判断了是否相对滑动（比较f需和fmax）</li><li>[ ] 正确标出两个物体的加速度方向</li><li>[ ] 摩擦力是一对作用力反作用力（大小相等，方向相反）</li><li>[ ] 共速条件列对：vA = vB</li><li>[ ] 相对位移计算正确（不是简单相加）</li><li>[ ] 热量计算用了相对位移</li></ul><hr><p><em>配套速查</em>: TS-000 速查总卡 → 模型11<br><em>详细推导</em>: TS-011-板块模型详解（待创建）</p>`,39)])])}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
