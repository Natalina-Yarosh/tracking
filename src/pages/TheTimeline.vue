<script setup>
import { onActivated, onDeactivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '@/timeline-items.js'

import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { startTimer, stopTimer } from '@/time'

onActivated(() => {
  scrollToCurrentHour()
  startTimer()
})
onDeactivated(stopTimer)
</script>

<template>
  <div class="relative">
    <TheTimelineIndicator />
    <ul class="mt-7">
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>
