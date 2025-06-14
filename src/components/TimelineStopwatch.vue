<script setup lang="ts">
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING } from '../constants'
import { formatSeconds } from '../functions'
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import { now } from '../time'
import {
  resetTimelineItemTimer,
  stopTimelineItemTimer,
  startTimelineItemTimer,
} from '../timeline-item-timer'
import { activeTimelineItem, timelineItems } from '../timeline-items'
import { type TimelineItem, IconName } from '../types'

defineProps<{ timelineItem: TimelineItem }>()
</script>
<template>
  <div class="flex w-full gap-2">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      @click="resetTimelineItemTimer(timelineItem)"
      :disabled="!timelineItem.activitySeconds"
    >
      <BaseIcon :name="IconName.ARROW_PATH" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl">
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItem === activeTimelineItem"
      :type="BUTTON_TYPE_WARNING"
      @click="stopTimelineItemTimer"
    >
      <BaseIcon :name="IconName.PAUSE" />
    </BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="startTimelineItemTimer(timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
    >
      <BaseIcon :name="IconName.PLAY" />
    </BaseButton>
  </div>
</template>
