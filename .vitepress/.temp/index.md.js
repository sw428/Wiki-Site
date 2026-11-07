import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Web制作・学習Wiki","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="web制作学習wiki" tabindex="-1">Web制作・学習Wiki <a class="header-anchor" href="#web制作学習wiki" aria-label="Permalink to &quot;Web制作・学習Wiki&quot;">​</a></h1><p>HTML・CSSの仕組みと実装を学ぶノートです。</p><p>普段は「基礎」から読み、前提を確認したいときは「導入」、理由や例外を調べたいときは「詳細」へ進みます。</p><p>左の目次から、今確認したいテーマを選んでください。スマートフォンでは「記事を選ぶ」を開きます。</p><p>学習・制作と並行して更新しています。必要に応じて公式資料とも照合してください。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
