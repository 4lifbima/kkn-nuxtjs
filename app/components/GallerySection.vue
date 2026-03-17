<template>
  <section id="gallery" class="section-padding bg-gradient-to-b from-gray-50 to-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
          <Icon icon="solar:gallery-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Galeri Kegiatan</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gray-900">Dokumentasi</span>
          <span class="heading-gradient"> Perjalanan Kami</span>
        </h2>
        <p class="text-lg text-gray-600">
          Momen-momen berkesan selama pengabdian di Desa Molotabu yang penuh makna.
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <NuxtLink
          v-for="image in galleryImages"
          :key="image.id"
          :to="`/galeri/${image.slug}`"
          :class="[
            'group relative overflow-hidden rounded-2xl cursor-pointer card-elevated',
            image.featured ? 'md:col-span-2 md:row-span-2' : ''
          ]"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :class="[
              'w-full h-full object-cover transition-transform duration-700 group-hover:scale-110',
              image.featured ? 'aspect-square' : 'aspect-[4/3]'
            ]"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <p class="text-white font-semibold text-sm md:text-base">{{ image.title }}</p>
              <p class="text-white/80 text-xs md:text-sm mt-1">{{ image.category }}</p>
              <p class="text-white/90 text-xs mt-2 inline-flex items-center">
                Lihat detail
                <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-1" />
              </p>
            </div>
          </div>

          <!-- Zoom Icon -->
          <div class="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Icon icon="solar:zoom-in-linear" class="w-5 h-5 text-gray-700" />
          </div>
        </NuxtLink>
      </div>

      <p class="text-center text-sm text-gray-500 mt-10">Klik foto untuk melihat halaman detail galeri.</p>
      <div class="mt-6 text-center">
        <NuxtLink to="/galeri" class="btn-secondary">
          Lihat Semua Galeri
          <Icon icon="solar:arrow-right-linear" class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { galleryImages } from '~/data/galley'
</script>
