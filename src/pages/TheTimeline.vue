<script setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimeLineItemValid,
  isActivityValid,
  isPageValid
} from '@/validators'
import TimelineItem from '../components/TimelineItem.vue'
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants.js'

const props = defineProps({
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
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid,
  }
})

const emit = defineEmits({
  setTimelineItemActivity: ( timelineItem, activity ) => {
    return [isTimeLineItemValid(timelineItem),  isActivityValid(activity)].every(Boolean)
  },
})

const timelineItemRefs = ref([])

watchPostEffect(async() => {
  if(props.currentPage === PAGE_TIMELINE){
    await nextTick()
    scrollToCurrentTimelineItem()
  }
})

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
