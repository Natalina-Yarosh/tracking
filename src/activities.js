import { computed, ref } from 'vue'
import { id } from '@/functions.js'
import { SECONDS_IN_HOUR } from '@/constants.js'

export const activities = ref(generateActivities())
export const activitySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

export function createActivity(activity) {
  activities.value.push(activity)
}

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}


export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete  || 0
}

 function generateActivities() {
  return ['Coding', 'Training', 'Reading'].map((name, hour) => ({
    id: id(),
    name,
    secondsToComplete: hour * SECONDS_IN_HOUR,
  }))
}

 function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({ label: activity.name, value: activity.id }))
}
