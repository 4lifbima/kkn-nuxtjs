<template>
  <main class="min-h-screen bg-white pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="[{ label: 'Beranda', to: '/' }, { label: 'Artikel' }]" />

      <div class="max-w-3xl mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Semua Artikel</h1>
        <p class="text-lg text-gray-600">Kumpulan artikel KKN Desa Molotabu untuk dokumentasi, edukasi, dan inspirasi.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <article v-for="article in articles" :key="article.id" class="group card-elevated overflow-hidden">
          <img :src="article.image" :alt="article.title" class="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="p-6">
            <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>{{ article.date }}</span>
              <span>{{ article.readTime }}</span>
            </div>
            <h2 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{{ article.title }}</h2>
            <p class="text-sm text-gray-600 line-clamp-3 mb-5">{{ article.excerpt }}</p>
            <NuxtLink :to="`/artikel/${article.slug}`" class="inline-flex items-center text-sm font-semibold text-[#f2321d]">
              Baca Detail
              <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { articles } from '~/data/artikel'

useSeoMeta({
  title: 'Daftar Artikel KKN Molotabu',
  description: 'Halaman daftar lengkap artikel kegiatan KKN Desa Molotabu.',
  ogTitle: 'Daftar Artikel KKN Molotabu',
  ogDescription: 'Baca seluruh artikel kegiatan KKN Desa Molotabu.',
  robots: 'index, follow'
})
</script>
