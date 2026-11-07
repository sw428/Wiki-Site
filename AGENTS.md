# Wiki-Siteの作業範囲

- このリポジトリはサイト生成・同期・テーマ・公開設定を管理する。
- 隣のwikiは読み取り専用の原本。本文・画像・Git設定・ワークフローを承認なく変更しない。
- 原本への通知YAMLはtemplates/notify-site.ymlを確認してから、ユーザーの明示承認後に設置する。
- docs/とsync-manifest.jsonはscripts/sync.mjsの出力。直接修正せず、publish.json・site-links.json・同期処理を編集する。
- 許可範囲を参照追跡で越えない。未公開記事・内部マップ・個人設定を自動で取り込まない。
- site/・node_modules/・.vitepress/cache/・.local/はGitへ入れない。生成HTMLを直接編集しない。
- 変更後はnpm test、npm run build、git diff --checkを実行する。ブラウザーの目視確認と静的検査を区別する。
- GitHubへのpush・公開・Secretや権限の設定は承認後に行う。
- サイト生成・同期・監視・検査はVitePressとNode.jsで実装する。Python依存を追加しない。
