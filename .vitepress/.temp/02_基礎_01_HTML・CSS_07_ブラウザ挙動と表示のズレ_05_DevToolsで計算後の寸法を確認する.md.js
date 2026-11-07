import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"05_DevToolsで計算後の寸法を確認する","description":"","frontmatter":{},"headers":[{"level":2,"title":"Computedで結果の値を見る","slug":"computedで結果の値を見る","link":"#computedで結果の値を見る","children":[]},{"level":2,"title":"Flexの空きを座標差から確認する","slug":"flexの空きを座標差から確認する","link":"#flexの空きを座標差から確認する","children":[]},{"level":2,"title":"測定対象を決めてから値を取る","slug":"測定対象を決めてから値を取る","link":"#測定対象を決めてから値を取る","children":[]},{"level":2,"title":"公式情報","slug":"公式情報","link":"#公式情報","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/05_DevToolsで計算後の寸法を確認する.md","filePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/05_DevToolsで計算後の寸法を確認する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/05_DevToolsで計算後の寸法を確認する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="05_devtoolsで計算後の寸法を確認する" tabindex="-1">05_DevToolsで計算後の寸法を確認する <a class="header-anchor" href="#05_devtoolsで計算後の寸法を確認する" aria-label="Permalink to &quot;05_DevToolsで計算後の寸法を確認する&quot;">​</a></h1><p>表示が予想と違うときは、原因候補を一度に変えず、対象要素と確認する値を一つずつ絞る。このページでは、Computed・Box Model・座標からブラウザ側の寸法を確認する。</p><p>CSS宣言の採用・不採用を調べる基本操作は<a href="./../06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">06のDevTools入口</a>を使う。</p><h2 id="computedで結果の値を見る" tabindex="-1">Computedで結果の値を見る <a class="header-anchor" href="#computedで結果の値を見る" aria-label="Permalink to &quot;Computedで結果の値を見る&quot;">​</a></h2><p>Computedは、対象要素で最終的に使われる値を調べる場所である。薄い表示の <code>height: 439px</code>などは、CSSへ直接書いた値ではなく、Layoutの結果として表示されている場合がある。</p><ol><li>Elementsで対象要素を選ぶ。</li><li>Computedで確認したいプロパティ名を検索する。</li><li>Stylesの宣言と、Computedに出た結果を区別する。</li></ol><p>幅・高さ・余白は<a href="./../05_ボックスとdisplay/03_ボックスモデルの4領域.html#devtoolsで4領域を対応させる">05のボックスモデル図</a>でも確認できる。</p><h2 id="flexの空きを座標差から確認する" tabindex="-1">Flexの空きを座標差から確認する <a class="header-anchor" href="#flexの空きを座標差から確認する" aria-label="Permalink to &quot;Flexの空きを座標差から確認する&quot;">​</a></h2><p>Flexの <code>space-between</code>は、Gridと同じ形で空きの寸法を表示できるとは限らない。必要ならConsoleで <code>getBoundingClientRect()</code>を使い、隣接する要素の座標差から確認する。</p><p>選んだ要素、親子、隣接要素の距離を測る具体的なコマンドは<a href="./../06_CSSカスケードとDevToolsの見方/05_Consoleで表示を測る.html#選んだ要素と隣の要素を測る">Consoleで表示を測る</a>にまとめる。ここでは測定値が、どの箱のどの範囲を表すかを確認する。</p><h2 id="測定対象を決めてから値を取る" tabindex="-1">測定対象を決めてから値を取る <a class="header-anchor" href="#測定対象を決めてから値を取る" aria-label="Permalink to &quot;測定対象を決めてから値を取る&quot;">​</a></h2><p>DevToolsのBox Modelはtransform前のCSSボックス、<code>getBoundingClientRect()</code>はtransformを反映した軸平行の外接矩形を確認するときに使う。回転した図形では同じ値にならない。必要になったら<a href="./../../../03_詳細/01_HTML・CSS/03_transform後の外接矩形.html">transform後の外接矩形</a>で条件と計算例を確認する。</p><p>Gridのトラックや <code>gap</code>を調べる場合は、<a href="./06_Gridのトラックとgapを確認する.html">Gridのトラックとgapを確認する</a>へ進む。</p><h2 id="公式情報" tabindex="-1">公式情報 <a class="header-anchor" href="#公式情報" aria-label="Permalink to &quot;公式情報&quot;">​</a></h2><ul><li><a href="https://developer.chrome.com/docs/devtools/css/reference/" target="_blank" rel="noreferrer">Chrome DevTools - CSS features reference</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/05_DevToolsで計算後の寸法を確認する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _05_DevTools____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _05_DevTools____________ as default
};
