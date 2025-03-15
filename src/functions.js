import { PAGE_TIMELINE, HOURS_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR } from './constants'
import { isPageValid } from './validators'
export function normalizePageHash() {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE
  return PAGE_TIMELINE
}

export function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name) => ({
    id: id(),
    name,
    secondsToComplete: 0,
  }))
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTimelineItems() {
  const tinelineItems = []
  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
    tinelineItems.push({
      hour,
    })
  }
  return tinelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}
