import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"widthのautoと100パーセントを比べる","description":"","frontmatter":{},"headers":[{"level":2,"title":"同じ箱で一条件だけ変えて比べる","slug":"同じ箱で一条件だけ変えて比べる","link":"#同じ箱で一条件だけ変えて比べる","children":[]},{"level":2,"title":"min-widthとmax-widthも確認する","slug":"min-widthとmax-widthも確認する","link":"#min-widthとmax-widthも確認する","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/09_widthのautoと100パーセントを比べる.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/09_widthのautoと100パーセントを比べる.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/09_widthのautoと100パーセントを比べる.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="widthのautoと100パーセントを比べる" tabindex="-1">widthのautoと100パーセントを比べる <a class="header-anchor" href="#widthのautoと100パーセントを比べる" aria-label="Permalink to &quot;widthのautoと100パーセントを比べる&quot;">​</a></h1><p>単純な通常フローのblockでは、<code>width: auto</code> と <code>width: 100%</code> が同じ幅に見えることがある。</p><p>ただし、幅の決まり方は異なる。</p><h2 id="同じ箱で一条件だけ変えて比べる" tabindex="-1">同じ箱で一条件だけ変えて比べる <a class="header-anchor" href="#同じ箱で一条件だけ変えて比べる" aria-label="Permalink to &quot;同じ箱で一条件だけ変えて比べる&quot;">​</a></h2><ul><li><code>width: auto</code>：その箱のレイアウト規則と利用可能な空間から使用幅が決まる</li><li><code>width: 100%</code>：その要素自身の <code>width</code> を、包含ブロックの幅に対する100%として計算する</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">320</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.full</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.full</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>どちらも通常フローのblockで、<code>box-sizing</code> は初期値の <code>content-box</code> とする。</p><ul><li><code>.auto</code> は、左右の <code>padding</code> を含めて利用可能な320pxに収まるように、内容領域が288pxになる</li><li><code>.full</code> は、内容領域が包含ブロックの100%である320pxになり、左右の <code>padding</code> を加えた外側は352pxになる</li></ul><p>見た目が近くても、<code>auto</code> は利用可能な空間から幅を決め、<code>100%</code> は指定した領域を包含ブロックと同じ幅にする。<code>padding</code> や <code>border</code> があると差が見えやすい。</p><p><code>.full</code> に <code>box-sizing: border-box</code> を指定した場合は、320pxの中に <code>padding</code> も含まれるため、外側も320pxに収まる。</p><p>この計算範囲は<a href="./04_box-sizingでwidthの範囲を決める.html">box-sizingでwidthの範囲を決める</a>で確認する。</p><h2 id="min-widthとmax-widthも確認する" tabindex="-1">min-widthとmax-widthも確認する <a class="header-anchor" href="#min-widthとmax-widthも確認する" aria-label="Permalink to &quot;min-widthとmax-widthも確認する&quot;">​</a></h2><p><code>width</code>だけで最終的な使用幅が決まるとは限らない。</p><p><code>min-width</code> や <code>max-width</code> によって、使用幅が制限されることがある。</p><p><code>width</code>が適用されるか、<code>auto</code>がどのような幅になるかは、生成される箱やレイアウトの種類によって変わる。</p><p>blockとinlineの違いは<a href="./05_blockとinlineの広がり方.html">blockとinlineの広がり方</a>で確認する。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/CSS22/visudet.html#the-width-property" target="_blank" rel="noreferrer">CSS 2.2 - Content width and width calculation</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/09_widthのautoと100パーセントを比べる.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _09_width_auto_100_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _09_width_auto_100_________ as default
};
