<template>
  <main class="min-h-screen bg-white pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="[{ label: 'Beranda', to: '/' }, { label: 'Galeri' }]" />

      <div class="max-w-3xl mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Semua Galeri</h1>
        <p class="text-lg text-gray-600">Dokumentasi visual kegiatan KKN bersama masyarakat Desa Molotabu.</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <NuxtLink v-for="image in galleryImages" :key="image.id" :to="`/galeri/${image.slug}`" class="group card-elevated overflow-hidden">
          <img :src="image.src" :alt="image.alt" class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" />
          <div class="p-4">
            <p class="font-semibold text-gray-900 text-sm line-clamp-1">{{ image.title }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ image.category }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { galleryImages } from '~/data/galley'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || 'https://kkndesamolutabu.vercel.app').replace(/\/$/, '')
const canonicalUrl = `${siteUrl}/galeri`
const ogImage = `${siteUrl}/biru-kkn.png`

useHead({
  title: 'Galeri KKN Molotabu',
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

useSeoMeta({
  description: 'Halaman daftar lengkap galeri kegiatan KKN Desa Molotabu.',
  ogTitle: 'Galeri KKN Molotabu',
  ogDescription: 'Lihat dokumentasi galeri kegiatan KKN Desa Molotabu.',
  ogUrl: canonicalUrl,
  ogImage,
  twitterTitle: 'Galeri KKN Molotabu',
  twitterDescription: 'Lihat dokumentasi galeri kegiatan KKN Desa Molotabu.',
  twitterImage: ogImage,
  robots: 'index, follow'
})
</script>
