import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"既定の余白をどこまで消すか決める","description":"","frontmatter":{},"headers":[{"level":2,"title":"bodyだけを直す","slug":"bodyだけを直す","link":"#bodyだけを直す","children":[]},{"level":2,"title":"見出しや段落の余白も消す","slug":"見出しや段落の余白も消す","link":"#見出しや段落の余白も消す","children":[]},{"level":2,"title":"全消去と個別消去を目的から選ぶ","slug":"全消去と個別消去を目的から選ぶ","link":"#全消去と個別消去を目的から選ぶ","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/13_既定の余白をどこまで消すか決める.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/13_既定の余白をどこまで消すか決める.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/13_既定の余白をどこまで消すか決める.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="既定の余白をどこまで消すか決める" tabindex="-1">既定の余白をどこまで消すか決める <a class="header-anchor" href="#既定の余白をどこまで消すか決める" aria-label="Permalink to &quot;既定の余白をどこまで消すか決める&quot;">​</a></h1><p><code>body</code> だけの余白を消す場合と、見出しや段落などの既定余白も自分で管理する場合では、対象が違う。</p><h2 id="bodyだけを直す" tabindex="-1">bodyだけを直す <a class="header-anchor" href="#bodyだけを直す" aria-label="Permalink to &quot;bodyだけを直す&quot;">​</a></h2><p>ページ外周だけをなくしたいなら、<code>body</code> を対象にする。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>これはページ外周に見えるbodyの既定marginを消す。</p><p>見出し、段落、リストなどの既定marginは残る。</p><h2 id="見出しや段落の余白も消す" tabindex="-1">見出しや段落の余白も消す <a class="header-anchor" href="#見出しや段落の余白も消す" aria-label="Permalink to &quot;見出しや段落の余白も消す&quot;">​</a></h2><p>見出しや段落の既定marginも自分で管理するなら、必要な要素を指定する。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="全消去と個別消去を目的から選ぶ" tabindex="-1">全消去と個別消去を目的から選ぶ <a class="header-anchor" href="#全消去と個別消去を目的から選ぶ" aria-label="Permalink to &quot;全消去と個別消去を目的から選ぶ&quot;">​</a></h2><p><code>* { margin: 0; }</code> と書けば、すべての要素のmarginが対象になる。</p><p>ただし、<code>padding</code> や <code>list-style</code> など、別のプロパティまで消えるわけではない。</p><p>全消去と個別消去のどちらか一方が常に正しいわけではない。</p><ol><li>画面上で不要な余白を見つける。</li><li>DevToolsで、その余白がどの要素の <code>margin</code> や <code>padding</code> か確認する。</li><li>サイト全体で消すか、その要素だけで消すか決める。</li><li>リストのマーカーなど、別の既定表示を残すか確認する。</li></ol><p>リストの字下げやマーカーは、<a href="./14_リストの既定表示を整える.html">リストの既定表示を整える</a>で分けて扱う。</p><p><code>box-sizing: border-box</code> は余白を消す指定ではない。</p><p><code>width</code> と <code>height</code> の計算範囲をそろえる話は、<a href="./04_box-sizingでwidthの範囲を決める.html">box-sizingでwidthの範囲を決める</a>を正本にする。</p><p>複数のCSSで値が上書きされている場合は、<a href="./../06_CSSカスケードとDevToolsの見方/01_DevToolsで適用されたCSSを確認する.html">06_CSSカスケードとDevToolsの見方</a>へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/13_既定の余白をどこまで消すか決める.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13_________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _13_________________ as default
};
