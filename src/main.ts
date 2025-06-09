import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { syncState } from './storage.ts'
import { startCurrentDateTimer } from './time'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', (): void => {
  syncState(document.visibilityState === 'visible')
})

createApp(App).mount('#app')
