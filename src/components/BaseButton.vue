<script lang="ts">
import { ButtonType } from '../types'

const typeClasses: Record<ButtonType, string> = {
  [ButtonType.NEUTRAL]: 'bg-gray-100 p-3 enabled:hover:bg-gray-200',
  [ButtonType.DANGER]: 'bg-red-500 p-3 enabled:hover:bg-red-600 text-white',
  [ButtonType.PRIMARY]: 'bg-blue-500 p-3 enabled:hover:bg-blue-600 text-white',
  [ButtonType.SUCCESS]: 'bg-green-500 p-3 enabled:hover:bg-green-600 text-white',
  [ButtonType.WARNING]: 'bg-yellow-500 p-3 enabled:hover:bg-yellow-600 text-white',
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: ButtonType }>(), {
  type: ButtonType.PRIMARY,
})

const classes = [
  'rounded  disabled:cursor-not-allowed disabled:opacity-50',
  typeClasses[props.type],
]
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
