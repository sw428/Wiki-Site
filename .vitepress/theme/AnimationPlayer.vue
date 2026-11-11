<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { createAnimationClock } from './animation-clock.mjs'
const props = defineProps({ duration: { type: Number, required: true }, steps: { type: Array, required: true } })
const wrapper = ref(), host = ref(), ready = ref(false), failed = ref(false)
const playing = ref(false), stage = ref(0)
let clock, controller, shadow, disposed = false
async function load() {
  failed.value = false
  controller?.abort()
  controller = new AbortController()
  try {
    const image = wrapper.value.querySelector('img')
    const url = new URL(image.currentSrc || image.src, window.location.href)
    if (url.origin !== window.location.origin) throw new Error('SVG must be local')
    const response = await fetch(url, { signal: controller.signal })
    if (!response.ok) throw new Error('SVG load failed')
    const doc = new DOMParser().parseFromString(await response.text(), 'image/svg+xml')
    if (disposed) return
    if (doc.documentElement.localName !== 'svg' || doc.querySelector('parsererror,script,foreignObject,iframe,object,embed')) throw new Error('Invalid SVG')
    for (const element of doc.querySelectorAll('*')) {
      for (const attribute of element.attributes) {
        if (/^on/i.test(attribute.localName) || (attribute.localName === 'href' && !attribute.value.startsWith('#'))) throw new Error('Active SVG')
      }
    }
    // No autoplay, including with reduced motion. Explicit playback uses the
    // motion layer; the original file and its reduced-motion fallback stay intact.
    for (const style of doc.querySelectorAll('style')) {
      style.textContent = style.textContent
        .replace(/@media\s*\(\s*prefers-reduced-motion\s*:\s*no-preference\s*\)/g, '@media all')
        .replace(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/g, '@media not all')
    }
    const svg = document.importNode(doc.documentElement, true)
    svg.style.display = 'block'
    svg.style.margin = '0 auto'
    svg.style.maxWidth = '100%'
    svg.style.height = 'auto'
    shadow ||= host.value.attachShadow({ mode: 'open' })
    shadow.replaceChildren(svg)
    // Flush style before collecting CSS animations. SMIL has a separate API.
    svg.getBoundingClientRect()
    clock = createAnimationClock(svg, { duration: props.duration, steps: props.steps,
      onChange: state => { playing.value = state.playing; stage.value = state.stage } })
    ready.value = true
  } catch (error) {
    if (error.name !== 'AbortError' && !disposed) failed.value = true
    shadow?.replaceChildren()
  }
}
function toggle() { playing.value ? clock.pause() : clock.play() }
function visibility() { if (document.hidden) clock?.pause() }
onMounted(() => { load(); document.addEventListener('visibilitychange', visibility) })
onBeforeUnmount(() => {
  disposed = true
  controller?.abort()
  clock?.destroy()
  document.removeEventListener('visibilitychange', visibility)
})
</script>

<template>
  <span ref="wrapper" class="animation-player" :class="{ 'is-ready': ready }">
    <span v-if="ready" class="animation-controls" role="group" aria-label="図のアニメーション操作">
      <button type="button" @click="toggle">{{ playing ? '停止' : '再生' }}</button>
      <button type="button" @click="clock.step(-1)">前の段階</button>
      <button type="button" @click="clock.step(1)">次の段階</button>
      <span class="animation-status" aria-live="polite">{{ playing ? '再生中' : '停止中' }} · 段階 {{ stage + 1 }} / {{ steps.length }}</span>
    </span>
    <span ref="host" class="animation-drawing"></span>
    <slot />
    <span v-if="failed" class="animation-error">図の操作を読み込めませんでした。<button type="button" @click="load">再読み込み</button></span>
  </span>
</template>
