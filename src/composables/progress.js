import { computed } from 'vue'
import { getProgressColorClass } from '@/functions.js'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items.js'
import { calculateActivityCompletionPercentage } from '../activities.js'

export function useProgress(activity) {
  const colorClass = computed(() => getProgressColorClass(percentage.value))
  const percentage = computed(() => {
    return calculateActivityCompletionPercentage(activity, trackedSeconds.value)
  })
  const trackedSeconds = computed(() =>
    calculateTrackedActivitySeconds(timelineItems.value, activity),
  )
  return {
    colorClass,
    percentage,
    trackedSeconds,
  }
}
