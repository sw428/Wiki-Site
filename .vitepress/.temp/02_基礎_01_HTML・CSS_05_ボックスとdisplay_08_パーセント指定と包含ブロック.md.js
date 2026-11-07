import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"パーセント指定と包含ブロック","description":"","frontmatter":{},"headers":[{"level":2,"title":"%の参照先はプロパティごとに違う","slug":"の参照先はプロパティごとに違う","link":"#の参照先はプロパティごとに違う","children":[]},{"level":2,"title":"通常の入れ子では親が基準になることが多い","slug":"通常の入れ子では親が基準になることが多い","link":"#通常の入れ子では親が基準になることが多い","children":[]},{"level":2,"title":"仕様確認先","slug":"仕様確認先","link":"#仕様確認先","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/08_パーセント指定と包含ブロック.md","filePath":"02_基礎/01_HTML・CSS/05_ボックスとdisplay/08_パーセント指定と包含ブロック.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/05_ボックスとdisplay/08_パーセント指定と包含ブロック.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="パーセント指定と包含ブロック" tabindex="-1">パーセント指定と包含ブロック <a class="header-anchor" href="#パーセント指定と包含ブロック" aria-label="Permalink to &quot;パーセント指定と包含ブロック&quot;">​</a></h1><p><code>%</code> は単独で「親に対する割合」を意味する単位ではない。</p><p>何を基準に計算するかは、<code>%</code> を使うプロパティごとに決まる。</p><h2 id="の参照先はプロパティごとに違う" tabindex="-1">%の参照先はプロパティごとに違う <a class="header-anchor" href="#の参照先はプロパティごとに違う" aria-label="Permalink to &quot;%の参照先はプロパティごとに違う&quot;">​</a></h2><p>次の二つは別に確認する。</p><ol><li>その <code>%</code> は何を参照して計算されるか</li><li>そのプロパティの値は子へ継承されるか</li></ol><table tabindex="0"><thead><tr><th>指定</th><th>主な参照先</th><th>プロパティの継承</th></tr></thead><tbody><tr><td><code>width: 50%</code></td><td>包含ブロックの幅</td><td>しない</td></tr><tr><td><code>height: 50%</code></td><td>包含ブロックの高さ</td><td>しない</td></tr><tr><td><code>font-size: 150%</code></td><td>親要素の文字サイズ</td><td>する</td></tr><tr><td><code>line-height: 150%</code></td><td>指定した要素自身の文字サイズ</td><td>する</td></tr></tbody></table><p><code>line-height: 150%</code> は、指定した要素自身の文字サイズから計算された長さが子へ継承される。子の文字サイズに合わせて150%を計算し直すわけではない。子ごとに文字サイズを基準に計算させたい場合は、単位なしの数値との違いを<a href="./../08_インラインと行の仕組み/02_line-heightの指定値と継承.html">line-heightの指定値と継承</a>で確認する。</p><p>親が <code>width: 800px</code> でも、その800pxが子へ継承されるわけではない。</p><p>子自身に <code>width: 50%</code> を指定したとき、子の幅を計算するために包含ブロックの幅を参照する。</p><h2 id="通常の入れ子では親が基準になることが多い" tabindex="-1">通常の入れ子では親が基準になることが多い <a class="header-anchor" href="#通常の入れ子では親が基準になることが多い" aria-label="Permalink to &quot;通常の入れ子では親が基準になることが多い&quot;">​</a></h2><p>通常フローの単純な入れ子では、直近の親要素が作る領域を基準に幅を計算することが多い。</p><p>そのため、実務では「親幅の50%」という説明で結果が合う場面も多い。</p><p>ただし、正確な基準はDOM上の親という名前ではなく、その要素の包含ブロックである。</p><p>DOM上の親と包含ブロックが一致しない例は、<a href="./10_DOM上の親と包含ブロックを区別する.html">DOM上の親と包含ブロックを区別する</a>で確認する。</p><p>次は<a href="./09_widthのautoと100パーセントを比べる.html">widthのautoと100パーセントを比べる</a>で、包含ブロックを使って幅が決まる例を見る。</p><h2 id="仕様確認先" tabindex="-1">仕様確認先 <a class="header-anchor" href="#仕様確認先" aria-label="Permalink to &quot;仕様確認先&quot;">​</a></h2><ul><li><a href="https://drafts.csswg.org/css-sizing-3/#percentage-sizing" target="_blank" rel="noreferrer">CSS Box Sizing Module Level 3 - Percentage Sizing</a></li><li><a href="https://drafts.csswg.org/css-fonts-4/#font-size-prop" target="_blank" rel="noreferrer">CSS Fonts Module Level 4 - <code>font-size</code></a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/05_ボックスとdisplay/08_パーセント指定と包含ブロック.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08_______________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _08_______________ as default
};
