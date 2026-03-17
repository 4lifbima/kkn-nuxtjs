<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="relative">
          <!-- Main Image Container -->
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#f2321d] to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
            <div class="relative card-elevated overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1000&fit=crop" 
                alt="KKN Activities"
                class="w-full h-[600px] object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <!-- Floating Badge -->
              <div class="absolute bottom-8 left-8 right-8">
                <div class="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
                  <div class="flex items-center space-x-4">
                    <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d] to-orange-500 rounded-2xl flex items-center justify-center">
                      <Icon icon="streamline-ultimate:award-trophy-1" class="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p class="text-sm text-gray-500 mb-1">Pengabdian Masyarakat</p>
                      <p class="text-lg font-bold text-gray-900">Desa Molotabu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Badge -->
          <div class="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
            <div class="text-center">
              <p class="text-4xl font-bold heading-gradient">2026</p>
              <p class="text-sm text-gray-500 mt-1">Tahun Pengabdian</p>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div>
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
            <Icon icon="solar:star-linear" class="w-4 h-4 text-[#f2321d]" />
            <span class="text-sm font-semibold text-[#f2321d]">Tentang Program KKN</span>
          </div>

          <!-- Heading -->
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-gray-900">Mengabdi untuk</span>
            <span class="heading-gradient"> Perubahan Nyata</span>
          </h2>

          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Kuliah Kerja Nyata (KKN) adalah bentuk pengabdian mahasiswa kepada masyarakat melalui 
            penerapan ilmu pengetahuan, teknologi, dan seni untuk membantu masyarakat dalam upaya 
            peningkatan kesejahteraan dan pembangunan berkelanjutan.
          </p>

          <!-- Key Points -->
          <div class="space-y-5 mb-10">
            <div v-for="(point, index) in keyPoints" :key="index" class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon :icon="point.icon" class="w-5 h-5 text-[#f2321d]" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">{{ point.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">{{ point.description }}</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-4">
            <a href="#team" class="btn-primary">
              Kenali Tim Kami
              <Icon icon="solar:arrow-right-linear" class="w-5 h-5 ml-2" />
            </a>
            <a href="#articles" class="btn-secondary">
              Lihat Artikel
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const keyPoints = [
  {
    icon: 'solar:target-linear',
    title: 'Tujuan Pembangunan',
    description: 'Membantu percepatan pembangunan desa melalui program-program inovatif dan berkelanjutan.'
  },
  {
    icon: 'solar:users-group-two-rounded-line-duotone',
    title: 'Pemberdayaan Masyarakat',
    description: 'Meningkatkan kapasitas dan keterampilan masyarakat untuk kemandirian jangka panjang.'
  },
  {
    icon: 'solar:hand-heart-linear',
    title: 'Dampak Sosial',
    description: 'Menciptakan perubahan positif yang dapat dirasakan langsung oleh masyarakat desa.'
  }
]
</script>
