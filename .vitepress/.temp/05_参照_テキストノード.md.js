import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"テキストノード","description":"","frontmatter":{},"headers":[{"level":2,"title":"定義","slug":"定義","link":"#定義","children":[]},{"level":2,"title":"ここを見る理由","slug":"ここを見る理由","link":"#ここを見る理由","children":[]},{"level":2,"title":"関連ノート","slug":"関連ノート","link":"#関連ノート","children":[]}],"relativePath":"05_参照/テキストノード.md","filePath":"05_参照/テキストノード.md"}');
const _sfc_main = { name: "05_参照/テキストノード.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="テキストノード" tabindex="-1">テキストノード <a class="header-anchor" href="#テキストノード" aria-label="Permalink to &quot;テキストノード&quot;">​</a></h1><h2 id="定義" tabindex="-1">定義 <a class="header-anchor" href="#定義" aria-label="Permalink to &quot;定義&quot;">​</a></h2><ul><li>DOM上で文字列そのものを持つノード。要素ノードとは別。</li></ul><h2 id="ここを見る理由" tabindex="-1">ここを見る理由 <a class="header-anchor" href="#ここを見る理由" aria-label="Permalink to &quot;ここを見る理由&quot;">​</a></h2><ul><li>CSSセレクタが直接当たる対象（要素）と、文字表示に反映される対象（継承）を分けるため。</li></ul><h2 id="関連ノート" tabindex="-1">関連ノート <a class="header-anchor" href="#関連ノート" aria-label="Permalink to &quot;関連ノート&quot;">​</a></h2><ul><li><a href="./テキストノードとCSS適用境界.html">テキストノードとCSS適用境界</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/テキストノード.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _______ as default
};
