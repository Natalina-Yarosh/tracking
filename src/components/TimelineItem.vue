<script setup>
import {inject} from 'vue'
import BaseSelect from './BaseSelect.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import TimelineHour from './TimelineHour.vue'
import { isTimeLineItemValid, isHourValid } from '@/validators'

import { activitySelectOptionsKey, setTimelineItemActivityKey } from '@/keys'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  }
})

const emit = defineEmits({
  scrollToHour: isHourValid()
})

const activitySelectOptions = inject(activitySelectOptionsKey)
const setTimelineItemActivity = inject(setTimelineItemActivityKey)

</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch
      :timeline-item="timelineItem"
    />
  </li>
</template>
