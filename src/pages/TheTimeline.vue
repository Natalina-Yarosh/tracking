<script setup>
import { onActivated } from 'vue'
import TimelineItem from '../components/TimelineItem.vue'
import { timelineItems, scrollToCurrentHour } from '@/timeline-items.ts'

import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'

onActivated(scrollToCurrentHour)

</script>

<template>
  <div class="relative">
    <TheTimelineIndicator />
    <ul class="mt-7">
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :data-hour="timelineItem.hour"
      />
    </ul>
  </div>
</template>
