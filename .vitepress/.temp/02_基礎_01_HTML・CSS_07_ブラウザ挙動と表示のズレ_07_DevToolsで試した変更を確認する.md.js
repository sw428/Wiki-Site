import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"07_DevToolsで試した変更を確認する","description":"","frontmatter":{},"headers":[{"level":2,"title":"Changesで試した編集を確認する","slug":"changesで試した編集を確認する","link":"#changesで試した編集を確認する","children":[]},{"level":2,"title":"公式情報","slug":"公式情報","link":"#公式情報","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/07_DevToolsで試した変更を確認する.md","filePath":"02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/07_DevToolsで試した変更を確認する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/07_DevToolsで試した変更を確認する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="07_devtoolsで試した変更を確認する" tabindex="-1">07_DevToolsで試した変更を確認する <a class="header-anchor" href="#07_devtoolsで試した変更を確認する" aria-label="Permalink to &quot;07_DevToolsで試した変更を確認する&quot;">​</a></h1><p>ElementsのStylesやSourcesで値を試しながら直した後は、DevTools内で何を変更したかを確認し、再読み込み後にも残す必要があるかを分ける。</p><h2 id="changesで試した編集を確認する" tabindex="-1">Changesで試した編集を確認する <a class="header-anchor" href="#changesで試した編集を確認する" aria-label="Permalink to &quot;Changesで試した編集を確認する&quot;">​</a></h2><p>ElementsのStylesやSourcesでCSSを試しながら直した場合は、ChangesパネルでDevTools内の変更箇所をまとめて確認できる。</p><ul><li>DevTools右上のメニューから <code>More tools</code>、<code>Changes</code>を選ぶ。</li><li>または <code>Ctrl + Shift + P</code>を押し、<code>Show Changes</code>を実行する。</li></ul><p>Changesが追跡するのはDevTools内で行った編集である。CSSはElementsのStylesまたはSources、JavaScriptはSourcesの変更を確認できる。Elementsで一時的に変えたDOMまで常に一覧化されるとは考えない。</p><p>ページまたはDevToolsを再読み込みすると、通常の編集差分は消える。再読み込み後も試作を残す場合はLocal Overrides、ローカルのソースファイルへ保存する場合はWorkspacesを使い分ける。</p><h2 id="公式情報" tabindex="-1">公式情報 <a class="header-anchor" href="#公式情報" aria-label="Permalink to &quot;公式情報&quot;">​</a></h2><ul><li><a href="https://developer.chrome.com/docs/devtools/changes/" target="_blank" rel="noreferrer">Changes: Track your HTML, CSS, and JavaScript changes</a></li><li><a href="https://developer.chrome.com/docs/devtools/overrides/" target="_blank" rel="noreferrer">Override web content and HTTP response headers locally</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/07_ブラウザ挙動と表示のズレ/07_DevToolsで試した変更を確認する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_DevTools___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07_DevTools___________ as default
};
