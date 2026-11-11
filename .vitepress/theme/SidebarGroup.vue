<script setup>
import { ref } from 'vue'
import SidebarEntry from './SidebarEntry.vue'
defineProps({ items: { type: Array, required: true } })
const tree = ref()
function collapse() {
  for (const details of tree.value.querySelectorAll('details[open]')) details.open = false
}
</script>
<template>
  <div class="chapter-sidebar" ref="tree">
    <button class="collapse-chapters" type="button" @click="collapse">目次をすべて閉じる</button>
    <SidebarEntry v-for="item in items" :key="item.text || item.link || 'home'" :item="item" />
  </div>
</template>
