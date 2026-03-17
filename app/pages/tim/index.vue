<template>
  <main class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-16">
    <div class="container-custom">
      <Breadcrumb :items="[{ label: 'Beranda', to: '/' }, { label: 'Tim' }]" />

      <div class="max-w-3xl mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Profil Tim KKN</h1>
        <p class="text-lg text-gray-600">Kenali seluruh anggota tim yang berkontribusi dalam program pengabdian di Desa Molotabu.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        <article v-for="member in teamMembers" :key="member.id" class="card-elevated overflow-hidden group">
          <img :src="member.photo" :alt="member.name" class="w-full aspect-[3/4] object-cover" />
          <div class="p-5">
            <h2 class="font-bold text-gray-900 mb-1">{{ member.name }}</h2>
            <p class="text-sm text-gray-500 mb-3">{{ member.role }}</p>
            <NuxtLink :to="`/tim/${member.slug}`" class="inline-flex items-center text-sm font-semibold text-[#f2321d]">
              Lihat Detail
              <Icon icon="solar:arrow-right-linear" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { teamMembers } from '~/data/anggota'

useSeoMeta({
  title: 'Daftar Tim KKN Molotabu',
  description: 'Halaman daftar lengkap profil anggota tim KKN Desa Molotabu.',
  ogTitle: 'Daftar Tim KKN Molotabu',
  ogDescription: 'Lihat profil anggota tim KKN Desa Molotabu.',
  robots: 'index, follow'
})
</script>
