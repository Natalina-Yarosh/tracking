<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  MILLISECONDS_IN_SECONDS,
} from '@/constants'
import { isTimeLineItemValid } from '@/validators'
import { formatSeconds, currentHour } from '@/functions'
import { updateTimelineItem } from '@/timeline-items'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from './BaseIcon.vue'

import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
})

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref(false)

const isStartButtonDisabled = props.timelineItem.hour !== currentHour()

watch(
  () => props.timelineItem.activityId,
  () => updateTimelineItem(props.timelineItem, { activitySeconds: seconds.value }),
)

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItem(props.timelineItem, {
      activitySeconds: props.timelineItem.activitySeconds + 1,
    })

    seconds.value++
  }, MILLISECONDS_IN_SECONDS)
}

function stop() {
  clearInterval(isRunning.value)

  isRunning.value = false
}

function reset() {
  stop()

  updateTimelineItem(props.timelineItem, {
    activitySeconds: props.timelineItem.activitySeconds - seconds.value,
  })

  seconds.value = 0
}
</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset" :disabled="!seconds">
      <BaseIcon :name=ICON_ARROW_PATH class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name=ICON_PAUSE class="h-8" />
    </BaseButton>
    <BaseButton v-else :type="BUTTON_TYPE_SUCCESS" @click="start" :disabled="isStartButtonDisabled">
      <BaseIcon :name=ICON_PLAY class="h-8" />
    </BaseButton>
  </div>
</template>
