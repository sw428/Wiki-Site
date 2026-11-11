import { readFileSync } from 'node:fs'
import path from 'node:path'
import { animationInfo } from './animation-info.mjs'
import { localTarget } from './public-links.mjs'

export function animatedImages(md, manifest, root) {
  const info = new Map()
  for (const rel of Object.keys(manifest.files).filter(p => p.endsWith('.svg'))) {
    const timeline = animationInfo(readFileSync(path.join(root, 'docs', rel), 'utf8'))
    if (timeline) info.set(rel, timeline)
  }
  md.core.ruler.push('linked-animation-preview', state => {
    const existing = new Set()
    for (const block of state.tokens) for (const token of block.children || []) {
      if (token.type === 'image') existing.add(localTarget(state.env.relativePath || '', token.attrGet('src')))
    }
    const output = []
    for (let i = 0; i < state.tokens.length; i++) {
      const block = state.tokens[i]
      output.push(block)
      if (block.type !== 'paragraph_close' || state.tokens[i - 1]?.type !== 'inline') continue
      for (const token of state.tokens[i - 1].children || []) {
        if (token.type !== 'link_open') continue
        const src = token.attrGet('href'), target = localTarget(state.env.relativePath || '', src)
        if (!info.has(target) || existing.has(target)) continue
        existing.add(target)
        const inline = new state.Token('inline', '', 0)
        const image = new state.Token('image', 'img', 0)
        image.attrSet('src', src)
        image.attrSet('alt', '')
        image.content = 'リンク先の比較図（アニメーション操作付き）'
        const alt = new state.Token('text', '', 0)
        alt.content = image.content
        image.children = [alt]
        inline.children = [image]
        output.push(new state.Token('paragraph_open', 'p', 1), inline, new state.Token('paragraph_close', 'p', -1))
      }
    }
    state.tokens = output
  })
  const render = md.renderer.rules.image
  md.renderer.rules.image = (tokens, i, options, env, self) => {
    const target = localTarget(env.relativePath || '', tokens[i].attrGet('src'))
    const timeline = info.get(target)
    const image = render(tokens, i, options, env, self)
    if (!timeline) return image
    return '<AnimationPlayer :duration="' + timeline.duration + '" :steps="' + JSON.stringify(timeline.steps) + '">' + image + '</AnimationPlayer>'
  }
}
