<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { ref } from 'vue'

const el = ref<HTMLElement | null>(null)

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{x}}, {{y}}
  </div>
</template>