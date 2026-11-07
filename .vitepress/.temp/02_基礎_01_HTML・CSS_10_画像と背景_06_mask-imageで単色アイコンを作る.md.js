import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"06_mask-imageで単色アイコンを作る","description":"","frontmatter":{},"headers":[{"level":2,"title":"単色アイコンの形を使う","slug":"単色アイコンの形を使う","link":"#単色アイコンの形を使う","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/06_mask-imageで単色アイコンを作る.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/06_mask-imageで単色アイコンを作る.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/06_mask-imageで単色アイコンを作る.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="06_mask-imageで単色アイコンを作る" tabindex="-1">06_mask-imageで単色アイコンを作る <a class="header-anchor" href="#06_mask-imageで単色アイコンを作る" aria-label="Permalink to &quot;06_mask-imageで単色アイコンを作る&quot;">​</a></h1><p>単色アイコンの形だけを画像から借り、色をCSSで変えたいときは <code>mask-image</code> を候補にする。</p><h2 id="単色アイコンの形を使う" tabindex="-1">単色アイコンの形を使う <a class="header-anchor" href="#単色アイコンの形を使う" aria-label="Permalink to &quot;単色アイコンの形を使う&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.icon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inline-block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">currentColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  mask-image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../img/arrow.svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  mask-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">no-repeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  mask-position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  mask-size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>SVGはアイコンの色を表示する画像ではなく、見える形を決めるマスクとして使う。実際の色は <code>background-color: currentColor</code> なので、周囲の <code>color</code> に合わせて変えられる。</p><p>意味のあるアイコンなら、マスクだけでは意味が伝わらない。隣接テキスト、ボタンの表示名、必要な場合のアクセシブルネームをHTML側で用意する。</p><p>背景画像とマスクの役割、alphaとluminanceの違いは<a href="./05_background-imageとmask-imageを区別する.html">background-imageとmask-imageを区別する</a>で確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/06_mask-imageで単色アイコンを作る.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06_maskImage__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _06_maskImage__________ as default
};
