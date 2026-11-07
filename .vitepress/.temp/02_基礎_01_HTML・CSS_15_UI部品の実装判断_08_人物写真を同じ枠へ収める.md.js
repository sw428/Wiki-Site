import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"08_人物写真を同じ枠へ収める","description":"","frontmatter":{},"headers":[],"relativePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/08_人物写真を同じ枠へ収める.md","filePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/08_人物写真を同じ枠へ収める.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/15_UI部品の実装判断/08_人物写真を同じ枠へ収める.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="08_人物写真を同じ枠へ収める" tabindex="-1">08_人物写真を同じ枠へ収める <a class="header-anchor" href="#08_人物写真を同じ枠へ収める" aria-label="Permalink to &quot;08_人物写真を同じ枠へ収める&quot;">​</a></h1><p>人物写真の見た目をそろえるときは、画像ファイルそのものではなく、外側の表示枠をそろえる。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.frame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">180</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  aspect-ratio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> / </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.frame</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  object-fit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li>正方形を守る: 外側の枠</li><li>枠へ画像を合わせる: <code>width: 100%</code>と<code>height: 100%</code></li><li>枠を埋めて切り抜く: <code>object-fit: cover</code></li></ul><p><code>height: 100%</code>だけでは画像の横幅まで枠へそろわない。固定寸法が必要なら枠として固定する。SPで変える場合はメディアクエリや<code>clamp()</code>で枠サイズを切り替える。横並びで縮ませたくない場合だけ<code>flex-shrink</code>を検討する。</p><p>画像枠と切り抜きの選択は<a href="./../12_レスポンシブ画像設計/04_比率で表示領域を作る.html">比率で表示領域を作る</a>と<a href="./../12_レスポンシブ画像設計/03_決めた表示領域に画像を合わせる.html">決めた表示領域に画像を合わせる</a>で確認する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/15_UI部品の実装判断/08_人物写真を同じ枠へ収める.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _08_____________ as default
};
