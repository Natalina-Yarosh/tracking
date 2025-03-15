<script setup>
import BaseButton from '@/components/BaseButton.vue'
import ActivityItem from '../components/ActivityItem.vue'
import { validateActivities, isActivityValid } from '@/validators'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { BUTTON_TYPE_PRIMARY } from '@/constants'

defineProps({
  activities: {
    required: true,
    type: Array,
    validate: validateActivities,
  },
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
})

let newActivity = ''
</script>

<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <form @submit.prevent="emit('createActivity', newActivity)" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
      <input
        type="text"
        class="w-full rounder border px-4 text-xl"
        placeholder="Activity name"
        :value="newActivity"
        @input="newActivity = $event.target.value"
      />
      <BaseButton :type="BUTTON_TYPE_PRIMARY">
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
  </div>
</template>
