<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Header -->
    <section class="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
      <!-- Background decorations -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-[#f2321d] text-sm font-medium">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            Forum Diskusi
          </div>
          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Forum <span class="text-gradient">Diskusi</span>
          </h1>
          <p class="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Jangan ragu untuk berbagi pemikiran, saran, pertanyaan, atau apa pun!
          </p>
        </div>
      </div>
    </section>

    <!-- Chat Container -->
    <section class="pb-8 md:pb-16">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto">
          <div class="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl shadow-gray-200/50">
            
            <!-- Top bar -->
            <div class="flex items-center justify-between px-5 py-3 bg-gray-50 border-b border-gray-100">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs text-gray-500 font-medium">Forum aktif</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs text-gray-400">{{ messages.length }} pesan</span>
                <!-- User info if logged in -->
                <div v-if="user" class="flex items-center gap-2 pl-3 border-l border-gray-200">
                  <img
                    v-if="profile?.avatar_url"
                    :src="profile.avatar_url"
                    class="w-6 h-6 rounded-full ring-2 ring-white shadow-sm"
                    referrerpolicy="no-referrer"
                  />
                  <span class="text-xs text-gray-600 hidden md:inline font-medium">{{ profile?.full_name }}</span>
                  <button
                    @click="logout"
                    class="text-[10px] text-red-500 hover:text-red-600 px-2 py-1 rounded-lg hover:bg-red-50 transition-colors font-medium"
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>

            <!-- Messages Area -->
            <div
              ref="chatContainerRef"
              class="h-[500px] md:h-[600px] overflow-y-auto p-4 md:p-6 space-y-5 bg-gray-50/50"
            >
              <!-- Loading state -->
              <div v-if="loadingMessages" class="flex items-center justify-center h-full">
                <div class="text-center space-y-4">
                  <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-50">
                    <svg class="w-8 h-8 text-[#f2321d] animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
                      <path d="M12 2a10 10 0 019.95 9" stroke-linecap="round"/>
                    </svg>
                  </div>
                  <p class="text-gray-400 text-sm">Memuat pesan...</p>
                </div>
              </div>

              <!-- Empty state -->
              <div v-else-if="messages.length === 0" class="flex items-center justify-center h-full">
                <div class="text-center space-y-4">
                  <div class="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
                    <svg class="w-10 h-10 text-[#f2321d]/40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700 font-semibold">Belum ada pesan</p>
                    <p class="text-gray-400 text-sm mt-1">Jadilah yang pertama memulai diskusi!</p>
                  </div>
                </div>
              </div>

              <!-- Messages List -->
              <template v-else>
                <ForumMessage
                  v-for="msg in messages"
                  :key="msg.id"
                  :message="msg"
                  :current-user-id="profile?.id"
                  :is-current-user-admin="isAdmin"
                  @delete="handleDelete"
                />
              </template>

              <!-- Scroll anchor -->
              <div ref="scrollAnchorRef"></div>
            </div>

            <!-- Input Area or Login Prompt -->
            <ForumInput
              v-if="user"
              :is-admin="isAdmin"
              :sending="sendingMessage"
              :users="allUsers"
              @send="handleSend"
            />
            <ForumLoginPrompt
              v-else
              :loading="loading"
              @login="loginWithGoogle"
            />
          </div>

          <!-- Info text -->
          <p class="text-center text-gray-400 text-xs mt-4">
            Hormati sesama pengguna. Pesan yang tidak pantas akan dihapus oleh admin.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { user, profile, loading, isAdmin, loginWithGoogle, logout } = useAuth()
const {
  messages,
  loadingMessages,
  sendingMessage,
  allUsers,
  fetchMessages,
  fetchUsers,
  sendMessage,
  subscribeToMessages,
  deleteMessage,
} = useForum()

const chatContainerRef = ref(null)
const scrollAnchorRef = ref(null)

// Auto-scroll ke bawah
const scrollToBottom = (smooth = true) => {
  nextTick(() => {
    if (scrollAnchorRef.value) {
      scrollAnchorRef.value.scrollIntoView({
        behavior: smooth ? 'smooth' : 'instant',
        block: 'end',
      })
    }
  })
}

// Handle kirim pesan — ambil userId dari profile yang sudah ter-load
const handleSend = async (content, mentionUsername) => {
  const userId = profile.value?.id
  if (!userId) {
    console.error('User profile not loaded yet')
    return
  }
  const success = await sendMessage(userId, content, mentionUsername)
  if (success) {
    scrollToBottom()
  }
}

// Handle delete
const handleDelete = async (messageId) => {
  if (confirm('Hapus pesan ini?')) {
    await deleteMessage(messageId)
  }
}

// Watch messages changes for auto-scroll
watch(
  () => messages.value.length,
  () => {
    scrollToBottom()
  }
)

// Init
let realtimeChannel = null

onMounted(async () => {
  await fetchMessages()
  scrollToBottom(false)
  realtimeChannel = subscribeToMessages()

  if (isAdmin.value) {
    await fetchUsers()
  }
})

// Watch admin status to fetch users
watch(isAdmin, async (val) => {
  if (val) {
    await fetchUsers()
  }
})

onUnmounted(() => {
  if (realtimeChannel) {
    const supabase = useSupabaseClient()
    supabase.removeChannel(realtimeChannel)
  }
})

// SEO
useHead({
  title: 'Forum Diskusi',
  titleTemplate: '%s | KKN Desa Molotabu',
})

useSeoMeta({
  description: 'Forum diskusi KKN Desa Molotabu - Berbagi pemikiran, saran, dan pertanyaan.',
  ogTitle: 'Forum Diskusi | KKN Desa Molotabu',
  ogDescription: 'Bergabung dalam diskusi bersama tim KKN Desa Molotabu.',
})
</script>
