<template>
  <footer class="bg-gray-900 text-white pt-20 pb-10">
    <div class="container-custom">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center  transition-all duration-300 group-hover:scale-105">
            <img src="/ung.png" alt="Logo KKN Molotabu" class="w-8 h-8 lg:w-10 lg:h-10" />
          </div>
            <div>
              <h3 class="text-xl font-bold">KKN <span class="text-gradient">Molotabu</span></h3>
              <p class="text-sm text-gray-400">Desa Molotabu</p>
            </div>
          </div>
          <p class="text-gray-400 leading-relaxed mb-6 max-w-md">
            Program Kuliah Kerja Nyata untuk pembangunan desa yang berkelanjutan, 
            memberdayakan masyarakat melalui inovasi dan kolaborasi.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socials" 
              :key="social.name"
              :href="social.href"
              target="_blank"
              class="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Icon :icon="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <NuxtLink 
                :to="link.href"
                class="text-gray-400 hover:text-[#f2321d] transition-colors inline-flex items-center group"
              >
                <Icon icon="solar:arrow-right-linear" class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-6">Kontak</h4>
          <ul class="space-y-4">
            <li v-for="contact in contacts" :key="contact.label" class="flex items-start space-x-3">
              <Icon :icon="contact.icon" class="w-5 h-5 text-[#f2321d] mt-0.5 flex-shrink-0" />
              <span class="text-gray-400 text-sm">{{ contact.value }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} KKN Desa Molotabu. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-500 hover:text-[#f2321d] text-sm transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-500 hover:text-[#f2321d] text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'mdi:instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'mdi:facebook' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'mdi:linkedin' },
]

const quickLinks = [
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Tim KKN', href: '#team' },
  { label: 'Artikel', href: '#articles' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Kontak', href: '#contact' },
]

const contacts = [
  { icon: 'solar:map-point-linear', value: 'Desa Molotabu, Kecamatan Kabila Bone, Kabupaten Bone Bolango' },
  { icon: 'mage:email', value: 'kkn.molotabu@ung.ac.id' },
  { icon: 'solar:phone-linear', value: '+62 822-9138-3797' },
]
</script>
