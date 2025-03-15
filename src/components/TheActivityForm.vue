<script setup>
import BaseButton from './BaseButton.vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { BUTTON_TYPE_PRIMARY } from '../constants'
import { isActivityValid } from '@/validators'

const emit = defineEmits({
  submit: isActivityValid,
})

let activity = ''

function submit(){
    emit('submit', activity)
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
      :value="activity"
      @input="activity = $event.target.value"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
