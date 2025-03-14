<script setup>
import BaseSelect from './BaseSelect.vue'

import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'
import { isTimeLineItemValid, validateSelectOptions } from '@/validators'
defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
})

const selectedActivityId = ref(0)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
