import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"HTMLメールの画像とテキスト設計の選び方","description":"","frontmatter":{},"headers":[{"level":2,"title":"何を確認したいか","slug":"何を確認したいか","link":"#何を確認したいか","children":[]},{"level":2,"title":"判断の順序","slug":"判断の順序","link":"#判断の順序","children":[]},{"level":2,"title":"一言でいうと","slug":"一言でいうと","link":"#一言でいうと","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/01_HTMLメールの画像とテキスト設計の選び方.md","filePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/01_HTMLメールの画像とテキスト設計の選び方.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/01_HTMLメールの画像とテキスト設計の選び方.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="htmlメールの画像とテキスト設計の選び方" tabindex="-1">HTMLメールの画像とテキスト設計の選び方 <a class="header-anchor" href="#htmlメールの画像とテキスト設計の選び方" aria-label="Permalink to &quot;HTMLメールの画像とテキスト設計の選び方&quot;">​</a></h1><p>HTMLメールでは、Webページと同じ前提で実装せず、画像に任せる見た目とHTMLへ残す内容を分ける。さらに、画像が表示されない状態と対象メールクライアントでの確認まで含めて考える。</p><h2 id="何を確認したいか" tabindex="-1">何を確認したいか <a class="header-anchor" href="#何を確認したいか" aria-label="Permalink to &quot;何を確認したいか&quot;">​</a></h2><table tabindex="0"><thead><tr><th>疑問</th><th>読む先</th></tr></thead><tbody><tr><td>Webページで使えたHTML/CSSをそのまま使ってよいか</td><td><a href="./02_HTMLメールをWebページと同じ前提で作らない.html">HTMLメールをWebページと同じ前提で作らない</a></td></tr><tr><td>何を画像にして、何をHTMLテキストへ残すか</td><td><a href="./03_HTMLメールで画像と実テキストを分ける.html">HTMLメールで画像と実テキストを分ける</a></td></tr><tr><td>画像が読み込まれない時に何を残すか</td><td><a href="./04_画像が表示されなくても内容と導線を残す.html">画像が表示されなくても内容と導線を残す</a></td></tr><tr><td><code>alt</code>に何を書くか</td><td><a href="./05_altを画像の役割から決める.html">altを画像の役割から決める</a></td></tr><tr><td>どの環境で確認するか</td><td><a href="./06_対象メールクライアントで表示を確認する.html">対象メールクライアントで表示を確認する</a></td></tr></tbody></table><h2 id="判断の順序" tabindex="-1">判断の順序 <a class="header-anchor" href="#判断の順序" aria-label="Permalink to &quot;判断の順序&quot;">​</a></h2><ol><li>対象にするメール環境を決める。</li><li>見た目を画像へ任せる部分と、実テキスト・リンクとして残す内容を分ける。</li><li>画像が表示されない状態でも、案内・重要事項・移動先が分かるようにする。</li><li>画像の目的と周囲のHTMLから<code>alt</code>を決める。</li><li>実際の対象環境で表示と操作を確認する。</li></ol><h2 id="一言でいうと" tabindex="-1">一言でいうと <a class="header-anchor" href="#一言でいうと" aria-label="Permalink to &quot;一言でいうと&quot;">​</a></h2><p>HTMLメールでは、見た目を画像へ任せる判断と、内容・導線をHTMLへ残す判断を分けて考える。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/01_HTMLメールの画像とテキスト設計の選び方.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_HTML_________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_HTML_________________ as default
};
