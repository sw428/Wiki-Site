import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"widthが箱ごとに決まる流れ","description":"","frontmatter":{},"headers":[{"level":2,"title":"まず親の幅が決まる","slug":"まず親の幅が決まる","link":"#まず親の幅が決まる","children":[]},{"level":2,"title":"次に子の幅が決まる","slug":"次に子の幅が決まる","link":"#次に子の幅が決まる","children":[]},{"level":2,"title":"autoの見え方は箱の種類で変わる","slug":"autoの見え方は箱の種類で変わる","link":"#autoの見え方は箱の種類で変わる","children":[]},{"level":2,"title":"まず見る順序","slug":"まず見る順序","link":"#まず見る順序","children":[]}],"relativePath":"01_導入/01_HTML・CSS/05_ボックスとdisplay/01_widthが箱ごとに決まる流れ.md","filePath":"01_導入/01_HTML・CSS/05_ボックスとdisplay/01_widthが箱ごとに決まる流れ.md"}');
const _sfc_main = { name: "01_導入/01_HTML・CSS/05_ボックスとdisplay/01_widthが箱ごとに決まる流れ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="widthが箱ごとに決まる流れ" tabindex="-1">widthが箱ごとに決まる流れ <a class="header-anchor" href="#widthが箱ごとに決まる流れ" aria-label="Permalink to &quot;widthが箱ごとに決まる流れ&quot;">​</a></h1><p>基礎の<a href="./../../../02_基礎/01_HTML・CSS/05_ボックスとdisplay/08_パーセント指定と包含ブロック.html">パーセント指定と包含ブロック</a>を読む前に、親と子の幅が決まる順序を確認する。</p><h2 id="まず親の幅が決まる" tabindex="-1">まず親の幅が決まる <a class="header-anchor" href="#まず親の幅が決まる" aria-label="Permalink to &quot;まず親の幅が決まる&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.parent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">380</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>通常フローのブロック要素では、<code>width</code>の初期値は<code>auto</code>である。<code>.parent</code>は外側の利用可能な幅に合わせて広がり、380pxを超える場合は<code>max-width</code>で止まる。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>外側が300px → .parentは300px</span></span>
<span class="line"><span>外側が500px → .parentは380pxで止まる</span></span></code></pre></div><p>このような場合、親に<code>width: 100%</code>を書かなくても同じ見た目になることがある。ただし、<code>auto</code>と<code>100%</code>は同じ値ではない。</p><h2 id="次に子の幅が決まる" tabindex="-1">次に子の幅が決まる <a class="header-anchor" href="#次に子の幅が決まる" aria-label="Permalink to &quot;次に子の幅が決まる&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>単純な親子では、幅が決まった<code>.parent</code>が<code>.child</code>の包含ブロックになる。子はその幅を基準に、自分の<code>width: 100%</code>を計算する。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>外側の利用可能な幅</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>.parentの幅が決まる</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>.childが.parentを基準に100%を計算する</span></span></code></pre></div><p>親の<code>width</code>が子へ継承されたわけではない。<strong>親と子が、それぞれ自分の幅を決めている。</strong></p><h2 id="autoの見え方は箱の種類で変わる" tabindex="-1"><code>auto</code>の見え方は箱の種類で変わる <a class="header-anchor" href="#autoの見え方は箱の種類で変わる" aria-label="Permalink to &quot;\`auto\`の見え方は箱の種類で変わる&quot;">​</a></h2><table tabindex="0"><thead><tr><th>箱</th><th>最初に押さえること</th></tr></thead><tbody><tr><td>通常のblock</td><td><code>width: auto</code>では利用可能な横幅を使うように決まりやすい</td></tr><tr><td>通常のinline</td><td><code>width</code>は基本的に適用されず、内容に沿って並ぶ</td></tr><tr><td>inline-block</td><td><code>width</code>を指定でき、<code>auto</code>では内容に応じた幅になりやすい</td></tr><tr><td><code>img</code>などの置換要素</td><td><code>auto</code>では固有サイズや縦横比も幅の決定に関係する</td></tr></tbody></table><p>そのため、<code>auto</code>を一律に「親いっぱい」や「中身幅」とは覚えない。</p><h2 id="まず見る順序" tabindex="-1">まず見る順序 <a class="header-anchor" href="#まず見る順序" aria-label="Permalink to &quot;まず見る順序&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① どの種類の箱か</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>② その箱にwidthが効くか</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>③ widthがauto・%・pxのどれか</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>④ %なら基準になる包含ブロックはどれか</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>⑤ max-width・min-widthで止まっていないか</span></span></code></pre></div><p><code>height</code>は通常の内容量から決まることが多いため、ここでは混ぜない。横幅の流れをつかんだら、基礎記事へ戻って割合指定の違いや包含ブロックが変わる条件を確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01_導入/01_HTML・CSS/05_ボックスとdisplay/01_widthが箱ごとに決まる流れ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_width__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_width__________ as default
};
