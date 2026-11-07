import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"06_SPとPCで重複する情報を揃える","description":"","frontmatter":{},"headers":[{"level":2,"title":"重複させる前に確認する","slug":"重複させる前に確認する","link":"#重複させる前に確認する","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/13_表示制御/06_SPとPCで重複する情報を揃える.md","filePath":"02_基礎/01_HTML・CSS/13_表示制御/06_SPとPCで重複する情報を揃える.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/13_表示制御/06_SPとPCで重複する情報を揃える.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="06_spとpcで重複する情報を揃える" tabindex="-1">06_SPとPCで重複する情報を揃える <a class="header-anchor" href="#06_spとpcで重複する情報を揃える" aria-label="Permalink to &quot;06_SPとPCで重複する情報を揃える&quot;">​</a></h1><p>レイアウトの都合でSP用・PC用の要素を分ける場合でも、内容まで別の事実として管理しない。</p><h2 id="重複させる前に確認する" tabindex="-1">重複させる前に確認する <a class="header-anchor" href="#重複させる前に確認する" aria-label="Permalink to &quot;重複させる前に確認する&quot;">​</a></h2><ul><li>日時は<a href="./../04_HTMLの意味と構造/15_日付をtimeで表す.html#spとpcで同じ日付データを使う">同じ日付データ</a>を使う</li><li>価格、電話番号、リンク先を片側だけ更新し忘れない</li><li>同じ操作を2つ置く場合は、表示中の要素が正しく操作できるか確認する</li></ul><p>要素を複製せずCSSだけで並べ替えられるなら、その方が更新箇所を増やさずに済む。複製が必要かどうかは、表示制御だけでなくHTMLの意味とレイアウト条件も含めて決める。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/13_表示制御/06_SPとPCで重複する情報を揃える.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06_SP_PC___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _06_SP_PC___________ as default
};
