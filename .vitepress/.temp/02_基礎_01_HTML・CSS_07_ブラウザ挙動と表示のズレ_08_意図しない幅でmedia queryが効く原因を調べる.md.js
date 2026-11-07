import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"08_意図しない幅でmedia queryが効く原因を調べる","description":"","frontmatter":{},"headers":[{"level":2,"title":"@mediaの指定が意図しない幅でも効く場合","slug":"mediaの指定が意図しない幅でも効く場合","link":"#mediaの指定が意図しない幅でも効く場合","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/08_意図しない幅でmedia queryが効く原因を調べる.md","filePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/08_意図しない幅でmedia queryが効く原因を調べる.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/08_意図しない幅でmedia queryが効く原因を調べる.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="08_意図しない幅でmedia-queryが効く原因を調べる" tabindex="-1">08_意図しない幅でmedia queryが効く原因を調べる <a class="header-anchor" href="#08_意図しない幅でmedia-queryが効く原因を調べる" aria-label="Permalink to &quot;08_意図しない幅でmedia queryが効く原因を調べる&quot;">​</a></h1><p>PC用に書いた指定がSPでも効いているなど、<code>@media</code>の条件と表示が合わないときは、対象要素・指定の出所・波括弧・viewportを順に確認する。</p><p>CSS宣言の採用・不採用を調べる基本操作は<a href="./../06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">06のDevTools入口</a>を使う。</p><h2 id="mediaの指定が意図しない幅でも効く場合" tabindex="-1"><code>@media</code>の指定が意図しない幅でも効く場合 <a class="header-anchor" href="#mediaの指定が意図しない幅でも効く場合" aria-label="Permalink to &quot;\`@media\`の指定が意図しない幅でも効く場合&quot;">​</a></h2><p>例えば、PC用に書いた <code>display: flex</code>がSPでも効いている場合は、次の順で確認する。</p><ol><li><code>display</code>を指定した親要素を選ぶ。<code>ul</code>へ指定したなら、子の <code>li</code>ではなく <code>ul</code>を見る。</li><li>Computedで <code>display</code>を確認する。</li><li>値の出所となるファイルと行を確認する。</li><li>Stylesまたはソースで、<code>@media</code>の波括弧が意図した位置で閉じているか確認する。</li><li>DevToolsのviewport幅とメディア条件を比較する。</li></ol><p>要素自体の幅が529pxだからSP用の条件になる、という判断はしない。通常の <code>@media (min-width: ...)</code>や <code>max-width</code>はviewportなどのメディア条件を評価する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/08_意図しない幅でmedia queryが効く原因を調べる.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08________media_query_________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _08________media_query_________ as default
};
