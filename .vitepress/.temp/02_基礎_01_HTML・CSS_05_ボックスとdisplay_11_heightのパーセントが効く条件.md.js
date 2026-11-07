import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"heightのパーセントが効く条件","description":"","frontmatter":{},"headers":[{"level":2,"title":"高さの割合は幅と同じ感覚で決めない","slug":"高さの割合は幅と同じ感覚で決めない","link":"#高さの割合は幅と同じ感覚で決めない","children":[]},{"level":2,"title":"autoの親と高さが決まった親を比べる","slug":"autoの親と高さが決まった親を比べる","link":"#autoの親と高さが決まった親を比べる","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/11_heightのパーセントが効く条件.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/11_heightのパーセントが効く条件.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/11_heightのパーセントが効く条件.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="heightのパーセントが効く条件" tabindex="-1">heightのパーセントが効く条件 <a class="header-anchor" href="#heightのパーセントが効く条件" aria-label="Permalink to &quot;heightのパーセントが効く条件&quot;">​</a></h1><p><code>height</code> の割合は、包含ブロックの高さを割合計算できる状態か確認する。</p><h2 id="高さの割合は幅と同じ感覚で決めない" tabindex="-1">高さの割合は幅と同じ感覚で決めない <a class="header-anchor" href="#高さの割合は幅と同じ感覚で決めない" aria-label="Permalink to &quot;高さの割合は幅と同じ感覚で決めない&quot;">​</a></h2><p>高さの <code>%</code> は、基準になる高さが内容に応じて決まる <code>auto</code> のままだと、割合を解決できない場合がある。</p><p>単純な通常フローでは、まず包含ブロック側の高さを割合計算できる状態かを見る。</p><p>通常の内容を持つ箱の高さは、文字や子要素の量から決まりやすい。</p><h2 id="autoの親と高さが決まった親を比べる" tabindex="-1">autoの親と高さが決まった親を比べる <a class="header-anchor" href="#autoの親と高さが決まった親を比べる" aria-label="Permalink to &quot;autoの親と高さが決まった親を比べる&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>単純な通常フローで親の高さが <code>auto</code> の場合、親の高さは子を含む内容から決まる。子の50%を計算するための高さが先に決まっていないため、この指定だけでは期待した半分の高さにならない。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">240</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>同じ条件で親の高さが240pxと決まっていれば、子の使用高さは120pxになる。</p><p>これは単純な通常フローでの基本例である。FlexやGrid、絶対配置では高さの決まり方が異なるため、「割合を使うなら必ず親に固定の高さを書く」という共通ルールにはしない。</p><p>一般的な<code>height: auto</code>の扱いは<a href="./../09_レイアウト/02_配置の基本/02_通常フローを基準にする.html#まず指定を追加しない状態を見る">通常フローを基準にする</a>へ分ける。</p><p><code>height: 50%</code> が予想と違うときは、<a href="./12_箱の大きさが予想と違うときの確認順.html">箱の大きさが予想と違うときの確認順</a>も使う。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://drafts.csswg.org/css-sizing-3/#percentage-sizing" target="_blank" rel="noreferrer">CSS Box Sizing Module Level 3 - Percentage Sizing</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/11_heightのパーセントが効く条件.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11_height___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11_height___________ as default
};
