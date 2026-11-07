import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HTMLメールをWebページと同じ前提で作らない","description":"","frontmatter":{},"headers":[{"level":2,"title":"Webページと同じ前提にしない","slug":"webページと同じ前提にしない","link":"#webページと同じ前提にしない","children":[]},{"level":2,"title":"確認先","slug":"確認先","link":"#確認先","children":[]},{"level":2,"title":"一言でいうと","slug":"一言でいうと","link":"#一言でいうと","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/02_HTMLメールをWebページと同じ前提で作らない.md","filePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/02_HTMLメールをWebページと同じ前提で作らない.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/02_HTMLメールをWebページと同じ前提で作らない.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="htmlメールをwebページと同じ前提で作らない" tabindex="-1">HTMLメールをWebページと同じ前提で作らない <a class="header-anchor" href="#htmlメールをwebページと同じ前提で作らない" aria-label="Permalink to &quot;HTMLメールをWebページと同じ前提で作らない&quot;">​</a></h1><p>HTMLメールは、通常のWebページと同じ範囲のHTML/CSSが必ず処理される前提では作らない。</p><h2 id="webページと同じ前提にしない" tabindex="-1">Webページと同じ前提にしない <a class="header-anchor" href="#webページと同じ前提にしない" aria-label="Permalink to &quot;Webページと同じ前提にしない&quot;">​</a></h2><p>メールクライアントは、通常のブラウザーと同じ範囲のHTML/CSSを必ず処理するわけではない。たとえばGmailは多くのCSSセレクタ・プロパティ・メディアクエリを扱うが、未対応のものは無視される場合がある。</p><p>通常のWebページで成立した実装をそのまま流用せず、配信先で必要な環境を先に決める。</p><p>実際の確認対象は<a href="./06_対象メールクライアントで表示を確認する.html">対象メールクライアントで表示を確認する</a>で扱う。</p><h2 id="確認先" tabindex="-1">確認先 <a class="header-anchor" href="#確認先" aria-label="Permalink to &quot;確認先&quot;">​</a></h2><ul><li><a href="https://developers.google.com/workspace/gmail/design/css" target="_blank" rel="noreferrer">Gmail - CSS Support</a></li></ul><h2 id="一言でいうと" tabindex="-1">一言でいうと <a class="header-anchor" href="#一言でいうと" aria-label="Permalink to &quot;一言でいうと&quot;">​</a></h2><p>HTMLメールは、Webページで動いた実装をそのまま使える前提にしない。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/02_HTMLメールをWebページと同じ前提で作らない.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_HTML____Web_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _02_HTML____Web_____________ as default
};
