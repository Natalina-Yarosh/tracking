<script setup>

import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import { isPageValid } from '@/validators'
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants'

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)"/>
    <TheHeaderProgress  @click="emit('navigate', PAGE_PROGRESS)"/>
  </header>
</template>
