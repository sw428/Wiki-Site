# Wiki-Site

VitePressとNode.jsだけで、Wiki原本から公開サイトを生成する独立プロジェクトです。
Pythonは使いません。原本の本文・画像・Git設定には書き戻しません。

## 起動する

このPCでは依存パッケージの導入済みです。PowerShellで実行します。

~~~powershell
cd "$HOME\Desktop\Wiki-Site"
npm.cmd run dev
~~~

http://127.0.0.1:5173/ を開きます。原本の監視・同期とVitePressを同時に起動し、保存で表示を更新します。
Ctrl+Cで両方停止します。通常は隣の wiki フォルダを読みます。

別の原本を指定する場合は次のように実行します。

~~~powershell
npm.cmd run dev -- --source 'D:\Notes\wiki'
~~~

新しいPCではNode.js 22以降（24推奨）を用意し、初回だけ npm.cmd ci を実行します。
仮想環境、pip、Pythonのインストールは不要です。

## 同期状態を確認する

このフォルダの `同期状態を確認.cmd` をダブルクリックするか、PowerShellで実行します。

~~~powershell
npm.cmd run status
~~~

GitHub上の原本の最新コミット、サイトの同期済み原本、最新サイトActionsと公開ジョブ、通知で起動した履歴を確認します。手元のサイトコミットとGitHub側の版も比較します。読み取り専用の確認で、結果だけを `.local/同期状態.md` と `.local/sync-status.json` に保存します。原本の変更や同期・pull・commit・push・公開は行いません。

原本と同期記録が同じでも、手動実行でそろった可能性があります。版の一致と、原本pushによる通知の実績は分けて表示します。公開ページそのものの版・見た目は検査しません。通信失敗・権限不足・API利用制限は、未反映と決めず「未確認」として残します。確認日時を見て、最新状態が必要なときに再実行してください。

標準通知YAMLは原本の `.github/workflows/notify-site.yml`、通知起動は `repository_dispatch` の履歴を確認します。別名の通知ファイルや外部サービスの設定は検査対象外です。公開リポジトリは認証なしで確認できます。必要な場合は実行環境のGH_TOKENを利用できますが、トークンはレポートに保存しません。

## フォルダ構成

~~~text
Desktop/
├─ wiki/                     原本・既存Git。サイトからは読むだけ
└─ Wiki-Site/                独立Git
   ├─ .vitepress/
   │  ├─ config.mjs          サイト設定と階層サイドバー
   │  ├─ public-links.mjs    公開対象外リンクの表示処理
   │  └─ theme/              VitePress標準テーマと追加CSS
   ├─ pages/index.md         サイトのホーム本文
   ├─ publish.json           公開許可リスト
   ├─ site-links.json        サイト限定の旧リンク補正
   ├─ docs/                  同期結果。直接編集しない。Gitに含める
   ├─ sync-manifest.json     同期対象・ハッシュ・除外・外部リンクの一覧
   ├─ source-state.json      CIが記録する原本のコミット番号
   ├─ scripts/               Node.jsの同期・監視・生成物検査
   ├─ tests/                 Node.js標準テスト
   ├─ templates/notify-site.yml  原本への通知設定の雛形（GitHub側に追加済み・ユーザー申告）
   ├─ .github/workflows/pages.yml
   ├─ package.json
   ├─ package-lock.json
   └─ site/                  生成HTML・CSS・JS。Gitに含めない
~~~

原本の記事は今までどおり wiki で編集します。デザインは .vitepress/theme/、公開設定はこのフォルダで変更します。
VitePressのページ内目次、コード表示、前後の記事移動を使います。左の目次は章ごとに折りたたみ、同じ階層では一つずつ開きます。「目次をすべて閉じる」でも閉じられます。
記事タイトル・左の目次・前後の記事名は、サイト側の表示処理で先頭番号を外します。ファイル名・URL・既存の見出しID・本文の手順番号は維持します。
動くSVGは最初に停止表示し、「再生／停止」「前の段階」「次の段階」で操作できます。段階送りは説明の表示完了と図形の変化後へ進みます。SVGへの直接リンクは残し、本文の下に操作付きプレビューを表示します。
図の操作は同じサイト内のSVGを読み込んで適用します。読み込みに失敗した場合は元の画像と再読み込みボタンを表示します。これらはすべてサイト側の処理で、原本のMarkdown・SVGは変更しません。
標準機能に必要なJavaScriptを使い、アクセス解析・追跡スクリプト・外部CDNは追加しません。
画像はインライン化せず、ファイルとして配信します。

