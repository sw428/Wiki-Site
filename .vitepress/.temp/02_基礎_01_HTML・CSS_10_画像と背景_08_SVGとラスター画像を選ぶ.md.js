import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"08_SVGとラスター画像を選ぶ","description":"","frontmatter":{},"headers":[{"level":2,"title":"ベクターとラスターを見分ける","slug":"ベクターとラスターを見分ける","link":"#ベクターとラスターを見分ける","children":[]},{"level":2,"title":"写真をSVGにしてもベクターにはならない","slug":"写真をsvgにしてもベクターにはならない","link":"#写真をsvgにしてもベクターにはならない","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/08_SVGとラスター画像を選ぶ.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/08_SVGとラスター画像を選ぶ.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/08_SVGとラスター画像を選ぶ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="08_svgとラスター画像を選ぶ" tabindex="-1">08_SVGとラスター画像を選ぶ <a class="header-anchor" href="#08_svgとラスター画像を選ぶ" aria-label="Permalink to &quot;08_SVGとラスター画像を選ぶ&quot;">​</a></h1><p>SVGかラスター画像かは拡張子の好みではなく、素材が図形か画素の集まりかで判断する。</p><h2 id="ベクターとラスターを見分ける" tabindex="-1">ベクターとラスターを見分ける <a class="header-anchor" href="#ベクターとラスターを見分ける" aria-label="Permalink to &quot;ベクターとラスターを見分ける&quot;">​</a></h2><table tabindex="0"><thead><tr><th>種類</th><th>中身</th><th>向く素材</th></tr></thead><tbody><tr><td>SVG</td><td>線、図形、座標、塗りなどを記述する。ラスター画像を内部へ埋め込むこともできる</td><td>ロゴ、アイコン、線画、図形、アウトライン文字</td></tr><tr><td>ラスター画像</td><td>幅と高さを持つ画素の集まり</td><td>写真、質感、複雑な色変化</td></tr></tbody></table><p>SVGは二次元のベクター表現に向くが、SVGという外枠の中へJPEGやPNGを入れることもできる。拡張子が <code>.svg</code> であることと、中の素材がすべてベクターであることは同じではない。</p><h2 id="写真をsvgにしてもベクターにはならない" tabindex="-1">写真をSVGにしてもベクターにはならない <a class="header-anchor" href="#写真をsvgにしてもベクターにはならない" aria-label="Permalink to &quot;写真をSVGにしてもベクターにはならない&quot;">​</a></h2><p>写真は細かな色の変化を多数の画素で表す。SVGへ変換する方法はあるが、処理内容を分けて考える。</p><ul><li>写真を輪郭抽出してベクター化する: 多数のpathと塗りが必要になり、見た目・容量・描画負荷が写真向け形式より適するとは限らない</li><li>写真をSVGの <code>image</code> 要素へ埋め込む: 中身はラスターのままで、拡大に強い図形へ変わらない</li></ul><p>したがって「写真をSVGにすると必ず巨大になる」とは断定しない。写真には通常、写真向け圧縮形式を使う方が目的に合う、と判断する。</p><p>ラスター画像を選んだ後のPNG・JPEG・WebP・AVIFの判断は<a href="./09_ラスター画像の形式を選ぶ.html">ラスター画像の形式を選ぶ</a>へ進む。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/08_SVGとラスター画像を選ぶ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _08_SVG__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _08_SVG__________ as default
};
