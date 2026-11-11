import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { execFileSync } from 'node:child_process'

const ROOT = fileURLToPath(new URL('../', import.meta.url))
const short = value => value ? value.slice(0, 7) : '未確認'
const repoPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/

export async function githubJson(endpoint, { optional = false } = {}) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'Wiki-Site-status' }
  if (process.env.GH_TOKEN) headers.Authorization = `Bearer ${process.env.GH_TOKEN}`
  const response = await fetch('https://api.github.com/' + endpoint, {
    headers, signal: AbortSignal.timeout(15_000)
  })
  if (optional && response.status === 404) return null
  if (!response.ok) throw new Error(`GitHub API HTTP ${response.status}（権限・API利用制限・通信状態を確認）`)
  return response.json()
}

export function parseState(value, repository) {
  if (!value || value.repository !== repository || !/^[a-f0-9]{40}$/i.test(value.revision || '')) {
    throw new Error('同期記録の原本リポジトリ名またはコミット番号が不正')
  }
  return { repository: value.repository, revision: value.revision }
}

const runSummary = run => run ? {
  id: run.id, event: run.event, status: run.status, conclusion: run.conclusion,
  created_at: run.created_at, head_sha: run.head_sha, url: run.html_url
} : null

export async function collectStatus({
  request = githubJson, sourceRepository = 'sw428/wiki', siteRepository = 'sw428/Wiki-Site',
  sourceBranch = 'main', siteBranch = 'main', localState = null, localHead = null,
  checkedAt = new Date().toISOString()
} = {}) {
  if (![sourceRepository, siteRepository].every(repo => repoPattern.test(repo))) throw new Error('リポジトリ名はowner/name形式で指定してください')
  const report = {
    checked_at: checkedAt, source_repository: sourceRepository, site_repository: siteRepository,
    source_branch: sourceBranch, site_branch: siteBranch, local_state: localState, local_head: localHead,
    errors: []
  }
  const read = async (label, endpoint, options) => {
    try { return await request(endpoint, options) }
    catch (error) { report.errors.push({ label, message: error.message }); return undefined }
  }
  const siteBase = `repos/${siteRepository}`, sourceBase = `repos/${sourceRepository}`
  const workflow = `${siteBase}/actions/workflows/pages.yml/runs`
  const [source, site, runs, notices] = await Promise.all([
    read('原本の最新コミット', `${sourceBase}/commits/${encodeURIComponent(sourceBranch)}`),
    read('サイトの最新コミット', `${siteBase}/commits/${encodeURIComponent(siteBranch)}`),
    read('サイトActions', `${workflow}?branch=${encodeURIComponent(siteBranch)}&per_page=1`),
    read('サイトの通知起動履歴', `${workflow}?event=repository_dispatch&branch=${encodeURIComponent(siteBranch)}&per_page=1`)
  ])
  report.source_revision = source?.sha || null
  report.site_revision = site?.sha || null
  report.site_run = runSummary(runs?.workflow_runs?.[0])
  report.site_runs_available = runs !== undefined
  report.notice_run = runSummary(notices?.workflow_runs?.[0])
  report.notice_runs_available = notices !== undefined
  const [state, sourceRuns, notification, jobs] = await Promise.all([
    site?.sha ? read('サイトの同期記録', `${siteBase}/contents/source-state.json?ref=${site.sha}`, { optional: true }) : undefined,
    source?.sha ? read('最新原本コミットのpush Actions', `${sourceBase}/actions/runs?head_sha=${source.sha}&event=push&per_page=100`) : undefined,
    source?.sha ? read('標準通知YAML', `${sourceBase}/contents/.github/workflows/notify-site.yml?ref=${source.sha}`, { optional: true }) : undefined,
    report.site_run ? read('サイトActionsのジョブ', `${siteBase}/actions/runs/${report.site_run.id}/jobs?per_page=100`) : undefined
  ])
  report.remote_state = null
  if (state) {
    try {
      if (state.encoding !== 'base64' || typeof state.content !== 'string') throw new Error('同期記録の取得形式が不正')
      report.remote_state = parseState(JSON.parse(Buffer.from(state.content, 'base64').toString('utf8')), sourceRepository)
    } catch (error) { report.errors.push({ label: 'サイトの同期記録', message: error.message }) }
  }
  report.sync_comparison = report.source_revision && report.remote_state
    ? report.source_revision === report.remote_state.revision ? 'match' : 'different' : 'unknown'
  report.local_comparison = localHead && report.site_revision
    ? localHead === report.site_revision ? 'match' : 'different' : 'unknown'
  report.source_push_runs = (sourceRuns?.workflow_runs || []).map(runSummary)
  report.source_push_runs_available = sourceRuns !== undefined
  report.notification_file = notification === undefined ? 'unknown' : notification === null ? 'missing' : 'present'
  report.deploy_job = (jobs?.jobs || []).filter(job => job.name === 'deploy').map(job => ({
    status: job.status, conclusion: job.conclusion, url: job.html_url
  }))[0] || null
  report.jobs_available = jobs !== undefined
  return report
}

