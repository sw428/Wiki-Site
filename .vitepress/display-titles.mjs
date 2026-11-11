// Display only: keep source paths and existing heading anchors unchanged.
export function displayTitle(value) {
  return value.replace(/^(?:[0-9０-９]+(?:\\?_+|[.．、:：)）]\s*|\s+)|[①-⑳㉑-㉟㊱-㊿⑴-⒇❶-❿]\s*)+/, '').trim()
}
export function displayTitles(md) {
  // Heading IDs are assigned before rendering. Only alter visible H1 tokens.
  const render = md.renderer.rules.heading_open || ((tokens, i, options, env, self) => self.renderToken(tokens, i, options))
  md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
    const inline = tokens[i + 1]
    if (tokens[i].tag === 'h1' && inline?.type === 'inline') {
      const original = inline.content
      const first = inline.children?.find(t => t.type === 'text')
      if (first) first.content = displayTitle(first.content)
      inline.content = displayTitle(inline.content)
      for (const child of inline.children || []) {
        const label = child.attrGet('aria-label')
        if (label) child.attrSet('aria-label', label.replace(original, inline.content))
      }
    }
    return render(tokens, i, options, env, self)
  }
}
