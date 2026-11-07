import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"06_Gridのトラックとgapを確認する","description":"","frontmatter":{},"headers":[{"level":2,"title":"Grid Overlayでトラックとgapを見る","slug":"grid-overlayでトラックとgapを見る","link":"#grid-overlayでトラックとgapを見る","children":[]},{"level":2,"title":"公式情報","slug":"公式情報","link":"#公式情報","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/06_Gridのトラックとgapを確認する.md","filePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/06_Gridのトラックとgapを確認する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/06_Gridのトラックとgapを確認する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="06_gridのトラックとgapを確認する" tabindex="-1">06_Gridのトラックとgapを確認する <a class="header-anchor" href="#06_gridのトラックとgapを確認する" aria-label="Permalink to &quot;06_Gridのトラックとgapを確認する&quot;">​</a></h1><p>Gridの列や行、<code>gap</code>が予想と違うときは、Grid Overlayでトラックと空きの位置を確認する。</p><p>CSS宣言の採用・不採用を調べる基本操作は<a href="./../06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">06のDevTools入口</a>を使う。最終的な幅や高さを確認する場合は<a href="./05_DevToolsで計算後の寸法を確認する.html">DevToolsで計算後の寸法を確認する</a>へ戻る。</p><h2 id="grid-overlayでトラックとgapを見る" tabindex="-1">Grid Overlayでトラックとgapを見る <a class="header-anchor" href="#grid-overlayでトラックとgapを見る" aria-label="Permalink to &quot;Grid Overlayでトラックとgapを見る&quot;">​</a></h2><ol><li>Elementsで、<code>display: grid</code>または<code>display: inline-grid</code>が適用されたGridコンテナを選ぶ。</li><li>DOMツリーで要素の横にある<code>grid</code>バッジを押し、Grid Overlayを表示する。</li><li>必要に応じてLayoutペインを開き、<code>Show track sizes</code>を有効にする。</li></ol><p>Overlayでは、グリッド線、行と列のトラック、<code>gap</code>の範囲を対応させる。Overlayの色は変更できるため、特定の色だけを目印にしない。</p><p><code>Show track sizes</code>では、CSSへ書いたトラックサイズと、画面上で計算されたサイズを確認できる。<code>gap</code>の数値がOverlayへ直接表示されない場合は、StylesまたはComputedの<code>gap</code>、<code>row-gap</code>、<code>column-gap</code>へ戻って値を確認する。</p><h2 id="公式情報" tabindex="-1">公式情報 <a class="header-anchor" href="#公式情報" aria-label="Permalink to &quot;公式情報&quot;">​</a></h2><ul><li><a href="https://developer.chrome.com/docs/devtools/css/grid" target="_blank" rel="noreferrer">Chrome DevTools - Inspect CSS grid layouts</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/06_Gridのトラックとgapを確認する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06_Grid______gap_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _06_Grid______gap_____ as default
};
