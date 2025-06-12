<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseSelect from './BaseSelect.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '../constants.ts'
import { isActivityValid } from '../validators.ts'
import { updateActivity, deleteActivity } from '../activities.ts'
import { timelineItems, resetTimelineItemActivities } from '../timeline-items.ts'
import { ICON_TRASH } from '../icons.ts'
import RemainingActivitySeconds from './RemainingActivitySeconds.vue'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid,
  },
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono flex-grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <RemainingActivitySeconds v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
