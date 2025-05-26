<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import {
  timelineItems,
  timelineItemRefs,
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
    />
  </ul>
</template>
