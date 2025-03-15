<script setup>
import { ref } from 'vue'

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
  id
} from './functions'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}

const activities = ref(generateActivities())

const activitySelectOptions = generateActivitySelectOptions(activities.value)

function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(name) {
  activities.value.push({
    id: id(),
    name,
    secondsToComplete: 0
  })
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col flex-grow">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity"
      @create-activity="createActivity"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
