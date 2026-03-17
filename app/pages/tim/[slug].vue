<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="breadcrumbItems" />

      <section v-if="member" class="max-w-5xl mx-auto card-elevated overflow-hidden">
        <div class="grid md:grid-cols-[320px_1fr]">
          <img :src="member.photo" :alt="member.name" class="w-full h-full min-h-[360px] object-cover" />
          <div class="p-8 md:p-10">
            <p class="text-sm text-[#f2321d] font-semibold mb-2">Profil Anggota</p>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{{ member.name }}</h1>
            <p class="text-gray-500 mb-6">{{ member.role }}</p>

            <p class="text-gray-700 leading-relaxed mb-6">{{ member.bio }}</p>

            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="tag in member.tags" :key="tag" class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {{ tag }}
              </span>
            </div>

            <div class="flex flex-wrap gap-3">
              <a v-if="member.instagram" :href="member.instagram" target="_blank" class="btn-secondary !px-5 !py-3 !text-sm">
                <Icon icon="mdi:instagram" class="w-4 h-4 mr-2" /> Instagram
              </a>
              <a v-if="member.linkedin" :href="member.linkedin" target="_blank" class="btn-secondary !px-5 !py-3 !text-sm">
                <Icon icon="mdi:linkedin" class="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a v-if="member.email" :href="`mailto:${member.email}`" class="btn-secondary !px-5 !py-3 !text-sm">
                <Icon icon="mdi:email-outline" class="w-4 h-4 mr-2" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <div v-else class="max-w-3xl mx-auto card-elevated p-8 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Data anggota tidak ditemukan</h2>
        <p class="text-gray-600 mb-6">Profil yang kamu cari belum tersedia.</p>
        <NuxtLink to="/" class="btn-primary">Kembali ke Beranda</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { teamMembers } from '~/data/anggota'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const member = computed(() => teamMembers.find(item => item.slug === slug.value))

const breadcrumbItems = computed(() => [
  { label: 'Beranda', to: '/' },
  { label: 'Tim', to: '/tim' },
  { label: member.value?.name || 'Detail Tim' }
])

const canonicalUrl = computed(() => `https://kkn-nuxtjs.vercel.app/tim/${slug.value}`)

useHead(() => ({
  title: member.value ? member.value.name : 'Detail Tim',
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
}))

useSeoMeta({
  description: computed(() => member.value?.bio || 'Detail profil tim KKN Desa Molotabu.'),
  ogTitle: computed(() => member.value?.name || 'Detail Tim'),
  ogDescription: computed(() => member.value?.bio || 'Detail profil tim KKN Desa Molotabu.'),
  ogImage: computed(() => member.value?.photo),
  twitterCard: 'summary_large_image',
  robots: computed(() => (member.value ? 'index, follow' : 'noindex, nofollow'))
})
</script>
