<script setup>
import { nextTick, ref, watchPostEffect } from 'vue'
import { validateTimelineItems } from '@/validators'
import TimelineItem from '../components/TimelineItem.vue'
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants.js'
import { currentPage } from '../router'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validate: validateTimelineItems,
  }
})

defineExpose({ scrollToHour })

const timelineItemRefs = ref([])

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToHour(null, false)
  }
})

function scrollToHour(hour = null, isSmooth = true) {
  hour ??= new Date().getHours()
  const options = { behavior: isSmooth ? 'smooth' : 'instant' }
  if (hour === MIDNIGHT_HOUR) {
    document.body.scrollIntoView(options)
  } else {
    timelineItemRefs.value[hour - 1].$el.scrollIntoView(options)
  }
}
</script>

<template>
  <ul class="mt-7">
    <TimelineItem
      v-for="timelineItem in timelineItems"
      :key="timelineItem.hour"
      :timeline-item="timelineItem"
      ref="timelineItemRefs"
      @scroll-to-hour="scrollToHour"
    />
  </ul>
</template>
