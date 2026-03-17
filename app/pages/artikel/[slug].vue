<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="breadcrumbItems" />

      <article v-if="article" class="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10">
        <div class="min-w-0">
          <h1 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">{{ article.title }}</h1>

          <img :src="article.image" :alt="article.title" class="w-full h-[260px] md:h-[440px] object-cover rounded-3xl mb-6" />

          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-8">
            <span class="px-3 py-1 rounded-full bg-red-50 text-[#f2321d] font-semibold">{{ article.category }}</span>
            <span class="inline-flex items-center">
              <Icon icon="solar:calendar-linear" class="w-4 h-4 mr-1" />
              {{ article.date }}
            </span>
            <span class="inline-flex items-center">
              <Icon icon="solar:clock-circle-linear" class="w-4 h-4 mr-1" />
              {{ article.readTime }}
            </span>
          </div>

          <div class="article-content" v-html="article.contentHtml"></div>

          <div class="mt-10 p-5 md:p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <p class="text-sm font-semibold text-gray-700 mb-4">Bagikan Artikel Ini</p>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="share in socialShares"
                :key="share.label"
                :href="share.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:text-[#f2321d] hover:border-[#f2321d]/40 transition-colors"
              >
                <Icon :icon="share.icon" class="w-4 h-4 mr-2" />
                {{ share.label }}
              </a>
            </div>
          </div>
        </div>

        <aside class="space-y-6 lg:sticky lg:top-28 self-start">
          <div class="card-elevated p-6 !hover:translate-y-0">
            <p class="text-xs font-semibold uppercase tracking-wide text-[#f2321d] mb-3">Penulis</p>
            <div class="flex items-center gap-4 mb-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f2321d] to-orange-500 text-white font-bold text-xl inline-flex items-center justify-center">
                {{ authorInitial }}
              </div>
              <div>
                <p class="font-bold text-gray-900">{{ article.author }}</p>
                <p class="text-sm text-gray-500">Admin KKN Molotabu</p>
              </div>
            </div>
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-[#f2321d] text-xs font-semibold">
              <Icon icon="solar:verified-check-linear" class="w-4 h-4 mr-1" />
              Terverifikasi
            </span>
          </div>

          <div class="card-elevated p-6 !hover:translate-y-0">
            <div class="flex items-center justify-between mb-4">
              <p class="text-sm font-semibold text-gray-900">Berita Lainnya</p>
              <NuxtLink to="/artikel" class="text-xs font-semibold text-[#f2321d]">Lihat semua</NuxtLink>
            </div>
            <div class="space-y-4">
              <NuxtLink
                v-for="related in relatedArticles"
                :key="related.id"
                :to="`/artikel/${related.slug}`"
                class="block pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <p class="text-xs text-[#f2321d] font-semibold mb-1">{{ related.category }}</p>
                <p class="text-sm font-semibold text-gray-800 leading-relaxed hover:text-[#f2321d] transition-colors">{{ related.title }}</p>
                <p class="text-xs text-gray-500 mt-1">{{ related.date }}</p>
              </NuxtLink>
            </div>
          </div>
        </aside>
      </article>

      <div v-else class="max-w-3xl mx-auto card-elevated p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Artikel tidak ditemukan</h2>
        <p class="text-gray-600 mb-6">Halaman yang kamu cari belum tersedia.</p>
        <NuxtLink to="/" class="btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { articles } from '~/data/artikel'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const article = computed(() => articles.find(item => item.slug === slug.value))

const breadcrumbItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Artikel', to: '/artikel' },
  { label: article.value?.title || 'Detail Artikel' }
])

const canonicalUrl = computed(() => `https://kkn-molotabu.vercel.app/artikel/${slug.value}`)
const encodedTitle = computed(() => encodeURIComponent(article.value?.title || 'Artikel KKN Molotabu'))
const encodedUrl = computed(() => encodeURIComponent(canonicalUrl.value))

const authorInitial = computed(() => {
  const first = (article.value?.author || 'A').trim().charAt(0)
  return first.toUpperCase()
})

const relatedArticles = computed(() => {
  if (!article.value) return []

  const sameCategory = articles.filter(item => item.id !== article.value!.id && item.category === article.value!.category)
  const fallback = articles.filter(item => item.id !== article.value!.id)
  const source = sameCategory.length >= 3 ? sameCategory : [...sameCategory, ...fallback]
  return source.slice(0, 4)
})

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

useHead(() => ({
  title: article.value ? article.value.title : 'Detail Artikel',
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
}))

useSeoMeta({
  description: computed(() => article.value?.excerpt || 'Detail artikel kegiatan KKN Desa Molotabu.'),
  ogTitle: computed(() => article.value?.title || 'Detail Artikel'),
  ogDescription: computed(() => article.value?.excerpt || 'Detail artikel kegiatan KKN Desa Molotabu.'),
  ogImage: computed(() => article.value?.image),
  ogType: 'article',
  twitterCard: 'summary_large_image',
  robots: computed(() => (article.value ? 'index, follow' : 'noindex, nofollow'))
})
</script>
