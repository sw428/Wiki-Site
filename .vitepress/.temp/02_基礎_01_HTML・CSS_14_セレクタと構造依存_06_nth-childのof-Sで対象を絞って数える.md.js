import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"06_nth-childのof-Sで対象を絞って数える","description":"","frontmatter":{},"headers":[{"level":2,"title":"of Sを書いた:nth-child()は先に対象を絞る","slug":"of-sを書いたnth-childは先に対象を絞る","link":"#of-sを書いたnth-childは先に対象を絞る","children":[]},{"level":2,"title":"次に判断すること","slug":"次に判断すること","link":"#次に判断すること","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/14_セレクタと構造依存/06_nth-childのof-Sで対象を絞って数える.md","filePath":"02_基礎/01_HTML・CSS/14_セレクタと構造依存/06_nth-childのof-Sで対象を絞って数える.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/14_セレクタと構造依存/06_nth-childのof-Sで対象を絞って数える.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="06_nth-childのof-sで対象を絞って数える" tabindex="-1">06_nth-childのof-Sで対象を絞って数える <a class="header-anchor" href="#06_nth-childのof-sで対象を絞って数える" aria-label="Permalink to &quot;06_nth-childのof-Sで対象を絞って数える&quot;">​</a></h1><p>「兄弟要素全体の中で何番目か」ではなく、「特定の条件へ一致する兄弟だけに絞った中で何番目か」を選びたい場合は、Selectors Level 4の<code>:nth-child(An+B of S)</code>を使える。</p><h2 id="of-sを書いたnth-childは先に対象を絞る" tabindex="-1"><code>of S</code>を書いた<code>:nth-child()</code>は先に対象を絞る <a class="header-anchor" href="#of-sを書いたnth-childは先に対象を絞る" aria-label="Permalink to &quot;\`of S\`を書いた\`:nth-child()\`は先に対象を絞る&quot;">​</a></h2><p>Selectors Level 4には、次の書き方がある。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n + 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> of .card) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  grid-column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: span </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>これは、同じ親を持つ兄弟のうち<code>.card</code>へ一致する要素に絞り、その一覧の1〜2番目を選ぶ。次の2つは数え方が違う。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 子要素全体の1〜2番目で、かつカード */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.card:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n + 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* カードへ絞った一覧の1〜2番目 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n + 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> of .card) {}</span></span></code></pre></div><p>この章で「<code>:nth-child()</code>は子要素全体を数える」と説明するときは、<code>of S</code>を省略した通常形を指す。<code>of S</code>を採用する場合は、対象ブラウザーの対応条件も確認する。</p><h2 id="次に判断すること" tabindex="-1">次に判断すること <a class="header-anchor" href="#次に判断すること" aria-label="Permalink to &quot;次に判断すること&quot;">​</a></h2><p>順番そのものが仕様なのか、単に「大きいカード」「注目カード」という役割を表したいのかを確認する。役割なら<a href="./07_構造依存から明示クラスへ切り替える.html">構造依存から明示クラスへ切り替える</a>を検討する。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/selectors-4/#the-nth-child-pseudo" target="_blank" rel="noreferrer">Selectors Level 4 - <code>:nth-child()</code></a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/14_セレクタと構造依存/06_nth-childのof-Sで対象を絞って数える.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06_nthChild_ofS__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _06_nthChild_ofS__________ as default
};
