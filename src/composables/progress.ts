import { computed, type ComputedRef } from 'vue'
import { getProgressColorClass } from '../functions.ts'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items.ts'
import { calculateActivityCompletionPercentage } from '../activities.ts'
import type { Activity, ProgressColorClass } from '../types.ts'

export function useProgress(activity: Activity): {
  colorClass: ComputedRef<ProgressColorClass>
  percentage: ComputedRef<number>
  trackedActivitySeconds: ComputedRef<number>
} {
  const colorClass = computed((): ProgressColorClass => getProgressColorClass(percentage.value))
  const percentage = computed((): number => {
    return calculateActivityCompletionPercentage(activity, trackedActivitySeconds.value)
  })
  const trackedActivitySeconds = computed((): number =>
    calculateTrackedActivitySeconds(timelineItems.value, activity),
  )
  return {
    colorClass,
    percentage,
    trackedActivitySeconds,
  }
}
