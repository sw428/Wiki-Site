import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"04_background-sizeのcoverとcontainを選ぶ","description":"","frontmatter":{},"headers":[{"level":2,"title":"coverとcontainは切り取りの有無で選ぶ","slug":"coverとcontainは切り取りの有無で選ぶ","link":"#coverとcontainは切り取りの有無で選ぶ","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/04_background-sizeのcoverとcontainを選ぶ.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/04_background-sizeのcoverとcontainを選ぶ.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/04_background-sizeのcoverとcontainを選ぶ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="04_background-sizeのcoverとcontainを選ぶ" tabindex="-1">04_background-sizeのcoverとcontainを選ぶ <a class="header-anchor" href="#04_background-sizeのcoverとcontainを選ぶ" aria-label="Permalink to &quot;04_background-sizeのcoverとcontainを選ぶ&quot;">​</a></h1><p>背景画像を枠へ収めるときは、領域全体を覆いたいのか、画像全体を見せたいのかで <code>cover</code> と <code>contain</code> を選ぶ。</p><h2 id="coverとcontainは切り取りの有無で選ぶ" tabindex="-1">coverとcontainは切り取りの有無で選ぶ <a class="header-anchor" href="#coverとcontainは切り取りの有無で選ぶ" aria-label="Permalink to &quot;coverとcontainは切り取りの有無で選ぶ&quot;">​</a></h2><table tabindex="0"><thead><tr><th>指定</th><th>結果</th><th>向く場面</th></tr></thead><tbody><tr><td><code>background-size: cover</code></td><td>比率を保ち、領域全体を覆う。画像の一部が切れることがある</td><td>写真背景など、余白を作りたくない</td></tr><tr><td><code>background-size: contain</code></td><td>比率を保ち、画像全体が収まる。領域内に余白が残ることがある</td><td>図柄全体を見せたい</td></tr><tr><td><code>background-position</code></td><td>余白や切り取りが出るとき、どの位置を基準に見せるか決める</td><td>人物やロゴなど見せたい位置がある</td></tr></tbody></table><p><code>cover</code>と<code>contain</code>は画像の比率を保つ。画像と描画先の比率が違う場合、切り取りまたは余白のどちらかが生じる。</p><p>人物や商品のように残したい対象がある場合は、<code>background-position: center</code>を固定の正解にせず、画面幅を変えて見える範囲を確認する。</p><p>画像をHTML要素として枠へ収める場合は <code>object-fit</code> を使う。<a href="./../12_レスポンシブ画像設計/03_決めた表示領域に画像を合わせる.html">決めた表示領域に画像を合わせる</a>で、描画先の枠と画像自身を分けて確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/04_background-sizeのcoverとcontainを選ぶ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04_backgroundSize_cover_contain___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04_backgroundSize_cover_contain___ as default
};
