import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"01_レスポンシブ画像設計の選び方","description":"","frontmatter":{},"headers":[{"level":2,"title":"表示領域をどう決めるか","slug":"表示領域をどう決めるか","link":"#表示領域をどう決めるか","children":[]},{"level":2,"title":"枠の中で画像をどう見せるか","slug":"枠の中で画像をどう見せるか","link":"#枠の中で画像をどう見せるか","children":[]},{"level":2,"title":"画像そのものや画像候補を変えるか","slug":"画像そのものや画像候補を変えるか","link":"#画像そのものや画像候補を変えるか","children":[]}],"relativePath":"02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.md","filePath":"02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="01_レスポンシブ画像設計の選び方" tabindex="-1">01_レスポンシブ画像設計の選び方 <a class="header-anchor" href="#01_レスポンシブ画像設計の選び方" aria-label="Permalink to &quot;01_レスポンシブ画像設計の選び方&quot;">​</a></h1><p>画像を実装するときは、まず次の二つを分けて考える。</p><ol><li>画像を表示する領域の大きさ・形をどう決めるか</li><li>その領域の中で画像をどう見せるか</li></ol><p>表示領域を作ることと、画像を切り抜くことは別の判断である。<code>aspect-ratio</code>や<code>height</code>だけで画像がトリミングされるわけではない。</p><h2 id="表示領域をどう決めるか" tabindex="-1">表示領域をどう決めるか <a class="header-anchor" href="#表示領域をどう決めるか" aria-label="Permalink to &quot;表示領域をどう決めるか&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>画像自身の比率で高さを決める</span></span>
<span class="line"><span>└─ 画像全体を自然比率で表示する → 02</span></span>
<span class="line"><span></span></span>
<span class="line"><span>画像ファイルの自然比率とは別に表示領域の形を決める</span></span>
<span class="line"><span>├─ 幅に応じて高さも変えたい → 04 比率で表示領域を作る</span></span>
<span class="line"><span>└─ 高さそのものを決めたい → 05 高さで表示領域を作る</span></span></code></pre></div><p>ロゴやバッジなど、画像の端まで見せて大きさだけ調整する場合は<a href="./02_画像全体を自然比率で表示する.html">画像全体を自然比率で表示する</a>を読む。自然幅より大きくせずに収めるか、カード幅いっぱいに広げるかで迷ったら、同記事の<a href="./02_画像全体を自然比率で表示する.html#widthとmax-widthを使い分ける">widthとmax-widthの使い分け</a>で比較する。決められた形の枠へ画像を入れる場合は、幅が変わったときに高さも比率に従って変えるか、高さを保つかで04・05を選ぶ。基準のSP・PCカンプだけで決めず、中間幅でどう変化させたいかも確認する。</p><h2 id="枠の中で画像をどう見せるか" tabindex="-1">枠の中で画像をどう見せるか <a class="header-anchor" href="#枠の中で画像をどう見せるか" aria-label="Permalink to &quot;枠の中で画像をどう見せるか&quot;">​</a></h2><p>表示領域を決めたあと、その中で画像全体を見せるか、領域いっぱいに埋めるかを選ぶ。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>全体を残す           → object-fit: contain</span></span>
<span class="line"><span>領域いっぱいに埋める → object-fit: cover</span></span>
<span class="line"><span>                       画像と領域の比率が違えば一部が切れる</span></span>
<span class="line"><span>見せる位置を調整する → object-position</span></span></code></pre></div><p>選び方と最小例は<a href="./03_決めた表示領域に画像を合わせる.html">決めた表示領域に画像を合わせる</a>で扱う。親の表示枠、<code>img</code>要素の箱、画像内容の詳しい関係や、親と<code>img</code>のどちらに寸法を持たせるかは<a href="./../11_メディアの表示枠と重ね配置/02_表示枠・画像要素・画像内容の役割を分ける.html">表示枠・画像要素・画像内容の役割を分ける</a>で確認する。</p><h2 id="画像そのものや画像候補を変えるか" tabindex="-1">画像そのものや画像候補を変えるか <a class="header-anchor" href="#画像そのものや画像候補を変えるか" aria-label="Permalink to &quot;画像そのものや画像候補を変えるか&quot;">​</a></h2><p>SPとPCなどで構図や画像内容を変える場合は、表示領域の作り方とは別に<a href="./06_画像切替.html">画像切替</a>を判断する。画像を切り替えた後も、自然比率で見せるか、決めた領域に収めるかは選べる。</p><p>内容や構図は同じで、表示幅や画面密度に合うファイルをブラウザへ選ばせる場合は<a href="./07_srcsetとsizesで画像候補を選ぶ.html"><code>srcset</code>と<code>sizes</code>で画像候補を選ぶ</a>を読む。すべての記事を番号順に読む必要はない。</p><p>画像ファイルの書き出し寸法と、CSS上の表示領域は別である。Figmaで書き出し高さを判断する場合は<span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">画像レイヤーから書き出し寸法を求める</span>で扱う。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_______________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_______________ as default
};
