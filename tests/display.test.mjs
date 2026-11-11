import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { displayTitle, displayTitles } from '../.vitepress/display-titles.mjs'
import { animationInfo } from '../.vitepress/animation-info.mjs'
import { animatedImages } from '../.vitepress/animated-images.mjs'
import { createAnimationClock } from '../.vitepress/theme/animation-clock.mjs'
import { ROOT } from '../scripts/sync.mjs'

test('remove article prefixes without losing meaningful numbers or changing anchors', () => {
  for (const title of ['01_題名', '04\\_題名', '⑦ 題名', '㊿ 題名', '01. 題名']) assert.equal(displayTitle(title), '題名')
  for (const title of ['1frなのに列が広がる', '100%の幅', 'HTML5', '第2章', '上から3番目']) assert.equal(displayTitle(title), title)
  const md = new MarkdownIt().use(displayTitles)
  md.core.ruler.push('existing-anchor', state => {
    for (const token of state.tokens) if (token.type === 'heading_open') token.attrSet('id', 'existing-anchor')
  })
  const html = md.render('# ⑦ 負のmargin\n\n## 1. 手順\n\n1. 操作\n')
  assert.match(html, /<h1 id="existing-anchor">負のmargin<\/h1>/)
  assert.match(html, /<h2 id="existing-anchor">1\. 手順<\/h2>/)
  assert.match(html, /<li>操作<\/li>/)
})

test('derive readable stops from CSS captions and SMIL geometry', () => {
  const source = fs.readFileSync(path.join(ROOT, 'docs/img/html-css/02_09_02_列を2本にする.svg'), 'utf8')
  assert.deepEqual(animationInfo(source), { duration: 22, steps: [0, 11.25, 16.75] })
  const margin = fs.readFileSync(path.join(ROOT, 'docs/img/html-css/01_05_07_上下の負のmargin_上下指定.svg'), 'utf8')
  assert.deepEqual(animationInfo(margin), { duration: 31.5, steps: [0.5, 6.5, 10.5, 16, 23.5] })
  assert.equal(animationInfo('<svg><rect width="10"/></svg>'), null)
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'sync-manifest.json')))
  let count = 0
  for (const rel of Object.keys(manifest.files).filter(p => p.endsWith('.svg'))) {
    const info = animationInfo(fs.readFileSync(path.join(ROOT, 'docs', rel), 'utf8'))
    if (!info) continue
    count++
    assert.ok(info.steps.length >= 2, rel)
    assert.ok(info.steps.every((n, i) => n >= 0 && n < info.duration && (!i || n > info.steps[i - 1])), rel)
  }
  assert.ok(count >= 1)
})

test('enhance only animated image references while keeping VitePress asset processing', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'sync-manifest.json')))
  const md = new MarkdownIt().use(animatedImages, manifest, ROOT)
  const html = md.render('![図](../img/html-css/02_09_02_列を2本にする.svg)\n\n![静止図](../img/static.svg)', { relativePath: 'articles/test.md' })
  assert.match(html, /<AnimationPlayer :duration="22" :steps="\[0,11\.25,16\.75\]">/)
  assert.match(html, /<img src="[^"]+" alt="図">/)
  assert.equal((html.match(/<AnimationPlayer/g) || []).length, 1)
  assert.match(html, /<img src="..\/img\/static.svg" alt="静止図">/)
  const linked = md.render('[比較図](../img/html-css/02_09_02_列を2本にする.svg)', { relativePath: 'articles/test.md' })
  assert.match(linked, /<a href=/)
  assert.match(linked, /<AnimationPlayer/)
  const repeated = md.render('[比較図](../img/html-css/02_09_02_列を2本にする.svg)\n\n![図](../img/html-css/02_09_02_列を2本にする.svg)', { relativePath: 'articles/test.md' })
  assert.equal((repeated.match(/<AnimationPlayer/g) || []).length, 1)
})

test('CSS and SMIL pause, resume and step together without duplicate clocks', () => {
  let smilTime, latest, callback, requestCount = 0, cancelled = 0, paused = 0
  const animations = [{ currentTime: null, pause() { paused++ } }, { currentTime: null, pause() { paused++ } }]
  const svg = { getAnimations: () => animations, pauseAnimations() { paused++ }, setCurrentTime(t) { smilTime = t } }
  const clock = createAnimationClock(svg, { duration: 22, steps: [0, 11.25, 16.75],
    onChange: state => { latest = state }, requestFrame: cb => { callback = cb; return ++requestCount }, cancelFrame: () => { cancelled++ } })
  assert.equal(paused, 3)
  assert.equal(latest.playing, false)
  assert.equal(smilTime, 0)
  clock.step()
  assert.equal(smilTime, 11.25)
  assert.ok(animations.every(a => a.currentTime === 11250))
  clock.play(); clock.play()
  assert.equal(requestCount, 1)
  callback(1000); callback(2000)
  assert.equal(smilTime, 12.25)
  assert.ok(animations.every(a => a.currentTime === 12250))
  clock.pause()
  assert.equal(latest.playing, false)
  assert.equal(cancelled, 1)
  callback(3000)
  assert.equal(smilTime, 12.25)
  clock.step(); assert.equal(smilTime, 16.75)
  clock.step(); assert.equal(smilTime, 0)
  clock.step(-1); assert.equal(smilTime, 16.75)
  clock.play(); clock.destroy()
  assert.equal(latest.playing, false)
  assert.equal(cancelled, 2)
})
