import path from 'node:path'

export function localTarget(page, url) {
  if (!url || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url)) return null
  const raw = decodeURIComponent(url.split(/[?#]/)[0])
  if (!raw) return null
  if (raw.startsWith('/') || raw.includes('\\')) return '!unsafe:' + raw
  const result = path.posix.normalize(path.posix.join(path.posix.dirname(page), raw))
  return result === '..' || result.startsWith('../') ? '!unsafe:' + raw : result
}

export function publicLinks(md, manifest) {
  const selected = new Set(Object.keys(manifest.files))
  md.core.ruler.after('inline', 'wiki-public-links', (state) => {
    const page = state.env.relativePath || ''
    const walk = (tokens) => {
      const stack = []
      for (const token of tokens) {
        if (token.type === 'link_open') {
          const target = localTarget(page, token.attrGet('href'))
          const unavailable = Boolean(target && !selected.has(target))
          stack.push(unavailable)
          if (unavailable) {
            token.type = 'html_inline'
            token.nesting = 0
            token.content = '<span class="unavailable" title="この参照先はサイトの公開対象外、または確認中です">'
          }
        } else if (token.type === 'link_close') {
          if (stack.pop()) {
            token.type = 'html_inline'
            token.nesting = 0
            token.content = '</span>'
          }
        } else if (token.type === 'image') {
          const target = localTarget(page, token.attrGet('src'))
          if (target && !selected.has(target)) {
            token.type = 'text'
            token.children = null
          }
        }
        if (token.children) walk(token.children)
      }
    }
    walk(state.tokens)
  })
}
