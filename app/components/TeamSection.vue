<template>
  <section id="team" class="section-padding bg-gradient-to-b from-white to-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
          <Icon icon="solar:users-group-rounded-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Tim KKN Kami</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gray-900">Kenali </span>
          <span class="heading-gradient">Para Pengabdi</span>
        </h2>
        <p class="text-lg text-gray-600">
          Mahasiswa berdedikasi tinggi yang siap memberikan kontribusi terbaik 
          untuk pembangunan Desa Molotabu.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div 
          v-for="member in displayedTeamMembers" 
          :key="member.id"
          class="group rounded-xl border-2 border-slate-200 overflow-hidden"
        >
          <!-- Photo -->
          <div class="relative overflow-hidden aspect-[3/4]">
            <img 
              :src="member.photo" 
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Social Links (Overlay) -->
            <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div class="flex justify-center space-x-3">
                <a 
                  v-if="member.instagram" 
                  :href="member.instagram"
                  target="_blank"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:instagram" class="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </a>
                <a 
                  v-if="member.linkedin" 
                  :href="member.linkedin"
                  target="_blank"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:linkedin" class="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </a>
                <a 
                  v-if="member.email" 
                  :href="'mailto:' + member.email"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <Icon icon="mdi:email-outline" class="w-5 h-5 text-gray-700 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <!-- Info -->
          <div class="p-6 justify-center text-center">
            <h3 class="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#f2321d] transition-colors">
              {{ member.name }}
            </h3>
            <div class="flex flex-wrap gap-2 justify-center">
              <span 
               
                class="px-3 py-1 bg-gray-100 text-gray-600 text-md font-medium rounded-full"
              >
                {{ member.nim }}
              </span>
            </div>
            <NuxtLink :to="`/tim/${member.slug}`" class="mt-4 inline-flex items-center text-sm font-semibold text-[#f2321d] border border-primary px-8 py-2 rounded-full hover:bg-[#f2321d] hover:text-white transition-colors">
              Lihat Profil
              <Icon icon="gg:profile" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/tim" class="btn-secondary">
          Lihat Semua Profil Tim
          <Icon icon="solar:arrow-right-linear" class="w-5 h-5 ml-2" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { teamMembers } from '~/data/anggota'

const displayedTeamMembers = computed(() => {
  const maxCards = teamMembers.length > 4 ? 4 : 8
  return teamMembers.slice(0, Math.min(maxCards, teamMembers.length))
})
</script>
