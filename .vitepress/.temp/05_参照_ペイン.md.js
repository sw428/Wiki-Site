import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ペイン","description":"","frontmatter":{},"headers":[{"level":2,"title":"意味","slug":"意味","link":"#意味","children":[]},{"level":2,"title":"関連ページ","slug":"関連ページ","link":"#関連ページ","children":[]}],"relativePath":"05_参照/ペイン.md","filePath":"05_参照/ペイン.md"}');
const _sfc_main = { name: "05_参照/ペイン.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ペイン" tabindex="-1">ペイン <a class="header-anchor" href="#ペイン" aria-label="Permalink to &quot;ペイン&quot;">​</a></h1><h2 id="意味" tabindex="-1">意味 <a class="header-anchor" href="#意味" aria-label="Permalink to &quot;意味&quot;">​</a></h2><p>ペイン（pane）は、アプリの画面内を区切った表示領域・枠を指す。</p><p>DevTools上に「Stylesペイン」という一つの名前が表示されているわけではない。<code>Styles</code> は画面に表示される名前であり、その内容が表示される区切られた領域を、説明上「Stylesペイン」と呼ぶ。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Styles = 表示名</span></span>
<span class="line"><span>ペイン = その内容を表示する区切られた領域</span></span></code></pre></div><p>「タブ」は表示を切り替える見出し・操作部分、「ペイン」は選択した内容が表示される領域として分ける。</p><h2 id="関連ページ" tabindex="-1">関連ページ <a class="header-anchor" href="#関連ページ" aria-label="Permalink to &quot;関連ページ&quot;">​</a></h2><ul><li><a href="./../02_基礎/01_HTML・CSS/06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">CSSカスケードとDevToolsの見方</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/ペイン.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ___ as default
};
