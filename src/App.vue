<script setup>
import { ref } from 'vue'

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import TheTimeline from './pages/TheTimeline.vue'

import{normalizePageHash, generateTimelineItems} from './functions'

const currentPage = ref(normalizePageHash())
const timelineItems = generateTimelineItems()

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader
    @go-to-timeline="goTo(PAGE_TIMELINE)"
    @go-to-progress="goTo(PAGE_PROGRESS)"
  />
  <main class="flex flex-col flex-grow">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"/>
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
