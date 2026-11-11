// A single clock keeps CSS captions and SVG/SMIL geometry in sync.
export function createAnimationClock(svg, { duration, steps, onChange = () => {},
  requestFrame = requestAnimationFrame, cancelFrame = cancelAnimationFrame } = {}) {
  const animations = svg.getAnimations({ subtree: true })
  for (const animation of animations) animation.pause()
  svg.pauseAnimations()
  let time = steps[0], playing = false, frame = null, previous = null
  function seek(value) {
    time = ((value % duration) + duration) % duration
    svg.setCurrentTime(time)
    for (const animation of animations) animation.currentTime = time * 1000
    const stage = Math.max(0, steps.findLastIndex(step => step <= time + 0.002))
    onChange({ time, playing, stage })
  }
  function tick(timestamp) {
    if (!playing) return
    if (previous !== null) seek(time + (timestamp - previous) / 1000)
    previous = timestamp
    frame = requestFrame(tick)
  }
  function pause() {
    playing = false
    if (frame !== null) cancelFrame(frame)
    frame = null
    previous = null
    seek(time)
  }
  function play() {
    if (playing) return
    playing = true
    previous = null
    seek(time)
    frame = requestFrame(tick)
  }
  function step(direction = 1) {
    pause()
    const next = direction > 0 ? steps.find(t => t > time + 0.002) : steps.findLast(t => t < time - 0.002)
    seek(next ?? (direction > 0 ? steps[0] : steps.at(-1)))
  }
  seek(time)
  return { play, pause, step, destroy: pause }
}
