import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"画像が表示されなくても内容と導線を残す","description":"","frontmatter":{},"headers":[{"level":2,"title":"外部画像が表示されない場合がある","slug":"外部画像が表示されない場合がある","link":"#外部画像が表示されない場合がある","children":[]},{"level":2,"title":"画像内文字だけへ依存しない","slug":"画像内文字だけへ依存しない","link":"#画像内文字だけへ依存しない","children":[]},{"level":2,"title":"画像非表示で確認する","slug":"画像非表示で確認する","link":"#画像非表示で確認する","children":[]},{"level":2,"title":"確認先","slug":"確認先","link":"#確認先","children":[]},{"level":2,"title":"一言でいうと","slug":"一言でいうと","link":"#一言でいうと","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/04_画像が表示されなくても内容と導線を残す.md","filePath":"02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/04_画像が表示されなくても内容と導線を残す.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/04_画像が表示されなくても内容と導線を残す.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="画像が表示されなくても内容と導線を残す" tabindex="-1">画像が表示されなくても内容と導線を残す <a class="header-anchor" href="#画像が表示されなくても内容と導線を残す" aria-label="Permalink to &quot;画像が表示されなくても内容と導線を残す&quot;">​</a></h1><p>HTMLメールの外部画像は、受信側の設定、セキュリティ・プライバシー判断、管理者設定などによって表示されない場合がある。画像がない状態を例外ではなく、確認する表示状態の1つとして扱う。</p><h2 id="外部画像が表示されない場合がある" tabindex="-1">外部画像が表示されない場合がある <a class="header-anchor" href="#外部画像が表示されない場合がある" aria-label="Permalink to &quot;外部画像が表示されない場合がある&quot;">​</a></h2><ul><li>Gmailは通常画像を表示するが、利用者は外部画像を表示前に確認する設定を選べる。疑わしい送信元やメッセージでは自動表示されない場合がある。</li><li>Classic Outlookは、インターネット上の画像を既定で自動ダウンロードしない設定になっている。</li><li>OutlookのMac版やモバイル版にも外部画像のダウンロード設定があるが、初期動作や管理者設定は同じとは限らない。</li></ul><p>「Outlookなら必ず非表示」「Gmailなら必ず表示」のように製品名だけで固定せず、対象にするアプリ・OS・版・設定を確認する。</p><p>画像へ本文やCTAをすべて焼き込むと、画像が読み込まれない時に内容と導線が同時に失われる。</p><h2 id="画像内文字だけへ依存しない" tabindex="-1">画像内文字だけへ依存しない <a class="header-anchor" href="#画像内文字だけへ依存しない" aria-label="Permalink to &quot;画像内文字だけへ依存しない&quot;">​</a></h2><p>画像内文字は、通常のHTMLテキストより、文字サイズ、色、行間などを利用者側で調整しにくい。ロゴなど見た目自体が重要な場合を除き、読ませる文章は実テキストを優先する。</p><p><code>alt</code>は画像が表示されない場合や支援技術への代替になるが、長い本文を画像化してよい理由にはしない。</p><h2 id="画像非表示で確認する" tabindex="-1">画像非表示で確認する <a class="header-anchor" href="#画像非表示で確認する" aria-label="Permalink to &quot;画像非表示で確認する&quot;">​</a></h2><ol><li>画像を読み込まない状態でメールを開く。</li><li>件名と本文から、何の案内か分かるか確認する。</li><li>日時、価格、注意事項などの重要情報が残っているか確認する。</li><li>リンクの目的と移動先が分かるか確認する。</li><li>画像が表示された時に、同じ文章が不必要に重複しないか確認する。</li></ol><p><code>alt</code>の内容は<a href="./05_altを画像の役割から決める.html">altを画像の役割から決める</a>で扱う。</p><h2 id="確認先" tabindex="-1">確認先 <a class="header-anchor" href="#確認先" aria-label="Permalink to &quot;確認先&quot;">​</a></h2><ul><li><a href="https://support.google.com/mail/answer/145919" target="_blank" rel="noreferrer">Gmail Help - Turn images on or off</a></li><li><a href="https://support.microsoft.com/en-us/outlook/block-or-unblock-automatic-picture-downloads-in-classic-outlook-email-messages" target="_blank" rel="noreferrer">Microsoft Support - Block or unblock automatic picture downloads</a></li></ul><h2 id="一言でいうと" tabindex="-1">一言でいうと <a class="header-anchor" href="#一言でいうと" aria-label="Permalink to &quot;一言でいうと&quot;">​</a></h2><p>画像が表示されなくても、何の案内か、重要事項、操作先が分かる状態を残す。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/16_HTMLメールの画像とテキスト設計/04_画像が表示されなくても内容と導線を残す.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04____________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _04____________________ as default
};
