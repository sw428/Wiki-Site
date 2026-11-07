import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"01_画像と背景で迷ったときの確認順","description":"","frontmatter":{},"headers":[],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/01_画像と背景で迷ったときの確認順.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/01_画像と背景で迷ったときの確認順.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/01_画像と背景で迷ったときの確認順.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="01_画像と背景で迷ったときの確認順" tabindex="-1">01_画像と背景で迷ったときの確認順 <a class="header-anchor" href="#01_画像と背景で迷ったときの確認順" aria-label="Permalink to &quot;01_画像と背景で迷ったときの確認順&quot;">​</a></h1><p>実装中に画像や背景で迷ったときは、目的や症状から確認先を選ぶ。</p><table tabindex="0"><thead><tr><th>困っていること</th><th>最初に確認すること</th><th>詳細</th></tr></thead><tbody><tr><td><code>img</code>と背景のどちらにするか迷う</td><td>画像自体が内容を伝えるか</td><td><a href="./02_imgとbackground-imageを選ぶ.html"><code>img</code>と<code>background-image</code>を選ぶ</a></td></tr><tr><td>背景画像を指定したのに見えない</td><td>描画先のboxに幅と高さがあるか</td><td><a href="./03_背景画像を描くboxを確認する.html">背景画像を描くboxを確認する</a></td></tr><tr><td>背景画像が切れる・余白が出る</td><td>全体を覆うか、全体を見せるか</td><td><a href="./04_background-sizeのcoverとcontainを選ぶ.html"><code>cover</code>と<code>contain</code>を選ぶ</a></td></tr><tr><td><code>background-image</code>と<code>mask-image</code>の違いが分からない</td><td>何を描くか、どこを見せるか</td><td><a href="./05_background-imageとmask-imageを区別する.html">背景画像とマスクを区別する</a></td></tr><tr><td>SVGアイコンの色をCSSで変えたい</td><td>形だけをmaskとして使えるか</td><td><a href="./06_mask-imageで単色アイコンを作る.html">maskで単色アイコンを作る</a></td></tr><tr><td>画像や要素の端を徐々に消したい</td><td>マスクで見える量を変えるか</td><td><a href="./07_mask-imageで要素の端をフェードさせる.html">要素の端をフェードさせる</a></td></tr><tr><td>SVGかPNG/JPEGか迷う</td><td>図形か、画素の集まりか</td><td><a href="./08_SVGとラスター画像を選ぶ.html">SVGとラスター画像を選ぶ</a></td></tr><tr><td>PNG/JPEG/WebP/AVIFのどれにするか迷う</td><td>透過・写真・配信環境</td><td><a href="./09_ラスター画像の形式を選ぶ.html">ラスター画像の形式を選ぶ</a></td></tr><tr><td>SVGを外部ファイルかHTML内に置くか迷う</td><td>内部pathを操作する必要があるか</td><td><a href="./10_外部SVGとインラインSVGを使い分ける.html">外部SVGとインラインSVGを使い分ける</a></td></tr><tr><td>SVGを一つにまとめるか分けるか迷う</td><td>位置・大きさ・表示条件を一緒に変えるか</td><td><a href="./11_SVGファイルを分ける単位を決める.html">SVGファイルを分ける単位を決める</a></td></tr><tr><td>見出しや文字を画像にしてよいか迷う</td><td>HTMLの意味・操作・更新を残す必要があるか</td><td><a href="./12_文字を画像にする前に確認する.html">文字を画像にする前に確認する</a></td></tr><tr><td>アウトライン文字の<code>alt</code>が分からない</td><td>同じ内容が周囲のHTMLにあるか</td><td><a href="./13_アウトライン文字のaltを決める.html">アウトライン文字のaltを決める</a></td></tr></tbody></table><p>このページには長い説明やコード例を置かない。判断理由を確認したいときだけ詳細記事へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/01_画像と背景で迷ったときの確認順.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01________________ as default
};
