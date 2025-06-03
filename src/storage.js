import { APP_NAME, MILLISECONDS_IN_SECONDS, SECONDS_IN_HOUR } from './constants'
import { isToday, today } from './time'
import { timelineItems } from '@/timeline-items.js'
import { activities } from '@/activities.js'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state =  serializedState ? JSON.parse(serializedState) : {}

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
      lastActiveAt: today()
    }),
  )
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  const activeTimelineItem = timelineItems.find(({isActive}) => isActive)
  if(activeTimelineItem) {
    activeTimelineItem.activitySeconds += calculateIdleSeconds(lastActiveAt)
  }
  return timelineItems
}


function calculateIdleSeconds(lastActiveAt){
  let idleMilliseconds = today() - lastActiveAt

  if(lastActiveAt.getHours() !== today().getHours()){
    idleMilliseconds = getEndOfIdleHour(lastActiveAt) - lastActiveAt
  }
  return idleMilliseconds / MILLISECONDS_IN_SECONDS
}


function getEndOfIdleHour(lastActiveAt){
  const endOfIdleHour = new Date(lastActiveAt)

  endOfIdleHour.setHours(endOfIdleHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECONDS)

  endOfIdleHour.setMinutes(0, 0, 0)

  return endOfIdleHour
}
