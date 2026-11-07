import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/Wiki-Site/assets/02_05_03_DevTools_%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%83%A2%E3%83%87%E3%83%AB.CSCLjcZi.png";
const __pageData = JSON.parse('{"title":"ボックスモデルの4領域","description":"","frontmatter":{},"headers":[{"level":2,"title":"箱の内側と外側を分ける","slug":"箱の内側と外側を分ける","link":"#箱の内側と外側を分ける","children":[]},{"level":2,"title":"見えている広さを全部「余白」と決めつけない","slug":"見えている広さを全部余白と決めつけない","link":"#見えている広さを全部余白と決めつけない","children":[]},{"level":2,"title":"DevToolsで4領域を対応させる","slug":"devtoolsで4領域を対応させる","link":"#devtoolsで4領域を対応させる","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/03_ボックスモデルの4領域.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/03_ボックスモデルの4領域.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/03_ボックスモデルの4領域.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ボックスモデルの4領域" tabindex="-1">ボックスモデルの4領域 <a class="header-anchor" href="#ボックスモデルの4領域" aria-label="Permalink to &quot;ボックスモデルの4領域&quot;">​</a></h1><p>画面上の箱を、<code>content / padding / border / margin</code> の4領域に分けて確認する。</p><h2 id="箱の内側と外側を分ける" tabindex="-1">箱の内側と外側を分ける <a class="header-anchor" href="#箱の内側と外側を分ける" aria-label="Permalink to &quot;箱の内側と外側を分ける&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>margin</span></span>
<span class="line"><span>└─ border</span></span>
<span class="line"><span>   └─ padding</span></span>
<span class="line"><span>      └─ content</span></span></code></pre></div><table tabindex="0"><thead><tr><th>領域</th><th>何がある場所か</th></tr></thead><tbody><tr><td><code>content</code></td><td>文字や画像などの内容</td></tr><tr><td><code>padding</code></td><td>内容と枠線の間</td></tr><tr><td><code>border</code></td><td>箱の枠線</td></tr><tr><td><code>margin</code></td><td>ほかの箱との外側の間隔</td></tr></tbody></table><p>この4領域で箱の寸法を読む考え方がボックスモデルである。</p><h2 id="見えている広さを全部余白と決めつけない" tabindex="-1">見えている広さを全部「余白」と決めつけない <a class="header-anchor" href="#見えている広さを全部余白と決めつけない" aria-label="Permalink to &quot;見えている広さを全部「余白」と決めつけない&quot;">​</a></h2><p>要素が中身より広く見えても、必ずしも <code>margin</code> や <code>padding</code> が原因とは限らない。</p><p>横方向では、まず <code>display</code>、親の幅や列幅、自分の <code>width</code> を確認し、その後で <code>padding / border / margin</code> のどこが広いかを見る。</p><p>縦方向では、文字が複数行になっていないか、子要素の高さが積み重なっていないか、<code>line-height</code>が大きくないかを確認してから、<code>padding / border / margin</code>を見る。</p><p>見た目だけで余白の種類を決めず、対象の要素をDevToolsで選んで確認する。</p><h2 id="devtoolsで4領域を対応させる" tabindex="-1">DevToolsで4領域を対応させる <a class="header-anchor" href="#devtoolsで4領域を対応させる" aria-label="Permalink to &quot;DevToolsで4領域を対応させる&quot;">​</a></h2><p>DevToolsのボックスモデル図では、選択した要素の <code>content / padding / border / margin</code> を数値と領域で確認できる。</p><p><img${ssrRenderAttr("src", _imports_0)} alt="中心のcontentをpadding・border・marginが順に囲み、各領域の寸法を示すDevToolsのボックスモデル図"></p><p>CSSに書いた値だけで判断せず、どの領域が実際の大きさを作っているかを図と画面上のハイライトで対応させる。</p><p><code>width</code>や<code>height</code>が箱のどこまでを含むかは、<a href="./04_box-sizingでwidthの範囲を決める.html">box-sizingでwidthの範囲を決める</a>へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/03_ボックスモデルの4領域.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03_________4__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03_________4__ as default
};
