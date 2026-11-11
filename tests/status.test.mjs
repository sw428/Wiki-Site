import { test } from 'node:test'
import assert from 'node:assert/strict'
import { collectStatus, renderStatus } from '../scripts/status.mjs'

const sourceSha = 'a'.repeat(40), siteSha = 'b'.repeat(40), oldSha = 'c'.repeat(40)
const stateFile = revision => ({ encoding: 'base64', content: Buffer.from(JSON.stringify({ repository: 'sw428/wiki', revision })).toString('base64') })
function fixture({ revision = sourceSha, fail = false, deployment = 'success', notice = false } = {}) {
  const calls = []
  const run = { id: 123, event: 'push', status: 'completed', conclusion: deployment, created_at: '2026-11-11T00:00:00Z' }
  const request = async endpoint => {
    calls.push(endpoint)
    if (fail && endpoint.includes('/commits/main')) throw new Error('通信失敗')
    if (endpoint === 'repos/sw428/wiki/commits/main') return { sha: sourceSha }
    if (endpoint === 'repos/sw428/Wiki-Site/commits/main') return { sha: siteSha }
    if (endpoint.startsWith('repos/sw428/Wiki-Site/contents/source-state.json')) return stateFile(revision)
    if (endpoint.includes('/contents/.github/workflows/notify-site.yml')) return null
    if (endpoint.includes('/jobs?')) return { jobs: [{ name: 'deploy', status: 'completed', conclusion: deployment }] }
    if (endpoint.includes('event=repository_dispatch')) return { workflow_runs: notice ? [{ ...run, event: 'repository_dispatch' }] : [] }
    if (endpoint.startsWith('repos/sw428/wiki/actions/runs?')) return { workflow_runs: [] }
    if (endpoint.includes('/actions/workflows/pages.yml/runs?')) return { workflow_runs: [run] }
    throw new Error('Unexpected endpoint: ' + endpoint)
  }
  return { request, calls }
}

test('matching source records do not become evidence of automatic push notification', async () => {
  const { request, calls } = fixture()
  const report = await collectStatus({ request, localHead: siteSha })
  assert.equal(report.sync_comparison, 'match')
  assert.equal(report.local_comparison, 'match')
  assert.equal(report.notification_file, 'missing')
  assert.equal(report.notice_run, null)
  assert.equal(report.source_push_runs.length, 0)
  assert.equal(report.deploy_job.conclusion, 'success')
  assert(calls.includes(`repos/sw428/Wiki-Site/contents/source-state.json?ref=${siteSha}`))
  assert(calls.some(endpoint => endpoint.includes(`head_sha=${sourceSha}&event=push`)))
  assert.match(renderStatus(report), /動作証明にはなりません/)
})

test('a stale synchronization and a failed deployment remain visible independently', async () => {
  const report = await collectStatus({ request: fixture({ revision: oldSha, deployment: 'failure', notice: true }).request })
  assert.equal(report.sync_comparison, 'different')
  assert.equal(report.deploy_job.conclusion, 'failure')
  assert.equal(report.notice_run.event, 'repository_dispatch')
  assert.match(renderStatus(report), /原本とサイトの同期版 \| 別の版/)
  assert.match(renderStatus(report), /公開ジョブ \| failure/)
})

test('network failure is unknown, not an outdated or matching synchronization', async () => {
  const report = await collectStatus({ request: fixture({ fail: true }).request })
  assert.equal(report.sync_comparison, 'unknown')
  assert.equal(report.notification_file, 'unknown')
  assert.equal(report.source_push_runs_available, false)
  assert.equal(report.errors.length, 2)
  assert.match(renderStatus(report), /原本とサイトの同期版 \| 未確認/)
})

test('malformed provenance cannot report a match', async () => {
  const base = fixture().request
  const report = await collectStatus({ request: async (endpoint, options) => endpoint.includes('/contents/source-state.json')
    ? { encoding: 'base64', content: Buffer.from('{broken').toString('base64') } : base(endpoint, options) })
  assert.equal(report.sync_comparison, 'unknown')
  assert.equal(report.errors[0].label, 'サイトの同期記録')
})

test('an inaccessible notification file is unknown rather than missing', async () => {
  const base = fixture().request
  const report = await collectStatus({ request: async (endpoint, options) => {
    if (endpoint.includes('/contents/.github/workflows/notify-site.yml')) throw new Error('HTTP 403')
    return base(endpoint, options)
  } })
  assert.equal(report.notification_file, 'unknown')
  assert.equal(report.sync_comparison, 'match')
  assert.equal(report.errors[0].label, '標準通知YAML')
})
