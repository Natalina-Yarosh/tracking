import './assets/main.css'

import * as storage from '@/storage.js'

import { createApp } from 'vue'
import App from './App.vue'
import { activities } from './activities'
import { timelineItems } from './timeline-items'

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    console.log('hidden')
    saveState()
  }
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

createApp(App).mount('#app')
