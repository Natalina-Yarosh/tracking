<script setup lang="ts">
import { trackedActivities } from '../activities'
import ProgressItem from '../components/ProgressItem.vue'
import TheProgressEmptyState from '../components/TheProgressEmptyState.vue'
</script>

<template>
  <ul class="divide-y" v-if="trackedActivities.length">
    <ProgressItem
      v-for="activity in trackedActivities"
      :key="activity.id"
      :activity="activity"
    />
  </ul>
  <TheProgressEmptyState v-else />
</template>
