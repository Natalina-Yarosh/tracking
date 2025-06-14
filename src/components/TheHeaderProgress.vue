<script setup lang="ts">
import { HUNDRED_PERCENT, PAGE_PROGRESS } from '../constants'
import { navigate } from '../router'
import BaseIcon from './BaseIcon.vue'
import { useTotalProgress } from '../composables/total-progress'
import { IconName } from '../types'

const { colorClass, percentage } = useTotalProgress()
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="navigate(PAGE_PROGRESS)">
    <div v-if="percentage < HUNDRED_PERCENT" class="flex items-center gap-1">
      <div>
        Progress: <span class="font-mono">{{ percentage }}%</span>
      </div>
      <div :class="`w-3 h-3 rounded-full ${colorClass}`" />
    </div>
    <div v-else class="flex items-center gap-1">
      Day complete!
      <BaseIcon :name="IconName.CHECK_CIRCLE" class="h-7 text-green-500" />
    </div>
  </a>
</template>
