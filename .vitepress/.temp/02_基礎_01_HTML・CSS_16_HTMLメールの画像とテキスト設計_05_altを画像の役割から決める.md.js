import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"altを画像の役割から決める","description":"","frontmatter":{},"headers":[{"level":2,"title":"画像の目的からaltを決める","slug":"画像の目的からaltを決める","link":"#画像の目的からaltを決める","children":[]},{"level":2,"title":"確認先","slug":"確認先","link":"#確認先","children":[]},{"level":2,"title":"一言でいうと","slug":"一言でいうと","link":"#一言でいうと","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/05_altを画像の役割から決める.md","filePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/05_altを画像の役割から決める.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/05_altを画像の役割から決める.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="altを画像の役割から決める" tabindex="-1">altを画像の役割から決める <a class="header-anchor" href="#altを画像の役割から決める" aria-label="Permalink to &quot;altを画像の役割から決める&quot;">​</a></h1><p>HTMLメールの<code>alt</code>は、画像の見た目ではなく、その画像がメールの中で何を担当しているかと、周囲のHTMLから決める。</p><h2 id="画像の目的からaltを決める" tabindex="-1">画像の目的からaltを決める <a class="header-anchor" href="#画像の目的からaltを決める" aria-label="Permalink to &quot;画像の目的からaltを決める&quot;">​</a></h2><table tabindex="0"><thead><tr><th>画像の役割</th><th><code>alt</code>の考え方</th></tr></thead><tbody><tr><td>情報画像</td><td>理解に必要な情報を短く伝える</td></tr><tr><td>画像内の文字</td><td>原則として画像内と同じ言葉を伝える</td></tr><tr><td>リンクになっている画像</td><td>見た目ではなく、リンクの機能・移動先を伝える</td></tr><tr><td>周囲のHTMLと同じ内容の装飾画像</td><td><code>alt=&quot;&quot;</code>を使い、重複を避ける</td></tr></tbody></table><p>同じ画像でも、周囲の文脈とリンクの有無で適切な<code>alt</code>は変わる。ファイル名や「バナー画像」のような見た目の分類を、そのまま代替テキストにしない。</p><p><code>alt</code>は画像が表示されない場合や支援技術への代替になるが、長い本文を画像化してよい理由にはしない。</p><h2 id="確認先" tabindex="-1">確認先 <a class="header-anchor" href="#確認先" aria-label="Permalink to &quot;確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/WAI/tutorials/images/" target="_blank" rel="noreferrer">W3C WAI - Images Tutorial</a></li></ul><h2 id="一言でいうと" tabindex="-1">一言でいうと <a class="header-anchor" href="#一言でいうと" aria-label="Permalink to &quot;一言でいうと&quot;">​</a></h2><p><code>alt</code>は画像の目的と周囲のHTMLから決める。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/05_altを画像の役割から決める.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _05_alt___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _05_alt___________ as default
};
