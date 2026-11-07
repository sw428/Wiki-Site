import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"配置の基本で確認したいことから読む","description":"","frontmatter":{},"headers":[{"level":2,"title":"確認したいことから選ぶ","slug":"確認したいことから選ぶ","link":"#確認したいことから選ぶ","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/09_レイアウト/02_配置の基本/01_配置の基本で確認したいことから読む.md","filePath":"02_基礎/01_HTML・CSS/09_レイアウト/02_配置の基本/01_配置の基本で確認したいことから読む.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/09_レイアウト/02_配置の基本/01_配置の基本で確認したいことから読む.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="配置の基本で確認したいことから読む" tabindex="-1">配置の基本で確認したいことから読む <a class="header-anchor" href="#配置の基本で確認したいことから読む" aria-label="Permalink to &quot;配置の基本で確認したいことから読む&quot;">​</a></h1><p>要素を並べる前に、今の並び、配置する親、幅を制限する箱、余白を置く境界を確認したいときに読む。Flex・Gridのどちらでも使う考え方を、疑問に合わせて選ぶ。</p><h2 id="確認したいことから選ぶ" tabindex="-1">確認したいことから選ぶ <a class="header-anchor" href="#確認したいことから選ぶ" aria-label="Permalink to &quot;確認したいことから選ぶ&quot;">​</a></h2><table tabindex="0"><thead><tr><th>確認したいこと</th><th>この記事で分かること</th><th>読むページ</th></tr></thead><tbody><tr><td>指定を増やす前の並びを知りたい</td><td>通常フローを配置の比較基準にする</td><td><a href="./02_通常フローを基準にする.html">通常フローを基準にする</a></td></tr><tr><td>FlexとGridのどちらを、どこへ指定するか迷う</td><td>直下の子を並べる親と、配置方法の選択</td><td><a href="./03_FlexとGridで直下の子を並べる.html">FlexとGridで直下の子を並べる</a></td></tr><tr><td>入れ子のFlex・Gridが重複に見える</td><td>外側で配置される役割と、内側を並べる役割</td><td><a href="./04_親子のレイアウト文脈を区別する.html">親子のレイアウト文脈を区別する</a></td></tr><tr><td>背景は画面幅、中身だけ一定幅にしたい</td><td>全幅の外側と最大幅を持つ内側の分担</td><td><a href="./05_コンテンツの最大幅と左右余白を作る.html">コンテンツの最大幅と左右余白を作る</a></td></tr><tr><td>どの箱へ余白を書けばよいか迷う</td><td>要素間、別ブロック間、枠と中身の区別</td><td><a href="./06_gapとmarginとpaddingを使い分ける.html">gapとmarginとpaddingを使い分ける</a></td></tr><tr><td>縦marginが足し算にならない</td><td>相殺が起きている場所の確認</td><td><a href="./07_marginの相殺が起きる場所を確認する.html">marginの相殺が起きる場所を確認する</a></td></tr></tbody></table><p>全部を順に読む必要はない。marginの相殺も、その挙動で困ったときに戻ればよい。</p><p>配置方法を決めたら、<a href="./../03_Flex/01_Flexで調整したいことから読む.html">Flexの位置と幅</a>、または<a href="./../04_Grid/01_Gridはどんなレイアウトで使う.html">Gridの列・行・配置</a>へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/09_レイアウト/02_配置の基本/01_配置の基本で確認したいことから読む.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01__________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01__________________ as default
};
