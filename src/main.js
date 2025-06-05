import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { loadState, saveState } from '@/storage.js'
import { startTimelineItemTimer } from '@/timeline-item-timer.js'
import { activeTimelineItem } from '@/timeline-items.js'

loadState()


if(activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value)
}


document.addEventListener('visibilitychange', () => {
  document.visibilityState === 'hidden' ? saveState() : loadState()
})

createApp(App).mount('#app')
