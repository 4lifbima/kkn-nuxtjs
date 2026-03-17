export type GalleyItem = {
  id: number
  slug: string
  src: string
  alt: string
  title: string
  category: string
  featured?: boolean
  description: string
  date: string
}

export const galleryImages: GalleyItem[] = [
  {
    id: 1,
    slug: 'sosialisasi-program-desa',
    src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&h=800&fit=crop',
    alt: 'Kegiatan sosialisasi program',
    title: 'Sosialisasi Program',
    category: 'Kegiatan Utama',
    featured: true,
    description: 'Pertemuan bersama warga untuk menyampaikan rencana program KKN secara terbuka.',
    date: '5 Maret 2026'
  },
  {
    id: 2,
    slug: 'bimbingan-belajar-sore',
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=450&fit=crop',
    alt: 'Kegiatan bimbingan belajar',
    title: 'Bimbingan Belajar',
    category: 'Edukasi',
    description: 'Sesi belajar sore untuk mendampingi siswa memahami materi sekolah.',
    date: '7 Maret 2026'
  },
  {
    id: 3,
    slug: 'pelatihan-umkm',
    src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop',
    alt: 'Pelatihan UMKM',
    title: 'Pelatihan UMKM',
    category: 'Ekonomi',
    description: 'Pelatihan pemasaran digital dan pengelolaan usaha untuk pelaku UMKM desa.',
    date: '9 Maret 2026'
  },
  {
    id: 4,
    slug: 'kerja-bakti-desa',
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=450&fit=crop',
    alt: 'Kerja bakti desa',
    title: 'Kerja Bakti Desa',
    category: 'Sosial',
    description: 'Aksi kolaboratif mahasiswa dan warga membersihkan area umum desa.',
    date: '10 Maret 2026'
  },
  {
    id: 5,
    slug: 'penyuluhan-kesehatan',
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=450&fit=crop',
    alt: 'Penyuluhan kesehatan',
    title: 'Penyuluhan Kesehatan',
    category: 'Kesehatan',
    description: 'Edukasi kesehatan keluarga dan pola hidup bersih bersama kader posyandu.',
    date: '12 Maret 2026'
  },
  {
    id: 6,
    slug: 'penghijauan-lingkungan',
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=450&fit=crop',
    alt: 'Program penghijauan',
    title: 'Penghijauan',
    category: 'Lingkungan',
    description: 'Penanaman pohon di beberapa titik desa sebagai upaya menjaga kelestarian lingkungan.',
    date: '14 Maret 2026'
  }
]
