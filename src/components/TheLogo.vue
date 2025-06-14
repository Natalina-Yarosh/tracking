<script setup lang="ts">
import { PAGE_TIMELINE } from '../constants'
import { navigate, currentPage } from '../router'
import { scrollToCurrentHour } from '../timeline-items'
import BaseIcon from './BaseIcon.vue'
import { IconName } from '../types'

function handleClick(): void {
  currentPage.value === PAGE_TIMELINE ? scrollToCurrentHour(true) : navigate(PAGE_TIMELINE)
}
</script>

<template>
  <a
    :href="`#${PAGE_TIMELINE}`"
    @click="handleClick"
    class="origin-left scale-125 bg-black text-white p-1 rounded"
  >
    <BaseIcon :name="IconName.CLOCK" class="h-5" />
  </a>
</template>
