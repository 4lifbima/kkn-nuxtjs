<template>
  <nav aria-label="Breadcrumb" class="mb-6">
    <ol class="flex flex-wrap items-center gap-2 text-sm">
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`" class="inline-flex items-center">
        <Icon v-if="index !== 0" icon="solar:alt-arrow-right-linear" class="w-3.5 h-3.5 text-gray-400 mr-2" />
        <NuxtLink v-if="item.to && index !== items.length - 1" :to="item.to" class="text-gray-500 hover:text-[#f2321d] transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-else class="font-semibold text-gray-800">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>
