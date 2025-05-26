import { computed, ref } from 'vue'
import { id } from '@/functions.js'
import { getTotalActivitySeconds } from '@/timeline-items.js'
import { HUNDRED_PERCENT } from '@/constants.js'

export const activities = ref(generateActivities())
export const trackedActivities = computed(() =>
  activities.value.filter(({ secondsToComplete }) => secondsToComplete),
)

export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function createActivity(activity) {
  activities.value.push(activity)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function getActivityProgress (activity){
  return Math.floor((getTotalActivitySeconds(activity) * HUNDRED_PERCENT) / activity.secondsToComplete)
}

function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hour) => ({
    id: id(),
    name,
    secondsToComplete: 15 * 60 // hour * SECONDS_IN_HOUR,
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}
