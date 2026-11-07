import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"箱の大きさが予想と違うときの確認順","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. 対象と使われた宣言を確定する","slug":"1-対象と使われた宣言を確定する","link":"#1-対象と使われた宣言を確定する","children":[]},{"level":2,"title":"2. 箱の種類と実際の寸法を見る","slug":"2-箱の種類と実際の寸法を見る","link":"#2-箱の種類と実際の寸法を見る","children":[]},{"level":2,"title":"3. 値の基準と制限を確認する","slug":"3-値の基準と制限を確認する","link":"#3-値の基準と制限を確認する","children":[]},{"level":2,"title":"4. 親側のレイアウト規則を確認する","slug":"4-親側のレイアウト規則を確認する","link":"#4-親側のレイアウト規則を確認する","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/12_箱の大きさが予想と違うときの確認順.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/12_箱の大きさが予想と違うときの確認順.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/12_箱の大きさが予想と違うときの確認順.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="箱の大きさが予想と違うときの確認順" tabindex="-1">箱の大きさが予想と違うときの確認順 <a class="header-anchor" href="#箱の大きさが予想と違うときの確認順" aria-label="Permalink to &quot;箱の大きさが予想と違うときの確認順&quot;">​</a></h1><p>箱の大きさが予想と違うときは、見た目から原因を決めず、DevToolsで順に確認する。</p><h2 id="1-対象と使われた宣言を確定する" tabindex="-1">1. 対象と使われた宣言を確定する <a class="header-anchor" href="#1-対象と使われた宣言を確定する" aria-label="Permalink to &quot;1. 対象と使われた宣言を確定する&quot;">​</a></h2><p>DevToolsで、見た目ではなく調べたい要素そのものを選ぶ。</p><p>まずComputedで実際に使われた <code>display</code>、<code>width</code>、<code>height</code> を見る。どの宣言が採用されたか分からない場合は、Stylesへ戻り、<a href="./../06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">適用されたCSSと上書き</a>を確認する。</p><h2 id="2-箱の種類と実際の寸法を見る" tabindex="-1">2. 箱の種類と実際の寸法を見る <a class="header-anchor" href="#2-箱の種類と実際の寸法を見る" aria-label="Permalink to &quot;2. 箱の種類と実際の寸法を見る&quot;">​</a></h2><p><code>display</code> を確認し、その箱に <code>width</code> や <code>height</code> がどう適用されるかを見る。inlineの箱は、通常フローのblockと同じ感覚では読めない。</p><p>次にボックスモデル図で <code>content / padding / border / margin</code> を分ける。CSSに書いた <code>width</code> と外側の寸法が違うときは、<a href="./07_CSSに書いた値と実際の寸法を分ける.html">書いた値と実際の寸法</a>を照合する。</p><h2 id="3-値の基準と制限を確認する" tabindex="-1">3. 値の基準と制限を確認する <a class="header-anchor" href="#3-値の基準と制限を確認する" aria-label="Permalink to &quot;3. 値の基準と制限を確認する&quot;">​</a></h2><p><code>width</code> や <code>height</code> が <code>auto</code>、<code>%</code>、長さのどれかを確認する。</p><p><code>%</code> なら、継承ではなく、<a href="./08_パーセント指定と包含ブロック.html">包含ブロックを基準にした割合計算</a>として見る。高さの場合は、その基準となる高さを割合計算できる状態かも確認する。</p><p>続いて <code>min-width</code>、<code>max-width</code>、<code>min-height</code>、<code>max-height</code> によって、最終的な使用サイズが制限されていないかを見る。</p><h2 id="4-親側のレイアウト規則を確認する" tabindex="-1">4. 親側のレイアウト規則を確認する <a class="header-anchor" href="#4-親側のレイアウト規則を確認する" aria-label="Permalink to &quot;4. 親側のレイアウト規則を確認する&quot;">​</a></h2><p>DOM上の親と包含ブロックが同じとは限らないため、どの箱が基準を作っているかを<a href="./10_DOM上の親と包含ブロックを区別する.html">DOM上の親と包含ブロックを区別する</a>で確かめる。</p><p>FlexやGridの中にある場合は、子の指定だけでなく親の配置指定も確認する。ここまでの各段階で観測した値をつなぐと、「余白が広いように見える」といった印象から原因を決めつけずに切り分けられる。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/12_箱の大きさが予想と違うときの確認順.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _12__________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _12__________________ as default
};
