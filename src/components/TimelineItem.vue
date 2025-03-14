<script setup>
import BaseSelect from './BaseSelect.vue'

import { ref } from 'vue'
import TimelineHour from './TimelineHour.vue'
import { isTimeLineItemValid } from '@/validators'
defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
})

const options = [
  { label: 'Running', value: 1 },
  { label: 'Coding', value: 2 },
  { label: 'Reading', value: 3 },
]

const selectedActivityId = ref(1)
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
