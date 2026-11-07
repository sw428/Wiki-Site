import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"08_レスポンシブ表示と開閉状態を分ける","description":"","frontmatter":{},"headers":[{"level":2,"title":"担当を分ける","slug":"担当を分ける","link":"#担当を分ける","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/13_表示制御/08_レスポンシブ表示と開閉状態を分ける.md","filePath":"02_基礎/01_HTML・CSS/13_表示制御/08_レスポンシブ表示と開閉状態を分ける.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/13_表示制御/08_レスポンシブ表示と開閉状態を分ける.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="08_レスポンシブ表示と開閉状態を分ける" tabindex="-1">08_レスポンシブ表示と開閉状態を分ける <a class="header-anchor" href="#08_レスポンシブ表示と開閉状態を分ける" aria-label="Permalink to &quot;08_レスポンシブ表示と開閉状態を分ける&quot;">​</a></h1><p>画面幅による表示条件と、クリックによるメニュー開閉は別の状態である。同じクラスへ両方の意味を持たせない。</p><h2 id="担当を分ける" tabindex="-1">担当を分ける <a class="header-anchor" href="#担当を分ける" aria-label="Permalink to &quot;担当を分ける&quot;">​</a></h2><table tabindex="0"><thead><tr><th>状態</th><th>主な担当</th></tr></thead><tbody><tr><td>SP幅でメニューボタンを存在させる</td><td>media queryと表示制御Utility</td></tr><tr><td>ボタンを押す前はメニュー本文を閉じる</td><td>HTMLの初期状態とCSS・JS</td></tr><tr><td>押した後に本文を開く</td><td>JSのclass・属性更新</td></tr><tr><td>開閉状態を支援技術へ伝える</td><td><code>aria-expanded</code>など</td></tr></tbody></table><p>画面幅だけで切り替えるクラスへ、クリック後の開閉状態まで持たせない。開閉UIは<span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">JSのUI実装パターン</span>で扱う。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/13_表示制御/08_レスポンシブ表示と開閉状態を分ける.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08__________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _08__________________ as default
};
