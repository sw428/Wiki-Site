import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"07_mask-imageで要素の端をフェードさせる","description":"","frontmatter":{},"headers":[{"level":2,"title":"要素の端を徐々に消す","slug":"要素の端を徐々に消す","link":"#要素の端を徐々に消す","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/07_mask-imageで要素の端をフェードさせる.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/07_mask-imageで要素の端をフェードさせる.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/07_mask-imageで要素の端をフェードさせる.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="07_mask-imageで要素の端をフェードさせる" tabindex="-1">07_mask-imageで要素の端をフェードさせる <a class="header-anchor" href="#07_mask-imageで要素の端をフェードさせる" aria-label="Permalink to &quot;07_mask-imageで要素の端をフェードさせる&quot;">​</a></h1><p>画像や要素の端を徐々に透明にしたいときは、グラデーションを <code>mask-image</code> として使える。</p><h2 id="要素の端を徐々に消す" tabindex="-1">要素の端を徐々に消す <a class="header-anchor" href="#要素の端を徐々に消す" aria-label="Permalink to &quot;要素の端を徐々に消す&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.fade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  min-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">320</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../img/photo.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  mask-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linear-gradient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 70</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">transparent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>写真を描いているのは<code>background-image</code>。<code>mask-image</code>は、写真を含む<code>.fade</code>全体を下方向へ徐々に透明にする。</p><p>背景画像とマスクの役割、複数レイヤー、stacking contextは<a href="./05_background-imageとmask-imageを区別する.html">background-imageとmask-imageを区別する</a>で確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/07_mask-imageで要素の端をフェードさせる.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_maskImage_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07_maskImage_____________ as default
};
