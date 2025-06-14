import { ref, computed, watch } from 'vue'
import { HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants.ts'
import { endOfHour, isToday, today, toSeconds, now } from './time.ts'
import { stopTimelineItemTimer } from './timeline-item-timer'
import type { Activity, Hour, State, TimelineItem } from './types.ts'

export const timelineItems = ref<TimelineItem[]>([])

export const activeTimelineItem = computed((): TimelineItem | undefined =>
  timelineItems.value.find(({ isActive }): boolean => isActive),
)

watch<Date>(now, (after, before): void => {
  if (activeTimelineItem.value && activeTimelineItem.value.hour !== after.getHours()) {
    stopTimelineItemTimer()
  }
  if (before.getHours() !== after.getHours() && after.getHours() === MIDNIGHT_HOUR) {
    resetTimelineItems()
  }
})

export function initializeTimelineItems(state: State): void {
  const lastActiveAt = new Date(state.lastActiveAt)
  timelineItems.value = state.timelineItems ?? generateTimelineItems()

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems()
  }
}

export function updateTimelineItem(
  timelineItem: TimelineItem,
  fields: Partial<TimelineItem>,
): TimelineItem {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(
  timelineItems: TimelineItem[],
  activity: Activity,
): void {
  filterTimelineItemsByActivity(timelineItems, activity).forEach(
    (timelineItem: TimelineItem): void => {
      updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds:
          timelineItem.hour === today().getHours() ? timelineItem.activitySeconds : 0,
      })
    },
  )
}

export function calculateTrackedActivitySeconds(
  timelineItems: TimelineItem[],
  activity: Activity,
): number {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }: TimelineItem): number => activitySeconds)
    .reduce((total: number, seconds: number): number => Math.round(total + seconds), 0)
}

export function scrollToCurrentHour(isSmooth = false): void {
  scrollToHour(today().getHours() as Hour, isSmooth)
}

export function scrollToHour(hour: Hour, isSmooth = true): void {
  try {
    const el: any =
      hour === MIDNIGHT_HOUR ? document.body : document.querySelector(`[data-hour="${hour}"]`)
    el.scrollIntoView({ behavior: isSmooth ? 'smooth' : 'instant' })
  } catch (error) {
    console.log(error)
  }
}

function resetTimelineItems(): void {
  timelineItems.value.forEach((timelineItem): void => {
    updateTimelineItem(timelineItem, { isActive: false, activitySeconds: 0 })
  })
}

function syncIdleSeconds(lastActiveAt: Date): void {
  updateTimelineItem(activeTimelineItem.value as any, {
    activitySeconds:
      (activeTimelineItem.value as any).activitySeconds + calculateIdleSeconds(lastActiveAt),
  })
}

function calculateIdleSeconds(lastActiveAt: Date): number {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds((today() as any) - (lastActiveAt as any))
    : toSeconds((endOfHour(lastActiveAt) as any) - (lastActiveAt as any))
}

function generateTimelineItems(): TimelineItem[] {
  return ([...Array(HOURS_IN_DAY).keys()] as Hour[]).map(
    (hour): TimelineItem => ({
      hour,
      activityId: null,
      activitySeconds: 0,
      isActive: false,
    }),
  )
}

function filterTimelineItemsByActivity(
  timelineItems: TimelineItem[],
  { id }: Activity,
): TimelineItem[] {
  return timelineItems.filter(({ activityId }): boolean => activityId === id)
}
