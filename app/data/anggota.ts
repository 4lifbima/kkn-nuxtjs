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
    slug: 'ahmad-rizki-pratama',
    name: 'Ahmad Rizki Pratama',
    role: 'Ketua Pelaksana',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    instagram: '#',
    linkedin: '#',
    email: 'ahmad@kkn.ac.id',
    tags: ['Teknik Informatika', 'Leadership'],
    bio: 'Memimpin koordinasi lintas divisi untuk memastikan setiap program berjalan tepat sasaran dan tepat waktu.'
  },
  {
    id: 2,
    slug: 'siti-nurhaliza',
    name: 'Siti Nurhaliza',
    role: 'Sekretaris',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    instagram: '#',
    linkedin: '#',
    email: 'siti@kkn.ac.id',
    tags: ['Administrasi', 'Komunikasi'],
    bio: 'Mengelola dokumentasi kegiatan, surat menyurat, dan administrasi program KKN secara terstruktur.'
  },
  {
    id: 3,
    slug: 'muhammad-fikri',
    name: 'Muhammad Fikri',
    role: 'Bendahara',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    instagram: '#',
    email: 'fikri@kkn.ac.id',
    tags: ['Akuntansi', 'Keuangan'],
    bio: 'Bertanggung jawab atas perencanaan dan pelaporan keuangan kegiatan agar tetap transparan.'
  },
  {
    id: 4,
    slug: 'aisyah-putri',
    name: 'Aisyah Putri',
    role: 'Koordinator Program',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    instagram: '#',
    linkedin: '#',
    tags: ['Manajemen', 'Event Organizer'],
    bio: 'Menyusun timeline dan eksekusi teknis program dengan pendekatan kolaboratif bersama warga.'
  },
  {
    id: 5,
    slug: 'andi-saputra',
    name: 'Andi Saputra',
    role: 'Koordinator Lapangan',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    instagram: '#',
    tags: ['Logistik', 'Koordinasi'],
    bio: 'Memastikan kebutuhan logistik lapangan terpenuhi selama kegiatan berlangsung di lokasi program.'
  },
  {
    id: 6,
    slug: 'rina-wati',
    name: 'Rina Wati',
    role: 'Koordinator Humas',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop',
    instagram: '#',
    linkedin: '#',
    tags: ['Public Relations', 'Media'],
    bio: 'Mengelola komunikasi publik, publikasi kegiatan, dan hubungan baik dengan mitra desa.'
  },
  {
    id: 7,
    slug: 'budi-santoso',
    name: 'Budi Santoso',
    role: 'Anggota',
    photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop',
    instagram: '#',
    tags: ['Dokumentasi', 'Fotografi'],
    bio: 'Mendokumentasikan setiap kegiatan agar hasil program dapat dipublikasikan dengan baik.'
  },
  {
    id: 8,
    slug: 'dewi-lestari',
    name: 'Dewi Lestari',
    role: 'Anggota',
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop',
    instagram: '#',
    linkedin: '#',
    tags: ['Desain Grafis', 'Kreatif'],
    bio: 'Mengembangkan aset visual dan konten kreatif untuk kebutuhan edukasi dan kampanye program.'
  }
]
