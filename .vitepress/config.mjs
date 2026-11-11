import { defineConfig } from 'vitepress'
import { readFileSync, mkdirSync, copyFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import manifest from '../sync-manifest.json'
import { publicLinks } from './public-links.mjs'
import { slugify } from './slugify.mjs'
import { displayTitle, displayTitles } from './display-titles.mjs'
import { animatedImages } from './animated-images.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))
function pageTitle(rel) {
  const text = readFileSync(path.join(root, 'docs', rel), 'utf8')
  return displayTitle((/^#\s+(.+)/m.exec(text)?.[1] || path.posix.basename(rel, '.md')).replaceAll(String.fromCharCode(96), ''))
}
function makeSidebar() {
  const tree = {}
  for (const rel of Object.keys(manifest.files).sort()) {
    if (!rel.endsWith('.md') || rel === 'index.md') continue
    const parts = rel.split('/')
    let node = tree
    for (const part of parts.slice(0, -1)) node = node[part] ||= {}
    node[parts.at(-1)] = rel
  }
  const visit = (node) => Object.entries(node).map(([name, value]) => typeof value === 'string'
    ? { text: pageTitle(value), link: '/' + value.replace(/\.md$/, '.html') }
    : { text: displayTitle(name), collapsed: true, items: visit(value) })
  return [{ text: 'ホーム', link: '/' }, ...visit(tree)]
}
const base = process.env.SITE_BASE || '/'
if (!base.startsWith('/') || !base.endsWith('/')) throw new Error('SITE_BASE must start and end with /')

export default defineConfig({
  title: 'Web制作・学習Wiki',
  description: 'HTML・CSSの仕組みと実装を学ぶノート',
  lang: 'ja-JP',
  base,
  srcDir: 'docs',
  outDir: 'site',
  cacheDir: '.vitepress/cache',
  appearance: false,
  vite: {
    build: { assetsInlineLimit: 0 },
    // Keep VitePress mobile navigation; replace only its article tree.
    resolve: { alias: [{ find: './VPSidebarGroup.vue', replacement: path.join(root, '.vitepress/theme/SidebarGroup.vue') }] }
  },
  transformPageData(page) {
    page.title = displayTitle(page.title)
    if (page.frontmatter.title) page.frontmatter.title = displayTitle(page.frontmatter.title)
  },
  cleanUrls: false,
  ignoreDeadLinks: false,
  buildEnd(config) {
    for (const rel of manifest.linked_assets || []) {
      const target = path.join(config.outDir, rel)
      mkdirSync(path.dirname(target), { recursive: true })
      copyFileSync(path.join(root, 'docs', rel), target)
    }
  },
  markdown: {
    anchor: { slugify },
    headers: { slugify },
    toc: { slugify },
    config(md) {
      md.use(publicLinks, manifest)
      md.use(displayTitles)
      md.use(animatedImages, manifest, root)
    }
  },
  themeConfig: {
    siteTitle: 'Web制作・学習Wiki',
    sidebar: makeSidebar(),
    nav: [{ text: 'ホーム', link: '/' }],
    outline: { level: [2, 3], label: 'このページの目次' },
    docFooter: { prev: '前の記事', next: '次の記事' },
    sidebarMenuLabel: '記事を選ぶ',
    returnToTopLabel: '上に戻る',
    darkModeSwitchLabel: 'テーマ',
    footer: { message: '学習・制作と並行して更新しています。' }
  }
})
