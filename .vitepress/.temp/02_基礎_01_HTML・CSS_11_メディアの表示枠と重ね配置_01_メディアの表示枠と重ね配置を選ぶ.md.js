import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"01_メディアの表示枠と重ね配置を選ぶ","description":"","frontmatter":{},"headers":[],"relativePath":"02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/01_メディアの表示枠と重ね配置を選ぶ.md","filePath":"02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/01_メディアの表示枠と重ね配置を選ぶ.md"}');
const _sfc_main = { name: "02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/01_メディアの表示枠と重ね配置を選ぶ.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="01_メディアの表示枠と重ね配置を選ぶ" tabindex="-1">01_メディアの表示枠と重ね配置を選ぶ <a class="header-anchor" href="#01_メディアの表示枠と重ね配置を選ぶ" aria-label="Permalink to &quot;01_メディアの表示枠と重ね配置を選ぶ&quot;">​</a></h1><p>実装中の疑問から確認先を選ぶ。すべてを順番に読む必要はない。</p><table tabindex="0"><thead><tr><th>確認したいこと</th><th>読む場所</th></tr></thead><tbody><tr><td>枠・画像要素・画像内容のどこへCSSを書くか</td><td><a href="./02_表示枠・画像要素・画像内容の役割を分ける.html">表示枠・画像要素・画像内容の役割を分ける</a></td></tr><tr><td><code>height: 100%</code>が親まで広がらない</td><td><a href="./../05_ボックスとdisplay/11_heightのパーセントが効く条件.html">heightのパーセントが効く条件</a></td></tr><tr><td>画像読み込み前に場所を確保したい</td><td><a href="./03_画像の読み込み前に表示領域を予約する.html">画像の読み込み前に表示領域を予約する</a></td></tr><tr><td>予約が効いているかDevToolsで確認したい</td><td><a href="./04_画像読み込み前後の表示領域を確認する.html">画像読み込み前後の表示領域を確認する</a></td></tr><tr><td>画像の上へ文字やラベルを重ねたい</td><td><a href="./05_画像の上に文字や部品を重ねる.html">画像の上に文字や部品を重ねる</a></td></tr><tr><td>地図ピンなどを特定位置へ置きたい</td><td><a href="./06_画像上の特定位置に部品を置く.html">画像上の特定位置に部品を置く</a></td></tr><tr><td>absoluteの子がFlexで中央に見える理由を確認したい</td><td><a href="./../../../03_詳細/01_HTML・CSS/07_absoluteの子がFlexで中央に見える条件を調べる.html">absoluteの子がFlexで中央に見える条件を調べる</a></td></tr><tr><td><code>video</code>を自然比率か比率枠で表示したい</td><td><a href="./07_動画を自然比率か比率枠で表示する.html">動画を自然比率か比率枠で表示する</a></td></tr><tr><td>動画と重ねる部品の切り抜き範囲を分けたい</td><td><a href="./08_動画と重ねる部品の枠を分ける.html">動画と重ねる部品の枠を分ける</a></td></tr></tbody></table><p>画像の意味や形式は<a href="./../10_画像と背景/01_画像と背景で迷ったときの確認順.html">画像と背景で迷ったときの確認順</a>、画像の比率や<code>object-fit</code>、画像候補は<a href="./../12_レスポンシブ画像設計/01_レスポンシブ画像設計の選び方.html">レスポンシブ画像設計の選び方</a>で扱う。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("02_基礎/01_HTML・CSS/11_メディアの表示枠と重ね配置/01_メディアの表示枠と重ね配置を選ぶ.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01_________________ as default
};
