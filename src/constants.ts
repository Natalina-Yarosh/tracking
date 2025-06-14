import { generatePeriodSelectOptions } from './functions.ts'
import { type NavItem, type ButtonType, IconName, PageName } from './types.ts'

export const LOCAL_STORAGE_KEY = 'tyme-tracker'

export const NAV_ITEMS: NavItem[] = [
  {
    page: PageName.TIMELINE,
    icon: IconName.CLOCK,
  },
  {
    page: PageName.ACTIVITIES,
    icon: IconName.LIST_BULLET,
  },
  {
    page: PageName.PROGRESS,
    icon: IconName.CHART_BAR,
  },
]

export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const SECONDS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export const SECONDS_IN_DAY = HOURS_IN_DAY * SECONDS_IN_HOUR
export const MILLISECONDS_IN_SECONDS = 1000

export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'

export const BUTTON_TYPES: ButtonType[] = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions()

export const LOW_PERCENT = 33
export const MEDIUM_PERCENT = 66
export const HUNDRED_PERCENT = 100
