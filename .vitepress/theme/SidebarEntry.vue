<script setup>
import { computed, ref, watch } from 'vue'
import { useData, withBase } from 'vitepress'
const props = defineProps({ item: { type: Object, required: true } })
const { page } = useData()
const normalize = value => decodeURI(value || '').replace(/\.(md|html)$/, '').replace(/\/$/, '').replace(/^\//, '')
const current = computed(() => normalize(page.value.relativePath))
const contains = item => item.link ? normalize(item.link) === current.value : item.items?.some(contains)
const active = computed(() => !!props.item.link && contains(props.item))
const expanded = ref(false)
watch([current, () => props.item], () => { expanded.value = !!contains(props.item) }, { immediate: true })
function toggle(event) {
  if (event.target !== event.currentTarget) return
  const details = event.currentTarget
  expanded.value = details.open
  if (details.open) {
    for (const sibling of details.parentElement.children) {
      if (sibling !== details && sibling.tagName === 'DETAILS') sibling.open = false
    }
  }
}
</script>

<template>
  <details v-if="item.items && item.text" class="chapter" :open="expanded" @toggle="toggle">
    <summary>{{ item.text }}</summary>
    <div class="chapter-children">
      <SidebarEntry v-for="child in item.items" :key="child.link || child.text" :item="child" />
    </div>
  </details>
  <div v-else-if="item.items" class="chapter-links">
    <SidebarEntry v-for="child in item.items" :key="child.link || child.text" :item="child" />
  </div>
  <a v-else class="chapter-link" :class="{ active }" :href="withBase(item.link)" :aria-current="active ? 'page' : undefined">{{ item.text }}</a>
</template>
