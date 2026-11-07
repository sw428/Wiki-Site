import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"07_absoluteの子がFlexで中央に見える条件を調べる","description":"","frontmatter":{},"headers":[{"level":2,"title":"absoluteの子をFlexで中央へ置く場合","slug":"absoluteの子をflexで中央へ置く場合","link":"#absoluteの子をflexで中央へ置く場合","children":[]},{"level":2,"title":"確認順","slug":"確認順","link":"#確認順","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"03_詳細/01_HTML・CSS/07_absoluteの子がFlexで中央に見える条件を調べる.md","filePath":"03_詳細/01_HTML・CSS/07_absoluteの子がFlexで中央に見える条件を調べる.md"}');
const _sfc_main = { name: "03_詳細/01_HTML・CSS/07_absoluteの子がFlexで中央に見える条件を調べる.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="07_absoluteの子がflexで中央に見える条件を調べる" tabindex="-1">07_absoluteの子がFlexで中央に見える条件を調べる <a class="header-anchor" href="#07_absoluteの子がflexで中央に見える条件を調べる" aria-label="Permalink to &quot;07_absoluteの子がFlexで中央に見える条件を調べる&quot;">​</a></h1><p>絶対配置した子がFlexコンテナ内で中央に見える場合でも、通常のFlexアイテムとして配置されているとは限らない。位置計算とFlexの整列を分ける。</p><h2 id="absoluteの子をflexで中央へ置く場合" tabindex="-1">absoluteの子をFlexで中央へ置く場合 <a class="header-anchor" href="#absoluteの子をflexで中央へ置く場合" aria-label="Permalink to &quot;absoluteの子をFlexで中央へ置く場合&quot;">​</a></h2><p>Flexコンテナ直下の絶対配置要素は通常のflex itemではないが、両側のinsetが<code>auto</code>の軸では、static positionの計算に<code>justify-content</code>や<code>align-items</code>が関係し、中央へ見える場合がある。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.frame</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">relative</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">absolute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>仕様上成立するが、重ねる範囲を明示したい共有コードでは、子へ<code>inset: 0</code>を指定し、その子の中をGridで中央寄せする方が役割を読み取りやすい。<code>left: 0</code>など具体的なinsetを加えた場合は、カスケードの強さではなく位置計算の条件が変わる。</p><h2 id="確認順" tabindex="-1">確認順 <a class="header-anchor" href="#確認順" aria-label="Permalink to &quot;確認順&quot;">​</a></h2><ol><li>子が<code>position: absolute</code>で通常フローから外れているか確認する。</li><li><code>inset</code>の各値が<code>auto</code>か具体値か確認する。</li><li>重ねる範囲を明示したいなら、子へ<code>inset: 0</code>を指定し、その子の内部で中央寄せする方法と比較する。</li><li>位置計算の条件とカスケードの強さを混同しない。</li></ol><p>基本的な重ね配置は、<a href="./../../02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/05_画像の上に文字や部品を重ねる.html">画像の上に文字や部品を重ねる</a>へ戻る。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://www.w3.org/TR/css-flexbox-1/#abspos-items" target="_blank" rel="noreferrer">CSS Flexible Box Layout Module Level 1: Absolutely-positioned flex children</a></li><li><a href="https://drafts.csswg.org/css-align-3/#align-self-property" target="_blank" rel="noreferrer">CSS Box Alignment Module Level 3: align-self</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("03_詳細/01_HTML・CSS/07_absoluteの子がFlexで中央に見える条件を調べる.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _07_absolute___Flex_____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _07_absolute___Flex_____________ as default
};
