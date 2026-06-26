<template>
  <section id="articles" class="section-padding bg-gradient-to-b from-white to-gray-50/50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Icon icon="solar:document-text-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Kabar & Artikel</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          <span class="text-gray-900">Wawasan &</span>
          <span class="heading-gradient"> Cerita Desa</span>
        </h2>
        <p class="text-lg text-gray-600">
          Kumpulan artikel informatif seputar kegiatan KKN, edukasi masyarakat, dan inspirasi pembangunan Desa Molotabu.
        </p>
      </div>

      <!-- Loading State (Skeletons) -->
      <div v-if="pending" class="space-y-12">
        <!-- Featured Skeleton -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden animate-pulse">
          <div class="grid lg:grid-cols-2">
            <div class="bg-gray-200 h-64 lg:h-96"></div>
            <div class="p-8 lg:p-10 flex flex-col justify-center space-y-4">
              <div class="h-4 bg-gray-200 rounded w-1/4"></div>
              <div class="h-8 bg-gray-200 rounded w-3/4"></div>
              <div class="h-8 bg-gray-200 rounded w-1/2"></div>
              <div class="space-y-2 py-4">
                <div class="h-3 bg-gray-200 rounded"></div>
                <div class="h-3 bg-gray-200 rounded"></div>
                <div class="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div class="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        </div>

        <!-- Scroll Cards Skeletons -->
        <div class="flex gap-5 overflow-hidden">
          <div v-for="i in 3" :key="i" class="bg-white rounded-3xl border border-gray-100 shadow-md w-[290px] sm:w-[320px] shrink-0 p-5 space-y-4 animate-pulse">
            <div class="bg-gray-200 h-48 rounded-2xl"></div>
            <div class="h-4 bg-gray-200 rounded w-1/3"></div>
            <div class="h-6 bg-gray-200 rounded w-5/6"></div>
            <div class="space-y-2">
              <div class="h-3 bg-gray-200 rounded"></div>
              <div class="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="card-elevated p-8 max-w-lg mx-auto text-center border border-red-100 bg-red-50/10">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-[#f2321d] mb-4">
          <Icon icon="solar:danger-triangle-linear" class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Gagal Memuat Berita</h3>
        <p class="text-gray-600 mb-6">Terjadi kesalahan saat mengambil data dari server. Silakan coba kembali.</p>
        <button @click="refresh" class="btn-primary py-3 px-6 rounded-xl">
          <Icon icon="solar:restart-linear" class="w-5 h-5 mr-2" />
          Coba Lagi
        </button>
      </div>

      <!-- Content State -->
      <div v-else class="space-y-12">
        <!-- Featured Article -->
        <article v-if="featuredArticle" class="card-elevated overflow-hidden group border border-gray-100/80">
          <div class="grid lg:grid-cols-2">
            <div class="relative h-72 lg:h-auto overflow-hidden">
              <img
                :src="getImageUrl(featuredArticle.image)"
                :alt="featuredArticle.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="px-3.5 py-1 bg-white/95 text-[#f2321d] text-xs font-bold rounded-full shadow-sm backdrop-blur-sm">
                  Sorotan
                </span>
                <span :class="['px-3.5 py-1 text-white text-xs font-semibold rounded-full shadow-sm', featuredArticle.kategori?.warna || 'bg-red-500/85']">
                  {{ featuredArticle.kategori?.nama || 'Artikel' }}
                </span>
              </div>
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-4 text-xs text-gray-500 mb-5">
                <span class="inline-flex items-center">
                  <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
                  {{ formatDate(featuredArticle.published_at || featuredArticle.created_at) }}
                </span>
                <span class="inline-flex items-center">
                  <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
                  {{ getReadTime(featuredArticle.content) }}
                </span>
              </div>
              <h3 class="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#f2321d] transition-colors leading-tight">
                <NuxtLink :to="`/artikel/${featuredArticle.slug}`">
                  {{ featuredArticle.title }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 leading-relaxed mb-8 text-base">
                {{ getExcerpt(featuredArticle) }}
              </p>
              <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div class="flex items-center space-x-3">
                  <img :src="featuredArticle.author_avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(featuredArticle.author || 'A') + '&background=f2321d&color=fff'" class="w-10 h-10 rounded-full object-cover border border-gray-100" />
                  <div>
                    <p class="text-sm font-semibold text-gray-800">{{ featuredArticle.author || 'Admin' }}</p>
                    <p class="text-xs text-gray-400">Penulis</p>
                  </div>
                </div>
                <NuxtLink :to="`/artikel/${featuredArticle.slug}`" class="inline-flex items-center text-[#f2321d] font-bold text-sm hover:underline underline-offset-4">
                  Baca Selengkapnya
                  <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </article>

        <!-- Articles Horizontal Scroll -->
        <div v-if="otherArticles.length > 0">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900 tracking-tight">Artikel Lainnya</h3>
            <div class="flex items-center space-x-2 text-sm text-gray-500 bg-gray-100/80 px-3.5 py-1.5 rounded-full">
              <Icon icon="solar:hand-stars-linear" class="w-4 h-4 text-[#f2321d] animate-bounce-slow" />
              <span>Geser untuk melihat</span>
            </div>
          </div>

          <div class="article-scroll overflow-x-auto pb-6 -mx-4 px-4">
            <div class="flex gap-6 w-max">
              <article
                v-for="article in otherArticles"
                :key="article.id"
                class="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden w-[290px] sm:w-[320px] flex flex-col"
              >
                <div class="relative h-52 overflow-hidden">
                  <img
                    :src="getImageUrl(article.image)"
                    :alt="article.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span :class="['absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-full shadow-sm', article.kategori?.warna || 'bg-red-500/85']">
                    {{ article.kategori?.nama || 'Artikel' }}
                  </span>
                </div>

                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex items-center justify-between text-xs text-gray-500 mb-3.5">
                    <span class="inline-flex items-center">
                      <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1 text-gray-400" />
                      {{ formatDate(article.published_at || article.created_at) }}
                    </span>
                    <span class="inline-flex items-center">
                      <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1 text-gray-400" />
                      {{ getReadTime(article.content) }}
                    </span>
                  </div>

                  <h4 class="text-base font-bold text-gray-900 mb-2 group-hover:text-[#f2321d] transition-colors line-clamp-2 leading-snug">
                    <NuxtLink :to="`/artikel/${article.slug}`">
                      {{ article.title }}
                    </NuxtLink>
                  </h4>

                  <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {{ getExcerpt(article) }}
                  </p>

                  <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span class="text-xs text-gray-400 truncate max-w-[120px]" :title="article.author">
                      Oleh: {{ article.author || 'Admin' }}
                    </span>
                    <NuxtLink :to="`/artikel/${article.slug}`" class="inline-flex items-center text-[#f2321d] text-xs font-bold hover:underline underline-offset-2">
                      Lihat Artikel
                      <Icon icon="solar:arrow-right-linear" class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                    </NuxtLink>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="mt-12 text-center animate-fade-in">
        <NuxtLink to="/artikel" class="btn-secondary">
          Lihat Semua Artikel
          <Icon icon="solar:arrow-right-linear" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Fetch live articles from API
const { data: response, pending, error, refresh } = await useFetch<any>('https://api-molutabu.aliapps.my.id/api/berita')

// Extract articles list
const articlesList = computed(() => {
  if (response.value && Array.isArray(response.value.data)) {
    return response.value.data
  }
  if (Array.isArray(response.value)) {
    return response.value
  }
  return []
})

// Determine Featured Article: Prefer the one with featured = true/1, fallback to first article
const featuredArticle = computed(() => {
  if (articlesList.value.length === 0) return null
  const featured = articlesList.value.find((item: any) => item.featured)
  return featured || articlesList.value[0]
})

// Filter out featured article from list of other articles
const otherArticles = computed(() => {
  const feat = featuredArticle.value
  if (!feat) return articlesList.value
  return articlesList.value.filter((item: any) => item.id !== feat.id)
})

// Helper functions
const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return '/artikel/thumb.jpeg'
  let cleanPath = imagePath
  cleanPath = cleanPath.replace(/http:\/\/192\.168\.30\.129:8000/g, 'https://api-molutabu.aliapps.my.id')
  cleanPath = cleanPath.replace(/http:\/\/localhost:8000/g, 'https://api-molutabu.aliapps.my.id')
  
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath
  }
  return `https://api-molutabu.aliapps.my.id/storage/${cleanPath}`
}

const formatDate = (dateStr?: string) => {
  if (!dateStr) return 'Baru-baru ini'
  try {
    const date = new Date(dateStr)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch (e) {
    return dateStr
  }
}

const getReadTime = (contentStr?: string) => {
  if (!contentStr) return '1 menit baca'
  const words = contentStr.replace(/<[^>]*>/g, '').trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} menit baca`
}

const getExcerpt = (item: any) => {
  if (item.excerpt) return item.excerpt
  if (!item.content) return ''
  const cleanText = item.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  if (cleanText.length <= 150) return cleanText
  return cleanText.substring(0, 150) + '...'
}
</script>
