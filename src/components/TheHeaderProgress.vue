<script setup>
import { PAGE_PROGRESS } from '../constants'
import { navigate } from '../router'
import BaseIcon from './BaseIcon.vue'
import {ICON_CHECK_CIRCLE} from '../icons'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm" @click="navigate(PAGE_PROGRESS)">
    <p v-if="true" class="flex items-center gap-1">
      Day complete!
      <BaseIcon :name=ICON_CHECK_CIRCLE classes="h-7 text-green-500" />
    </p>
    <div v-else class="flex items-center gap-1">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
