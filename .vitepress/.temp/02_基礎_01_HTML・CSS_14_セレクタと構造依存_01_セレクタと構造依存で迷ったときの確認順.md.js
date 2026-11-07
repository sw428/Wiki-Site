import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"01_セレクタと構造依存で迷ったときの確認順","description":"","frontmatter":{},"headers":[],"relativePath":"02_基礎/01_HTML・CSS/14_セレクタと構造依存/01_セレクタと構造依存で迷ったときの確認順.md","filePath":"02_基礎/01_HTML・CSS/14_セレクタと構造依存/01_セレクタと構造依存で迷ったときの確認順.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/14_セレクタと構造依存/01_セレクタと構造依存で迷ったときの確認順.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="01_セレクタと構造依存で迷ったときの確認順" tabindex="-1">01_セレクタと構造依存で迷ったときの確認順 <a class="header-anchor" href="#01_セレクタと構造依存で迷ったときの確認順" aria-label="Permalink to &quot;01_セレクタと構造依存で迷ったときの確認順&quot;">​</a></h1><p>セレクタで迷ったときは、まず「何を選びたいのか」と「DOMのどの関係へ依存しているのか」を分ける。</p><table tabindex="0"><thead><tr><th>困っていること</th><th>最初に確認すること</th><th>詳細</th></tr></thead><tbody><tr><td>セレクタを見ても対象要素が分からない</td><td>右端の対象と左側の条件を分ける</td><td><a href="./02_セレクタが選ぶ要素を確認する.html">セレクタが選ぶ要素を確認する</a></td></tr><tr><td>深い子孫セレクタが壊れやすい</td><td>変更されやすい境界をクラスで固定できるか</td><td><a href="./03_セレクタの影響範囲をクラスで固定する.html">セレクタの影響範囲をクラスで固定する</a></td></tr><tr><td>2個目以降だけ線や余白を付けたい</td><td>直前の兄弟との隣接関係が仕様か</td><td><a href="./04_隣接する兄弟要素を選ぶ.html">隣接する兄弟要素を選ぶ</a></td></tr><tr><td><code>nth-child</code>と<code>nth-of-type</code>の違いが分からない</td><td>何を母集団として数えるか</td><td><a href="./05_nth-childとnth-of-typeを使い分ける.html">nth-childとnth-of-typeを使い分ける</a></td></tr><tr><td>同じクラスの中だけで1番目・2番目を選びたい</td><td><code>of S</code>で先に対象を絞る必要があるか</td><td><a href="./06_nth-childのof-Sで対象を絞って数える.html">nth-childのof-Sで対象を絞って数える</a></td></tr><tr><td>DOM順が変わると見た目の意味まで変わる</td><td>順番ではなく役割をクラスへ出すべきか</td><td><a href="./07_構造依存から明示クラスへ切り替える.html">構造依存から明示クラスへ切り替える</a></td></tr></tbody></table><p>ここには長い説明やコード例を置かず、実装上の疑問から詳細記事へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/14_セレクタと構造依存/01_セレクタと構造依存で迷ったときの確認順.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01____________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01____________________ as default
};
