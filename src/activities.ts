import { computed, ref } from 'vue'
import { HUNDRED_PERCENT } from './constants.ts'

import type { Activity, SelectOption, State } from './types'

export const activities = ref<Activity[]>([])

export const trackedActivities = computed<Activity[]>(() =>
  activities.value.filter(({ secondsToComplete }): boolean => secondsToComplete !== 0),
)

export const activitySelectOptions = computed<SelectOption[]>(() =>
  generateActivitySelectOptions(activities.value),
)

export function initializeActivities(state: State): void {
  activities.value = state.activities || []
}

export function createActivity(activity: Activity): void {
  activities.value.push(activity)
}

export function updateActivity(activity: Activity, fields: Partial<Activity>): Activity {
  return Object.assign(activity, fields)
}

export function deleteActivity(activity: Activity): void {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function calculateActivityCompletionPercentage(
  { secondsToComplete }: Activity,
  trackedSeconds: number,
): number {
  return Math.floor((trackedSeconds * HUNDRED_PERCENT) / secondsToComplete)
}

export function calculateCompletionPercentage(totalTrackedSeconds: number): number {
  return Math.floor((totalTrackedSeconds * HUNDRED_PERCENT) / totalActivitySecondsToComplete.value)
}

const totalActivitySecondsToComplete = computed(() => {
  return trackedActivities.value
    .map(({ secondsToComplete }): number => secondsToComplete)
    .reduce((total, seconds) => total + seconds, 0)
})

function generateActivitySelectOptions(activities: Activity[]): SelectOption[] {
  return activities.map((activity): SelectOption => ({ label: activity.name, value: activity.id }))
}
