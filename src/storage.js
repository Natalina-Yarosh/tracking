import { APP_NAME } from './constants'
import { isToday, today } from './time'
import { timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state =  serializedState ? JSON.parse(serializedState) : {}

  // const state = storage.load()

  timelineItems.value = isToday(new Date(state.date)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities || activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      date: today()
    }),
  )
}

