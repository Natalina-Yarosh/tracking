<script setup>
import {HOURS_IN_DAY} from '../constants'

defineProps({
    timelineItems:{
        required: true,
        type: Array,
        validator(timelineItems){
            return timelineItems.every(({hour}) => typeof hour === 'number' && hour >= 0 && hour < HOURS_IN_DAY)
        }
    }
})
import TimelineItem from '../components/TimelineItem.vue'


</script>

<template>
  <ul class="mt-7">
    <TimelineItem v-for="timelineItem in timelineItems" :key="timelineItem.hour" :timeline-item="timelineItem"/>
  </ul>
</template>
