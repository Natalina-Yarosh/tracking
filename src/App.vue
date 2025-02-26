<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline';
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
      <li class=" flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" href="#timeline">
          <ClockIcon class="h-6 w-6"/>
           Timeline
          </a>
      </li>
      <li class=" flex-1" >
        <a class="flex flex-col items-center p-2 text-xs capitalize" href="#activities"> 
          <ListBulletIcon class="h-6 w-6"/>
          Activities
        </a>
      </li>
      <li class=" flex-1">
        <a class="flex flex-col items-center p-2 text-xs capitalize" href="#progress"> 
          <ChartBarIcon class="h-6 w-6"/>
          Progress
        </a>
      </li>
    </ul>
  </nav>
</template>
