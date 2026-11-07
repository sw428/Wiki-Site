import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"読み方","slug":"読み方","link":"#読み方","children":[]},{"level":2,"title":"定義","slug":"定義","link":"#定義","children":[]},{"level":2,"title":"ここを見る理由","slug":"ここを見る理由","link":"#ここを見る理由","children":[]},{"level":2,"title":"一瞬イメージ","slug":"一瞬イメージ","link":"#一瞬イメージ","children":[]},{"level":2,"title":"重要ポイント","slug":"重要ポイント","link":"#重要ポイント","children":[]},{"level":2,"title":"関連ノート","slug":"関連ノート","link":"#関連ノート","children":[]}],"relativePath":"05_参照/DOM.md","filePath":"05_参照/DOM.md"}');
const _sfc_main = { name: "05_参照/DOM.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h1><h2 id="読み方" tabindex="-1">読み方 <a class="header-anchor" href="#読み方" aria-label="Permalink to &quot;読み方&quot;">​</a></h2><ul><li>ドム</li></ul><h2 id="定義" tabindex="-1">定義 <a class="header-anchor" href="#定義" aria-label="Permalink to &quot;定義&quot;">​</a></h2><ul><li>HTMLをブラウザが扱いやすい形に変換した、ページ構造のデータ。</li><li>HTMLファイルそのものではなく、ブラウザ内部で作られる構造ツリー。</li></ul><h2 id="ここを見る理由" tabindex="-1">ここを見る理由 <a class="header-anchor" href="#ここを見る理由" aria-label="Permalink to &quot;ここを見る理由&quot;">​</a></h2><ul><li>JavaScriptが何を操作しているかを理解するため。</li><li>CSSが見た目を決める前に、ページの構造側で何が存在しているかを分けて見るため。</li><li>要素ノード、属性、テキストノードを混同しないため。</li></ul><h2 id="一瞬イメージ" tabindex="-1">一瞬イメージ <a class="header-anchor" href="#一瞬イメージ" aria-label="Permalink to &quot;一瞬イメージ&quot;">​</a></h2><p>HTMLが文章だとしたら、DOMはその文章をブラウザが分解して作った構造図。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTML</span></span>
<span class="line"><span>-&gt; ブラウザが読む</span></span>
<span class="line"><span>-&gt; DOMになる</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;こんにちは&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>ブラウザ内部では、ざっくり次のような構造として扱われる。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>p要素</span></span>
<span class="line"><span>└ テキストノード「こんにちは」</span></span></code></pre></div><h2 id="重要ポイント" tabindex="-1">重要ポイント <a class="header-anchor" href="#重要ポイント" aria-label="Permalink to &quot;重要ポイント&quot;">​</a></h2><ul><li>DOMはHTMLから作られる。</li><li>要素、属性、テキストなどをツリー構造で持つ。</li><li>JavaScriptで取得・変更できる。</li><li>CSSが見た目を決める前の「構造側」の情報として見る。</li><li>DOMとCSSOMを合わせて、画面に出すためのレンダリング処理へ進む。</li></ul><h2 id="関連ノート" tabindex="-1">関連ノート <a class="header-anchor" href="#関連ノート" aria-label="Permalink to &quot;関連ノート&quot;">​</a></h2><ul><li><a href="./CSSOM.html">CSSOM</a></li><li><a href="./状態変化.html">状態変化</a></li><li><a href="./テキストノード.html">テキストノード</a></li><li><a href="./CSS適用境界.html">CSS適用境界</a></li><li><a href="./状態変化（DOM→CSSOM→Layout→Paint）.html">状態変化（DOM→CSSOM→Layout→Paint）</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("05_参照/DOM.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DOM = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  DOM as default
};
