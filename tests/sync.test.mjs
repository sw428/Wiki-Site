import { describe, test, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { ROOT, synchronize, safePath, inside, watchSource } from '../scripts/sync.mjs'
import { checkDocs, checkSite } from '../scripts/check.mjs'
import { slugify } from '../.vitepress/slugify.mjs'
import { localTarget, publicLinks } from '../.vitepress/public-links.mjs'

describe('one-way sync', () => {
  let base, source, site
  const write = (rel, text) => { const p = path.join(source, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text) }
  const sync = () => synchronize(source, site, { quiet: true })
  beforeEach(() => {
    fs.mkdirSync(path.join(ROOT, '.local'), { recursive: true })
    base = fs.mkdtempSync(path.join(ROOT, '.local', 'sync-test-'))
    source = path.join(base, 'wiki'); site = path.join(base, 'site-repo')
    fs.mkdirSync(path.join(source, 'articles'), { recursive: true }); fs.mkdirSync(site)
    fs.writeFileSync(path.join(site, 'publish.json'), JSON.stringify({ article_roots: ['articles'], reference_roots: ['references'], asset_roots: ['img'], asset_extensions: ['.svg', '.png'], deny_components: ['下書き'], deny_prefixes: ['.', '00_', '90_'], deny_files: ['AGENTS.md'], exclude: [] }))
    write('articles/日本語.md', '# 日本語\n\n![図](../img/図.svg)\n')
    write('img/図.svg', '<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10"/></svg>')
  })
  afterEach(() => {
    assert.ok(inside(fs.realpathSync(base), path.join(ROOT, '.local')) && base !== path.join(ROOT, '.local'))
    fs.rmSync(base, { recursive: true, force: true })
  })
  test('create, update, rename, delete and restart repair; source remains untouched', () => {
    const original = fs.readFileSync(path.join(source, 'articles/日本語.md'))
    sync()
    assert.deepEqual(fs.readFileSync(path.join(source, 'articles/日本語.md')), original)
    const doc = path.join(site, 'docs/articles/日本語.md'), stamp = fs.statSync(doc).mtimeMs
    sync(); assert.equal(fs.statSync(doc).mtimeMs, stamp)
    write('articles/追加.md', '# 追加'); write('articles/日本語.md', '# 更新'); sync()
    assert.equal(fs.readFileSync(doc, 'utf8'), '# 更新')
    assert.equal(fs.existsSync(path.join(site, 'docs/img/図.svg')), false)
    fs.renameSync(path.join(source, 'articles/追加.md'), path.join(source, 'articles/移動.md'))
    fs.unlinkSync(path.join(source, 'articles/日本語.md')); sync()
    assert.equal(fs.existsSync(doc), false)
    assert.equal(fs.existsSync(path.join(site, 'docs/articles/追加.md')), false)
    assert.ok(fs.existsSync(path.join(site, 'docs/articles/移動.md')))
  })
  test('internal maps, drafts and private directories stay excluded', () => {
    for (const f of ['articles/00_マップ.md', 'articles/90_移行元/古い.md', 'articles/下書き/秘密.md', 'AGENTS.md']) write(f, '# 非公開')
    assert.equal(sync().article_count, 1)
  })
  test('reference closure cannot bypass the allowlist', () => {
    write('articles/日本語.md', '# 本文\n\n[用語](../references/用語.md)\n\n[秘密](../private/秘密.md)')
    write('references/用語.md', '# 用語'); write('private/秘密.md', '# 秘密')
    const report = sync()
    assert.ok(report.files['references/用語.md'])
    assert.equal(report.files['private/秘密.md'], undefined)
    assert.equal(report.excluded.length, 1)
  })
  test('missing links and external embeds fail publication checks', () => {
    write('articles/日本語.md', '# 本文\n\n[切れ](消失.md)\n\n![外部](https://example.com/track.png)')
    const report = sync()
    assert.equal(report.missing.length, 1); assert.ok(report.errors.length)
    assert.throws(() => checkDocs(site))
  })
  test('fenced and inline code are examples, not image dependencies', () => {
    write('articles/日本語.md', '# 本文\n\n~~~html\n<img src="sample.png">\n~~~\n\n' + String.fromCharCode(96) + '<img src="inline.png">' + String.fromCharCode(96))
    assert.deepEqual(sync().missing, [])
  })
  test('escaping paths and overlapping roots are rejected', () => {
    for (const rel of ['../outside.md', '..\\outside.md', 'C:/private.md']) assert.throws(() => safePath(source, rel))
    assert.throws(() => synchronize(source, path.join(source, 'nested')))
    assert.throws(() => synchronize(source, base))
    assert.equal(localTarget('articles/a.md', '../../outside.md'), '!unsafe:../../outside.md')
  })
  test('unmanaged destination and empty selection retain existing data', () => {
    fs.mkdirSync(path.join(site, 'docs')); fs.writeFileSync(path.join(site, 'docs/manual.md'), 'manual')
    assert.throws(sync); assert.ok(fs.existsSync(path.join(site, 'docs/manual.md')))
    fs.unlinkSync(path.join(site, 'docs/manual.md')); sync()
    fs.unlinkSync(path.join(source, 'articles/日本語.md')); assert.throws(sync)
    assert.ok(fs.existsSync(path.join(site, 'docs/articles/日本語.md')))
  })
  test('Japanese heading fragments retain composed characters', () => {
    assert.equal(slugify('DevToolsで4領域を対応させる'), 'devtoolsで4領域を対応させる')
    assert.equal(slugify('親の幅だけを変えて比べる'.normalize('NFD')), '親の幅だけを変えて比べる')
  })
  test('SVG local paint references are allowed', () => {
    write('img/図.svg', '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="paint"/></defs><rect style="fill:url(\'#paint\')"/></svg>')
    assert.deepEqual(sync().errors, [])
  })
  test('SVG script, external reference and invalid XML are rejected', () => {
    write('img/図.svg', '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script><image href="https://example.com/image.png"/></svg>')
    assert.deepEqual(new Set(sync().errors.map(e => e.kind)), new Set(['active-svg', 'external-svg-reference']))
    write('img/図.svg', '<svg><g></svg>'); assert.throws(sync)
  })
  test('edited output is detected', () => {
    sync(); fs.writeFileSync(path.join(site, 'docs/articles/日本語.md'), '# 手編集')
    assert.throws(() => checkDocs(site))
  })
  test('actual filesystem watcher handles saves within 5 seconds', async () => {
    sync()
    const stop = watchSource(source, site)
    try {
      write('articles/新規.md', '# 保存テスト')
      const end = Date.now() + 5000
      while (!fs.existsSync(path.join(site, 'docs/articles/新規.md')) && Date.now() < end) await new Promise(r => setTimeout(r, 50))
      assert.equal(fs.readFileSync(path.join(site, 'docs/articles/新規.md'), 'utf8'), '# 保存テスト')
    } finally { stop() }
  })
  test('VitePress links retain public destinations and neutralize unpublished ones', () => {
    const renderer = new MarkdownIt().use(publicLinks, { files: { 'articles/別.md': 'hash' } })
    const html = renderer.render('[公開](別.md) [秘密](../private/秘密.md)', { relativePath: 'articles/日本語.md' })
    assert.ok(html.includes('href="' + encodeURIComponent('別') + '.md"'))
    assert.equal((html.match(/<a /g) || []).length, 1)
    assert.ok(!html.includes('href="../private/秘密.md"'))
    assert.ok(html.includes('class="unavailable"'))
  })
  test('built links, anchors, site prefix and external scripts are checked', () => {
    const out = path.join(site, 'site'); fs.mkdirSync(out)
    fs.writeFileSync(path.join(out, 'app.js'), '')
    fs.writeFileSync(path.join(out, 'index.html'), '<h1 id="見出し">本文</h1><a href="/Wiki-Site/#見出し">移動</a><script src="/Wiki-Site/app.js"></script>')
    assert.equal(checkSite(site, '/Wiki-Site/').pages, 1)
    fs.writeFileSync(path.join(out, 'index.html'), '<a href="/Wiki-Site/#不存在">切れ</a>')
    assert.throws(() => checkSite(site, '/Wiki-Site/'))
    fs.writeFileSync(path.join(out, 'index.html'), '<script src="https://example.com/track.js"></script>')
    assert.throws(() => checkSite(site, '/Wiki-Site/'))
  })
})
