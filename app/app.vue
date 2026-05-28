<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const siteName = 'KKN Desa Molotabu'
const defaultDescription = 'Website resmi KKN Desa Molotabu berisi profil tim, artikel kegiatan, galeri, forum, dan informasi kontak.'
const siteUrl = computed(() => String(config.public.siteUrl || 'https://kkndesamolutabu.vercel.app').replace(/\/$/, ''))
const defaultOgImage = computed(() => `${siteUrl.value}/ung.png`)
const canonicalUrl = computed(() => {
  const path = route.path.startsWith('/') ? route.path : `/${route.path}`
  return `${siteUrl.value}${path}`
})

useHead(() => ({
  htmlAttrs: {
    lang: 'id',
  },
  titleTemplate: titleChunk => (titleChunk ? `${titleChunk} | ${siteName}` : siteName),
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
  ],
}))

useSeoMeta({
  description: defaultDescription,
  ogSiteName: siteName,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: defaultOgImage,
  twitterCard: 'summary_large_image',
  twitterImage: defaultOgImage,
  twitterTitle: siteName,
  twitterDescription: defaultDescription,
  robots: 'index, follow',
})
</script>
