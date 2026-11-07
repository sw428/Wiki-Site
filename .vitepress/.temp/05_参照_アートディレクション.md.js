import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"アートディレクション","description":"","frontmatter":{},"headers":[{"level":2,"title":"関連","slug":"関連","link":"#関連","children":[]}],"relativePath":"05_参照/アートディレクション.md","filePath":"05_参照/アートディレクション.md"}');
const _sfc_main = { name: "05_参照/アートディレクション.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="アートディレクション" tabindex="-1">アートディレクション <a class="header-anchor" href="#アートディレクション" aria-label="Permalink to &quot;アートディレクション&quot;">​</a></h1><p>アートディレクションとは、画面サイズなどに合わせて、単に画像を拡大・縮小するのではなく、<strong>構図や画像内容そのものを変えるために別の画像候補へ切り替えること</strong>。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>同じ画像を小さくする</span></span>
<span class="line"><span>→ アートディレクションではない</span></span>
<span class="line"><span></span></span>
<span class="line"><span>同じ画像をobject-fitで切り取って見せる</span></span>
<span class="line"><span>→ アートディレクションではない</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SP/PC向けに別構図の画像を用意する</span></span>
<span class="line"><span>→ アートディレクション</span></span>
<span class="line"><span>→ このWikiでは画像切替として扱う</span></span></code></pre></div><p>たとえば、SPとPCで人物の配置、文字の配置、画像ファイル自体に写っている範囲、構図などを変える場合が該当する。</p><p>なお、同じ内容の画像を高解像度版へ切り替えるだけの場合も画像ファイルの切替ではあるが、アートディレクションとは区別する。</p><p>アートディレクションは第五の表示領域タイプではなく、<strong>使用する画像候補を決める側の判断</strong>である。</p><h2 id="関連" tabindex="-1">関連 <a class="header-anchor" href="#関連" aria-label="Permalink to &quot;関連&quot;">​</a></h2><ul><li><a href="./../02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.html">レスポンシブ画像設計の選び方</a></li><li><a href="./../02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/06_画像切替.html">画像切替</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/アートディレクション.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  __________ as default
};
