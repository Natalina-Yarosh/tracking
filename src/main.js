import './assets/main.css'
import * as storage from '@/storage.js'
import { createApp } from 'vue'
import App from './App.vue'
import { activities } from './activities'
import { timelineItems } from './timeline-items'
import { isToday } from './functions'

loadState()

document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'hidden' ? saveState() : loadState()
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

function loadState() {
  const state = storage.load()

  timelineItems.value = isToday(new Date(state.date)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities
}
createApp(App).mount('#app')
