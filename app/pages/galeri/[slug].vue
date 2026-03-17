<template>
  <main class="min-h-screen bg-white pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="breadcrumbItems" />

      <section v-if="item" class="max-w-5xl mx-auto">
        <img :src="item.src" :alt="item.alt" class="w-full h-[280px] md:h-[520px] object-cover rounded-3xl mb-8" />

        <div class="flex flex-wrap gap-3 mb-4">
          <span class="px-3 py-1 rounded-full bg-red-50 text-[#f2321d] text-sm font-semibold">{{ item.category }}</span>
          <span class="inline-flex items-center text-sm text-gray-500">
            <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1" />
            {{ item.date }}
          </span>
        </div>

        <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-5">{{ item.title }}</h1>
        <p class="text-lg text-gray-700 leading-relaxed">{{ item.description }}</p>
      </section>

      <div v-else class="max-w-3xl mx-auto card-elevated p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Foto galeri tidak ditemukan</h2>
        <p class="text-gray-600 mb-6">Halaman detail galeri yang kamu cari belum tersedia.</p>
        <NuxtLink to="/" class="btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { galleryImages } from '~/data/galley'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const item = computed(() => galleryImages.find(image => image.slug === slug.value))

const breadcrumbItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Galeri', to: '/galeri' },
  { label: item.value?.title || 'Detail Galeri' }
])

const canonicalUrl = computed(() => `https://kkn-molotabu.vercel.app/galeri/${slug.value}`)

useHead(() => ({
  title: item.value ? item.value.title : 'Detail Galeri',
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
}))

useSeoMeta({
  description: computed(() => item.value?.description || 'Detail dokumentasi galeri KKN Desa Molotabu.'),
  ogTitle: computed(() => item.value?.title || 'Detail Galeri'),
  ogDescription: computed(() => item.value?.description || 'Detail dokumentasi galeri KKN Desa Molotabu.'),
  ogImage: computed(() => item.value?.src),
  twitterCard: 'summary_large_image',
  robots: computed(() => (item.value ? 'index, follow' : 'noindex, nofollow'))
})
</script>
