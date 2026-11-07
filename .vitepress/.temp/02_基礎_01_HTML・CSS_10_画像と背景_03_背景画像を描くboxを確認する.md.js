import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"03_背景画像を描くboxを確認する","description":"","frontmatter":{},"headers":[{"level":2,"title":"背景画像は既存のboxへ描かれる","slug":"背景画像は既存のboxへ描かれる","link":"#背景画像は既存のboxへ描かれる","children":[]},{"level":2,"title":"背景が見えないときの確認順","slug":"背景が見えないときの確認順","link":"#背景が見えないときの確認順","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/03_背景画像を描くboxを確認する.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/03_背景画像を描くboxを確認する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/03_背景画像を描くboxを確認する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="03_背景画像を描くboxを確認する" tabindex="-1">03_背景画像を描くboxを確認する <a class="header-anchor" href="#03_背景画像を描くboxを確認する" aria-label="Permalink to &quot;03_背景画像を描くboxを確認する&quot;">​</a></h1><p><code>background-image</code> を指定したのに画像が見えないときは、画像ファイルより先に、背景を描く要素のboxに面積があるか確認する。</p><h2 id="背景画像は既存のboxへ描かれる" tabindex="-1">背景画像は既存のboxへ描かれる <a class="header-anchor" href="#背景画像は既存のboxへ描かれる" aria-label="Permalink to &quot;背景画像は既存のboxへ描かれる&quot;">​</a></h2><p><code>background-image</code> は、指定した要素が作るboxの背景として描画される。画像の読み込みに成功しても、描画先の幅または高さが0なら見えない。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.hero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  min-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">240</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../img/photo.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>この例で面積を作っているのは<code>min-height</code>と、親レイアウトから得る幅である。背景画像そのものが<code>.hero</code>の高さを決めているわけではない。</p><h2 id="背景が見えないときの確認順" tabindex="-1">背景が見えないときの確認順 <a class="header-anchor" href="#背景が見えないときの確認順" aria-label="Permalink to &quot;背景が見えないときの確認順&quot;">​</a></h2><ol><li>DevToolsで背景を指定した要素を選ぶ。</li><li>Stylesで<code>background-image</code>が打ち消されていないか確認する。</li><li>Computedやボックスモデル図で、幅と高さが0ではないか確認する。</li><li>空の<code>inline</code>要素へ<code>width</code>や<code>height</code>だけを指定していないか確認する。</li><li><code>background-image</code>のURLとNetworkの読み込み結果を確認する。</li><li><code>background-size</code>、<code>background-position</code>、<code>background-repeat</code>を一つずつ確認する。</li><li><code>background-clip</code>や別の背景レイヤーで見える範囲が変わっていないか確認する。</li></ol><p><code>display: block</code>や<code>inline-block</code>にすれば寸法を指定しやすくなるが、中身・padding・高さのどれもなければ高さ0になり得る。<code>display</code>を変えるだけで必ず見えるとは限らない。</p><p>幅と高さが予想と違う場合は<a href="./../05_ボックスとdisplay/12_箱の大きさが予想と違うときの確認順.html">箱の大きさが予想と違うときの確認順</a>へ戻る。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/03_背景画像を描くboxを確認する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03________box_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03________box_____ as default
};
