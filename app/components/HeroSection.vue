<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#f2321d]/20 to-orange-500/20 rounded-full blur-3xl animate-bounce-slow"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-bounce-slow animation-delay-400"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#f2321d]/10 to-orange-500/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Grid Pattern -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMjMyMWQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

    <div class="container-custom relative z-10 pt-20">
      <div class="text-center max-w-5xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full px-5 py-2.5 mb-8 shadow-lg shadow-gray-200/50 animate-fade-in">
          <span class="w-2 h-2 bg-[#f2321d] rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-gray-700">KKN Desa Molotabu 2026</span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-10 animate-slide-up">
          <span class="block text-gray-900">Kuliah Kerja Nyata</span>
          <span class="block heading-gradient">Untuk Negeri</span>
        </h1>

        <!-- Subheadline -->
        <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
          Membangun <span class="font-semibold text-gray-900">Desa Molotabu</span> dengan inovasi, 
          dedikasi, dan kolaborasi untuk masa depan yang lebih baik.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
          <a href="#articles" class="btn-primary w-full sm:w-auto">
            <Icon icon="solar:rocket-linear" class="w-5 h-5 mr-2" />
            Lihat Artikel
          </a>
          <a href="#about" class="btn-secondary w-full sm:w-auto">
            <Icon icon="solar:info-circle-linear" class="w-5 h-5 mr-2" />
            Tentang KKN
          </a>
        </div>

        <!-- Scroll Indicator -->
        <div class="mt-20 animate-bounce">
          <a href="#about" class="inline-flex flex-col items-center text-gray-400 hover:text-[#f2321d] transition-colors">
            <span class="text-sm mb-2">Scroll untuk menjelajah</span>
            <Icon icon="solar:alt-arrow-down-linear" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>
