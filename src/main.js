import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { loadState, saveState } from '@/storage.js'
import { findActiveTimelineItem, startTimelineItemTimer } from '@/timeline-items.js'

loadState()

const activeTimelineItem = findActiveTimelineItem()

if(activeTimelineItem){
  startTimelineItemTimer(activeTimelineItem)
}



document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'hidden' ? saveState() : loadState()
})

createApp(App).mount('#app')
