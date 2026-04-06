interface ForumMessage {
  id: string
  user_id: string
  content: string
  mention_username: string | null
  created_at: string
  profiles: {
    id: string
    full_name: string
    avatar_url: string
    email: string
    is_admin: boolean
  }
}

export const useForum = () => {
  const supabase = useSupabaseClient<any>()
  const messages = useState<ForumMessage[]>('forum-messages', () => [])
  const loadingMessages = useState('forum-loading', () => false)
  const sendingMessage = useState('forum-sending', () => false)
  const allUsers = useState<any[]>('forum-users', () => [])

  // Fetch semua messages dengan profile data
  const fetchMessages = async () => {
    loadingMessages.value = true
    try {
      const { data, error } = await supabase
        .from('forum_messages')
        .select(`
          *,
          profiles:user_id (
            id,
            full_name,
            avatar_url,
            email,
            is_admin
          )
        `)
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching messages:', error)
        return
      }

      messages.value = (data || []) as ForumMessage[]
    } catch (err) {
      console.error('Error:', err)
    } finally {
      loadingMessages.value = false
    }
  }

  // Fetch semua user profiles (untuk mention dropdown - admin only)
  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, full_name, avatar_url, email')
        .order('full_name', { ascending: true })

      if (error) {
        console.error('Error fetching users:', error)
        return
      }

      allUsers.value = data || []
    } catch (err) {
      console.error('Error:', err)
    }
  }

  // Kirim pesan baru
  const sendMessage = async (userId: string, content: string, mentionUsername?: string) => {
    if (!content.trim() || !userId) return false

    sendingMessage.value = true
    try {
      const messageData: Record<string, any> = {
        user_id: userId,
        content: content.trim(),
      }

      if (mentionUsername) {
        messageData.mention_username = mentionUsername
      }

      const { error } = await supabase
        .from('forum_messages')
        .insert(messageData)

      if (error) {
        console.error('Error sending message:', error)
        return false
      }

      return true
    } catch (err) {
      console.error('Error:', err)
      return false
    } finally {
      sendingMessage.value = false
    }
  }

  // Subscribe ke realtime changes
  const subscribeToMessages = () => {
    const channel = supabase
      .channel('forum-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'forum_messages',
        },
        async (payload: any) => {
          // Fetch pesan baru dengan profile data
          const { data, error } = await supabase
            .from('forum_messages')
            .select(`
              *,
              profiles:user_id (
                id,
                full_name,
                avatar_url,
                email,
                is_admin
              )
            `)
            .eq('id', payload.new.id)
            .single()

          if (!error && data) {
            // Cek apakah pesan sudah ada (hindari duplikat)
            const exists = messages.value.some((m) => m.id === data.id)
            if (!exists) {
              messages.value.push(data as ForumMessage)
            }
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'forum_messages',
        },
        (payload: any) => {
          messages.value = messages.value.filter((m) => m.id !== payload.old.id)
        }
      )
      .subscribe()

    return channel
  }

  // Hapus pesan
  const deleteMessage = async (messageId: string) => {
    try {
      const { error } = await supabase
        .from('forum_messages')
        .delete()
        .eq('id', messageId)

      if (error) {
        console.error('Error deleting message:', error)
        return false
      }

      messages.value = messages.value.filter((m) => m.id !== messageId)
      return true
    } catch (err) {
      console.error('Error:', err)
      return false
    }
  }

  // Format timestamp
  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    const timeStr = date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    })

    if (diffDays === 0) {
      return `Hari ini, ${timeStr}`
    } else if (diffDays === 1) {
      return `Kemarin, ${timeStr}`
    } else {
      const dateFormatted = date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      return `${dateFormatted}, ${timeStr}`
    }
  }

  return {
    messages,
    loadingMessages,
    sendingMessage,
    allUsers,
    fetchMessages,
    fetchUsers,
    sendMessage,
    subscribeToMessages,
    deleteMessage,
    formatTime,
  }
}
