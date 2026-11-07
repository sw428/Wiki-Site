import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"01_表示制御で迷ったときの確認順","description":"","frontmatter":{},"headers":[],"relativePath":"02_基礎/01_HTML・CSS/13_表示制御/01_表示制御で迷ったときの確認順.md","filePath":"02_基礎/01_HTML・CSS/13_表示制御/01_表示制御で迷ったときの確認順.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/13_表示制御/01_表示制御で迷ったときの確認順.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="01_表示制御で迷ったときの確認順" tabindex="-1">01_表示制御で迷ったときの確認順 <a class="header-anchor" href="#01_表示制御で迷ったときの確認順" aria-label="Permalink to &quot;01_表示制御で迷ったときの確認順&quot;">​</a></h1><p>表示・非表示で迷ったときは、まず「存在条件」「表示時のbox」「配置」「操作状態」のどこで困っているかを分ける。</p><table tabindex="0"><thead><tr><th>困っていること</th><th>最初に確認すること</th><th>詳細</th></tr></thead><tbody><tr><td>SPだけ・PCだけ表示したい</td><td>どの画面幅で存在させるか</td><td><a href="./02_SPとPCで表示する要素を切り替える.html">SPとPCで表示する要素を切り替える</a></td></tr><tr><td><code>sp-only</code> / <code>pc-only</code>へ何を書けばよいか</td><td>Utilityは存在条件だけを担当しているか</td><td><a href="./03_表示制御Utilityに存在条件だけを持たせる.html">表示制御Utilityに存在条件だけを持たせる</a></td></tr><tr><td><code>display: revert</code>で元のFlex/Gridへ戻らない</td><td><code>revert</code>が何を巻き戻すか</td><td><a href="./04_display-revertの戻り先を確認する.html">display-revertの戻り先を確認する</a></td></tr><tr><td>表示後も<code>flex</code>や<code>grid</code>にしたい</td><td>表示時の<code>display</code>をどう決めるか</td><td><a href="./05_表示後もFlexとGridを保つ方法を選ぶ.html">表示後もFlexとGridを保つ方法を選ぶ</a></td></tr><tr><td>SP用とPC用で同じ情報を2つ置く</td><td>内容の更新先が分裂していないか</td><td><a href="./06_SPとPCで重複する情報を揃える.html">SPとPCで重複する情報を揃える</a></td></tr><tr><td>表示されたが位置や並びが違う</td><td>存在条件とレイアウトを混ぜていないか</td><td><a href="./07_表示条件とレイアウトを分ける.html">表示条件とレイアウトを分ける</a></td></tr><tr><td>SP表示とメニュー開閉が混ざる</td><td>画面幅と操作状態を別にしているか</td><td><a href="./08_レスポンシブ表示と開閉状態を分ける.html">レスポンシブ表示と開閉状態を分ける</a></td></tr></tbody></table><p>このページには長いコード例を置かず、実装上の疑問から詳細記事へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/13_表示制御/01_表示制御で迷ったときの確認順.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_______________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_______________ as default
};
