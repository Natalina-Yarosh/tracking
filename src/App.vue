<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#" >
      <img src="./assets/img/logo.png" alt="Logo" class="h-9">
    </a>
    <a href="#" class="text-sm">
      <p v-if="false" class="flex items-center gap-1">
        Day complete! 
        <CheckCircleIcon class="h-7 text-green-500" />
      </p>
      <div v-else class="flex items-center gap-1">
       <p>Progress: <span class="font-mono">20%</span></p>
       <div class="w-3 h-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main>

  </main>
</template>
