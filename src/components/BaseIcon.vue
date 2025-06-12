<script setup>
import { ICONS } from '../icons'
import { isIconValid } from '../validators.ts'

defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  },
})
</script>

<template>
  <component :is="ICONS[name]" :class="$attrs.class || 'h-8'"></component>
</template>