## 公開対象

HTML・CSSとFigmaを対象とし、Wiki全体を自動公開する設定にはしていません。
2026-11-11、Figmaの実装情報・書き出し寸法・文字指定・列間の割合を扱う5記事を追加しました。内部マップは除外します。

| 原本内の範囲 | 同期の扱い | 件数（2026-11-11） |
| --- | --- | ---: |
| 01_導入/01_HTML・CSS | 許可ディレクトリ内の記事 | 17 |
| 02_基礎/01_HTML・CSS | 許可ディレクトリ内の記事 | 164 |
| 02_基礎/12_Figma | 許可ディレクトリ内の記事 | 5 |
| 03_詳細/01_HTML・CSS | 許可ディレクトリ内の記事 | 9 |
| 05_参照 | 公開記事から参照されたカードだけ | 16 |
| img/html-css | 公開記事から参照された許可形式の画像だけ | 64 |

合計211記事とホーム1ページ。画像はSVG61件とPNG3件です。

publish.json の article_roots は、配下の新規記事にも適用する許可リストです。
許可内の作成・更新・削除・移動を自動反映し、許可外へ移動した記事はサイトから外れます。
新しいカテゴリは article_roots に追加します。参照があるという理由だけで他カテゴリの記事を取り込みません。
reference_roots と asset_roots も許可範囲であり、その中で参照されたファイルだけを取り込みます。

次は除外します。

- 隠しファイル、00_で始まる内部マップ、90_で始まる移行元
- スニペット、下書き、非公開フォルダ
- AGENTS.md、CURRENT.md、CHANGELOG.md、README.md、参照元インデックス.md
- 許可されていない04_検証、06_疑問、対話ログ、運用思想、レビュー、VS Codeの個人設定など

個別に公開を保留する記事は、原本を移動せず publish.json の exclude に相対パスを追加します。
原本pushから本番連携を有効にする前に、新規記事にも適用されるこの許可範囲を確認してください。
公開リポジトリへpushした docs は、サイトで隠してもGitHubと履歴から閲覧できます。

## リンク・監視・検査

原本と同じ相対階層を docs に維持します。記事の相対リンク・日本語見出し・SVG参照をサイトで利用できます。
公開対象外への参照20件は、サイト描画時だけ文字として残してリンクを外し、点線の下線と補足を付けます。
該当する本文をコピーすることはありません。参照先は sync-manifest.json の excluded で確認できます。

原本にあった日付記事から表示制御への旧リンク1件だけは、site-links.json で同じ注意点を扱う現行記事へ補正します。
この1ファイル以外の274ファイル（記事・画像）は、原本とSHA-256が一致しています。
原本が直れば補正は適用されなくなります。本文の説明・図は作り直しません。

Node.js標準の fs.watch で変更を監視し、連続イベントを400msまとめて処理します。
起動時と30秒ごとにも全体照合するので、停止中の変更や通知漏れを修復できます。
変更がないファイルは書き換えません。削除は専用 docs 内に限ります。
原本が見つからない、許可ディレクトリが消えた、記事が0件になった場合は、全削除を避けるため同期を止めます。
最後の1記事を意図して削除する場合も、この保護が働きます。
管理マーカーのない既存 docs の上書きと、シンボリックリンク・ジャンクションの取り込みを拒否します。

~~~powershell
# 一度だけ同期
npm.cmd run sync

# 監視だけ（通常はdevを使う）
npm.cmd run watch

# 原本を使わない同期・検査テスト
npm.cmd test

# 同期 → 公開範囲検査 → VitePressビルド → 生成物検査
npm.cmd run build

# ビルド結果を確認
npm.cmd run preview
~~~

previewは http://127.0.0.1:4173/ で表示します。原本の監視・再生成は行いません。
GitHub Pagesと同じ条件で確認する場合は、buildとpreviewの両方へ -- --base /Wiki-Site/ を付けます。
公開前検査では、許可外ファイル・参照切れ・同期後の手編集・SVG外部依存・スクリプト等を検出します。
生成したHTMLでも内部リンク・見出し・画像・CSS・JSの存在を確認します。
外部の参考リンクは一覧化しますが、到達性や記載内容の正しさまでは検証しません。

## 原本pushから自動公開する設定

