import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CSSに書いた値と実際の寸法を分ける","description":"","frontmatter":{},"headers":[{"level":2,"title":"autoのまま書かれていても実際の幅は決まる","slug":"autoのまま書かれていても実際の幅は決まる","link":"#autoのまま書かれていても実際の幅は決まる","children":[]},{"level":2,"title":"DevToolsのボックスモデル図を見る","slug":"devtoolsのボックスモデル図を見る","link":"#devtoolsのボックスモデル図を見る","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/07_CSSに書いた値と実際の寸法を分ける.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/07_CSSに書いた値と実際の寸法を分ける.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/07_CSSに書いた値と実際の寸法を分ける.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cssに書いた値と実際の寸法を分ける" tabindex="-1">CSSに書いた値と実際の寸法を分ける <a class="header-anchor" href="#cssに書いた値と実際の寸法を分ける" aria-label="Permalink to &quot;CSSに書いた値と実際の寸法を分ける&quot;">​</a></h1><p>CSSファイルへ書いた値と、現在のレイアウトで実際に使われている寸法は同じとは限らない。</p><h2 id="autoのまま書かれていても実際の幅は決まる" tabindex="-1">autoのまま書かれていても実際の幅は決まる <a class="header-anchor" href="#autoのまま書かれていても実際の幅は決まる" aria-label="Permalink to &quot;autoのまま書かれていても実際の幅は決まる&quot;">​</a></h2><p>例えば <code>width: auto</code> は、計算値の段階では <code>auto</code> のままでも、Layoutで親や周囲の条件を使って実際の幅が決まる。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CSSに書いた指定</span></span>
<span class="line"><span>→ カスケードと継承を解決する</span></span>
<span class="line"><span>→ 計算値が決まる</span></span>
<span class="line"><span>→ Layoutで使用する寸法が決まる</span></span></code></pre></div><p>ブラウザが表示を作る工程そのものは、<a href="./../07_ブラウザ挙動と表示のズレ/01_ブラウザが表示を作る基本フロー.html#基本フロー">ブラウザの基本フロー</a>で扱う。</p><p>ここでは「書いた値」と「現在使われている寸法」を分ければよい。<code>width</code>・<code>min-width</code>・<code>max-width</code>の役割や、<code>min()</code>・<code>max()</code>・<code>clamp()</code>との区別を短く引く場合は、<a href="./../../../05_参照/CSSのサイズ指定と関数.html">CSSのサイズ指定と関数</a>で確認する。</p><h2 id="devtoolsのボックスモデル図を見る" tabindex="-1">DevToolsのボックスモデル図を見る <a class="header-anchor" href="#devtoolsのボックスモデル図を見る" aria-label="Permalink to &quot;DevToolsのボックスモデル図を見る&quot;">​</a></h2><p>DevToolsのボックスモデル図に表示される中央の寸法や周囲の数値は、CSSファイルに書いた宣言をそのまま並べたものではない。</p><p>ブラウザが親の幅、内容、<code>box-sizing</code> などを使って決めた、現在の <code>content / padding / border / margin</code> の寸法として読む。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>CSSに書いた指定</span></span>
<span class="line"><span>→ どの指定を使うか決まる</span></span>
<span class="line"><span>→ 配置に使う寸法が決まる</span></span>
<span class="line"><span>→ DevToolsのボックスモデル図で確認する</span></span></code></pre></div><p>ここでは「どの領域が何pxか」を画面と対応させればよい。</p><p>計算値、使用値、Layout、Paintの違いまで必要になったら第7章へ進む。</p><p>次は<a href="./08_パーセント指定と包含ブロック.html">パーセント指定と包含ブロック</a>で、割合指定が何を基準に計算されるか確認する。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/css-cascade-5/#used" target="_blank" rel="noreferrer">CSS Cascading and Inheritance Module Level 5 - Used Values</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/07_CSSに書いた値と実際の寸法を分ける.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_CSS_______________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07_CSS_______________ as default
};
