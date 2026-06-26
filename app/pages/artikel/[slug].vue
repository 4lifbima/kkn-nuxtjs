<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50/50 pt-32 pb-20">
    <div class="container-custom">
      <Breadcrumb :items="breadcrumbItems" />

      <!-- Loading State (Skeletons) -->
      <div v-if="pending" class="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-12 animate-pulse">
        <div class="space-y-6">
          <div class="h-12 bg-gray-200 rounded-2xl w-5/6"></div>
          <div class="h-64 md:h-[440px] bg-gray-200 rounded-3xl"></div>
          <div class="flex gap-4">
            <div class="h-6 bg-gray-200 rounded-full w-20"></div>
            <div class="h-6 bg-gray-200 rounded-full w-32"></div>
            <div class="h-6 bg-gray-200 rounded-full w-24"></div>
          </div>
          <div class="space-y-4 pt-6">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>

        <aside class="space-y-6">
          <div class="bg-white rounded-3xl border border-gray-100 p-6 space-y-4 shadow-sm">
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <div class="flex items-center gap-4">
              <div class="w-14 h-14 bg-gray-200 rounded-2xl"></div>
              <div class="flex-1 space-y-2">
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                <div class="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-gray-100 p-6 space-y-4 shadow-sm">
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            <div class="space-y-3">
              <div class="h-10 bg-gray-100 rounded-xl"></div>
              <div class="h-10 bg-gray-100 rounded-xl"></div>
              <div class="h-10 bg-gray-100 rounded-xl"></div>
            </div>
          </div>
        </aside>
      </div>

      <!-- Error / 404 State -->
      <div v-else-if="error || !article" class="max-w-xl mx-auto card-elevated p-10 text-center border border-gray-100 bg-white">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-[#f2321d] mb-4">
          <Icon icon="solar:info-square-linear" class="w-8 h-8" />
        </div>
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Artikel Tidak Ditemukan</h2>
        <p class="text-gray-600 mb-6">Artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
        <NuxtLink to="/artikel" class="btn-primary py-3 px-6 rounded-xl">
          Kembali ke Daftar Artikel
        </NuxtLink>
      </div>

      <!-- Content State -->
      <article v-else class="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-12">
        <div class="min-w-0">
          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            {{ article.title }}
          </h1>

          <div class="relative overflow-hidden rounded-3xl mb-8 group shadow-md border border-gray-100">
            <img 
              :src="getImageUrl(article.image)" 
              :alt="article.title" 
              class="w-full h-[260px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102" 
            />
          </div>

          <div class="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-8 pb-6 border-b border-gray-100">
            <span :class="['px-3.5 py-1 text-white font-bold rounded-full shadow-sm', article.kategori?.warna || 'bg-red-500/85']">
              {{ article.kategori?.nama || 'Artikel' }}
            </span>
            <span class="inline-flex items-center font-medium">
              <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
              {{ formatDate(article.published_at || article.created_at) }}
            </span>
            <span class="inline-flex items-center font-medium">
              <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
              {{ getReadTime(article.content) }}
            </span>
            <span class="inline-flex items-center font-medium">
              <Icon icon="solar:eye-linear" class="w-4 h-4 mr-1.5 text-gray-400" />
              {{ article.views || 0 }} Dilihat
            </span>
          </div>

          <!-- HTML Content rendering -->
          <div class="article-content" v-html="article.content"></div>

          <!-- Social Share panel -->
          <div class="mt-12 p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p class="text-sm font-bold text-gray-800 mb-4 flex items-center">
              <Icon icon="solar:share-linear" class="w-4 h-4 mr-2 text-[#f2321d]" />
              Bagikan Artikel Ini
            </p>
            <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
              <a
                v-for="share in socialShares"
                :key="share.label"
                :href="share.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:text-[#f2321d] hover:border-[#f2321d]/40 transition-all bg-white hover:bg-red-50/10 shadow-sm"
              >
                <Icon :icon="share.icon" class="w-4 h-4 mr-2" />
                {{ share.label }}
              </a>
            </div>
          </div>
        </div>

        <!-- Sidebar / Meta -->
        <aside class="space-y-6 lg:sticky lg:top-28 self-start">
          <!-- Author Card -->
          <div class="card-elevated p-6 !hover:translate-y-0 border border-gray-100/80">
            <p class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Penulis</p>
            <div class="flex items-center gap-4 mb-5">
              <img 
                :src="article.author_avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(article.author || 'A') + '&background=f2321d&color=fff'" 
                class="w-14 h-14 rounded-2xl object-cover border border-gray-100 shadow-sm"
              />
              <div>
                <p class="font-bold text-gray-900 leading-tight mb-1">{{ article.author || 'Admin' }}</p>
                <p class="text-xs text-gray-400">Tim Publikasi KKN</p>
              </div>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-gray-50">
              <span class="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                <Icon icon="solar:verified-check-linear" class="w-3.5 h-3.5 mr-1" />
                Kontributor Resmi
              </span>
            </div>
          </div>

          <!-- Related articles / Other Articles -->
          <div class="card-elevated p-6 !hover:translate-y-0 border border-gray-100/80">
            <div class="flex items-center justify-between mb-5 border-b border-gray-50 pb-3">
              <p class="text-sm font-bold text-gray-900">Kabar Lainnya</p>
              <NuxtLink to="/artikel" class="text-xs font-bold text-[#f2321d] hover:underline">Lihat semua</NuxtLink>
            </div>
            <div class="space-y-5">
              <NuxtLink
                v-for="related in relatedArticles"
                :key="related.id"
                :to="`/artikel/${related.slug}`"
                class="group block pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <span :class="['inline-block px-2 py-0.5 text-[10px] font-bold rounded-full mb-2 text-white', related.kategori?.warna || 'bg-red-500/85']">
                  {{ related.kategori?.nama || 'Artikel' }}
                </span>
                <p class="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#f2321d] transition-colors line-clamp-2">
                  {{ related.title }}
                </p>
                <div class="flex items-center gap-2 mt-2 text-[11px] text-gray-400">
                  <Icon icon="solar:calendar-linear" class="w-3.5 h-3.5" />
                  <span>{{ formatDate(related.published_at || related.created_at) }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const config = useRuntimeConfig()
const slug = computed(() => String(route.params.slug || ''))

// Fetch current article by slug
const { data: article, pending, error } = await useFetch<any>(() => `https://api-molutabu.aliapps.my.id/api/berita/${slug.value}`)

// Fetch list of articles to display in sidebar as "Kabar Lainnya"
const { data: listResponse } = await useFetch<any>('https://api-molutabu.aliapps.my.id/api/berita')

// Compute related/other articles, excluding the current one
const relatedArticles = computed(() => {
  const list = listResponse.value?.data || []
  if (!article.value) return list.slice(0, 4)
  return list.filter((item: any) => item.id !== article.value.id).slice(0, 4)
})

// Share properties
const siteUrl = computed(() => String(config.public.siteUrl || 'https://kkndesamolutabu.vercel.app').replace(/\/$/, ''))
const canonicalUrl = computed(() => `${siteUrl.value}/artikel/${slug.value}`)
const ogImageUrl = computed(() => {
  const image = article.value?.image
  if (!image) return `${siteUrl.value}/biru-kkn.png`
  if (/^https?:\/\//i.test(image)) return image
  return `https://api-molutabu.aliapps.my.id/storage/${image}`
})
const encodedTitle = computed(() => encodeURIComponent(article.value?.title || 'Artikel KKN Molotabu'))
const encodedUrl = computed(() => encodeURIComponent(canonicalUrl.value))

const breadcrumbItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Artikel', to: '/artikel' },
  { label: article.value?.title || 'Detail Artikel' }
])

const socialShares = computed(() => [
  {
    label: 'WhatsApp',
    icon: 'mdi:whatsapp',
    href: `https://wa.me/?text=${encodedTitle.value}%20${encodedUrl.value}`
  },
  {
    label: 'Facebook',
    icon: 'mdi:facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}`
  },
  {
    label: 'X',
    icon: 'mdi:twitter',
    href: `https://twitter.com/intent/tweet?text=${encodedTitle.value}&url=${encodedUrl.value}`
  },
  {
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`
  }
])

// SEO
useHead(() => ({
  title: article.value ? article.value.title : 'Detail Artikel',
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
}))

const getExcerpt = (item: any) => {
  if (!item) return ''
  if (item.excerpt) return item.excerpt
  if (!item.content) return ''
  const cleanText = item.content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  if (cleanText.length <= 150) return cleanText
  return cleanText.substring(0, 150) + '...'
}

useSeoMeta({
  description: computed(() => article.value?.excerpt || getExcerpt(article.value) || 'Detail artikel kegiatan KKN Desa Molotabu.'),
  ogTitle: computed(() => article.value?.title || 'Detail Artikel'),
  ogDescription: computed(() => article.value?.excerpt || getExcerpt(article.value) || 'Detail artikel kegiatan KKN Desa Molotabu.'),
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogType: 'article',
  twitterTitle: computed(() => article.value?.title || 'Detail Artikel'),
  twitterDescription: computed(() => article.value?.excerpt || getExcerpt(article.value) || 'Detail artikel kegiatan KKN Desa Molotabu.'),
  twitterImage: ogImageUrl,
  twitterCard: 'summary_large_image',
  robots: computed(() => (article.value ? 'index, follow' : 'noindex, nofollow'))
})

// Helper formatting functions
const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return '/artikel/thumb.jpeg'
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  return `https://api-molutabu.aliapps.my.id/storage/${imagePath}`
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
</script>
