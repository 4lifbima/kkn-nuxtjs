<template>
  <section id="articles" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
          <Icon icon="solar:document-text-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Artikel Terbaru</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gray-900">Wawasan &</span>
          <span class="heading-gradient"> Cerita Desa</span>
        </h2>
        <p class="text-lg text-gray-600">
          Kumpulan artikel informatif seputar kegiatan KKN, edukasi masyarakat, dan inspirasi pembangunan Desa Molotabu.
        </p>
      </div>

      <!-- Featured Article -->
      <article class="card-elevated overflow-hidden mb-10 group">
        <div class="grid lg:grid-cols-2">
          <div class="relative h-64 lg:h-auto overflow-hidden">
            <img
              :src="featuredArticle.image"
              :alt="featuredArticle.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-white/90 text-[#f2321d] text-xs font-semibold rounded-full">
                Featured
              </span>
            </div>
          </div>
          <div class="p-8 lg:p-10 flex flex-col justify-center">
            <div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span class="inline-flex items-center">
                <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1" />
                {{ featuredArticle.date }}
              </span>
              <span class="inline-flex items-center">
                <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1" />
                {{ featuredArticle.readTime }}
              </span>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#f2321d] transition-colors">
              {{ featuredArticle.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ featuredArticle.excerpt }}
            </p>
            <NuxtLink :to="`/artikel/${featuredArticle.slug}`" class="inline-flex items-center text-[#f2321d] font-semibold">
              Baca Selengkapnya
              <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-2" />
            </NuxtLink>
          </div>
        </div>
      </article>

      <!-- Articles Horizontal Scroll -->
      <div class="flex items-center justify-between mb-5">
        <h3 class="text-xl font-bold text-gray-900">Artikel Lainnya</h3>
        <span class="text-sm text-gray-500">Geser ke samping</span>
      </div>

      <div class="article-scroll overflow-x-auto pb-4 -mx-2 px-2">
        <div class="flex gap-5 w-max">
        <article
          v-for="article in articles"
          :key="article.id"
          class="group card-elevated overflow-hidden w-[290px] sm:w-[320px]"
        >
          <div class="relative h-52 overflow-hidden">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span class="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full">
              {{ article.category }}
            </span>
          </div>

          <div class="p-6">
            <div class="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span class="inline-flex items-center">
                <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1" />
                {{ article.date }}
              </span>
              <span class="inline-flex items-center">
                <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1" />
                {{ article.readTime }}
              </span>
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#f2321d] transition-colors line-clamp-2">
              {{ article.title }}
            </h3>

            <p class="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
              {{ article.excerpt }}
            </p>

            <NuxtLink :to="`/artikel/${article.slug}`" class="inline-flex items-center text-[#f2321d] text-sm font-semibold">
              Lihat Artikel
              <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </article>
        </div>
      </div>

      <div class="mt-8 text-center">
        <NuxtLink to="/artikel" class="btn-secondary">
          Lihat Semua Artikel
          <Icon icon="solar:arrow-right-linear" class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { articles, featuredArticle } from '~/data/artikel'
</script>
