<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { formatSecondsWithSign } from '../functions'
import { timelineItems, calculateTrackedActivitySeconds } from '../timeline-items'
import type { Activity } from '../types'
import { activities } from '../activities'

const props = defineProps<{ activity: Activity }>()

const classes = computed((): string[] => [
  'flex items-center rounded px-2 font-mono text-xl',
  remainingSeconds.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600',
])

const remainingSeconds = computed(
  (): number =>
    calculateTrackedActivitySeconds(timelineItems.value, props.activity) -
    props.activity.secondsToComplete,
)

const isAudioAllowed = ref<boolean>(false)

const alarm = new Audio(
  'data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...',
)
alarm.src = '/audio.mp3' // Путь к вашему звуковому файлу в public/

// Разрешаем звук после пользовательского взаимодействия
function allowAudio(): void {
  if (isAudioAllowed.value) return

  isAudioAllowed.value = true
  // Воспроизводим и сразу останавливаем тихий звук для разблокировки
  alarm.volume = 0
  alarm
    .play()
    .then(() => {
      alarm.pause()
      alarm.currentTime = 0
      alarm.volume = 1 // Возвращаем нормальную громкость
    })
    .catch((e: Error) => console.error('Ошибка разблокировки звука:', e))
}

// Воспроизводим сигнал
function playAlarm(): void {
  if (!isAudioAllowed.value) return

  alarm.currentTime = 0
  alarm.play().catch((e: Error) => console.error('Ошибка воспроизведения звука:', e))
}

// Отслеживаем изменение оставшегося времени
watch(remainingSeconds, (newVal: number, oldVal: number) => {
  console.log(newVal, oldVal)
  if (newVal === 0 && oldVal < 0) {
    playAlarm()
    console.log(`Задача "${props.activity.name}" завершена!`)
  }
})
</script>
<template>
  <div :class="classes" @click="allowAudio">
    {{ formatSecondsWithSign(remainingSeconds) }}
    <button v-if="!isAudioAllowed" class="ml-2 text-xs text-blue-500" @click.stop="allowAudio">
      (Включить звук)
    </button>
  </div>
</template>
