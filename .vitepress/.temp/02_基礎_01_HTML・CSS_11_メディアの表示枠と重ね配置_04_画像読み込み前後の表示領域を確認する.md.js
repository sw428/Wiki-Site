import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"04_画像読み込み前後の表示領域を確認する","description":"","frontmatter":{},"headers":[{"level":2,"title":"Attributes Styleと最終表示を分ける","slug":"attributes-styleと最終表示を分ける","link":"#attributes-styleと最終表示を分ける","children":[]},{"level":2,"title":"実際の移動を確認してから直す","slug":"実際の移動を確認してから直す","link":"#実際の移動を確認してから直す","children":[]},{"level":2,"title":"よくある混同","slug":"よくある混同","link":"#よくある混同","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/04_画像読み込み前後の表示領域を確認する.md","filePath":"02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/04_画像読み込み前後の表示領域を確認する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/04_画像読み込み前後の表示領域を確認する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="04_画像読み込み前後の表示領域を確認する" tabindex="-1">04_画像読み込み前後の表示領域を確認する <a class="header-anchor" href="#04_画像読み込み前後の表示領域を確認する" aria-label="Permalink to &quot;04_画像読み込み前後の表示領域を確認する&quot;">​</a></h1><p>読み込み前の領域予約が効いているか確認するときは、HTML属性、CSS、最終的なレイアウト結果を分けて見る。</p><h2 id="attributes-styleと最終表示を分ける" tabindex="-1">Attributes Styleと最終表示を分ける <a class="header-anchor" href="#attributes-styleと最終表示を分ける" aria-label="Permalink to &quot;Attributes Styleと最終表示を分ける&quot;">​</a></h2><p>DevToolsのStylesで寸法属性が<code>img[Attributes Style]</code>などとして見える場合がある。これはCSSファイルへ同じ宣言を書いたことを示さない。</p><ul><li>Styles: どの宣言や属性が候補になったか</li><li>ComputedまたはLayout: 最終的に使われた幅と高さ</li><li>HTML属性から得た比率: 読み込み前の領域予約へ使われ得る情報</li></ul><p>属性由来の幅・高さに打ち消し線があっても、「属性が完全に無意味」とは限らない。最終寸法と比率予約を分けて確認する。</p><h2 id="実際の移動を確認してから直す" tabindex="-1">実際の移動を確認してから直す <a class="header-anchor" href="#実際の移動を確認してから直す" aria-label="Permalink to &quot;実際の移動を確認してから直す&quot;">​</a></h2><ol><li>どの要素がいつ動いたかを確認する。</li><li>動く前後の画像枠の幅・高さを確認する。</li><li>HTMLの寸法属性、適用中の<code>aspect-ratio</code>、親の幅を確認する。</li><li>選択画像が変わる場合は<code>currentSrc</code>と候補ごとの比率を確認する。</li><li>修正後に同じ読み込み条件と画面幅で再確認する。</li></ol><p>画像以外にも、Webフォント、後から挿入されるUI、広告やiframeなどが位置移動の原因になり得る。画像の寸法属性を足しただけでページ全体の原因を解決したと判断しない。現象の分け方は<a href="./../07_ブラウザ挙動と表示のズレ/02_読み込み後や幅変更で起きる位置ずれ.html">読み込み後や幅変更で起きる位置ずれ</a>へ戻る。</p><p>修正順は「カード枚数が多いから」だけで固定しない。実際の移動量、画面上部か、影響を受ける範囲、再現頻度を観測し、影響の大きい原因から直す。</p><h2 id="よくある混同" tabindex="-1">よくある混同 <a class="header-anchor" href="#よくある混同" aria-label="Permalink to &quot;よくある混同&quot;">​</a></h2><ul><li><code>aspect-ratio</code>を書けば最大幅も決まる: 幅や上限は別に必要</li><li>2倍画像を使えば表示領域も2倍になる: 表示幅はHTML/CSS、候補選択は<code>srcset</code></li><li><code>object-fit</code>で読み込み前の高さが決まる: 先に要素または親の箱が必要</li><li><code>width</code> / <code>height</code>属性を書けば画面上も固定寸法になる: CSSとレイアウトで最終寸法は変わる</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/04_画像読み込み前後の表示領域を確認する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04___________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04___________________ as default
};