2026-11-07、ユーザーより原本のGitHubへ通知用YAMLとPATのSecretを追加済みとの申告があります。Codexが手元の原本へ追加した未追跡コピーは取り消しました。GitHub側の設定変更・git pull・コミット・push・公開操作はCodexでは実施していません。
まずローカル画面と公開範囲を確認します。

### 1. サイト用リポジトリとPages

GitHubに空の Wiki-Site リポジトリを作ります。このフォルダは独立Gitとして初期化済みです。
コミット・remote設定・pushはしていません。

~~~powershell
cd "$HOME\Desktop\Wiki-Site"
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw "公開前検査に失敗しました" }

git add .
git diff --cached --stat
git diff --cached --check
git commit -m "Build isolated VitePress Wiki site"
git remote add origin https://github.com/sw428/Wiki-Site.git
git push -u origin main
~~~

所有者・リポジトリ名が異なる場合はURLを変更します。
Settings → Pages → Build and deployment → SourceをGitHub Actionsに設定します。
初回ActionsがPages未設定で失敗した場合は、設定後に再実行します。

ActionsではPagesが返すbase_pathをSITE_BASEに設定してビルドするので、リポジトリ名を含むURLに対応します。
通常の候補URLは https://sw428.github.io/Wiki-Site/ です。実際のURLはデプロイ結果で確認します。
GitHub Actionsのcontents書き込みやmainへの自動コミットが保護ルールで拒否された場合、公開処理も停止します。

### 2. 通知と読み取りの認証

原本 wiki の Settings → Secrets and variables → Actions に設定します。

| 種類 | 名前 | 値 |
| --- | --- | --- |
| Variable | SITE_REPOSITORY | sw428/Wiki-Site |
| Secret | SITE_DISPATCH_TOKEN | サイト用リポジトリだけに限定したfine-grained PAT |

通知用PATはContents: Read and writeが必要です。dispatch APIが要求する権限です。
原本への書き込み権限は付けず、対象リポジトリと期限を限定します。
PATはGitHubのSecretへ直接登録し、チャット・プログラム・Git設定に書きません。

サイト側のVariablesは、省略時も次の値で動きます。

| 名前 | 値 |
| --- | --- |
| WIKI_REPOSITORY | sw428/wiki |
| WIKI_BRANCH | main |

原本が公開なら追加の読み取りSecretは通常不要です。
非公開の場合だけ、原本限定・Contents: Read-onlyのPATをサイト側の WIKI_READ_TOKEN に登録します。
原本のcheckoutでは認証情報を保存しません。

### 3. GitHub側に追加した通知YAMLを確認する

ユーザーの申告では、原本リポジトリのGitHub側に .github/workflows/notify-site.yml とPATのSecretを追加済みです。Codexによるリモートの内容・動作確認は未実施です。
GitHub上の原本と手元の原本は同じリポジトリなので、git pullするとGitHubで追加したYAMLも手元へ入ります。この通知方式では、原本に置くサイト関係のファイルを通知用YAML1枚に限定します。原本にYAMLも一切置かない方針にする場合は、GitHub側も含めて通知方式を見直します。追加の変更は承認後に行います。

### 4. 設定後の普段の操作

1. wiki のMarkdown・画像を保存し、起動中のプレビューで確認する。
2. 原本のmainへpushする。
3. 原本のActionsがサイトへ通知する。
4. サイトのActionsが原本mainの最新コミットを読み、許可対象だけ同期・検査する。
5. サイト側に同期結果を自動コミット・pushし、同じワークフローでPagesへ公開する。

普段のサイト側pushは不要です。テーマ・設定を変更したときだけサイト側をpushします。
通知順が前後しても処理時点の原本mainの最新状態を読み、処理は直列に実行します。
原本の全コミットを個別に公開する保証はありません。
自動コミットから別のpushワークフローを起動することに依存せず、このワークフロー内で公開まで完結します。

テスト・同期・検査・ビルド・pushの失敗時はデプロイへ進まず、既存の公開サイトを維持します。
自動コミット後にアップロードや公開だけ失敗した場合、サイト側Gitと公開サイトの版は一時的に異なる場合があります。
Actionsの手動実行で最新状態から再試行できます。

## 公式仕様

- [VitePressの設定](https://vitepress.dev/reference/site-config)
- [VitePressのGitHub Pages公開](https://vitepress.dev/guide/deploy)
- [GitHubのrepository_dispatchと必要な権限](https://docs.github.com/en/rest/repos/repos#create-a-repository-dispatch-event)
- [GitHubのワークフロー起動とGITHUB_TOKEN](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow)
