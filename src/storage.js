import { APP_NAME } from './constants'
import { isToday, today, endOfHour, toSeconds } from './time'
import { activeTimelineItem, timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'
import { startTimelineItemTimer, stopTimelineItemTimer } from '@/timeline-item-timer.js'

export function syncState(shouldLoad = true){
  shouldLoad ? saveState() : loadState()

  if(activeTimelineItem.value){
    shouldLoad ? startTimelineItemTimer(activeTimelineItem.value) : stopTimelineItemTimer(activeTimelineItem.value)
  }
}

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state = serializedState ? JSON.parse(serializedState) : {}

  // const state = storage.load()
  activities.value = state.activities || activities.value

  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = isToday(lastActiveAt)
    ? syncIdleSeconds(state.timelineItems, lastActiveAt)
    : timelineItems.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      lastActiveAt: today(),
    }),
  )
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find(({ isActive }) => isActive)
  if (activeTimelineItem) {
    activeTimelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }
  return timelineItems
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfHour(lastActiveAt) - lastActiveAt)
}
