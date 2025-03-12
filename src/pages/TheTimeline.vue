<script setup>
defineProps({
    timelineItems:{
        required: true,
        type: Array
    }
})
import TimelineItem from '../components/TimelineItem.vue'


</script>

<template>
  <ul class="mt-7">
    <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timeline-item="timelineItem"/>
  </ul>
</template>
