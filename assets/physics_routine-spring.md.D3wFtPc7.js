import{_ as s,o as n,c as p,a4 as e}from"./chunks/framework._in6GHBg.js";const g=JSON.parse('{"title":"弹簧模型解题套路","description":"","frontmatter":{},"headers":[],"relativePath":"physics/routine-spring.md","filePath":"physics/routine-spring.md"}'),t={name:"physics/routine-spring.md"};function l(i,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="弹簧模型解题套路" tabindex="-1">弹簧模型解题套路 <a class="header-anchor" href="#弹簧模型解题套路" aria-label="Permalink to &quot;弹簧模型解题套路&quot;">​</a></h1><p><strong>模型编号</strong>: 12<br><strong>难度</strong>: ⭐⭐⭐⭐<br><strong>核心</strong>: 弹力变化 + 临界状态判断</p><hr><h2 id="模型识别" tabindex="-1">模型识别 <a class="header-anchor" href="#模型识别" aria-label="Permalink to &quot;模型识别&quot;">​</a></h2><p><strong>关键词</strong>: 弹簧、压缩、伸长、分离、原长、最大速度</p><p><strong>常见情境</strong>:</p><ul><li>物块压缩弹簧后释放</li><li>弹簧连接两物块运动</li><li>弹簧与竖直圆环结合</li></ul><hr><h2 id="核心公式" tabindex="-1">核心公式 <a class="header-anchor" href="#核心公式" aria-label="Permalink to &quot;核心公式&quot;">​</a></h2><p><strong>胡克定律</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>F = kx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>k：劲度系数</span></span>
<span class="line"><span>x：形变量（压缩或伸长量）</span></span></code></pre></div><p><strong>弹性势能</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Ep = ½kx²</span></span>
<span class="line"><span></span></span>
<span class="line"><span>x：相对于原长的形变量</span></span></code></pre></div><hr><h2 id="临界状态分类" tabindex="-1">临界状态分类 <a class="header-anchor" href="#临界状态分类" aria-label="Permalink to &quot;临界状态分类&quot;">​</a></h2><h3 id="临界1-弹簧原长" tabindex="-1">临界1：弹簧原长 <a class="header-anchor" href="#临界1-弹簧原长" aria-label="Permalink to &quot;临界1：弹簧原长&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = 0，弹力 F = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用途：</span></span>
<span class="line"><span>- 判断弹力方向的分界点</span></span>
<span class="line"><span>- 弹性势能零点</span></span>
<span class="line"><span>- 两物体分离的判断点（之一）</span></span></code></pre></div><h3 id="临界2-最大压缩-伸长" tabindex="-1">临界2：最大压缩/伸长 <a class="header-anchor" href="#临界2-最大压缩-伸长" aria-label="Permalink to &quot;临界2：最大压缩/伸长&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>v = 0（瞬时静止）</span></span>
<span class="line"><span>Ep最大，Ek最小（通常为零）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用途：</span></span>
<span class="line"><span>- 能量守恒计算的关键点</span></span>
<span class="line"><span>- 判断运动范围的边界</span></span></code></pre></div><h3 id="临界3-分离点-两个物块" tabindex="-1">临界3：分离点（两个物块） <a class="header-anchor" href="#临界3-分离点-两个物块" aria-label="Permalink to &quot;临界3：分离点（两个物块）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>条件：</span></span>
<span class="line"><span>1. 弹力为零（x = 0，弹簧原长）</span></span>
<span class="line"><span>2. 两物块加速度相同</span></span>
<span class="line"><span>3. 两物块速度相同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意：分离后两物块各自独立运动</span></span></code></pre></div><h3 id="临界4-最大速度点" tabindex="-1">临界4：最大速度点 <a class="header-anchor" href="#临界4-最大速度点" aria-label="Permalink to &quot;临界4：最大速度点&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>条件：合力为零（a = 0）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对于竖直弹簧振子：</span></span>
<span class="line"><span>mg = kx₀（平衡位置）</span></span>
<span class="line"><span>此时速度最大</span></span></code></pre></div><hr><h2 id="典型问题类型" tabindex="-1">典型问题类型 <a class="header-anchor" href="#典型问题类型" aria-label="Permalink to &quot;典型问题类型&quot;">​</a></h2><h3 id="类型1-水平弹簧-物块-单一物体" tabindex="-1">类型1：水平弹簧+物块（单一物体） <a class="header-anchor" href="#类型1-水平弹簧-物块-单一物体" aria-label="Permalink to &quot;类型1：水平弹簧+物块（单一物体）&quot;">​</a></h3><p><strong>问题</strong>: 物块压缩弹簧后释放，求最大速度或最大位移</p><p><strong>解法</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>能量守恒：</span></span>
<span class="line"><span>½kx₀² = ½mv²（到原长时）</span></span>
<span class="line"><span>→ v_max = √(kx₀²/m)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最大速度在弹簧原长位置（水平面无摩擦）</span></span></code></pre></div><p><strong>若粗糙水平面</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>能量守恒：</span></span>
<span class="line"><span>½kx₀² = ½mv² + W摩擦</span></span>
<span class="line"><span>最大速度位置：F弹 = f（合力为零）</span></span></code></pre></div><h3 id="类型2-竖直弹簧振子" tabindex="-1">类型2：竖直弹簧振子 <a class="header-anchor" href="#类型2-竖直弹簧振子" aria-label="Permalink to &quot;类型2：竖直弹簧振子&quot;">​</a></h3><p><strong>问题</strong>: 物体从弹簧原长上方自由落下，求最大压缩量和最大速度</p><p><strong>解法</strong>:</p><p><strong>步骤1：找平衡位置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mg = kx₀</span></span>
<span class="line"><span>x₀ = mg/k（平衡时弹簧伸长量）</span></span></code></pre></div><p><strong>步骤2：最大速度位置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在平衡位置，a = 0，v最大</span></span></code></pre></div><p><strong>步骤3：最大压缩量</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>能量守恒（从释放点到最低点）：</span></span>
<span class="line"><span>mg(h + x_max) = ½kx_max²</span></span>
<span class="line"><span></span></span>
<span class="line"><span>其中h为释放点距弹簧原长的高度</span></span>
<span class="line"><span>解二次方程求x_max</span></span></code></pre></div><p><strong>简谐运动特性</strong>（振幅A = x₀ = mg/k）：</p><ul><li>以平衡位置为中心振动</li><li>最大压缩：x₀ + A = 2mg/k</li><li>最大伸长：x₀ - A = 0（若从原长释放）</li></ul><h3 id="类型3-弹簧连接两物块" tabindex="-1">类型3：弹簧连接两物块 <a class="header-anchor" href="#类型3-弹簧连接两物块" aria-label="Permalink to &quot;类型3：弹簧连接两物块&quot;">​</a></h3><p><strong>问题</strong>: 弹簧连接物块A和B，给A初速度，求分离时间或分离速度</p><p><strong>解法</strong>:</p><p><strong>阶段1：两物块一起运动（未分离）</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>系统动量守恒（水平无外力）：</span></span>
<span class="line"><span>m_A v₀ = (m_A + m_B)v共（某时刻）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>系统能量守恒：</span></span>
<span class="line"><span>½m_A v₀² = ½(m_A+m_B)v² + ½kx²</span></span></code></pre></div><p><strong>阶段2：分离点判断</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>分离条件：</span></span>
<span class="line"><span>- 弹簧原长（x = 0，弹力为零）</span></span>
<span class="line"><span>- 此时两物块速度相同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>分离后：</span></span>
<span class="line"><span>- A：减速（弹簧拉伸后拉回）</span></span>
<span class="line"><span>- B：匀速（不再受力）</span></span></code></pre></div><hr><h2 id="套路总结图" tabindex="-1">套路总结图 <a class="header-anchor" href="#套路总结图" aria-label="Permalink to &quot;套路总结图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>弹簧问题</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 判断问题类型</span></span>
<span class="line"><span>    │       水平？竖直？单物体？双物体？</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 找临界状态</span></span>
<span class="line"><span>    │       原长？最大形变？分离点？最大速度点？</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 列能量守恒</span></span>
<span class="line"><span>    │       ½kx₁² + mgh₁ + ½mv₁² = ½kx₂² + mgh₂ + ½mv₂² + W其他</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    ├──→ 双物体问题加动量守恒</span></span>
<span class="line"><span>    │       m₁v₁ + m₂v₂ = m₁v₁&#39; + m₂v₂&#39;</span></span>
<span class="line"><span>    │</span></span>
<span class="line"><span>    └──→ 求特定状态</span></span>
<span class="line"><span>            最大速度？最大形变？分离条件？</span></span></code></pre></div><hr><h2 id="常见陷阱" tabindex="-1">常见陷阱 <a class="header-anchor" href="#常见陷阱" aria-label="Permalink to &quot;常见陷阱&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">陷阱</th><th style="text-align:left;">正确做法</th></tr></thead><tbody><tr><td style="text-align:left;">混淆弹簧长度和形变量</td><td style="text-align:left;">x是形变量（相对于原长），不是总长度</td></tr><tr><td style="text-align:left;">忘记弹性势能只与形变量有关</td><td style="text-align:left;">Ep = ½kx²，与压缩或伸长无关，只看大小</td></tr><tr><td style="text-align:left;">竖直问题漏重力势能</td><td style="text-align:left;">能量守恒要包含重力势能变化</td></tr><tr><td style="text-align:left;">分离点判断错误</td><td style="text-align:left;">分离时弹力为零，且加速度相同、速度相同</td></tr><tr><td style="text-align:left;">最大速度位置找错</td><td style="text-align:left;">合力为零时速度最大（不一定是原长）</td></tr></tbody></table><hr><h2 id="快速检查清单" tabindex="-1">快速检查清单 <a class="header-anchor" href="#快速检查清单" aria-label="Permalink to &quot;快速检查清单&quot;">​</a></h2><ul><li>[ ] 正确识别了弹簧类型（水平/竖直）</li><li>[ ] 能量守恒方程包含了所有能量形式（动能+弹性势能+重力势能）</li><li>[ ] 竖直问题找对了平衡位置（mg = kx₀）</li><li>[ ] 双物体问题判断对了分离点（原长+共速+同加速度）</li><li>[ ] 最大速度点在合力为零处（不一定是原长）</li></ul><hr><p><em>配套速查</em>: 速查卡 → 模型12<br><em>详细推导</em>: 【高一高二用】新课学习/详解/03-牛顿定律详解.md（模型12部分）</p>`,60)])])}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
