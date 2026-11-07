import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"内容由来のサイズと自動最小サイズ","description":"","frontmatter":{},"headers":[{"level":2,"title":"用語と役割","slug":"用語と役割","link":"#用語と役割","children":[]},{"level":2,"title":"min-contentの具体例","slug":"min-contentの具体例","link":"#min-contentの具体例","children":[]}],"relativePath":"05_参照/内容由来のサイズと自動最小サイズ.md","filePath":"05_参照/内容由来のサイズと自動最小サイズ.md"}');
const _sfc_main = { name: "05_参照/内容由来のサイズと自動最小サイズ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="内容由来のサイズと自動最小サイズ" tabindex="-1">内容由来のサイズと自動最小サイズ <a class="header-anchor" href="#内容由来のサイズと自動最小サイズ" aria-label="Permalink to &quot;内容由来のサイズと自動最小サイズ&quot;">​</a></h1><p>Gridで「内容の最小幅が列幅に影響する」ときに、何を基準にした幅なのかを確認するためのカード。</p><h2 id="用語と役割" tabindex="-1">用語と役割 <a class="header-anchor" href="#用語と役割" aria-label="Permalink to &quot;用語と役割&quot;">​</a></h2><table tabindex="0"><thead><tr><th>概念</th><th>意味</th></tr></thead><tbody><tr><td>Intrinsic Sizing（内在的サイズ計算）</td><td>内容に基づくサイズ計算</td></tr><tr><td><code>min-content</code></td><td>通常の改行可能な位置で可能な限り折り返したときに必要な最小幅。ここでは横書きの幅として考える</td></tr><tr><td>Automatic Minimum Size（自動最小サイズ）</td><td><code>min-width: auto</code>などで、レイアウトの条件によって内容などから決まる最小サイズ</td></tr></tbody></table><h2 id="min-contentの具体例" tabindex="-1">min-contentの具体例 <a class="header-anchor" href="#min-contentの具体例" aria-label="Permalink to &quot;min-contentの具体例&quot;">​</a></h2><p>以下は通常の折り返しを使い、別の幅・高さ・最小幅・最大幅の制約を加えていない場合の目安。</p><table tabindex="0"><thead><tr><th>内容</th><th>最小幅を考える目安</th></tr></thead><tbody><tr><td>英語</td><td>通常の折り返しなら、最も長い単語の幅が目安</td></tr><tr><td>日本語</td><td>文字間で折り返せるため、比較的小さくなる場合がある。禁則処理などの影響は受ける</td></tr><tr><td>画像</td><td>自然幅を持つ画像では、基本的に自然幅が基準</td></tr></tbody></table><p>自動最小サイズは、常に<code>min-content</code>と同じになるわけではない。Gridでは、子の<code>overflow</code>や、またぐ列の最小値・可変列の有無などの条件によって、内容由来の最小幅を使うかどうかが変わる。</p><p>子の自動最小幅が列へ影響する関係は、<a href="./../02_基礎/01_HTML・CSS/09_レイアウト/04_Grid/10_列幅と子要素のサイズの違い.html#列と子の最小幅を分ける">列と子の最小幅を分ける</a>で確認する。通常の<code>1fr</code>から<code>minmax(0, 1fr)</code>へ変える目的は、<a href="./../02_基礎/01_HTML・CSS/09_レイアウト/04_Grid/04_1frなのに列が広がるのはなぜ.html">1frなのに列が広がるのはなぜ？</a>で扱う。</p><p>仕様確認先：<a href="https://www.w3.org/TR/css-sizing-3/#auto-box-sizes" target="_blank" rel="noreferrer">CSS Sizing — Auto Box Sizes</a>、<a href="https://www.w3.org/TR/css-grid-2/#min-size-auto" target="_blank" rel="noreferrer">CSS Grid — Automatic Minimum Size of Grid Items</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/内容由来のサイズと自動最小サイズ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ________________ as default
};
