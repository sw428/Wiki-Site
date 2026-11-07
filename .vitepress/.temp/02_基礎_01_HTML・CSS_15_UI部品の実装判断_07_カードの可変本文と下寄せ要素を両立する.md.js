import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"07_カードの可変本文と下寄せ要素を両立する","description":"","frontmatter":{},"headers":[{"level":2,"title":"確認","slug":"確認","link":"#確認","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/07_カードの可変本文と下寄せ要素を両立する.md","filePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/07_カードの可変本文と下寄せ要素を両立する.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/15_UI部品の実装判断/07_カードの可変本文と下寄せ要素を両立する.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="07_カードの可変本文と下寄せ要素を両立する" tabindex="-1">07_カードの可変本文と下寄せ要素を両立する <a class="header-anchor" href="#07_カードの可変本文と下寄せ要素を両立する" aria-label="Permalink to &quot;07\\_カードの可変本文と下寄せ要素を両立する&quot;">​</a></h1><p>カードごとに本文量が違っても、日付やボタンなど特定の要素だけを下へそろえたい場合は、本文全体を固定高にしない。</p><p>先に、一覧側で同じ行のカードが同じ高さを受け取る構造になっているか確認する。カード内部だけへ<code>margin-top: auto</code>を指定しても、カード自身の高さが異なれば一覧全体ではそろわない。</p><p><span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">カードの高さが違うと、日付がそろわないのはなぜ？</span></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.card</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>.body</code>が残りの高さを受け取り、<code>margin-top: auto</code>が余った空間を日付情報の上へ取る。</p><h2 id="確認" tabindex="-1">確認 <a class="header-anchor" href="#確認" aria-label="Permalink to &quot;確認&quot;">​</a></h2><ol><li>タイトルを長くする。</li><li>本文を長くする。</li><li>SP幅で折り返しを増やす。</li><li>下寄せが本当に全カードに必要か確認する。</li></ol><p>文字量の違いだけを理由に本文へ固定<code>height</code>を付けない。</p><p>一覧親とカードの関係は<a href="./06_カード一覧とカード内部の責務を分ける.html">カード一覧とカード内部の責務を分ける</a>で確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/15_UI部品の実装判断/07_カードの可変本文と下寄せ要素を両立する.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07____________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07____________________ as default
};
