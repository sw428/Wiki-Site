import fs from 'node:fs'
import path from 'node:path'
import { parse } from 'parse5'
import { ROOT, allowed, digest, inside, safePath, walkHtml } from './sync.mjs'

export function allFiles(root) {
  const files = []
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name)
    if (entry.isSymbolicLink()) throw new Error('Symlink in generated output: ' + full)
    if (entry.isDirectory()) files.push(...allFiles(full))
    else files.push(full)
  }
  return files
}
export function checkDocs(root = ROOT) {
  const report = JSON.parse(fs.readFileSync(path.join(root, 'sync-manifest.json'), 'utf8'))
  const policy = JSON.parse(fs.readFileSync(path.join(root, 'publish.json'), 'utf8'))
  const docs = path.join(root, 'docs'), problems = [...report.missing, ...report.errors]
  const actual = new Set(allFiles(docs).map(f => path.relative(docs, f).split(path.sep).join('/')).filter(f => f !== '.wiki-site-owned'))
  const expected = Object.keys(report.files)
  for (const rel of actual) if (!Object.hasOwn(report.files, rel)) problems.push('Unexpected docs file: ' + rel)
  for (const rel of expected) {
    if (rel !== 'index.md' && !allowed(rel, rel.endsWith('.md') ? [...policy.article_roots, ...policy.reference_roots] : policy.asset_roots, policy)) problems.push('Out of allowlist: ' + rel)
    const file = safePath(docs, rel)
    if (!actual.has(rel) || digest(fs.readFileSync(file)) !== report.files[rel]) problems.push('Edited or missing generated file: ' + rel)
  }
  if (problems.length) throw new Error(JSON.stringify(problems, null, 2))
  console.log('Publication scope OK: ' + report.article_count + ' articles, ' + report.asset_count + ' assets, ' + report.corrections.length + ' site-only link corrections')
  return report
}
export function inspectPage(html) {
  const ids = new Set(), refs = [], issues = []
  walkHtml(parse(html), (node, a) => {
    if (a.id) ids.add(a.id)
    for (const key of ['href', 'src', 'data', 'poster']) if (a[key]) refs.push({ tag: node.tagName, key, ref: a[key] })
    if (['iframe', 'object', 'embed'].includes(node.tagName) || Object.keys(a).some(k => k.startsWith('on'))) issues.push('Unexpected active embed: ' + node.tagName)
  })
  return { ids, refs, issues }
}
export function checkSite(root = ROOT, base = process.env.SITE_BASE || '/') {
  const site = path.join(root, 'site')
  if (!fs.existsSync(path.join(site, 'index.html'))) throw new Error('Build first: site/index.html missing')
  const paths = allFiles(site), pages = new Map(), problems = [], targets = new Map()
  const relative = f => path.relative(site, f).split(path.sep).join('/')
  for (const file of paths.filter(f => f.endsWith('.html'))) {
    const page = inspectPage(fs.readFileSync(file, 'utf8'))
    pages.set(relative(file), page)
    problems.push(...page.issues.map(x => relative(file) + ': ' + x))
  }
  let count = 0
  for (const [rel, page] of pages) {
    for (const { tag, ref } of page.refs) {
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(ref)) {
        if (tag !== 'a' || !/^https?:|^mailto:/i.test(ref)) problems.push(rel + ': external resource or unsupported scheme: ' + ref.slice(0, 180))
        continue
      }
      const u = new URL(ref, 'https://local.invalid' + base + rel)
      let route = decodeURIComponent(u.pathname)
      if (!route.startsWith(base)) { problems.push(rel + ': link outside base: ' + ref); continue }
      route = route.slice(base.length)
      if (!targets.has(route)) {
        let file = path.join(site, route)
        if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
        targets.set(route, { exists: inside(file, site) && fs.existsSync(file) && fs.statSync(file).isFile(), normalized: relative(file) })
      }
      const target = targets.get(route)
      if (!target.exists) problems.push(rel + ': missing built target: ' + ref)
      else if (u.hash && pages.has(target.normalized) && !pages.get(target.normalized).ids.has(decodeURIComponent(u.hash.slice(1)))) problems.push(rel + ': missing built anchor: ' + ref)
      count++
    }
  }
  for (const file of paths.filter(f => f.endsWith('.css'))) {
    const css = fs.readFileSync(file, 'utf8')
    if (/@import|url\(\s*["']?(?:https?:|\/\/)/i.test(css)) problems.push(relative(file) + ': external CSS resource')
    for (const match of css.matchAll(/url\(\s*([^)]*)\)/gi)) {
      const ref = match[1].trim().replace(/^["']|["']$/g, '')
      if (!ref || ref.startsWith('data:') || ref.startsWith('#')) continue
      const route = decodeURIComponent(new URL(ref, 'https://local.invalid' + base + relative(file)).pathname)
      const target = path.join(site, route.slice(base.length))
      if (!route.startsWith(base) || !inside(target, site) || !fs.existsSync(target)) problems.push(relative(file) + ': missing CSS resource: ' + ref)
    }
  }
  if (problems.length) throw new Error(problems.slice(0, 50).join('\n'))
  const result = { pages: pages.size, references: count, javascriptFiles: paths.filter(f => f.endsWith('.js')).length }
  console.log('Built site OK: ' + result.pages + ' HTML pages, ' + count + ' internal references; resources are local, no external embeds')
  return result
}
