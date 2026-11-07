import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CSSのサイズ指定と関数","description":"","frontmatter":{},"headers":[],"relativePath":"05_参照/CSSのサイズ指定と関数.md","filePath":"05_参照/CSSのサイズ指定と関数.md"}');
const _sfc_main = { name: "05_参照/CSSのサイズ指定と関数.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cssのサイズ指定と関数" tabindex="-1">CSSのサイズ指定と関数 <a class="header-anchor" href="#cssのサイズ指定と関数" aria-label="Permalink to &quot;CSSのサイズ指定と関数&quot;">​</a></h1><p>幅の指定を読むときに、要素の幅を決めるもの、上下限を付けるもの、候補値を比べるもの、Gridトラックを作るものを区別するためのカード。</p><table tabindex="0"><thead><tr><th>指定</th><th>対象・役割</th></tr></thead><tbody><tr><td><code>width</code></td><td>要素の基本幅。実際の寸法はレイアウトや上下限にも左右される</td></tr><tr><td><code>min-width</code></td><td>要素の幅の下限</td></tr><tr><td><code>max-width</code></td><td>要素の幅の上限</td></tr><tr><td><code>min()</code></td><td>複数の値から小さい方を採用</td></tr><tr><td><code>max()</code></td><td>複数の値から大きい方を採用</td></tr><tr><td><code>clamp()</code></td><td>最小・推奨・最大の3値を指定し、推奨値を上下限の範囲へ収める</td></tr><tr><td><code>minmax()</code></td><td>Gridの列・行の最小値と最大側のサイズを指定する</td></tr></tbody></table><p><code>min()</code>は小さい方を選ぶため、変動する幅へ上限を付けたいときに使える。<code>max()</code>は大きい方を選ぶため、下限を付けたいときに使える。<code>clamp()</code>は上下限の間で値を変えたいときに使う。幅に使う場合は、長さや割合など、幅として比較できる値を渡す。<code>clamp()</code>の上下限は、最小値が最大値以下になるように指定する。</p><p><code>minmax()</code>はGridトラック用。<code>width: minmax(…);</code>とは直接書けない。<code>min()</code>と名前が似ていても、担当が違う。</p><p>要素に書いた幅と実際の寸法を分ける説明は<a href="./../02_基礎/01_HTML・CSS/05_ボックスとdisplay/07_CSSに書いた値と実際の寸法を分ける.html">CSSに書いた値と実際の寸法を分ける</a>、<code>min()</code>を使う実装は<a href="./../02_基礎/01_HTML・CSS/09_レイアウト/02_配置の基本/05_コンテンツの最大幅と左右余白を作る.html">コンテンツの最大幅と左右余白を作る</a>で確認する。</p><p>仕様確認先：<a href="https://www.w3.org/TR/css-sizing-3/#sizing-properties" target="_blank" rel="noreferrer">CSS Sizing — Sizing Properties</a>、<a href="https://www.w3.org/TR/css-values-4/#comp-func" target="_blank" rel="noreferrer">CSS Values — Comparison Functions</a>、<a href="https://www.w3.org/TR/css-grid-2/#track-sizes" target="_blank" rel="noreferrer">CSS Grid — Track Sizes</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/CSSのサイズ指定と関数.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CSS_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  CSS_________ as default
};
