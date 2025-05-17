<script setup>
import { nextTick, watchPostEffect } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { PAGE_TIMELINE } from '@/constants.js'
import { currentPage } from '../router'
import {
  timelineItems,
  timelineItemRefs,
  scrollToHour,
  scrollToCurrentHour,
} from '@/timeline-items.js'

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToCurrentHour(false)
  }
})
</script>

<template>
  <ul class="mt-7">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timeline-item="timelineItem"
      ref="timelineItemRefs"
      @scroll-to-hour="scrollToHour(timelineItem.hour)"
    />
  </ul>
</template>
