import { computed, ref } from 'vue'
import { HUNDRED_PERCENT, MILLISECONDS_IN_SECONDS, SECONDS_IN_DAY, SECONDS_IN_MINUTE } from '@/constants.js'

export const now = ref(new Date())

export const secondsSinceMidnightInPercentage = computed(
  () => (HUNDRED_PERCENT * secondsSinceMidnight.value) / SECONDS_IN_DAY,
)

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))
const secondsSinceMidnight = computed(() => (now.value - midnight.value) / MILLISECONDS_IN_SECONDS)

let timer = null

export function startTimer() {
  now.value = new Date()
  timer = setInterval(
    () => (now.value = new Date(now.value.getTime() + SECONDS_IN_MINUTE * MILLISECONDS_IN_SECONDS)),
    MILLISECONDS_IN_SECONDS,
  )
}

export function stopTimer() {
  clearInterval(timer)
}
