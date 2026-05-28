export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://kkndesamolutabu.vercel.app',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxtjs/supabase',
  ],
  supabase: {
    redirect: false,
  },
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
        { name: 'description', content: 'Website Resmi KKN Berdampak Desa Molutabu - Fakultas Teknik Jurusan Teknik Informatika Program Studi Sistem Informasi Universitas Negeri Gorontalo' },
        { name: 'theme-color', content: '#f2321d' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/ung.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/ung.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/ung.png' },
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