import{_ as t,o as l,c as e,a4 as s,j as a}from"./chunks/framework._in6GHBg.js";const u=JSON.parse('{"title":"立体几何套路","description":"","frontmatter":{},"headers":[],"relativePath":"math/Math-Review-Routine-005-立体几何套路-V1.0-20260405.md","filePath":"math/Math-Review-Routine-005-立体几何套路-V1.0-20260405.md"}'),p={name:"math/Math-Review-Routine-005-立体几何套路-V1.0-20260405.md"};function i(r,n,o,c,d,h){return l(),e("div",null,[...n[0]||(n[0]=[s('<h1 id="立体几何套路" tabindex="-1">立体几何套路 <a class="header-anchor" href="#立体几何套路" aria-label="Permalink to &quot;立体几何套路&quot;">​</a></h1><p><strong>建系→找点→求向量→算角度</strong></p><hr><h2 id="一、题型识别" tabindex="-1">一、题型识别 <a class="header-anchor" href="#一、题型识别" aria-label="Permalink to &quot;一、题型识别&quot;">​</a></h2><h3 id="特征关键词" tabindex="-1">特征关键词 <a class="header-anchor" href="#特征关键词" aria-label="Permalink to &quot;特征关键词&quot;">​</a></h3><ul><li>&quot;证明线面平行/垂直&quot;</li><li>&quot;求线面角&quot;</li><li>&quot;求二面角&quot;</li><li>&quot;空间直角坐标系&quot;</li><li>&quot;法向量&quot;</li></ul><h3 id="典型问法" tabindex="-1">典型问法 <a class="header-anchor" href="#典型问法" aria-label="Permalink to &quot;典型问法&quot;">​</a></h3><ul><li>证明：AB∥平面CDE</li><li>证明：平面ABC⊥平面DEF</li><li>求直线AB与平面CDE所成角的正弦值</li><li>求二面角A-BC-D的余弦值</li><li>在棱上是否存在点P，使得...</li></ul><hr><h2 id="二、解题步骤" tabindex="-1">二、解题步骤 <a class="header-anchor" href="#二、解题步骤" aria-label="Permalink to &quot;二、解题步骤&quot;">​</a></h2><h3 id="类型1-证明平行关系" tabindex="-1">类型1：证明平行关系 <a class="header-anchor" href="#类型1-证明平行关系" aria-label="Permalink to &quot;类型1：证明平行关系&quot;">​</a></h3><p><strong>类型1.1：线线平行</strong></p><p><strong>方法</strong>：</p><ul><li>向量法：证明方向向量平行（a⃗ = λb⃗）</li><li>几何法：中位线、平行四边形</li></ul><p><strong>类型1.2：线面平行</strong></p><p><strong>向量法</strong>：</p><ul><li>证明直线的方向向量与平面的法向量垂直（a⃗·n⃗ = 0）</li></ul><p><strong>几何法</strong>：</p><ul><li>证明直线平行于平面内的一条直线</li></ul><p><strong>类型1.3：面面平行</strong></p><p><strong>向量法</strong>：</p><ul><li>证明两平面的法向量平行（n⃗₁ = λn⃗₂）</li></ul><p><strong>几何法</strong>：</p><ul><li>证明一平面内两相交直线都平行于另一平面</li></ul><hr><h3 id="类型2-证明垂直关系" tabindex="-1">类型2：证明垂直关系 <a class="header-anchor" href="#类型2-证明垂直关系" aria-label="Permalink to &quot;类型2：证明垂直关系&quot;">​</a></h3><p><strong>类型2.1：线线垂直</strong></p><p><strong>向量法</strong>：</p><ul><li>证明方向向量的数量积为0（a⃗·b⃗ = 0）</li></ul><p><strong>类型2.2：线面垂直</strong></p><p><strong>向量法</strong>：</p><ul><li>证明直线的方向向量与平面的法向量平行（a⃗ = λn⃗）</li></ul><p><strong>几何法</strong>：</p><ul><li>证明直线垂直于平面内两相交直线</li></ul><p><strong>类型2.3：面面垂直</strong></p><p><strong>向量法</strong>：</p><ul><li>证明两平面的法向量垂直（n⃗₁·n⃗₂ = 0）</li></ul><p><strong>几何法</strong>：</p><ul><li>证明一平面过另一平面的垂线</li></ul><hr><h3 id="类型3-求空间角" tabindex="-1">类型3：求空间角 <a class="header-anchor" href="#类型3-求空间角" aria-label="Permalink to &quot;类型3：求空间角&quot;">​</a></h3><p><strong>核心：建系→找点→求向量→用法向量计算</strong></p><p><strong>Step 1：建立空间直角坐标系</strong></p><p><strong>原则</strong>：</p><ul><li>利用几何体的直角顶点</li><li>让更多点落在坐标轴上</li><li>让对称轴与坐标轴重合</li></ul><p><strong>Step 2：写出各点坐标</strong></p><p><strong>Step 3：求相关向量</strong></p><ul><li>直线方向向量：两点坐标差</li><li>平面法向量：解方程组</li></ul><p><strong>求法向量方法</strong>：</p>',49),a("ul",null,[a("li",null,"找平面内两不共线向量a⃗、b⃗"),a("li",null,"设法向量n⃗ = (x,y,z)"),a("li",{"n⃗·a⃗":""},"列方程："),a("li",null,"令某一坐标为1，解出其他坐标")],-1),s(`<p><strong>Step 4：用公式计算角度</strong></p><table tabindex="0"><thead><tr><th style="text-align:center;">角的类型</th><th style="text-align:center;">公式</th><th style="text-align:center;">注意</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>异面直线角</strong></td><td style="text-align:center;">cosθ = |a⃗·b⃗|/(|a⃗||b⃗|)</td><td style="text-align:center;">θ∈(0°,90°]，取绝对值</td></tr><tr><td style="text-align:center;"><strong>线面角</strong></td><td style="text-align:center;">sinθ = |a⃗·n⃗|/(|a⃗||n⃗|)</td><td style="text-align:center;">θ∈[0°,90°]，线与法向量夹角的余角</td></tr><tr><td style="text-align:center;"><strong>二面角</strong></td><td style="text-align:center;">cosθ = |n⃗₁·n⃗₂|/(|n⃗₁||n⃗₂|)</td><td style="text-align:center;">θ可能是锐角或钝角，需看图判断</td></tr></tbody></table><hr><h3 id="类型4-存在性问题" tabindex="-1">类型4：存在性问题 <a class="header-anchor" href="#类型4-存在性问题" aria-label="Permalink to &quot;类型4：存在性问题&quot;">​</a></h3><p><strong>问法</strong>：在棱/线段上是否存在点P，使得某种垂直/平行关系成立？</p><p><strong>Step 1：设参数</strong></p><ul><li>设P点坐标（用参数表示）</li><li>如：P在AB上，A(x₁,y₁,z₁)，B(x₂,y₂,z₂)</li><li>则P = A + t·AB⃗ = (x₁+t(x₂-x₁), ...)，t∈[0,1]</li></ul><p><strong>Step 2：翻译条件</strong></p><ul><li>将垂直/平行条件转化为向量关系</li></ul><p><strong>Step 3：解方程</strong></p><ul><li>解出参数t</li><li>检验t是否在范围内</li></ul><p><strong>Step 4：得出结论</strong></p><ul><li>t在范围内→存在，写出坐标</li><li>t不在范围内→不存在</li></ul><hr><h2 id="三、标准格式" tabindex="-1">三、标准格式 <a class="header-anchor" href="#三、标准格式" aria-label="Permalink to &quot;三、标准格式&quot;">​</a></h2><h3 id="证明线面平行答题模板" tabindex="-1">证明线面平行答题模板 <a class="header-anchor" href="#证明线面平行答题模板" aria-label="Permalink to &quot;证明线面平行答题模板&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>证明：（几何法）</span></span>
<span class="line"><span>取...的中点...，连接...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>∵ ...（中位线/平行四边形性质）</span></span>
<span class="line"><span>∴ ...∥...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>又∵ ...⊂平面...，...⊄平面...</span></span>
<span class="line"><span>∴ ...∥平面...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（向量法）</span></span>
<span class="line"><span>以...为原点，建立空间直角坐标系...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则...（写出各点坐标）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>向量... = (,,,)</span></span>
<span class="line"><span>平面...的法向量n⃗ = (,,,)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>∵ 向量...·n⃗ = 0</span></span>
<span class="line"><span>∴ ...∥平面...</span></span></code></pre></div><h3 id="求空间角答题模板" tabindex="-1">求空间角答题模板 <a class="header-anchor" href="#求空间角答题模板" aria-label="Permalink to &quot;求空间角答题模板&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>解：以...为原点，建立空间直角坐标系...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则...（写出相关点坐标）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>向量... = (,,,)</span></span>
<span class="line"><span>向量... = (,,,)</span></span>
<span class="line"><span>平面...的法向量n⃗ = (,,,)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设所求角为θ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cosθ = |...·...|/(|...||...|) = ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>∴ θ = ...</span></span></code></pre></div><hr><h2 id="四、典型例题" tabindex="-1">四、典型例题 <a class="header-anchor" href="#四、典型例题" aria-label="Permalink to &quot;四、典型例题&quot;">​</a></h2><h3 id="例题1-证明线面垂直" tabindex="-1">例题1：证明线面垂直 <a class="header-anchor" href="#例题1-证明线面垂直" aria-label="Permalink to &quot;例题1：证明线面垂直&quot;">​</a></h3><p><strong>题目</strong>：正方体ABCD-A₁B₁C₁D₁中，证明A₁C⊥平面BDC₁。</p><p><strong>解答</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>证明：以D为原点，DA、DC、DD₁为x、y、z轴建系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>设棱长为1，则：</span></span>
<span class="line"><span>A₁(1,0,1)，C(0,1,0)，B(1,1,0)，D(0,0,0)，C₁(0,1,1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>向量A₁C⃗ = (-1,1,-1)</span></span>
<span class="line"><span>向量DB⃗ = (1,1,0)</span></span>
<span class="line"><span>向量DC₁⃗ = (0,1,1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>∵ A₁C⃗·DB⃗ = -1+1+0 = 0</span></span>
<span class="line"><span>  A₁C⃗·DC₁⃗ = 0+1-1 = 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>∴ A₁C⊥DB，A₁C⊥DC₁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>又∵ DB∩DC₁ = D，DB、DC₁⊂平面BDC₁</span></span>
<span class="line"><span>∴ A₁C⊥平面BDC₁</span></span></code></pre></div><hr><h3 id="例题2-求二面角" tabindex="-1">例题2：求二面角 <a class="header-anchor" href="#例题2-求二面角" aria-label="Permalink to &quot;例题2：求二面角&quot;">​</a></h3><p><strong>题目</strong>：四棱锥P-ABCD中，PA⊥底面ABCD，ABCD为正方形，PA=AB=2，求二面角B-PC-D的余弦值。</p><p><strong>解答</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>解：以A为原点，AB、AD、AP为x、y、z轴建系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>则：</span></span>
<span class="line"><span>B(2,0,0)，C(2,2,0)，D(0,2,0)，P(0,0,2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>平面PBC：</span></span>
<span class="line"><span>向量PB⃗ = (2,0,-2)，PC⃗ = (2,2,-2)</span></span>
<span class="line"><span>设法向量n⃗₁ = (x,y,z)</span></span>
<span class="line"><span>{2x-2z=0, 2x+2y-2z=0}</span></span>
<span class="line"><span>取x=1，则z=1，y=0</span></span>
<span class="line"><span>∴ n⃗₁ = (1,0,1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>平面PCD：</span></span>
<span class="line"><span>向量PC⃗ = (2,2,-2)，PD⃗ = (0,2,-2)</span></span>
<span class="line"><span>设法向量n⃗₂ = (x,y,z)</span></span>
<span class="line"><span>{2x+2y-2z=0, 2y-2z=0}</span></span>
<span class="line"><span>取y=1，则z=1，x=0</span></span>
<span class="line"><span>∴ n⃗₂ = (0,1,1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cosθ = |n⃗₁·n⃗₂|/(|n⃗₁||n⃗₂|) = 1/(√2·√2) = 1/2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>由图知二面角为钝角，∴ cosθ = -1/2</span></span></code></pre></div><hr><h2 id="五、建系技巧" tabindex="-1">五、建系技巧 <a class="header-anchor" href="#五、建系技巧" aria-label="Permalink to &quot;五、建系技巧&quot;">​</a></h2><h3 id="常见几何体的建系方法" tabindex="-1">常见几何体的建系方法 <a class="header-anchor" href="#常见几何体的建系方法" aria-label="Permalink to &quot;常见几何体的建系方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">几何体</th><th style="text-align:left;">建系方法</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>正方体</strong></td><td style="text-align:left;">选顶点为原点，三棱为坐标轴</td></tr><tr><td style="text-align:center;"><strong>正四棱锥</strong></td><td style="text-align:left;">底面中心为原点，对称轴为z轴</td></tr><tr><td style="text-align:center;"><strong>直三棱柱</strong></td><td style="text-align:left;">底面直角顶点为原点</td></tr><tr><td style="text-align:center;"><strong>有一条侧棱垂直底面</strong></td><td style="text-align:left;">垂足为原点，该侧棱为z轴</td></tr></tbody></table><hr><h2 id="六、易错点清单" tabindex="-1">六、易错点清单 <a class="header-anchor" href="#六、易错点清单" aria-label="Permalink to &quot;六、易错点清单&quot;">​</a></h2><h3 id="审题阶段" tabindex="-1">审题阶段 <a class="header-anchor" href="#审题阶段" aria-label="Permalink to &quot;审题阶段&quot;">​</a></h3><ul><li>[ ] 是否要求用向量法？</li><li>[ ] 求的是角的正弦、余弦还是正切？</li><li>[ ] 二面角是锐角还是钝角？</li></ul><h3 id="计算阶段" tabindex="-1">计算阶段 <a class="header-anchor" href="#计算阶段" aria-label="Permalink to &quot;计算阶段&quot;">​</a></h3><ul><li>[ ] 点的坐标是否正确？</li><li>[ ] 法向量计算是否正确？</li><li>[ ] 公式是否用对（sin还是cos）？</li></ul><h3 id="检验阶段" tabindex="-1">检验阶段 <a class="header-anchor" href="#检验阶段" aria-label="Permalink to &quot;检验阶段&quot;">​</a></h3><ul><li>[ ] 角度范围是否合理？</li><li>[ ] 二面角锐钝是否判断正确？</li></ul><hr><h2 id="七、得分点提示" tabindex="-1">七、得分点提示 <a class="header-anchor" href="#七、得分点提示" aria-label="Permalink to &quot;七、得分点提示&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">步骤</th><th style="text-align:left;">得分点</th></tr></thead><tbody><tr><td style="text-align:center;">建系</td><td style="text-align:left;">写明原点、坐标轴</td></tr><tr><td style="text-align:center;">坐标</td><td style="text-align:left;">写出关键点坐标</td></tr><tr><td style="text-align:center;">向量</td><td style="text-align:left;">写出方向向量/法向量</td></tr><tr><td style="text-align:center;">计算</td><td style="text-align:left;">写出公式和代入过程</td></tr><tr><td style="text-align:center;">结论</td><td style="text-align:left;">写出最终答案</td></tr></tbody></table><hr><p><strong>文档编号</strong>: Math-Review-Routine-005<br><strong>版本</strong>: V1.0<br><strong>日期</strong>: 20260405</p>`,47)])])}const b=t(p,[["render",i]]);export{u as __pageData,b as default};
