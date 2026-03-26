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
                  <p class="text-gray-600">Desa Molotabu, Kecamatan Kabila Bone<br>Kabupaten Bone Bolango, Provinsi Gorontalo</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="mage:email" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:kkn.molotabu@ung.ac.id" class="text-gray-600 hover:text-[#f2321d] transition-colors">kkn.molotabu@ung.ac.id</a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[#f2321d]/10 to-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:phone-linear" class="w-6 h-6 text-[#f2321d]" />
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Telepon / WhatsApp</h4>
                  <a href="tel:+6282291383797" class="text-gray-600 hover:text-[#f2321d] transition-colors">+62 822-9138-3797</a>
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

        <!-- Map -->
        <div class="card-glass p-2 h-full flex flex-col">
          <div class="rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.502142772606!2d123.14017600000001!3d0.46350545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x327f2bba1acbc6af%3A0x60a26ceb58d19449!2sMolotabu%2C%20Kec.%20Kabila%20Bone%2C%20Kabupaten%20Bone%20Bolango%2C%20Gorontalo!5e0!3m2!1sid!2sid!4v1774519509632!5m2!1sid!2sid"
              class="w-full h-full"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { name: 'Instagram', href: 'https://instagram.com', icon: 'mdi:instagram' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'mdi:facebook' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'mdi:linkedin' },
  { name: 'YouTube', href: 'https://youtube.com', icon: 'mdi:youtube' },
]
</script>
