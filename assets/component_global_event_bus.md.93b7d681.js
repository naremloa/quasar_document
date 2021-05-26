import{o as n,c as s,b as a}from"./app.844c30b8.js";const e='{"title":"Global Event Bus","description":"","frontmatter":{},"relativePath":"component/global_event_bus.md","lastUpdated":1622029080725}',p={},t=a('<h1 id="global-event-bus"><a class="header-anchor" href="#global-event-bus" aria-hidden="true">#</a> Global Event Bus</h1><p>事件是你的App內部重要的組成部分。</p><p>有時你需要一個 event bus (事件總線)或者是 publish/subscribe channel (觀察者(發佈/訂閱)頻道)。 Vue 的每一個元件已經有一個 event bus 。為了方便，你可以通過 <code>this.$root</code> 使用 Vue 的根元件來註冊 listener (監聽器)和事件。</p><blockquote><p>非常重要！</p><p>不要把這個與 Quasar 元件提供的事件兩者混淆了。那些是元件各自 emit (發射)出來的 Vue 事件，是不會污染到 global event bus 的。</p></blockquote><p>請閱讀 <a href="https://vuejs.org/v2/api/#Instance-Methods-Events" target="_blank" rel="noopener noreferrer">Vue 文檔( Instance Methods / Events )</a>確認正確的 API 名稱和用法.然後讓我們來看看如何正確的通過Vue的根元件註冊一個事件:</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// callback</span>\n<span class="token keyword">function</span> <span class="token function">cb</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// listen for an event</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;event_name&#39;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span>\n\n<span class="token comment">// listen once (only) for an event</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;event_name&#39;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span>\n\n<span class="token comment">// Make sure you stop listening for an event</span>\n<span class="token comment">// when your respective component gets destroyed</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;event_name&#39;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span>\n\n\n<span class="token comment">// Emitting an event:</span>\n<span class="token keyword">this</span><span class="token punctuation">.</span>$root<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;event_name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;some message&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',6);p.render=function(a,e,p,o,c,l){return n(),s("div",null,[t])};export default p;export{e as __pageData};