function runText(run, available) {
  if (!available) return '未確認'
  if (!run) return '履歴なし'
  const result = run.status === 'completed' ? run.conclusion === 'success' ? '成功' : run.conclusion || '結果不明' : run.status
  return `${result} / 起動: ${run.event} / ${run.created_at}`
}

export function renderStatus(report) {
  const comparison = { match: '一致', different: '別の版', unknown: '未確認' }
  const notification = { present: 'あり', missing: 'なし', unknown: '未確認' }
  const when = new Date(report.checked_at).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo', hour12: false })
  const rows = [
    ['原本の最新コミット（GitHub）', short(report.source_revision)],
    ['サイトの同期済み原本（GitHub）', short(report.remote_state?.revision)],
    ['原本とサイトの同期版', comparison[report.sync_comparison]],
    ['手元の同期記録', short(report.local_state?.revision)],
    ['手元のサイトコミット', short(report.local_head)],
    ['GitHubのサイトコミット', short(report.site_revision)],
    ['手元とGitHubのサイトコミット', comparison[report.local_comparison]],
    ['最新のサイトActions', runText(report.site_run, report.site_runs_available)],
    ['最新原本コミットのpush Actions', report.source_push_runs_available
      ? report.source_push_runs.length ? report.source_push_runs.map(run => runText(run, true)).join('、') : '履歴なし' : '未確認'],
    ['通知で起動したサイトActions（直近）', runText(report.notice_run, report.notice_runs_available)],
    ['原本の標準通知YAML', notification[report.notification_file]],
    ['最新サイトActionsの公開ジョブ', report.deploy_job
      ? report.deploy_job.status === 'completed' ? report.deploy_job.conclusion === 'success' ? '成功' : report.deploy_job.conclusion || '結果不明' : report.deploy_job.status
      : report.jobs_available ? '公開ジョブなし' : '未確認']
  ]
  const lines = [
    '# Wikiの同期状態', '', `確認日時: ${when} JST`, '',
    `原本: ${report.source_repository} (${report.source_branch}) → サイト: ${report.site_repository} (${report.site_branch})`, '',
    '| 確認すること | 結果 |', '| --- | --- |', ...rows.map(([label, value]) => `| ${label} | ${value} |`), '',
    '「同期版が一致」は、原本とGitHub側の同期記録が同じコミットという意味です。手動実行でも一致するため、原本pushによる自動連携の動作証明にはなりません。', '',
    '通知起動履歴はrepository_dispatch、標準通知YAMLは.github/workflows/notify-site.ymlを確認しています。別名の通知ファイルや外部サービスの設定は、この検査の対象外です。', '',
    '公開ジョブの結果と、実際の公開ページの版・見た目は別です。公開ページの版・見た目はこのコマンドでは検証していません。', '',
    '手元とGitHubのサイトコミットが別の版の場合、pull・pushのどちらが必要かはGitの状態も確認してください。', '',
    '## 確認先', '',
    `- [原本のコミット](https://github.com/${report.source_repository}/commits/${encodeURIComponent(report.source_branch)})`,
    `- [サイトのActions](https://github.com/${report.site_repository}/actions/workflows/pages.yml)`
  ]
  if (report.site_run?.url) lines.push(`- [最新サイトActionsの実行結果](${report.site_run.url})`)
  if (report.notice_run?.url) lines.push(`- [通知で起動した実行結果](${report.notice_run.url})`)
  if (report.errors.length) {
    lines.push('', '## 取得できなかった項目', '')
    for (const error of report.errors) lines.push(`- ${error.label}: ${error.message}`)
    lines.push('', '取得失敗は「更新できていない」と区別し、未確認として表示しています。')
  }
  return lines.join('\n') + '\n'
}

export async function main() {
  const sourceRepository = process.env.WIKI_REPOSITORY || 'sw428/wiki'
  let localState = null, localHead = null
  const localErrors = []
  try { localState = parseState(JSON.parse(await fs.readFile(path.join(ROOT, 'source-state.json'), 'utf8')), sourceRepository) }
  catch (error) { if (error.code !== 'ENOENT') localErrors.push({ label: '手元の同期記録', message: '同期記録を読み取れませんでした' }) }
  try { localHead = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true }).trim() }
  catch { localErrors.push({ label: '手元のサイトコミット', message: 'Gitの状態を読み取れませんでした' }) }
  const report = await collectStatus({
    sourceRepository, siteRepository: process.env.SITE_REPOSITORY || 'sw428/Wiki-Site',
    sourceBranch: process.env.WIKI_BRANCH || 'main', localState, localHead
  })
  report.errors.push(...localErrors)
  const markdown = renderStatus(report)
  const output = path.join(ROOT, '.local')
  await fs.mkdir(output, { recursive: true })
  await fs.writeFile(path.join(output, 'sync-status.json'), JSON.stringify(report, null, 2) + '\n')
  await fs.writeFile(path.join(output, '同期状態.md'), markdown)
  console.log(markdown)
  console.log('保存先: ' + path.join(output, '同期状態.md'))
  if (report.errors.length) process.exitCode = 1
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch(error => { console.error('同期状態を確認できませんでした: ' + error.message); process.exitCode = 1 })
}
