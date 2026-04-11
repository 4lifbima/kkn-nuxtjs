<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 py-4"
  >
    <div class="container-custom">
      <div
        class="flex items-center justify-between px-4 md:px-6 py-3 rounded-3xl border border-gray-200/70 backdrop-blur-xl transition-all duration-300"
        :class="isScrolled ? 'bg-white/95 shadow-lg shadow-gray-300/40' : 'bg-white shadow-md shadow-gray-200/40'"
      >
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
            <img src="/ung.png" alt="Logo KKN Molotabu" class="w-8 h-8 lg:w-10 lg:h-10" />
          </div>
          <div>
            <h1 class="text-md lg:text-xl font-extrabold text-gray-900">KKN <span class="text-gradient">Molotabu</span></h1>
            <p class="text-xs text-gray-500">Kecamatan Kabila Bone</p>
          </div>
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.label"
            :to="item.href"
            class="px-5 py-2.5 text-sm font-medium text-gray-600 rounded-xl hover:text-[#f2321d] hover:bg-red-50 transition-all duration-300"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a href="#contact" class="btn-primary !px-6 !py-3 !text-sm !rounded-xl">
            Hubungi Kami
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
        >
          <Icon 
            :icon="isMobileMenuOpen ? 'ci:close-md' : 'solar:hamburger-menu-linear'" 
            class="w-6 h-6 text-gray-700"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 mt-2 container-custom">
        <div class="bg-white border border-gray-100 rounded-2xl shadow-2xl py-6 px-6 space-y-2">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.label"
          :to="item.href"
          @click="isMobileMenuOpen = false"
          class="block px-4 py-3 text-base font-medium text-gray-600 rounded-xl hover:text-[#f2321d] hover:bg-red-50 transition-all"
        >
          {{ item.label }}
        </NuxtLink>
        <a href="#contact" @click="isMobileMenuOpen = false" class="block w-full btn-primary text-center">
          Hubungi Kami
        </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'DPL', href: '#about' },
  { label: 'Tim', href: '#team' },
  { label: 'Artikel', href: '#articles' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Forum', href: '/forum' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>
