import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"02_SPとPCで表示する要素を切り替える","description":"","frontmatter":{},"headers":[{"level":2,"title":"ブラウザー側のdisplayへ戻してよい場合","slug":"ブラウザー側のdisplayへ戻してよい場合","link":"#ブラウザー側のdisplayへ戻してよい場合","children":[]},{"level":2,"title":"実装する順","slug":"実装する順","link":"#実装する順","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/13_表示制御/02_SPとPCで表示する要素を切り替える.md","filePath":"02_基礎/01_HTML・CSS/13_表示制御/02_SPとPCで表示する要素を切り替える.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/13_表示制御/02_SPとPCで表示する要素を切り替える.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="02_spとpcで表示する要素を切り替える" tabindex="-1">02_SPとPCで表示する要素を切り替える <a class="header-anchor" href="#02_spとpcで表示する要素を切り替える" aria-label="Permalink to &quot;02_SPとPCで表示する要素を切り替える&quot;">​</a></h1><p>SP専用・PC専用の要素を作るときは、最初に「どの画面幅で存在させるか」を決める。表示された後の横並びや位置は別のレイアウトとして扱う。</p><h2 id="ブラウザー側のdisplayへ戻してよい場合" tabindex="-1">ブラウザー側のdisplayへ戻してよい場合 <a class="header-anchor" href="#ブラウザー側のdisplayへ戻してよい場合" aria-label="Permalink to &quot;ブラウザー側のdisplayへ戻してよい場合&quot;">​</a></h2><p>表示する側で必要な<code>display</code>を先に確認する。次は、SPを初期状態、PCを768px以上とし、PCではブラウザーやユーザースタイル側の<code>display</code>へ戻してよい要素の例である。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.u-pc-only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">768</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .u-sp-only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  .u-pc-only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">revert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table tabindex="0"><thead><tr><th>条件</th><th><code>u-sp-only</code></th><th><code>u-pc-only</code></th></tr></thead><tbody><tr><td>768px未満</td><td>Utilityでは表示方法を変えない</td><td><code>display: none</code></td></tr><tr><td>768px以上</td><td><code>display: none</code></td><td><code>display: revert</code>で下位の出所から決め直す</td></tr></tbody></table><p>自分のCSSで指定した<code>flex</code>や<code>grid</code>を表示時にも必要とする要素には、その復元目的で<code>revert</code>を使わない。必要な値を明示する方法と、表示範囲では非表示Utilityを競合させない方法は<a href="./05_表示後もFlexとGridを保つ方法を選ぶ.html">表示後もFlexとGridを保つ方法を選ぶ</a>で比較する。</p><p><code>revert</code>が実際に戻す範囲は<a href="./04_display-revertの戻り先を確認する.html">display-revertの戻り先を確認する</a>で扱う。</p><h2 id="実装する順" tabindex="-1">実装する順 <a class="header-anchor" href="#実装する順" aria-label="Permalink to &quot;実装する順&quot;">​</a></h2><ol><li>ブレークポイントと、SP/PCのどちらを初期状態にするか確認する。</li><li>SPだけ・PCだけ存在する要素をHTMLで特定する。</li><li>既存プロジェクトのUtility名とCSSの置き場所を確認する。</li><li>非表示になる側で<code>display: none</code>がComputedへ反映されたか確認する。</li><li>表示される側で、必要な<code>block</code>・<code>flex</code>・<code>grid</code>などになっているか確認する。</li><li>ブレークポイント直前・直後と、その間の実際の表示幅で確認する。</li></ol><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/mediaqueries-4/#width" target="_blank" rel="noreferrer">Media Queries Level 4: width</a></li><li><a href="https://www.w3.org/TR/css-display-3/#box-generation" target="_blank" rel="noreferrer">CSS Display Module Level 3: Box generation</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/13_表示制御/02_SPとPCで表示する要素を切り替える.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_SP_PC_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02_SP_PC_____________ as default
};
