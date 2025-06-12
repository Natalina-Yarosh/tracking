import { ref } from 'vue'
import { MILLISECONDS_IN_SECONDS } from './constants.ts'
import { activeTimelineItem, updateTimelineItem } from './timeline-items.ts'
import type { TimelineItem } from './types.ts'

const timelineItemTimer = ref<number | undefined>()

export function startTimelineItemTimer(timelineItem?: TimelineItem): void {
  timelineItem = timelineItem ?? activeTimelineItem.value
  updateTimelineItem(timelineItem as any, { isActive: true })

  timelineItemTimer.value = setInterval((): void => {
    updateTimelineItem(timelineItem as any, {
      activitySeconds: (timelineItem as any).activitySeconds + 1,
    })
  }, MILLISECONDS_IN_SECONDS)
}

export function stopTimelineItemTimer(): void {
  updateTimelineItem(activeTimelineItem.value as any, { isActive: false })

  clearInterval(timelineItemTimer.value)

  timelineItemTimer.value = undefined
}

export function resetTimelineItemTimer(timelineItem: TimelineItem): void {
  updateTimelineItem(timelineItem, { activitySeconds: 0 })

  if (activeTimelineItem.value) {
    stopTimelineItemTimer()
  }
}
