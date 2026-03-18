<template>
  <section id="contact" class="section-padding bg-gradient-to-b from-white to-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center space-x-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
          <Icon icon="solar:phone-linear" class="w-4 h-4 text-[#f2321d]" />
          <span class="text-sm font-semibold text-[#f2321d]">Hubungi Kami</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          <span class="text-gray-900">Mari</span>
          <span class="heading-gradient"> Berkolaborasi</span>
        </h2>
        <p class="text-lg text-gray-600">
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="card-glass p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:map-point-linear" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Alamat</h4>
                  <p class="text-gray-600">Desa Molotabu, Kecamatan Molotabu<br>Kabupaten Gorontalo, Provinsi Gorontalo</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="mage:email" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:kkn@molotabu.ac.id" class="text-gray-600 hover:text-[#f2321d] transition-colors">kkn@molotabu.ac.id</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:phone-linear" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Telepon / WhatsApp</h4>
                  <a href="tel:+628123456789" class="text-gray-600 hover:text-[#f2321d] transition-colors">+62 812-3456-7890</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="svg-spinners:clock" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                  <p class="text-gray-600">Senin - Jumat: 08.00 - 17.00 WITA<br>Sabtu - Minggu: On Call</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-8 pt-8 border-t border-gray-100">
              <h4 class="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
              <div class="flex space-x-3">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.href"
                  target="_blank"
                  class="w-12 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-[#f2321d] hover:to-orange-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon :icon="social.icon" class="w-5 h-5 text-gray-600 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card-glass p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f2321d] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f2321d] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subjek pesan Anda"
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f2321d] focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tulis pesan Anda di sini..."
                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f2321d] focus:border-transparent transition-all resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full">
              <Icon icon="solar:send-linear" class="w-5 h-5 mr-2" />
              Kirim Pesan
            </button>
          </form>

          <!-- Success Message -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div v-if="formSubmitted" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
              <Icon icon="solar:check-circle-linear" class="w-6 h-6 text-green-600" />
              <div>
                <p class="font-semibold text-green-800">Pesan Terkirim!</p>
                <p class="text-sm text-green-600">Terima kasih telah menghubungi kami.</p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formSubmitted = ref(false)

const socials = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'mdi:instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'mdi:facebook' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'mdi:youtube' },
]

const submitForm = () => {
  // Simulate form submission
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 5000)
}
</script>
