<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import {PAGE_PROGRESS} from '../constants'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" class="text-sm">
    <p v-if="false" class="flex items-center gap-1">
      Day complete!
      <CheckCircleIcon class="h-7 text-green-500" />
    </p>
    <div v-else class="flex items-center gap-1">
      <p>Progress: <span class="font-mono">20%</span></p>
      <div class="w-3 h-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
