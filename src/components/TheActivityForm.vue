<script setup>
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { isActivityValid } from '@/validators'
import { ref } from 'vue'

const emit = defineEmits({
  submit: isActivityValid,
})

const activity = ref('')

function submit(){
    emit('submit', activity.value)
    activity.value = ''
}
</script>

<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
  >
    <input
      type="text"
      class="w-full rounder border px-4 text-xl"
      placeholder="Activity name"
      v-model="activity"
    />
    <BaseButton :disabled="activity.trim().length === 0">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
