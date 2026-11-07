import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Flexで調整したいことから読む","description":"","frontmatter":{},"headers":[{"level":2,"title":"調整したいことから選ぶ","slug":"調整したいことから選ぶ","link":"#調整したいことから選ぶ","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/09_レイアウト/03_Flex/01_Flexで調整したいことから読む.md","filePath":"02_基礎/01_HTML・CSS/09_レイアウト/03_Flex/01_Flexで調整したいことから読む.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/09_レイアウト/03_Flex/01_Flexで調整したいことから読む.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flexで調整したいことから読む" tabindex="-1">Flexで調整したいことから読む <a class="header-anchor" href="#flexで調整したいことから読む" aria-label="Permalink to &quot;Flexで調整したいことから読む&quot;">​</a></h1><p>Flexで子を並べた後、位置を揃えたいのか、使う幅を分けたいのかで読む先を選ぶ。</p><h2 id="調整したいことから選ぶ" tabindex="-1">調整したいことから選ぶ <a class="header-anchor" href="#調整したいことから選ぶ" aria-label="Permalink to &quot;調整したいことから選ぶ&quot;">​</a></h2><table tabindex="0"><thead><tr><th>調整したいこと</th><th>確認すること</th><th>読むページ</th></tr></thead><tbody><tr><td>子全体を中央・端へ寄せたい。一つの子だけ右や下へ送りたい</td><td>主軸と交差軸、全体と一つの子の違い</td><td><a href="./02_Flexで子の位置を揃える.html">Flexで子の位置を揃える</a></td></tr><tr><td>サイドは固定し、メインだけ残り幅を使いたい</td><td>固定側・可変側・縮んでよい側の役割</td><td><a href="./03_Flexで固定幅と可変幅を組み合わせる.html">Flexで固定幅と可変幅を組み合わせる</a></td></tr></tbody></table><p>FlexとGridの選択から確認したい場合は、<a href="./../02_配置の基本/03_FlexとGridで直下の子を並べる.html">直下の子を並べる方法</a>へ戻る。</p><p>配置を作れたら、幅を変えて確認し、必要に応じて<a href="./../05_配置が成立する幅でブレークポイントを決める.html">配置が成立する幅からブレークポイントを決める</a>。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/09_レイアウト/03_Flex/01_Flexで調整したいことから読む.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_Flex____________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_Flex____________ as default
};
