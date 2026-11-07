import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"10_外部SVGとインラインSVGを使い分ける","description":"","frontmatter":{},"headers":[{"level":2,"title":"外部SVGをimgで読む","slug":"外部svgをimgで読む","link":"#外部svgをimgで読む","children":[]},{"level":2,"title":"HTML側から内部を操作するならインラインSVG","slug":"html側から内部を操作するならインラインsvg","link":"#html側から内部を操作するならインラインsvg","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/10_画像と背景/10_外部SVGとインラインSVGを使い分ける.md","filePath":"02_基礎/01_HTML・CSS/10_画像と背景/10_外部SVGとインラインSVGを使い分ける.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/10_画像と背景/10_外部SVGとインラインSVGを使い分ける.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="10_外部svgとインラインsvgを使い分ける" tabindex="-1">10_外部SVGとインラインSVGを使い分ける <a class="header-anchor" href="#10_外部svgとインラインsvgを使い分ける" aria-label="Permalink to &quot;10_外部SVGとインラインSVGを使い分ける&quot;">​</a></h1><p>デザインツールから書き出したSVGは、まず外部画像として使えるか確認する。HTML側からSVG内部の要素を操作する必要がある場合だけ、インラインSVGを検討する。</p><h2 id="外部svgをimgで読む" tabindex="-1">外部SVGをimgで読む <a class="header-anchor" href="#外部svgをimgで読む" aria-label="Permalink to &quot;外部SVGをimgで読む&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./img/title.svg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;サービスの特徴&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;320&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;80&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>SVG内部に多数の <code>path</code> があっても、個数だけを理由にHTMLへ転記しない。書き出されたSVG文書には、path以外にも次が含まれ得る。</p><ul><li>外側の <code>svg</code> と <code>viewBox</code></li><li><code>defs</code> 内のグラデーションや再利用定義</li><li><code>clipPath</code>、<code>mask</code>、<code>filter</code></li><li><code>g</code> のグループ化や座標変換</li><li><code>id</code> を使った参照関係</li></ul><p>pathだけを抜くと、座標系、表示範囲、塗り、マスク、参照関係が失われる可能性がある。内部を操作しない固定素材なら、SVG文書全体を外部ファイルとして保つ方が、HTMLとの境界を維持しやすい。</p><h2 id="html側から内部を操作するならインラインsvg" tabindex="-1">HTML側から内部を操作するならインラインSVG <a class="header-anchor" href="#html側から内部を操作するならインラインsvg" aria-label="Permalink to &quot;HTML側から内部を操作するならインラインSVG&quot;">​</a></h2><p><code>&lt;img src=&quot;icon.svg&quot;&gt;</code> で読むSVGは別の画像リソースとして処理される。HTML側のセレクタから、そのSVG文書内の個々のpathを直接選んで変更する用途には向かない。</p><p>次の必要がある場合は、HTML内へ <code>svg</code> 要素を置く方法を検討する。</p><ul><li>内部のpathごとに色や状態を変える</li><li>SVG内部の要素をJavaScriptで操作する</li><li>HTML側のクラスと同じDOM内で詳細に制御する</li></ul><p>インライン化するときも、pathだけでなく、必要な<code>svg</code>、<code>viewBox</code>、<code>defs</code>、参照関係をまとめて扱う。インライン化はHTML量、再利用方法、キャッシュ、保守対象も変えるため、「色を変えたい」だけなら<a href="./06_mask-imageで単色アイコンを作る.html">mask-imageで単色アイコンを作る</a>で足りるかも比較する。</p><p>一つのSVGに含める部品の範囲は<a href="./11_SVGファイルを分ける単位を決める.html">SVGファイルを分ける単位を決める</a>で別に判断する。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/10_画像と背景/10_外部SVGとインラインSVGを使い分ける.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _10___SVG______SVG______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _10___SVG______SVG______ as default
};
