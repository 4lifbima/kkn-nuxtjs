export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
  ],
  devtools: {
    enabled: true,
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@iconify/vue',
      ]
    }
  },
  app: {
    head: {
      title: 'KKN Desa Molotabu - Official Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Landing Page Resmi KKN Desa Molotabu - Program Kuliah Kerja Nyata untuk Pembangunan Desa' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' },
      ],
    },
  },
  tailwindcss: {
    cssPath: 'assets/css/main.css',
    configPath: 'tailwind.config.js',
  },
})