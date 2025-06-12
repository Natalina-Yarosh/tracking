import { computed, type ComputedRef } from 'vue'
import { getProgressColorClass } from '../functions.ts'
import { calculateCompletionPercentage, trackedActivities } from '../activities.ts'
import { calculateTrackedActivitySeconds, timelineItems } from '../timeline-items.ts'
import type { ProgressColorClass } from '../types.ts'

export function useTotalProgress(): {
  colorClass: ComputedRef<ProgressColorClass>
  percentage: ComputedRef<number>
} {
  const colorClass = computed((): ProgressColorClass => getProgressColorClass(percentage.value))

  const percentage = computed((): number => {
    return calculateCompletionPercentage(totalTrackedSeconds.value)
  })

  const totalTrackedSeconds = computed((): number => {
    return trackedActivities.value
      .map((activity): number =>
        Math.min(
          calculateTrackedActivitySeconds(timelineItems.value, activity),
          activity.secondsToComplete,
        ),
      )
      .reduce((total, seconds): number => total + seconds, 0)
  })

  return {
    colorClass,
    percentage,
  }
}
