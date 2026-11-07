import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11_SVGファイルを分ける単位を決める","description":"","frontmatter":{},"headers":[{"level":2,"title":"一緒に変える範囲を見る","slug":"一緒に変える範囲を見る","link":"#一緒に変える範囲を見る","children":[]},{"level":2,"title":"確認順","slug":"確認順","link":"#確認順","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/11_SVGファイルを分ける単位を決める.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/11_SVGファイルを分ける単位を決める.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/11_SVGファイルを分ける単位を決める.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="11_svgファイルを分ける単位を決める" tabindex="-1">11_SVGファイルを分ける単位を決める <a class="header-anchor" href="#11_svgファイルを分ける単位を決める" aria-label="Permalink to &quot;11_SVGファイルを分ける単位を決める&quot;">​</a></h1><p>SVGを一つにまとめるか複数ファイルへ分けるかは、path数ではなく、位置・大きさ・表示条件・更新を一緒に変えるかで決める。</p><h2 id="一緒に変える範囲を見る" tabindex="-1">一緒に変える範囲を見る <a class="header-anchor" href="#一緒に変える範囲を見る" aria-label="Permalink to &quot;一緒に変える範囲を見る&quot;">​</a></h2><ul><li>常に同じ位置関係で表示し、一体として拡大縮小する固定図版: 一つのSVGが候補</li><li>ロゴ、キャッチコピー、バッジなどを別々に移動・非表示・差し替えする: 別SVGが候補</li><li>レスポンシブ対応で一部だけ位置や大きさを変える: その制御単位で分割を検討</li><li>複数ページで同じアイコンを再利用する: 単独ファイル、sprite、maskなど再利用方法を比較</li></ul><p>案件から支給されたSVGは、内部のライセンス・命名・参照関係も含む素材として扱う。不要な最適化やpathの結合は、表示と権利・納品条件を確認してから行う。</p><h2 id="確認順" tabindex="-1">確認順 <a class="header-anchor" href="#確認順" aria-label="Permalink to &quot;確認順&quot;">​</a></h2><ol><li>分割後の各SVGを独立して配置・更新するか。</li><li>共通の<code>viewBox</code>や座標変換へ依存していないか。</li><li><code>defs</code>、ID、グラデーション、maskなどの参照先を失わないか。</li><li>同じ素材を複数ページで再利用するか。</li><li>ファイル数、キャッシュ、HTML量のどれが保守しやすいか。</li><li>支給素材のライセンスと納品条件に反しないか。</li></ol><p>HTMLへ外部画像として置くか、インライン化するかは<a href="./10_外部SVGとインラインSVGを使い分ける.html">外部SVGとインラインSVGを使い分ける</a>で判断する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/11_SVGファイルを分ける単位を決める.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11_SVG______________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11_SVG______________ as default
};
