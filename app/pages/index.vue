<template>
  <div class="min-h-screen bg-white">
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ArticleSection />
      <GallerySection />
      <ContactSection />
    </main>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-br from-[#f2321d] to-orange-500 text-white rounded-2xl shadow-lg shadow-red-500/40 flex items-center justify-center hover:shadow-xl hover:shadow-red-500/50 hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <Icon icon="solar:alt-arrow-up-linear" class="w-6 h-6" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
const showScrollTop = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    showScrollTop.value = window.scrollY > 500
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const offset = 110
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

useHead({
  title: 'Beranda',
  titleTemplate: '%s | KKN Desa Molotabu'
})

useSeoMeta({
  description: 'Website resmi KKN Desa Molotabu berisi profil tim, artikel kegiatan, galeri, dan informasi kontak.',
  ogTitle: 'KKN Desa Molotabu',
  ogDescription: 'Profil, artikel, galeri, dan kontak resmi KKN Desa Molotabu.',
  robots: 'index, follow'
})
</script>
