export type AnggotaItem = {
  id: number
  slug: string
  name: string
  role: string
  photo: string
  instagram?: string
  linkedin?: string
  email?: string
  tags: string[]
  bio: string
}

export const teamMembers: AnggotaItem[] = [
  {
    id: 1,
    slug: 'rizki-ibrahim',
    name: 'Rizki Ibrahim',
    role: 'Koordinator Desa',
    photo: '/anggota/rizki.png',
    instagram: '#',
    linkedin: '#',
    email: 'rizki@kkn.ac.id',
    tags: ['Teknik Informatika', 'Leadership'],
    bio: 'Memimpin koordinasi lintas divisi untuk memastikan setiap program berjalan tepat sasaran dan tepat waktu.'
  },
  {
    id: 2,
    slug: 'siti-nurhaliza',
    name: 'Nazly Sitti Zulaiha',
    role: 'Bendahara',
    photo: '/anggota/nazly.png',
    instagram: '#',
    linkedin: '#',
    email: 'siti@kkn.ac.id',
    tags: ['Administrasi', 'Komunikasi'],
    bio: 'Mengelola dokumentasi kegiatan, surat menyurat, dan administrasi program KKN secara terstruktur.'
  },
  {
    id: 3,
    slug: 'alya-awalia-tokalang',
    name: 'Alya Awalia Tokalang',
    role: 'Pubdekdok',
    photo: '/anggota/alya.png',
    instagram: '#',
    email: 'alya@kkn.ac.id',
    tags: ['Akuntansi', 'Keuangan'],
    bio: 'Bertanggung jawab atas perencanaan dan pelaporan keuangan kegiatan agar tetap transparan.'
  },
  {
    id: 4,
    slug: 'aisyah-putri',
    name: 'Alif Bima Pradana',
    role: 'Koordinator Program',
    photo: '/anggota/alif.png',
    instagram: '#',
    linkedin: '#',
    tags: ['Manajemen', 'Event Organizer'],
    bio: 'Menyusun timeline dan eksekusi teknis program dengan pendekatan kolaboratif bersama warga.'
  },
  {
    id: 5,
    slug: 'ilham-ts-bullah',
    name: 'Ilham TS Bullah',
    role: 'Koordinator Lapangan',
    photo: '/anggota/default.png',
    instagram: '#',
    tags: ['Logistik', 'Koordinasi'],
    bio: 'Memastikan kebutuhan logistik lapangan terpenuhi selama kegiatan berlangsung di lokasi program.'
  },
  {
    id: 6,
    slug: 'dea-maharani-r-yunus',
    name: 'Dea Maharani R. Yunus',
    role: 'Koordinator Humas',
    photo: '/anggota/default.png',
    instagram: '#',
    linkedin: '#',
    tags: ['Public Relations', 'Media'],
    bio: 'Mengelola komunikasi publik, publikasi kegiatan, dan hubungan baik dengan mitra desa.'
  },
  {
    id: 7,
    slug: 'i-wayan-arya-aditya',
    name: 'I Wayan Arya Aditya',
    role: 'Anggota',
    photo: '/anggota/default.png',
    instagram: '#',
    tags: ['Dokumentasi', 'Fotografi'],
    bio: 'Mendokumentasikan setiap kegiatan agar hasil program dapat dipublikasikan dengan baik.'
  },
  {
    id: 8,
    slug: 'rashyid-ridho-akuba',
    name: 'Rashyid Ridho Akuba',
    role: 'Anggota',
    photo: '/anggota/default.png',
    instagram: '#',
    linkedin: '#',
    tags: ['Desain Grafis', 'Kreatif'],
    bio: 'Mengembangkan aset visual dan konten kreatif untuk kebutuhan edukasi dan kampanye program.'
  }
]
