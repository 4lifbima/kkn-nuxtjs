export const useAuth = () => {
  const supabase = useSupabaseClient<any>()
  const user = useSupabaseUser()
  const profile = useState<any>('user-profile', () => null)
  const loading = useState('auth-loading', () => false)

  // Fetch profile dari tabel profiles, auto-create jika belum ada
  const fetchProfile = async () => {
    if (!user.value) {
      profile.value = null
      return
    }

    // Ambil user id dari session langsung agar tidak undefined
    const { data: sessionData } = await supabase.auth.getSession()
    const session = sessionData?.session
    const userId = session?.user?.id

    if (!userId) {
      console.warn('No user ID found in session')
      profile.value = null
      return
    }

    try {
      // Gunakan maybeSingle() agar tidak error 400 jika row tidak ada
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

      if (error) {
        console.error('Error fetching profile:', error)
      }

      // Jika profile sudah ada, langsung pakai
      if (data) {
        profile.value = data
        return
      }

      // Profile belum ada — buat otomatis dari user metadata
      console.log('Profile not found, creating automatically...')
      const meta = session.user.user_metadata || {}

      const { data: created, error: insertErr } = await supabase
        .from('profiles')
        .insert({
          id: userId,
          full_name: meta.full_name || meta.name || 'Anonymous',
          avatar_url: meta.avatar_url || meta.picture || null,
          email: session.user.email,
          is_admin: false,
        })
        .select()
        .maybeSingle()

      if (insertErr) {
        console.error('Error creating profile:', insertErr)
        return
      }

      profile.value = created
      console.log('Profile created successfully:', created)
    } catch (err) {
      console.error('Error:', err)
    }
  }

  // Login dengan Google OAuth
  const loginWithGoogle = async () => {
    loading.value = true
    try {
      const redirectUrl = window.location.origin + '/forum'
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
        },
      })
      if (error) {
        console.error('Login error:', error)
      }
    } catch (err) {
      console.error('Login error:', err)
    } finally {
      loading.value = false
    }
  }

  // Logout
  const logout = async () => {
    loading.value = true
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Logout error:', error)
      }
      profile.value = null
      await navigateTo('/forum')
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      loading.value = false
    }
  }

  // Cek apakah user adalah admin
  const isAdmin = computed(() => profile.value?.is_admin === true)

  // Watch user changes
  watch(user, async (newUser) => {
    if (newUser) {
      await fetchProfile()
    } else {
      profile.value = null
    }
  }, { immediate: true })

  return {
    user,
    profile,
    loading,
    isAdmin,
    loginWithGoogle,
    logout,
    fetchProfile,
  }
}
