import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"下へ寄せるときはどの箱の余った高さを使うか","description":"","frontmatter":{},"headers":[{"level":2,"title":"覚えることは2個だけ","slug":"覚えることは2個だけ","link":"#覚えることは2個だけ","children":[]},{"level":2,"title":"一言でいうと","slug":"一言でいうと","link":"#一言でいうと","children":[]}],"relativePath":"01_導入/01_HTML・CSS/09_レイアウト/01_下へ寄せるときはどの箱の余った高さを使うか.md","filePath":"01_導入/01_HTML・CSS/09_レイアウト/01_下へ寄せるときはどの箱の余った高さを使うか.md"}');
const _sfc_main = { name: "01_導入/01_HTML・CSS/09_レイアウト/01_下へ寄せるときはどの箱の余った高さを使うか.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="下へ寄せるときはどの箱の余った高さを使うか" tabindex="-1">下へ寄せるときはどの箱の余った高さを使うか <a class="header-anchor" href="#下へ寄せるときはどの箱の余った高さを使うか" aria-label="Permalink to &quot;下へ寄せるときはどの箱の余った高さを使うか&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.card</span></span>
<span class="line"><span>├─ image</span></span>
<span class="line"><span>├─ title</span></span>
<span class="line"><span>├─ text</span></span>
<span class="line"><span>└─ date</span></span></code></pre></div><p>たとえば高さ500pxのカードがあって、中身を入れてもまだ場所が余っているとする。</p><p>画像は200px、タイトル・文章・日付を合わせた中身は150px。残りの150pxが空いているものとする。</p><p>日付を下にそろえたときのイメージは、こんな形。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌────── card 500px ──────┐</span></span>
<span class="line"><span>│ 画像 200px             │</span></span>
<span class="line"><span>├────────────────────────┤</span></span>
<span class="line"><span>│ タイトル               │</span></span>
<span class="line"><span>│ 文章                   │</span></span>
<span class="line"><span>│ 文字・dateで150px      │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>│ あまり 150px           │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>│ date                   │</span></span>
<span class="line"><span>└────────────────────────┘</span></span></code></pre></div><p>日付を一番下に置きたい。</p><p>そこで、</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>を付ける。</p><p>これはまず、</p><blockquote><p><strong>日付より上に、余っている場所を全部入れる</strong></p></blockquote><p>くらいで理解していい。</p><p>すると、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌────── card 500px ──────┐</span></span>
<span class="line"><span>│ 画像 200px             │</span></span>
<span class="line"><span>├────────────────────────┤</span></span>
<span class="line"><span>│ タイトル               │</span></span>
<span class="line"><span>│ 文章                   │</span></span>
<span class="line"><span>│ 文字・dateで150px      │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>│ ↑                      │</span></span>
<span class="line"><span>│ 余り150pxを            │</span></span>
<span class="line"><span>│ dateの上へ             │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>│ date                   │</span></span>
<span class="line"><span>└────────────────────────┘</span></span></code></pre></div><p>になる。</p><hr><p>問題は <code>.body</code> が増えたとき。</p><p>最初は、冒頭のツリーの構造だった。</p><p>つまり全部が同じ箱 <code>.card</code> に直接入っている。</p><p>だから、</p><blockquote><p><code>.card</code> に余っている場所を <code>.date</code> の上へ入れる</p></blockquote><p>でいい。</p><p>でもこう変える。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.card</span></span>
<span class="line"><span>├─ image</span></span>
<span class="line"><span>└─ body</span></span>
<span class="line"><span>   ├─ title</span></span>
<span class="line"><span>   ├─ text</span></span>
<span class="line"><span>   └─ date</span></span></code></pre></div><p>ここが大事。</p><p>今、日付 <code>.date</code> がいるのは、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.card</span></span></code></pre></div><p>の中に直接ではなく、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.body</span></span></code></pre></div><p>の中。</p><p>箱で描くと、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────── card 500px ───────────┐</span></span>
<span class="line"><span>│ 画像 200px                       │</span></span>
<span class="line"><span>│                                  │</span></span>
<span class="line"><span>│ ┌────── body 150px ──────┐       │</span></span>
<span class="line"><span>│ │ タイトル               │       │</span></span>
<span class="line"><span>│ │ 文章                   │       │</span></span>
<span class="line"><span>│ │ date                   │       │</span></span>
<span class="line"><span>│ └────────────────────────┘       │</span></span>
<span class="line"><span>│                                  │</span></span>
<span class="line"><span>│ 余り150px（bodyの外）            │</span></span>
<span class="line"><span>└──────────────────────────────────┘</span></span></code></pre></div><p>ここで <code>.body</code> が中身ぴったりの小さい箱だったら、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌────── body 150px ──────┐</span></span>
<span class="line"><span>│ タイトル               │</span></span>
<span class="line"><span>│ 文章                   │</span></span>
<span class="line"><span>│ date                   │</span></span>
<span class="line"><span>└────────────────────────┘</span></span></code></pre></div><p><strong>余っている場所がない。</strong></p><p>だから、</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>と言われても、</p><blockquote><p>「日付の上に入れる余りがないよ」</p></blockquote><p>となる。</p><p>そこでまず、</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>で <code>.body</code> を下まで伸ばす。</p><p><span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">flex: 1とは？どこがどう伸びるの？</span></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌────── body 300px ──────┐</span></span>
<span class="line"><span>│ タイトル               │</span></span>
<span class="line"><span>│ 文章                   │</span></span>
<span class="line"><span>│ date                   │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>│ 余り150px（bodyの中）  │</span></span>
<span class="line"><span>│                        │</span></span>
<span class="line"><span>└────────────────────────┘</span></span></code></pre></div><p>これで <code>.body</code> の中に余る場所ができる。箱が伸びただけなので、日付を下へ寄せるのは次の指定。</p><p>そのあと、</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  margin-top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>で、その余りを日付の上へ入れる。</p><h2 id="覚えることは2個だけ" tabindex="-1">覚えることは2個だけ <a class="header-anchor" href="#覚えることは2個だけ" aria-label="Permalink to &quot;覚えることは2個だけ&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>① 日付は、どの箱の中にいる？</span></span>
<span class="line"><span>② その箱には、余っている高さがある？</span></span></code></pre></div><p>これだけ。</p><p><code>.date</code> が <code>.card</code> の中に直接いるなら、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.card の余りを使う</span></span></code></pre></div><p><code>.date</code> が <code>.body</code> の中にいるなら、</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.body の余りを使う</span></span></code></pre></div><p>でも <code>.body</code> に余りがないなら、</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>などで、まず <code>.body</code> を伸ばす。</p><h2 id="一言でいうと" tabindex="-1">一言でいうと <a class="header-anchor" href="#一言でいうと" aria-label="Permalink to &quot;一言でいうと&quot;">​</a></h2><blockquote><p><strong>下へ寄せたいものが「どの箱の中にいるか」を見る。その箱に空いている場所があれば、その空きを上に入れて下へ押せる。</strong></p></blockquote><p>ここでは箱の中身を縦Flexで並べているものとする。必要な設定は、<a href="./../../../02_基礎/01_HTML・CSS/15_UI部品の実装判断/07_カードの可変本文と下寄せ要素を両立する.html">02のカード下寄せのコード</a>で確認できる。</p><p><span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">ここまで説明しないとわからないのはなぜ</span></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("01_導入/01_HTML・CSS/09_レイアウト/01_下へ寄せるときはどの箱の余った高さを使うか.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01______________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01______________________ as default
};
