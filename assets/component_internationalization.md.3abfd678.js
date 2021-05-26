import{o as n,c as a,b as s}from"./app.844c30b8.js";const e='{"title":"國際化(Internationalization)(I18n)","description":"","frontmatter":{},"headers":[{"level":2,"title":"設置默認語言","slug":"設置默認語言"},{"level":2,"title":"動態變換語言","slug":"動態變換語言"},{"level":2,"title":"在App Space中使用Quasar I18n","slug":"在app-space中使用quasar-i18n"},{"level":2,"title":"偵測地區(Detecting Locale)","slug":"偵測地區-detecting-locale"},{"level":2,"title":"解決Quasar UMD","slug":"解決quasar-umd"}],"relativePath":"component/internationalization.md","lastUpdated":1622029080725}',p={},t=s('<h1 id="國際化-internationalization-i18n"><a class="header-anchor" href="#國際化-internationalization-i18n" aria-hidden="true">#</a> 國際化(Internationalization)(I18n)</h1><p>國際化(internationalization)是用來保證在不需要改動原始碼的情況下，產品(網站或是應用)可以適用各種語言和地區。可以把國際化想成是為本地化做準備的。</p><p>解決website/app問題的建議套件是: <a href="https://github.com/kazupon/vue-i18n" target="_blank" rel="noopener noreferrer">vue-i18n</a></p><blockquote><p>However, handling I18n in app-space is not enough. Quasar components have their own labels too. One option is to configure labels through label properties on each instance of Quasar components like QTable or QDatetime. This takes time and adds unnecessary complexity to your website/app. Instead, use the Quasar I18n (applies to Quasar components only!) system.</p></blockquote><p>然而在app-space上，i18n的問題並沒有被很好的解決掉。它需要花費時間，並且會向你的website/app添加一些不必要且複雜的東西。Quasar元件有它們自己的labels來解決這個問題。Quasar有一個設置是通過label屬性來設置每一個Quasar元件的實體，如QTable或QDatetime的label。所以，來用Quasar的i18n系統吧(只適用Quasar元件)！</p><blockquote><p>現階段完成可使用的語言列表，<a href="https://github.com/quasarframework/quasar/tree/v0.17/i18n" target="_blank" rel="noopener noreferrer">Quasar I18n on Github</a>。如果你需要的語言不在該列表，請直接提交一個PR來增加。這最多就花個5-10分鐘。我們非常歡迎任何語言。</p></blockquote><h2 id="設置默認語言"><a class="header-anchor" href="#設置默認語言" aria-hidden="true">#</a> 設置默認語言</h2><p>編輯 <code>/quasar.conf.js</code>:</p><div class="language-javascript line-numbers-mode"><pre><code>framework<span class="token operator">:</span> <span class="token punctuation">{</span>\n    i18n<span class="token operator">:</span> <span class="token string">&#39;de&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="動態變換語言"><a class="header-anchor" href="#動態變換語言" aria-hidden="true">#</a> 動態變換語言</h2><p>以QSelect為例動態切換Quasar元件語言:</p><div class="language-"><pre><code>&lt;template&gt;\n  &lt;q-select\n    stack-label=&quot;I18n&quot;\n    :options=&quot;[\n      { label: &#39;English (US)&#39;,         value: &#39;en-us&#39; },\n      { label: &#39;English (UK)&#39;,         value: &#39;en-uk&#39; },\n      { label: &#39;Romanian&#39;,             value: &#39;ro&#39; },\n      { label: &#39;Chinese (Simplified)&#39;, value: &#39;zh-hans&#39; },\n      { label: &#39;Italian&#39;,              value: &#39;it&#39; }\n      { label: &#39;Spanish&#39;,              value: &#39;es&#39; }\n      { label: &#39;French&#39;,               value: &#39;fr&#39; }\n      { label: &#39;German&#39;,               value: &#39;de&#39; },\n      { label: &#39;Russian&#39;,              value: &#39;ru&#39; },\n      .......\n    ]&quot;\n    v-model=&quot;lang&quot;\n  /&gt;\n&lt;/template&gt;\n\n&lt;script&gt;\nexport default {\n  data () {\n    return {\n      lang: this.$q.i18n.lang\n    }\n  },\n  watch: {\n    lang (lang) {\n      // dynamic import, so loading on demand only\n      import(`quasar-framework/i18n/${lang}`).then(lang =&gt; {\n        this.$q.i18n.set(lang.default)\n      })\n    }\n  }\n}\n&lt;/script&gt;\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="在app-space中使用quasar-i18n"><a class="header-anchor" href="#在app-space中使用quasar-i18n" aria-hidden="true">#</a> 在App Space中使用Quasar I18n</h2><p>儘管Quasar I18n是只為了Quasar元件設計的，你仍然可以將它用在你自己的website/app元件。</p><div class="language-HTML line-numbers-mode"><pre><code>&quot;Close&quot; label in current Quasar I18n language is:\n{{ $q.i18n.label.close }}\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="偵測地區-detecting-locale"><a class="header-anchor" href="#偵測地區-detecting-locale" aria-hidden="true">#</a> 偵測地區(Detecting Locale)</h2><p>你可以用Quasar提供的方法來偵測使用者所在的地區。</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// outside of a Vue file</span>\n<span class="token keyword">import</span> Quasar <span class="token keyword">from</span> <span class="token string">&#39;quasar&#39;</span>\n<span class="token punctuation">(</span>String<span class="token punctuation">)</span> Quasar<span class="token punctuation">.</span>i18n<span class="token punctuation">.</span><span class="token function">getLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// inside of a Vue file</span>\n<span class="token punctuation">(</span>String<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$q<span class="token punctuation">.</span>i18n<span class="token punctuation">.</span><span class="token function">getLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="解決quasar-umd"><a class="header-anchor" href="#解決quasar-umd" aria-hidden="true">#</a> 解決Quasar UMD</h2><p>如果需要增加一個Quasasr語言包(pack)，你需要用js標籤來引入相應Quasar版本的語言包，並告訴Quasar使用它。Ex:</p><div class="language-HTML line-numbers-mode"><pre><code><span class="token comment">&lt;!-- include this after Quasar JS tag --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/quasar-framework@latest/dist/umd/i18n.pt-br.umd.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  Quasar<span class="token punctuation">.</span>i18n<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>Quasar<span class="token punctuation">.</span>i18n<span class="token punctuation">.</span>ptBr<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>你可以通過這條命令<code>$ vue quasarframework/quasar-starter-kit-umd &lt;folder&gt;</code>生成一個sample，並為Quasar I18n指定一個確切的語言。這樣你就能知道到底要在自己的HTML檔案裡的js tag引入什麼。</p>',22);p.render=function(s,e,p,l,r,i){return n(),a("div",null,[t])};export default p;export{e as __pageData};
