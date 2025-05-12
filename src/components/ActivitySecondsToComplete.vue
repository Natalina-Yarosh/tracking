<script setup lang="ts">
import { computed, inject } from 'vue'
import { formatSeconds, getTotalActivitySeconds } from '@/functions.js'
import { isActivityValid } from '@/validators'
import {timelineItemsKey} from '@/keys'

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

const timelineItems = inject(timelineItemsKey)

const classes = computed(
  () =>
    `flex items-center rounded bg-purple-100 px-2 font-mono text-xl text-purple-600 ${colorClasses.value}`,
)

const secondsDiff = computed(
  () => getTotalActivitySeconds(props.activity, timelineItems.value) - props.activity.secondsToComplete,
)

const sign = computed(() => (secondsDiff.value >= 0 ? '+' : '-'))

const seconds = computed(() => `${sign.value}${formatSeconds(secondsDiff.value)}`)

const colorClasses = computed(() =>
  secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
)
</script>
<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
