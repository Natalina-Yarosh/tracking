<script setup lang="ts">
import { onMounted, watch, watchEffect } from 'vue'
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '@/constants'
import { isTimeLineItemValid } from '@/validators'
import { formatSeconds } from '@/functions'
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { useStopWatch } from '@/composables/stopWatch'
import { updateTimelineItem } from '@/timeline-items'
import { now } from '@/time.js'
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from '@/icons'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineItemValid,
  },
})

const { seconds, isRunning, start, stop, reset } = useStopWatch(
  props.timelineItem.activitySeconds
)

onMounted(() => {
  if(props.timelineItem.isActive){
    start()
  }
})

watchEffect(() => {
  if (props.timelineItem.hour !== now.value.getHours() && isRunning.value) {
    stop()
  }
})

watchEffect(() =>updateTimelineItem(props.timelineItem, {
  activitySeconds: seconds.value
}))

watch(isRunning, ()=> {
  updateTimelineItem(props.timelineItem, {
    isActive: Boolean(isRunning.value)
  })
})

</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton :type="BUTTON_TYPE_DANGER" @click="reset" :disabled="!timelineItem.activitySeconds">
      <BaseIcon :name="ICON_ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop">
      <BaseIcon :name="ICON_PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="timelineItem.hour !== now.getHours()"
    >
      <BaseIcon :name="ICON_PLAY" />
    </BaseButton>
  </div>
</template>
