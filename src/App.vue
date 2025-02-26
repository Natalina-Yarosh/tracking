<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

const navItems = ['timeline', 'activities', 'progress'];
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#">
      <img src="./assets/img/logo.png" alt="Logo" class="h-9" />
    </a>
    <a href="#" class="text-sm">
      <p v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </p>
      <div v-else class="flex items-center gap-1">
        <p>Progress: <span class="font-mono">20%</span></p>
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main class="flex flex-col flex-grow">
    
  </main>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t" >
      <li v-for="item in navItems" :key="item" class=" flex-1">
        <a :href='`#${item}`' class="flex flex-col items-center p-2 text-xs capitalize" >
          <ClockIcon v-if="item === 'timeline'" class="h-6 w-6"/>
          <ListBulletIcon v-else-if="item === 'activities'" class="h-6 w-6"/>
          <ChartBarIcon v-else class="h-6 w-6"/>
           {{ item }}
          </a>
      </li>
    </ul>
  </nav>
</template>
