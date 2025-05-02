<script setup>
import {onMounted, ref} from 'vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimeLineItemValid,
  isActivityValid,
} from '@/validators'
import TimelineItem from '../components/TimelineItem.vue'
import { MIDNIGHT_HOUR } from '@/constants.js'

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
  setTimelineItemActivity: ( timelineItem, activity ) => {
    return [isTimeLineItemValid(timelineItem),  isActivityValid(activity)].every(Boolean)
  },
})

const timelineItemRefs = ref([])

onMounted(()=> scrollToCurrentTimelineItem)

function scrollToCurrentTimelineItem(){
  const currentHour = new Date().getHours()

  if(currentHour === MIDNIGHT_HOUR){
    document.body.scrollIntoView()
  }else{
    timelineItemRefs.value[currentHour - 1].$el.scrollIntoView()
  }
}
</script>

<template>
  <ul class="mt-7">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timeline-item="timelineItem"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      ref="timelineItemRefs"
      @select-activity="emit('setTimelineItemActivity',  timelineItem,  $event )"
    />
  </ul>
</template>
