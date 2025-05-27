<script setup>
import { computed } from 'vue'
import { formatSeconds, getProgressColorClass } from '@/functions.js'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items.js'
import { calculateActivityCompletionPercentage } from '../activities.js'
import { isActivityValid } from '@/validators.js'
import { HUNDRED_PERCENT } from '@/constants.js'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const scaleWidth = computed(() => Math.min(percentage.value, HUNDRED_PERCENT))


const percentage = computed(() => {
  return calculateActivityCompletionPercentage(
    props.activity,
    trackedActivitySeronds.value,
  )
})
const trackedActivitySeronds = computed(()=> calculateTrackedActivitySeconds(timelineItems.value, props.activity))  
</script>

<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="getProgressColorClass(percentage)" :style="`width: ${scaleWidth}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span>
        {{ formatSeconds(trackedActivitySeronds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}
      </span>
    </div>
  </li>
</template>
