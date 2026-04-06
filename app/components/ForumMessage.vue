<template>
  <div
    class="flex gap-3 group animate-forum-fade-in"
    :class="isAuthor ? 'flex-row-reverse' : 'flex-row'"
  >
    <!-- Avatar -->
    <div class="flex-shrink-0">
      <div class="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 shadow-sm transition-all duration-300"
        :class="isAuthor ? 'ring-[#f2321d]/30' : 'ring-gray-200'"
      >
        <img
          v-if="message.profiles?.avatar_url"
          :src="message.profiles.avatar_url"
          :alt="message.profiles.full_name"
          class="w-full h-full object-cover"
          referrerpolicy="no-referrer"
        />
        <div
          v-else
          class="w-full h-full flex items-center justify-center text-white font-bold text-lg"
          :class="isAuthor ? 'bg-gradient-to-br from-[#f2321d] to-orange-500' : 'bg-gradient-to-br from-gray-400 to-gray-500'"
        >
          {{ getInitial(message.profiles?.full_name) }}
        </div>
      </div>
    </div>

    <!-- Message Content -->
    <div class="max-w-[75%] md:max-w-[65%] space-y-1.5">
      <!-- Name + Badge + Time -->
      <div
        class="flex items-center gap-2 flex-wrap"
        :class="isAuthor ? 'justify-end' : 'justify-start'"
      >
        <span class="text-[11px] text-gray-400">
          {{ formatTime(message.created_at) }}
        </span>
        <span
          v-if="isAuthor"
          class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#f2321d] to-orange-500 text-white"
        >
          <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Author
        </span>
        <span
          class="text-sm font-semibold"
          :class="isAuthor ? 'text-[#f2321d]' : 'text-gray-800'"
        >
          {{ message.profiles?.full_name || 'Anonymous' }}
        </span>
      </div>

      <!-- Chat Bubble -->
      <div
        class="relative px-4 py-3 rounded-2xl transition-all duration-300"
        :class="bubbleClasses"
      >
        <!-- Mention -->
        <span
          v-if="message.mention_username"
          class="font-bold text-[#fcd6d2] mr-2"
        >@{{ message.mention_username }} </span>
        <!-- Content -->
        <span class="break-words leading-relaxed" :class="isAuthor ? 'text-white' : 'text-gray-700'">{{ message.content }}</span>
      </div>

      <!-- Delete button (own message or admin) -->
      <div
        v-if="canDelete"
        class="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        :class="isAuthor ? 'text-right' : 'text-left'"
      >
        <button
          @click="$emit('delete', message.id)"
          class="text-xs text-red-400 hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
        >
          Hapus
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: any
  currentUserId?: string
  isCurrentUserAdmin?: boolean
}>()

defineEmits(['delete'])

const { formatTime } = useForum()

const isAuthor = computed(() => props.message.profiles?.is_admin === true)

const canDelete = computed(() => {
  if (!props.currentUserId) return false
  if (props.message.user_id === props.currentUserId) return true
  if (props.isCurrentUserAdmin) return true
  return false
})

const bubbleClasses = computed(() => {
  if (isAuthor.value) {
    return 'bg-gradient-to-br from-[#f2321d] to-orange-500 text-white rounded-tr-sm shadow-lg shadow-red-500/20'
  }
  return 'bg-white border border-gray-200 text-gray-700 rounded-tl-sm shadow-sm'
})

const getInitial = (name?: string) => {
  if (!name) return '?'
  return name.charAt(0).toUpperCase()
}
</script>
