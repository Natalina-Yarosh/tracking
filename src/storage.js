import { LOCAL_STORAGE_KEY } from './constants'
import { today } from './time'
import { activeTimelineItem, initializeTimelineItems, timelineItems } from '@/timeline-items.js'
import { activities, initializeActivities } from '@/activities.js'
import { startTimelineItemTimer, stopTimelineItemTimer } from '@/timeline-item-timer.js'

export function syncState(shouldLoad = true) {
  shouldLoad ? loadState() : saveState()

  if (activeTimelineItem.value) {
    shouldLoad ? startTimelineItemTimer() : stopTimelineItemTimer()
  }
}

function loadState() {
  const state = loadFromLocalStorage()
  initializeActivities(state)
  initializeTimelineItems(state)
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}')
}

function saveState() {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    }),
  )
}
