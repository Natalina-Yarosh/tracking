<script setup>
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimeLineItemValid,
  isActivityValid,
  isNull,
} from '@/validators'
import TimelineItem from '../components/TimelineItem.vue'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validate: validateTimelineItems,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const emit = defineEmits({
  setTimelineItemActivity: ({ timelineItem, activity }) => {
    return [isTimeLineItemValid(timelineItem), isNull(activity) || isActivityValid(activity)].every(Boolean)
  },
})
</script>

<template>
  <ul class="mt-7">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timeline-item="timelineItem"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
    />
  </ul>
</template>
