import { SaxesParser } from 'saxes'

// Stop at readable captions and completed movements, skipping fade/wait periods.
export function animationInfo(source) {
  if (!/@keyframes|<animate(?:Transform|Motion)?\b/.test(source)) return null
  const moments = new Set([0]), css = [], smil = []
  const parser = new SaxesParser({ xmlns: true })
  parser.on('opentag', tag => {
    if (!['animate', 'animateTransform', 'animateMotion'].includes(tag.local)) return
    const a = Object.fromEntries(Object.values(tag.attributes).map(a => [a.local, a.value]))
    smil.push(a)
  })
  parser.write(source).close()
  const seconds = value => /ms$/.test(value) ? parseFloat(value) / 1000 : parseFloat(value)
  const durations = [...source.matchAll(/animation\s*:[^;{}]*?([\d.]+m?s)\b/g)].map(m => seconds(m[1]))
  durations.push(...smil.map(a => seconds(a.dur || '0s')))
  const duration = Math.max(0, ...durations.filter(Number.isFinite))
  if (!duration) return null
  // The published SVGs use flat keyframe declarations (no nested at-rules).
  for (const match of source.matchAll(/@keyframes\s+([\w-]+)\s*\{((?:[^{}]*\{[^{}]*\})+)[^{}]*\}/g)) {
    const frames = [...match[2].matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(m => ({
      offsets: [...m[1].matchAll(/([\d.]+)%/g)].map(p => Number(p[1]) / 100), body: m[2]
    }))
    css.push({ name: match[1], frames })
  }
  for (const { name, frames } of css) {
    let captionAdded = false
    for (let i = 0; i < frames.length; i++) {
      const { offsets, body } = frames[i]
      if (!offsets.length) continue
      if ((/^caption-state-/.test(name) || name === 'reveal') && !captionAdded && /opacity\s*:\s*1(?:\s*;|\s*$)/.test(body)) {
        moments.add(offsets[0] * duration)
        captionAdded = true
      }
      if (i && /(?:transform|height|width|\bx|\by)\s*:/.test(body) && body !== frames[i - 1].body) moments.add(offsets[0] * duration)
    }
  }
  for (const a of smil) {
    if (!a.keyTimes || !a.values || a.attributeName === 'opacity') continue
    const times = a.keyTimes.split(';').map(Number), values = a.values.split(';')
    for (let i = 1; i < times.length; i++) if (values[i] !== values[i - 1]) moments.add(times[i] * seconds(a.dur))
  }
  const candidates = [...moments].filter(n => n >= 0 && n < duration - 0.05).sort((a, b) => a - b)
    .map(n => Math.round(n * 1000) / 1000)
  const steps = []
  for (const time of candidates) {
    if (steps.length && time - steps.at(-1) <= 0.8) steps[steps.length - 1] = time
    else steps.push(time)
  }
  return { duration, steps }
}
