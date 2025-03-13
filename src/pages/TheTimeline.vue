<script setup>
import { validateTimelineItems } from '@/validators'
import TimelineItem from '../components/TimelineItem.vue'

defineProps({
    timelineItems:{
        required: true,
        type: Array,
        validate: validateTimelineItems
    }
})
</script>

<template>
  <ul class="mt-7">
    <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timeline-item="timelineItem"/>
  </ul>
</template>
