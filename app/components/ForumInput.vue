<template>
  <div class="border-t border-gray-100 bg-white p-4 md:p-6">
    <form @submit.prevent="handleSend" class="space-y-3">
      <!-- Mention selector (Admin only) -->
      <div v-if="isAdmin" class="flex items-center gap-2">
        <div class="relative flex-1">
          <button
            type="button"
            @click="showMentionDropdown = !showMentionDropdown"
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-200"
            :class="selectedMention
              ? 'bg-red-50 text-[#f2321d] border border-red-200'
              : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100 hover:text-gray-700'"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="4"/>
              <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"/>
            </svg>
            <span v-if="selectedMention">@{{ selectedMention }}</span>
            <span v-else>Mention user</span>
          </button>

          <!-- Dropdown -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-2 scale-95"
          >
            <div
              v-if="showMentionDropdown"
              class="absolute bottom-full left-0 mb-2 w-72 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-xl z-50"
            >
              <div class="p-2">
                <input
                  v-model="mentionSearch"
                  type="text"
                  placeholder="Cari user..."
                  class="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#f2321d]/50 focus:ring-1 focus:ring-[#f2321d]/20 mb-2"
                />
                <button
                  v-if="selectedMention"
                  type="button"
                  @click="clearMention"
                  class="w-full text-left px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors mb-1"
                >
                  ✕ Hapus mention
                </button>
                <button
                  v-for="u in filteredUsers"
                  :key="u.id"
                  type="button"
                  @click="selectMention(u)"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <img
                    v-if="u.avatar_url"
                    :src="u.avatar_url"
                    class="w-7 h-7 rounded-full object-cover ring-1 ring-gray-200"
                    referrerpolicy="no-referrer"
                  />
                  <div
                    v-else
                    class="w-7 h-7 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {{ u.full_name?.charAt(0) || '?' }}
                  </div>
                  <span>{{ u.full_name || u.email }}</span>
                </button>
                <p v-if="filteredUsers.length === 0" class="text-center text-gray-400 text-sm py-3">
                  Tidak ada user ditemukan
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Input field + send button -->
      <div class="flex items-end gap-3">
        <div class="flex-1 relative">
          <textarea
            ref="textareaRef"
            v-model="messageText"
            @keydown.enter.exact.prevent="handleSend"
            placeholder="Tulis pesan..."
            rows="1"
            class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 text-sm resize-none focus:outline-none focus:border-[#f2321d]/40 focus:ring-2 focus:ring-[#f2321d]/10 transition-all duration-300 max-h-32 overflow-y-auto"
            :disabled="sending"
          />
        </div>

        <button
          type="submit"
          :disabled="!messageText.trim() || sending"
          class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-lg"
          :class="messageText.trim() && !sending
            ? 'bg-gradient-to-br from-[#f2321d] to-orange-500 text-white hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 cursor-pointer'
            : 'bg-gray-100 text-gray-300 cursor-not-allowed shadow-none'"
        >
          <svg v-if="!sending" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          <svg v-else class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 019.95 9" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <p class="text-[11px] text-gray-400 text-center">
        Tekan <kbd class="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-500 text-[10px]">Enter</kbd> untuk mengirim
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isAdmin: boolean
  sending: boolean
  users: any[]
}>()

const emit = defineEmits<{
  send: [content: string, mentionUsername?: string]
}>()

const messageText = ref('')
const selectedMention = ref<string | null>(null)
const showMentionDropdown = ref(false)
const mentionSearch = ref('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const filteredUsers = computed(() => {
  if (!mentionSearch.value) return props.users
  const search = mentionSearch.value.toLowerCase()
  return props.users.filter(
    (u) =>
      u.full_name?.toLowerCase().includes(search) ||
      u.email?.toLowerCase().includes(search)
  )
})

const selectMention = (user: any) => {
  selectedMention.value = user.full_name || user.email
  showMentionDropdown.value = false
  mentionSearch.value = ''
  textareaRef.value?.focus()
}

const clearMention = () => {
  selectedMention.value = null
  showMentionDropdown.value = false
  mentionSearch.value = ''
}

const handleSend = () => {
  if (!messageText.value.trim() || props.sending) return
  emit('send', messageText.value, selectedMention.value || undefined)
  messageText.value = ''
  selectedMention.value = null
}

// Auto-resize textarea
watch(messageText, () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      textareaRef.value.style.height = Math.min(textareaRef.value.scrollHeight, 128) + 'px'
    }
  })
})

// Close dropdown on click outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.relative')) {
      showMentionDropdown.value = false
    }
  })
})
</script>
