import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath, pathToFileURL } from 'node:url'
import MarkdownIt from 'markdown-it'
import { parseFragment } from 'parse5'
import { SaxesParser } from 'saxes'
import { localTarget } from '../.vitepress/public-links.mjs'

export const ROOT = fileURLToPath(new URL('../', import.meta.url))
const md = new MarkdownIt({ html: true })
export const digest = (data) => crypto.createHash('sha256').update(data).digest('hex')
const exists = (p) => fs.existsSync(p)
export const inside = (candidate, root) => {
  const rel = path.relative(path.resolve(root), path.resolve(candidate))
  return !path.isAbsolute(rel) && rel !== '..' && !rel.startsWith('..' + path.sep)
}
export function safePath(root, rel) {
  if (!rel || path.posix.isAbsolute(rel) || rel.split('/').includes('..') || /[\\:]/.test(rel)) throw new Error('Unsafe relative path: ' + rel)
  let target = path.resolve(root)
  for (const part of rel.split('/')) {
    target = path.join(target, part)
    if (exists(target) && fs.lstatSync(target).isSymbolicLink()) throw new Error('Symlink/junction refused: ' + rel)
  }
  if (!inside(target, root)) throw new Error('Path outside root: ' + rel)
  return target
}
export function blocked(rel, policy) {
  const parts = rel.split('/')
  return parts.some(c => policy.deny_components.includes(c) || policy.deny_prefixes.some(x => c.startsWith(x)))
    || policy.deny_files.includes(parts.at(-1))
    || policy.exclude.some(x => rel === x || rel.startsWith(x.replace(/\/$/, '') + '/'))
}
export const allowed = (rel, roots, policy) => !blocked(rel, policy) && roots.some(x => rel.startsWith(x.replace(/\/$/, '') + '/'))
export function walkHtml(node, fn) {
  if (node.tagName) fn(node, Object.fromEntries((node.attrs || []).map(a => [a.name, a.value])))
  for (const child of node.childNodes || []) walkHtml(child, fn)
  if (node.content) walkHtml(node.content, fn)
}
export function references(text) {
  const refs = [], embeds = []
  walkHtml(parseFragment(md.render(text)), (node, a) => {
    const tag = node.tagName
    if (tag === 'a' && a.href) refs.push({ url: a.href, embed: false })
    if (['img', 'source', 'video', 'audio', 'object', 'iframe', 'script', 'link'].includes(tag)) {
      const url = a.src || a.data || a.href
      if (url) { refs.push({ url, embed: true }); embeds.push({ tag, url }) }
    }
    if (['script', 'style', 'iframe', 'object', 'embed'].includes(tag) || Object.keys(a).some(k => k.startsWith('on'))) embeds.push({ tag: 'active-content', url: tag })
  })
  return { refs, embeds }
}
export function atomicWrite(file, data) {
  const bytes = Buffer.isBuffer(data) ? data : Buffer.from(data)
  if (exists(file) && fs.readFileSync(file).equals(bytes)) return false
  fs.mkdirSync(path.dirname(file), { recursive: true })
  const temp = file + '.tmp-' + process.pid
  try { fs.writeFileSync(temp, bytes); fs.renameSync(temp, file) }
  finally { if (exists(temp)) fs.unlinkSync(temp) }
  return true
}
export function sourcePath(args = []) {
  const i = args.indexOf('--source')
  if (i >= 0) {
    if (!args[i + 1]) throw new Error('--source requires a path')
    return path.resolve(args[i + 1])
  }
  const config = path.join(ROOT, 'local.json')
  return path.resolve(exists(config) ? JSON.parse(fs.readFileSync(config, 'utf8')).source : path.join(ROOT, '..', 'wiki'))
}
function articlePaths(source, root, policy) {
  const selected = []
  const visit = (rel) => {
    if (blocked(rel, policy)) return
    const full = safePath(source, rel)
    for (const entry of fs.readdirSync(full, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
      const next = rel + '/' + entry.name
      if (blocked(next, policy)) continue
      const p = safePath(source, next)
      if (entry.isDirectory()) visit(next)
      else if (entry.isFile() && next.endsWith('.md')) selected.push(next)
      else if (entry.isSymbolicLink()) throw new Error('Symlink refused: ' + p)
    }
  }
  for (const rel of policy.article_roots) {
    const full = safePath(source, rel)
    if (!exists(full) || !fs.statSync(full).isDirectory()) throw new Error('Allowlisted directory missing: ' + rel)
    visit(rel)
  }
  return selected
}
export function synchronize(sourceInput, rootInput = ROOT, { quiet = false } = {}) {
  const source = path.resolve(sourceInput), root = path.resolve(rootInput)
  if (!exists(source) || !fs.statSync(source).isDirectory()) throw new Error('Wiki source directory is missing')
  const realSource = fs.realpathSync(source), realRoot = fs.realpathSync(root)
  if (inside(realRoot, realSource) || inside(realSource, realRoot)) throw new Error('Source and site must be separate, non-overlapping directories')
  const docs = path.join(root, 'docs'), marker = path.join(docs, '.wiki-site-owned')
  if (exists(docs) && (fs.lstatSync(docs).isSymbolicLink() || !inside(fs.realpathSync(docs), realRoot))) throw new Error('docs must be a real directory inside site root')
  if (exists(docs) && fs.readdirSync(docs).length && !exists(marker)) throw new Error('Unmanaged docs directory; refusing overwrite')
  const policy = JSON.parse(fs.readFileSync(path.join(root, 'publish.json'), 'utf8'))
  for (const key of ['article_roots', 'reference_roots', 'asset_roots']) for (const rel of policy[key]) safePath(source, rel)
  const overrideFile = path.join(root, 'site-links.json')
  const overrides = exists(overrideFile) ? JSON.parse(fs.readFileSync(overrideFile, 'utf8')) : []
  const corrections = [], files = new Map(), missing = [], excluded = [], external = [], errors = [], linkedAssets = new Set()
  function readArticle(rel) {
    const bytes = fs.readFileSync(safePath(source, rel))
    let text = bytes.toString('utf8').replace(/^\uFEFF/, ''), changed = false
    for (const fix of overrides) {
      const from = '](' + fix.from + ')'
      if (fix.page === rel && text.includes(from)) {
        text = text.replaceAll(from, '](' + fix.to + ')')
        corrections.push(fix)
        changed = true
      }
    }
    return changed ? Buffer.from(text) : bytes
  }
  for (const rel of articlePaths(source, root, policy)) files.set(rel, readArticle(rel))
  if (!files.size) throw new Error('No public articles selected; refusing mass deletion')
  const queue = [...files.keys()], seen = new Set()
  while (queue.length) {
    const page = queue.shift()
    if (seen.has(page)) continue
    seen.add(page)
    const { refs, embeds } = references(files.get(page).toString('utf8'))
    for (const { tag, url } of embeds) if (tag === 'active-content' || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url)) errors.push({ page, kind: 'active-or-external-embed', target: url })
    for (const { url, embed } of refs) {
      const target = localTarget(page, url)
      if (target === null) {
        if (/^[a-z][a-z0-9+.-]*:/i.test(url)) external.push({ page, url, embedded: embed })
        continue
      }
      if (target.startsWith('!unsafe:')) { errors.push({ page, kind: 'unsafe-link', target: url }); continue }
      const full = safePath(source, target)
      if (!exists(full) || !fs.statSync(full).isFile()) { missing.push({ page, target, url }); continue }
      const suffix = path.extname(target).toLowerCase()
      if (suffix === '.md' && allowed(target, [...policy.article_roots, ...policy.reference_roots], policy)) {
        if (!files.has(target)) { files.set(target, readArticle(target)); queue.push(target) }
      } else if (policy.asset_extensions.includes(suffix) && allowed(target, policy.asset_roots, policy)) {
        files.set(target, fs.readFileSync(full))
        if (!embed) linkedAssets.add(target)
      }
      else excluded.push({ page, target, url })
    }
  }
  for (const [rel, data] of files) {
    if (!rel.endsWith('.svg')) continue
    const parser = new SaxesParser({ xmlns: true })
    parser.on('error', e => { throw new Error(rel + ': ' + e.message) })
    parser.on('opentag', tag => {
      const attrs = Object.values(tag.attributes)
      if (['script', 'foreignObject'].includes(tag.local) || attrs.some(a => a.local.toLowerCase().startsWith('on'))) errors.push({ page: rel, kind: 'active-svg', target: tag.local })
      for (const a of attrs) if (a.local === 'href' && a.value && !a.value.startsWith('#')) errors.push({ page: rel, kind: 'external-svg-reference', target: a.value })
    })
    const text = data.toString('utf8')
    parser.write(text).close()
    const urls = [...text.matchAll(/url\(\s*([^)]*)\)/gi)].map(m => m[1].trim().replace(/^["']|["']$/g, ''))
    if (/@import/i.test(text) || urls.some(u => !u.startsWith('#') && !u.startsWith('data:'))) errors.push({ page: rel, kind: 'external-svg-style', target: rel })
  }
  const homeFile = path.join(root, 'pages', 'index.md')
  files.set('index.md', exists(homeFile) ? fs.readFileSync(homeFile) : Buffer.from('# Web制作・学習Wiki\n\nHTML・CSSの仕組みと実装を学ぶノートです。\n'))
  const report = { version: 1, article_count: [...files.keys()].filter(f => f.endsWith('.md')).length - 1,
    asset_count: [...files.keys()].filter(f => !f.endsWith('.md')).length,
    files: Object.fromEntries([...files].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([rel, data]) => [rel, digest(data)])), linked_assets: [...linkedAssets].sort(), corrections, missing, excluded, external, errors }
  fs.mkdirSync(docs, { recursive: true })
  atomicWrite(marker, 'Generated by Wiki-Site. Do not edit.\n')
  let changed = 0, deleted = 0
  for (const [rel, data] of files) if (atomicWrite(safePath(docs, rel), data)) changed++
  function clean(dir, prefix = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const rel = prefix + entry.name
      const full = safePath(docs, rel)
      if (entry.isDirectory()) { clean(full, rel + '/'); if (!fs.readdirSync(full).length) fs.rmdirSync(full) }
      else if (full !== marker && !files.has(rel)) { fs.unlinkSync(full); deleted++ }
    }
  }
  clean(docs)
  atomicWrite(path.join(root, 'sync-manifest.json'), JSON.stringify(report, null, 2) + '\n')
  if (!quiet) console.log('Synced ' + report.article_count + ' articles, ' + report.asset_count + ' assets; changed=' + changed + ', deleted=' + deleted + ', missing=' + missing.length + ', excluded=' + excluded.length + ', errors=' + errors.length)
  return report
}
export function watchSource(source, root = ROOT, onError = console.error) {
  let timer, stopped = false
  const refresh = () => { if (!stopped) { try { synchronize(source, root) } catch (e) { onError('Sync failed; last output retained: ' + e.message) } } }
  const changed = () => { clearTimeout(timer); timer = setTimeout(refresh, 400) }
  const watchers = []
  try {
    watchers.push(fs.watch(source, { recursive: true }, changed))
    watchers.push(fs.watch(root, (_event, name) => { if (['publish.json', 'site-links.json'].includes(String(name))) changed() }))
    if (exists(path.join(root, 'pages'))) watchers.push(fs.watch(path.join(root, 'pages'), changed))
  } catch (e) { for (const w of watchers) w.close(); throw e }
  for (const w of watchers) w.on('error', e => onError('Watch notification failed; periodic repair remains active: ' + e.message))
  const repair = setInterval(refresh, 30_000)
  return () => { stopped = true; clearTimeout(timer); clearInterval(repair); for (const w of watchers) w.close() }
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const source = sourcePath(process.argv.slice(2))
    const stop = process.argv.includes('--watch') ? watchSource(source) : null
    synchronize(source)
    if (stop) for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => { stop(); process.exit() })
  } catch (e) { console.error(e.message); process.exitCode = 1 }
}
