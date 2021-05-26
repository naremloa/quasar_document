import{o as n,c as s,b as a}from"./app.844c30b8.js";const t='{"title":"Icons","description":"","frontmatter":{},"headers":[{"level":2,"title":"安裝","slug":"安裝"},{"level":3,"title":"添加一個 Icon Set","slug":"添加一個-icon-set"},{"level":3,"title":"使用 Icon Set","slug":"使用-icon-set"},{"level":3,"title":"完整的例子","slug":"完整的例子"},{"level":3,"title":"從 CDN 引入","slug":"從-cdn-引入"},{"level":3,"title":"#使用Fontawesome-Pro","slug":"使用fontawesome-pro"},{"level":2,"title":"基本使用","slug":"基本使用"},{"level":3,"title":"#Vue屬性","slug":"vue屬性"},{"level":3,"title":"#Size&Colors","slug":"size-colors"},{"level":3,"title":"#更多的例子","slug":"更多的例子"}],"relativePath":"component/icons.md","lastUpdated":1622029080725}',e={},p=a('<h1 id="icons"><a class="header-anchor" href="#icons" aria-hidden="true">#</a> Icons</h1><p>Quasar Icon 元件可以讓你在其他元件或你的頁面的任何地方，很簡單的插入 icon 。</p><p>Quasar 現在支持： <a href="https://material.io/icons/" target="_blank" rel="noopener noreferrer">Material Icons</a>, <a href="http://fontawesome.io/icons/" target="_blank" rel="noopener noreferrer">Font Awesome</a> , <a href="http://ionicons.com/" target="_blank" rel="noopener noreferrer">Ionicons</a> , <a href="https://materialdesignicons.com/" target="_blank" rel="noopener noreferrer">MDI</a> 和 <a href="https://icomoon.io/" target="_blank" rel="noopener noreferrer">ICoMoon</a></p><p>除了 IcoMoon 之外(它有 license )，你可以選擇它們其中一個或混用都行。 Quasar 只需要知道哪一個 icon 要被用到。</p><p>接著，我們將會看到如何安裝一個 icon 。</p><p>如果你喜歡的 font icon 不在列表裡，請 <a href="https://github.com/quasarframework/quasar/issues/new" target="_blank" rel="noopener noreferrer">submit a request</a></p><h2 id="安裝"><a class="header-anchor" href="#安裝" aria-hidden="true">#</a> 安裝</h2><p>如果你只是要建立一個 website ，直接使用CDN是一個不錯的選擇。然而，如果是要建立一個mobile或Electron app，你應該就不會想要依賴網路鏈接。所以最好的方式是使用下面這種方式。</p><blockquote><p>非常重要</p><p>因為IcoMoon的各種原因，這個icon並不能直接使用。你需要用<a href="https://icomoon.io/app/#/select" target="_blank" rel="noopener noreferrer">它們的網站</a>來創建你自己的icon font檔案，然後將它複製到你的app文件夾裡，並通過app插件的方式引入它們($ quasar new plugin icomoon)。</p></blockquote><h3 id="添加一個-icon-set"><a class="header-anchor" href="#添加一個-icon-set" aria-hidden="true">#</a> 添加一個 Icon Set</h3><p>第一步是讓一個 icon set 可以在你的 website/app 中使用。如下面的，編輯<code>/quasar.conf.js</code>:</p><div class="language-js line-numbers-mode"><pre><code>extras<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;material-icons&#39;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>Icon sets 是通過 <a href="https://github.com/quasarframework/quasar-extras" target="_blank" rel="noopener noreferrer">Quasar-extras</a> 套件來讓 quasar 使用的。你不需要再在你的 app 引入這個套件，直接在 <code>/quasar.conf.js</code> 設置可用就行。</p></blockquote><p>增加更多的 icon set :</p><div class="language-js line-numbers-mode"><pre><code>extras<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;material-icons&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;mdi&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;ionicons&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;fontawesome&#39;</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="使用-icon-set"><a class="header-anchor" href="#使用-icon-set" aria-hidden="true">#</a> 使用 Icon Set</h3><p>除非你設置成別的， Quasar 預設在它的元件中使用 Material Icons 。當然，你可以告訴 Quasar 你要使用其他的 icon set 。但請確保你已經將它添加進來了。</p><p>那麼，讓我們假設要使用 Ionicons 。我們再次編輯 <code>/quasar.conf.js</code>:</p><div class="language-js line-numbers-mode"><pre><code>framework<span class="token operator">:</span> <span class="token punctuation">{</span>\n  iconSet<span class="token operator">:</span> <span class="token string">&#39;ionicons&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="完整的例子"><a class="header-anchor" href="#完整的例子" aria-hidden="true">#</a> 完整的例子</h3><p>這裡是一個使用 Ionicons 和 Fontawesome 的例子:</p><div class="language-js line-numbers-mode"><pre><code>extras<span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;ionicons&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;fontawesome&#39;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\nframework<span class="token operator">:</span> <span class="token punctuation">{</span>\n  iconSet<span class="token operator">:</span> <span class="token string">&#39;fontawesome&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>這樣就能在你的app裡同時使用 Ionicons 和 Fontawesome ，並且所有的 Quasar 元件會展示 Fontawesome icons 。</p><h3 id="從-cdn-引入"><a class="header-anchor" href="#從-cdn-引入" aria-hidden="true">#</a> 從 CDN 引入</h3><p>如果你想直接從 CDN 引入，你只需要在<code>index.template.html</code>裡插入<code>&lt;link&gt;</code>標籤。</p><p>在這個情況下，你就不需要再在 <code>.quasar.conf.js &gt; extras</code> 添加 icon sets 了。只要編輯 <code>index.template.html</code> 即可。</p><p>下面的例子會引入 Font Awesome v4.7.0 icons 。你可以在 Google 上直接找相關的 CDN 確保你引入的是最新的版本。</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token comment">&lt;!-- in `/src/index.template.html` --&gt;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  ...\n\n  <span class="token comment">&lt;!-- CDN example for Material Icons --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://fonts.googleapis.com/icon?family=Material+Icons<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- CDN example for Fontawesome --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n\n  <span class="token comment">&lt;!-- CDN example for Ioniocns --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="使用fontawesome-pro"><a class="header-anchor" href="#使用fontawesome-pro" aria-hidden="true">#</a> #使用Fontawesome-Pro</h3><p>如果你有Fontawesome 5 Pro許可證，並且想要用它來替代Fontawesome免費版本，下面會提供相關步驟。</p><p>1.在Fontawesome的使用者帳戶頁面，打開 <a href="https://fontawesome.com/account/linked-accounts" target="_blank" rel="noopener noreferrer">Linked Accounts section</a> 來拿到npm TOKENID。 2.在檔案 .npmrc (該檔案路徑與package.json相同)新建或增加TOKENID:</p><div class="language-"><pre><code>@fortawesome:registry=https://npm.fontawesome.com/TOKENID\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>3.安裝Fontawesome webfonts:</p><div class="language-"><pre><code># npm install --save or yarn add\n$ npm install --save @fortawesome/fontawesome-pro-webfonts\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>4.新建 App 插件:</p><div class="language-"><pre><code>$quasar new plugin fontawesome-pro\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>5.編輯 <code>/quasar.conf.js</code> :</p><div class="language-"><pre><code>plugins: [\n  ...\n  &#39;fontawesome-pro&#39; // Add app plugin\n],\nextras: [\n  // &#39;fontawesome&#39; // Disable free version!\n],\nframework: {\n  // if you want Quasar to use Fontawesome for its icons\n  iconSet: &#39;fontawesome-pro&#39; // requires Quasar v0.15.6+\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>6.編輯 <code>/src/plugins/fontawesome-pro.js</code> :</p><div class="language-"><pre><code>import &#39;@fortawesome/fontawesome-pro-webfonts/css/fontawesome.css&#39;\nimport &#39;@fortawesome/fontawesome-pro-webfonts/css/fa-solid.css&#39;\nimport &#39;@fortawesome/fontawesome-pro-webfonts/css/fa-regular.css&#39;\n// do you want these too?\n// import &#39;@fortawesome/fontawesome-pro-webfonts/css/fa-light.css&#39;\n// import &#39;@fortawesome/fontawesome-pro-webfonts/css/fa-brands.css&#39;\n\nexport default () =&gt; {\n  // Leave blank or make something cool.\n}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="基本使用"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p>讓我們來看看如何使用QIcon元件。</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token comment">&lt;!-- Material icons have no prefix --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumb_up<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- Ionicons have &quot;ion-&quot; prefix --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ion-heart<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- Fontawesome icons have &quot;fa[s|r|l|b] fa-&quot; prefix --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fas fa-id-card<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- MDI icons have &quot;mdi-&quot; prefix --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mdi-account-card-details<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!-- IcoMoon icons have &quot;icon-&quot; prefix --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-chrome<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">&lt;!--\n  or if you prefer the non self-closing tag version\n  which allows to add a QPopover or QTooltip:\n--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumb_up<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-tooltip</span><span class="token punctuation">&gt;</span></span>Some tooltip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-tooltip</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-icon</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>存在一種情況：想要根據使用的Quasar主題展示不同的icons。你可以使用<code>mat</code>和<code>ios</code>兩個屬性。下面這個例子是當你在跨平台環境下，你想在每個平台下展示不同的主題。</p><div class="language-HTMl line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">mat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>settings<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ios</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ion-ios-gear-outline<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>也可以這樣來達成目的。</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-item-side</span>\n  <span class="token attr-name">:icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$q.theme === <span class="token punctuation">&#39;</span>mat<span class="token punctuation">&#39;</span> ? <span class="token punctuation">&#39;</span>settings<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span>ion-ios-gear-outline<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="vue屬性"><a class="header-anchor" href="#vue屬性" aria-hidden="true">#</a> #Vue屬性</h3><table><thead><tr><th>Vue屬性</th><th>類型</th><th>描述</th></tr></thead><tbody><tr><td><code>name</code></td><td>String</td><td>被用的icon的名字(通用)</td></tr><tr><td><code>ios</code></td><td>String</td><td>在Quasar iOS主題下被用的icon的名字</td></tr><tr><td><code>mat</code></td><td>String</td><td>在Quasar Material主題下...</td></tr><tr><td><code>color</code></td><td>String</td><td>Quasar調色板上的一個顏色</td></tr><tr><td><code>size</code></td><td>String</td><td>如: &#39;12px&#39;, &#39;3.2rem&#39;, &#39;14pt&#39;.</td></tr></tbody></table><blockquote><p>注意</p><p>如果你添加了<code>name</code>屬性，它會覆寫<code>ios</code>和<code>mat</code>屬性</p></blockquote><h3 id="size-colors"><a class="header-anchor" href="#size-colors" aria-hidden="true">#</a> #Size&amp;Colors</h3><p>所有的icons都是font icons。這意味著，你可以通過控制<code>font-size</code>這個CSS屬性來改變icon的大小。同時，它們也會繼承現在使用的CSS<code>color</code>。</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mail<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 25px</span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">color</span><span class="token punctuation">:</span> #a2e2e3</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>\n  ...\n  <span class="token comment">&lt;!-- inheriting color #a2e2e3: --&gt;</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alarm<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Quasar調色板上的顏色可以用兩種方式設置:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token comment">&lt;!-- or by using `color` prop: --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alarm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alarm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>green-2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>還有一個 size 屬性:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wifi<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2rem<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delete<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="更多的例子"><a class="header-anchor" href="#更多的例子" aria-hidden="true">#</a> #更多的例子</h3><p>通過HTMl原生的特性<code>style</code>:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumb_up<span class="token punctuation">&quot;</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token style language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>通過HTMl原生的特性<code>class</code>:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>thumb_up<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>big-icon<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>注意。</p><p>如果新建了一個有需要用的CSS class，你同時也需要在你的元件的style部分定義它。</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n.big-icon\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 5rem\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>添加一個<code>click</code>事件。記得，我們想要的是獲取原生DOM事件，並且這裡是一個Vue元件。所以要用<code>.native</code>修飾:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-icon</span>\n  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@click.native</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handle<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',67);e.render=function(a,t,e,o,c,l){return n(),s("div",null,[p])};export default e;export{t as __pageData};
