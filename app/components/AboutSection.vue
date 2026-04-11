<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
          <Icon icon="solar:square-academic-cap-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Dosen Pembimbing Lapangan</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gray-900">Dibimbing oleh </span>
          <span class="heading-gradient">Dosen Terbaik</span>
        </h2>
        <p class="text-lg text-gray-600">
          Dosen pembimbing lapangan yang mendampingi dan mengarahkan seluruh kegiatan KKN
          di Desa Molotabu untuk mencapai hasil yang optimal.
        </p>
      </div>

      <!-- DPL Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="dpl in dplList"
          :key="dpl.id"
          class="group relative"
        >
          <!-- Glow effect behind card -->
          <div class="absolute -inset-1 bg-gradient-to-r from-[#f2321d] to-orange-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

          <!-- Card -->
          <div class="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <!-- Top gradient bar -->
            <div class="h-1.5 bg-gradient-to-r from-[#f2321d] via-red-500 to-orange-500"></div>

            <div class="p-8">
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- Photo -->
                <div class="relative flex-shrink-0">
                  <div class="w-28 h-32 rounded-2xl overflow-hidden ring-4 ring-gray-100 group-hover:ring-red-100 transition-all duration-500 shadow-lg">
                    <img
                      :src="dpl.photo"
                      :alt="dpl.name"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <!-- Academic hat badge -->
                  <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#f2321d] to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                    <Icon icon="solar:square-academic-cap-bold" class="w-5 h-5 text-white" />
                  </div>
                </div>

                <!-- Info -->
                <div class="text-center sm:text-left flex-1">
                  <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#f2321d] transition-colors">
                    {{ dpl.name }}
                  </h3>

                  <!-- NIP Badge -->
                  <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-3">
                    <Icon icon="solar:document-text-linear" class="w-3.5 h-3.5" />
                    NIP. {{ dpl.nip }}
                  </div>

                  <!-- Role -->
                  <div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-full font-semibold text-[#f2321d] mb-4 text-xs">
                    <Icon :icon="dpl.roleIcon" class="w-4 h-4" />
                    {{ dpl.role }}
                  </div>

                  <p class="text-gray-500 text-sm leading-relaxed">
                    {{ dpl.bio }}
                  </p>

                  <!-- Contact links -->
                  <div class="flex items-center gap-3 mt-4" :class="dpl.email || dpl.scholar ? 'justify-center sm:justify-start' : 'hidden'">
                    <a
                      v-if="dpl.email"
                      :href="'mailto:' + dpl.email"
                      class="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Icon icon="mdi:email-outline" class="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      v-if="dpl.scholar"
                      :href="dpl.scholar"
                      target="_blank"
                      class="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Icon icon="academicons:google-scholar" class="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      v-if="dpl.linkedin"
                      :href="dpl.linkedin"
                      target="_blank"
                      class="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group/icon"
                    >
                      <Icon icon="mdi:linkedin" class="w-4 h-4 text-gray-500 group-hover/icon:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dplList = [
  {
    id: 1,
    name: 'Dr. Moh. Hidayat Koniyo, ST, M.Kom',
    nip: '198xxxxxxxxx',
    role: 'Ketua DPL KKN Desa Molotabu',
    roleIcon: 'solar:square-academic-cap-linear',
    photo: '/dpl/hidayat.png',
    email: 'dpl1@ung.ac.id',
    scholar: '#',
    linkedin: '#',
    bio: 'Dosen pembimbing lapangan yang mendampingi dan membimbing mahasiswa KKN dalam pelaksanaan program kerja di Desa Molotabu.',
  },
  {
    id: 2,
    name: 'Nikmasari Pakaya, S.Kom., M.T.',
    nip: '199xxxxxxxxx',
    role: 'Dosen Pembimbing Lapangan',
    roleIcon: 'solar:square-academic-cap-linear',
    photo: '/ung.png',
    email: 'dpl2@ung.ac.id',
    scholar: '#',
    linkedin: '#',
    bio: 'Dosen pembimbing lapangan yang mengarahkan kegiatan pengabdian masyarakat dan memastikan program berjalan sesuai tujuan.',
  },
  {
    id: 3,
    name: 'Budiyanto Ahaliki, S.Si, M.Kom',
    nip: '200xxxxxxxxx',
    role: 'Dosen Pembimbing Lapangan',
    roleIcon: 'solar:square-academic-cap-linear',
    photo: '/ung.png',
    email: '',
    scholar: '#',
    linkedin: '#',
    bio: 'Dosen pembimbing lapangan yang memberikan bimbingan teknis dan dukungan kepada mahasiswa selama pelaksanaan KKN di Desa Molotabu.',
  }
]
</script>
