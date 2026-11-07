import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"11_MVの表示領域を作る","description":"","frontmatter":{},"headers":[{"level":2,"title":"高さを決める材料","slug":"高さを決める材料","link":"#高さを決める材料","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/11_MVの表示領域を作る.md","filePath":"02_基礎/01_HTML・CSS/15_UI部品の実装判断/11_MVの表示領域を作る.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/15_UI部品の実装判断/11_MVの表示領域を作る.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="11_mvの表示領域を作る" tabindex="-1">11_MVの表示領域を作る <a class="header-anchor" href="#11_mvの表示領域を作る" aria-label="Permalink to &quot;11_MVの表示領域を作る&quot;">​</a></h1><p>MVでは、画像だけでなく文字や導線も含めて成立する表示領域を先に考える。</p><h2 id="高さを決める材料" tabindex="-1">高さを決める材料 <a class="header-anchor" href="#高さを決める材料" aria-label="Permalink to &quot;高さを決める材料&quot;">​</a></h2><ul><li>領域の高さ: <code>min-height</code>、<code>aspect-ratio</code>、<code>padding</code></li><li>写真の切り抜き: <code>object-fit</code>、<code>object-position</code></li><li>文字の安全領域: 内側コンテナ、余白、最大幅</li><li>重ねる基準: 親の<code>position: relative</code></li></ul><p>切り抜きを許容できる写真なら<code>cover</code>を使える。顔、文字、商品全体などが切れる場合は、PC/SPで画像を分けるか、全体を見せる方法を検討する。</p><p>固定高が小さすぎると、文字量やSP表示で内容が詰まる。高さ自体がデザイン要件でなければ、<code>min-height</code>と内側余白で内容増加を受けられるか確認する。</p><p>重ね配置は<a href="./../11_メディアの表示枠と重ね配置/05_画像の上に文字や部品を重ねる.html">画像の上に文字や部品を重ねる</a>、画像の表示領域は<a href="./../12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.html">レスポンシブ画像設計の選び方</a>へ戻る。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/15_UI部品の実装判断/11_MVの表示領域を作る.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _11_MV________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _11_MV________ as default
};
