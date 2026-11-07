import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"リストの既定表示を整える","description":"","frontmatter":{},"headers":[{"level":2,"title":"marginだけでは消えない表示を見る","slug":"marginだけでは消えない表示を見る","link":"#marginだけでは消えない表示を見る","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/14_リストの既定表示を整える.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/14_リストの既定表示を整える.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/14_リストの既定表示を整える.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="リストの既定表示を整える" tabindex="-1">リストの既定表示を整える <a class="header-anchor" href="#リストの既定表示を整える" aria-label="Permalink to &quot;リストの既定表示を整える&quot;">​</a></h1><p>リストでは、<code>margin</code> を消しても字下げやマーカーが残ることがある。</p><h2 id="marginだけでは消えない表示を見る" tabindex="-1">marginだけでは消えない表示を見る <a class="header-anchor" href="#marginだけでは消えない表示を見る" aria-label="Permalink to &quot;marginだけでは消えない表示を見る&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  padding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>padding</code> は <code>margin</code> とは別のプロパティなので、字下げの原因になっている場合は別に確認する。</p><p>マーカーを消す場合は <code>list-style</code> も別に確認する。</p><p>既定表示をどこまで消すかは、リストをどのように見せたいかで決める。</p><p>「リセットだから全部消す」と決めず、DevToolsで現在の <code>margin</code>、<code>padding</code>、マーカーを確認してから必要な指定を選ぶ。</p><p>bodyや見出し、段落などの既定marginは<a href="./13_既定の余白をどこまで消すか決める.html">既定の余白をどこまで消すか決める</a>で扱う。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/14_リストの既定表示を整える.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _14_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _14_____________ as default
};
