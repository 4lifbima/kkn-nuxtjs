<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50/50 pt-32 pb-20">
    <div class="container-custom">
      <Breadcrumb :items="[{ label: 'Beranda', to: '/' }, { label: 'Artikel' }]" />

      <!-- Page Header & Search -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="max-w-xl">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Semua <span class="heading-gradient">Artikel & Berita</span>
          </h1>
          <p class="text-lg text-gray-600">Kumpulan dokumentasi, artikel edukatif, dan kabar terbaru dari KKN Desa Molotabu.</p>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-80">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Icon icon="solar:magnifer-linear" class="w-5 h-5 text-gray-400" />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari artikel..."
            class="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f2321d]/20 focus:border-[#f2321d] transition-all shadow-sm"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
          >
            <Icon icon="solar:close-circle-linear" class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Categories Filter -->
      <div v-if="!pending && !error && categories.length > 1" class="flex flex-wrap gap-2.5 mb-10">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm border',
            selectedCategory === cat
              ? 'bg-[#f2321d] text-white border-[#f2321d] scale-105 shadow-red-500/20'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white rounded-3xl border border-gray-100 shadow-md p-5 space-y-4 animate-pulse">
          <div class="bg-gray-200 h-52 rounded-2xl"></div>
          <div class="h-4 bg-gray-200 rounded w-1/3"></div>
          <div class="h-6 bg-gray-200 rounded w-5/6"></div>
          <div class="space-y-2">
            <div class="h-3 bg-gray-200 rounded"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3"></div>
          </div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="card-elevated p-12 max-w-lg mx-auto text-center border border-red-100 bg-red-50/10">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-[#f2321d] mb-4">
          <Icon icon="solar:danger-triangle-linear" class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Gagal Memuat Artikel</h3>
        <p class="text-gray-600 mb-6">Koneksi internet bermasalah atau server tidak merespon. Silakan coba kembali.</p>
        <button @click="refresh" class="btn-primary py-3 px-6 rounded-xl">
          <Icon icon="solar:restart-linear" class="w-5 h-5 mr-2" />
          Coba Lagi
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="filteredArticles.length === 0" class="card-elevated p-12 max-w-md mx-auto text-center border border-gray-100">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 text-gray-400 mb-4">
          <Icon icon="solar:folder-error-linear" class="w-8 h-8" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Artikel Tidak Ditemukan</h3>
        <p class="text-gray-600 mb-6">Tidak ada artikel yang cocok dengan pencarian atau filter yang Anda pilih.</p>
        <button @click="clearFilters" class="btn-secondary py-2 px-5 text-sm rounded-xl">
          Reset Filter & Pencarian
        </button>
      </div>

      <!-- Articles Grid -->
      <div v-else class="space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="group bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col"
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
                  <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
                  {{ formatDate(article.published_at || article.created_at) }}
                </span>
                <span class="inline-flex items-center">
                  <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
                  {{ getReadTime(article.content) }}
                </span>
              </div>

              <h2 class="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#f2321d] transition-colors line-clamp-2 leading-snug">
                <NuxtLink :to="`/artikel/${article.slug}`">
                  {{ article.title }}
                </NuxtLink>
              </h2>

              <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ getExcerpt(article) }}
              </p>

              <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <div class="flex items-center space-x-2">
                  <img :src="article.author_avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(article.author || 'A') + '&background=f2321d&color=fff'" class="w-8 h-8 rounded-full border border-gray-100" />
                  <span class="text-xs text-gray-600 font-medium truncate max-w-[100px]" :title="article.author">
                    {{ article.author || 'Admin' }}
                  </span>
                </div>
                <NuxtLink :to="`/artikel/${article.slug}`" class="inline-flex items-center text-[#f2321d] text-xs font-bold hover:underline underline-offset-2">
                  Baca Selengkapnya
                  <Icon icon="solar:arrow-right-linear" class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2.5 pt-8">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <Icon icon="solar:alt-arrow-left-linear" class="w-5 h-5" />
          </button>
          
          <span class="text-sm font-semibold text-gray-700 bg-white border border-gray-200 px-4 py-2.5 rounded-xl shadow-sm">
            Halaman {{ currentPage }} dari {{ totalPages }}
          </span>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <Icon icon="solar:alt-arrow-right-linear" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedCategory = ref('Semua')
const currentPage = ref(1)

// Fetch paginated articles from live API
const { data: response, pending, error, refresh } = await useFetch<any>(() => `https://api-molutabu.aliapps.my.id/api/berita?page=${currentPage.value}`, {
  watch: [currentPage]
})

const articlesList = computed(() => {
  if (response.value && Array.isArray(response.value.data)) {
    return response.value.data
  }
  if (Array.isArray(response.value)) {
    return response.value
  }
  return []
})

const totalPages = computed(() => response.value?.last_page || 1)

// Dynamic categories extraction from fetched articles
const categories = computed(() => {
  const cats = new Set<string>()
  articlesList.value.forEach((item: any) => {
    if (item.kategori?.nama) {
      cats.add(item.kategori.nama)
    }
  })
  return ['Semua', ...Array.from(cats)]
})

// Client-side filtering for fast responsive searching & filtering
const filteredArticles = computed(() => {
  let list = articlesList.value
  
  if (selectedCategory.value !== 'Semua') {
    list = list.filter((item: any) => item.kategori?.nama === selectedCategory.value)
  }
  
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase()
    list = list.filter((item: any) => 
      item.title.toLowerCase().includes(query) || 
      (item.excerpt && item.excerpt.toLowerCase().includes(query)) ||
      (item.content && item.content.toLowerCase().includes(query))
    )
  }
  
  return list
})

// Pagination actions
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'Semua'
}

// SEO & Header configs
const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl || 'https://kkndesamolutabu.vercel.app').replace(/\/$/, '')
const canonicalUrl = `${siteUrl}/artikel`
const ogImage = `${siteUrl}/biru-kkn.png`

useHead({
  title: 'Daftar Artikel KKN Molotabu',
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

useSeoMeta({
  description: 'Halaman daftar lengkap artikel kegiatan KKN Desa Molotabu.',
  ogTitle: 'Daftar Artikel KKN Molotabu',
  ogDescription: 'Baca seluruh artikel kegiatan KKN Desa Molotabu.',
  ogUrl: canonicalUrl,
  ogImage,
  twitterTitle: 'Daftar Artikel KKN Molotabu',
  twitterDescription: 'Baca seluruh artikel kegiatan KKN Desa Molotabu.',
  twitterImage: ogImage,
  robots: 'index, follow'
})

// Helper formatting functions
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
