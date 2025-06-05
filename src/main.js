import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { syncState } from '@/storage.js'

syncState()

document.addEventListener('visibilitychange', () => {
  syncState(document.visibilityState === 'hidden')
})

createApp(App).mount('#app')
