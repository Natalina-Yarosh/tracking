<script setup>
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { nextTick, ref, inject } from 'vue'
import {id} from '@/functions'
import {createActivityKey} from '@/keys'

const name = ref('')

async function submit() {
  createActivity( {
      id: id(),
      name: name.value,
      secondsToComplete: 0 ,
    },
  )
  name.value = ''
  await nextTick()
  window.scrollTo(0, document.body.scrollHeight)
}

const createActivity = inject(createActivityKey)
</script>

<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      type="text"
      class="w-full rounder border px-4 text-xl"
      placeholder="Activity name"
      v-model="name"
    />
    <BaseButton :disabled="name.trim().length === 0">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
