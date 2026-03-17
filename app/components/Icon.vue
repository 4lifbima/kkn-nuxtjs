<template>
  <IconifyIcon :icon="icon" :class="iconClass" />
</template>

<script setup>
import { Icon as IconifyIcon } from '@iconify/vue'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    default: ''
  }
})

const attrs = useAttrs()
const iconClass = computed(() => {
  return [props.iconClass, attrs.class].filter(Boolean).join(' ')
})
</script>
