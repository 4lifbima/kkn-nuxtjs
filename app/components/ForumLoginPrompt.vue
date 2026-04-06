<template>
  <div class="border-t border-gray-100 bg-gray-50 p-6 md:p-8">
    <div class="text-center space-y-4">
      <!-- Lock Icon -->
      <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100 mb-2">
        <svg class="w-7 h-7 text-[#f2321d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0110 0v4"/>
        </svg>
      </div>

      <p class="text-gray-600 text-sm md:text-base">
        Silakan masuk untuk bergabung dalam percakapan.
        <br />
        <span class="text-gray-400 text-xs">Jangan khawatir, data Anda aman bersama kami.</span>
      </p>

      <!-- Google Login Button -->
      <button
        @click="$emit('login')"
        :disabled="loading"
        class="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-2xl font-semibold text-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <!-- Google Icon -->
        <svg class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span v-if="!loading">Masuk dengan Google</span>
        <span v-else>Memproses...</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()

defineEmits(['login'])
</script>
