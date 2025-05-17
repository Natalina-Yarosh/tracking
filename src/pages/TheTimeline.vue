<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  timelineItems,
  timelineItemRefs,
  scrollToHour,
  scrollToCurrentHour,
} from '@/timeline-items.js'

onActivated(scrollToCurrentHour)
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
