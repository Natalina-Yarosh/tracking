<script setup>
import { ref, computed } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities,
} from './functions'

const currentPage = ref(normalizePageHash())
const activities = ref(generateActivities())
const timelineItems = ref(generateTimelineItems(activities.value))

function goTo(page) {
  currentPage.value = page
}

const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function deleteActivity(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0

    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(activity) {

  activities.value.push(activity)
}

function setTimelineItemActivity(timelineItem, activity){
  timelineItem.activityId = activity.id
}

function setActivitySecondsToComplete(activity, secondsToComplete){
  activity.secondsToComplete = secondsToComplete
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
      :activities="activities"
      :current-page="currentPage"
      @set-timeline-item-activity="setTimelineItemActivity"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
