export type AnggotaItem = {
  id: number
  slug: string
  name: string
  role: string
  photo: string
  instagram?: string
  linkedin?: string
  github?: string
  email?: string
  website?: string
  whatsapp?: string
  nim: number | string
  bio: string
}

export const teamMembers: AnggotaItem[] = [
  {
    id: 1,
    slug: 'i-wayan-arya-aditya',
    name: 'I Wayan Arya Aditya',
    role: 'Koordinator Desa',
    photo: '/anggota/KORDES.png',
    instagram: '#',
    linkedin: '#',
    email: 'rizki@kkn.ac.id',
    nim: '531423064',
    bio: 'Memimpin koordinasi lintas divisi untuk memastikan setiap program berjalan tepat sasaran dan tepat waktu.'
  },
  {
    id: 2,
    slug: 'rizki-ibrahim',
    name: 'Rizki Ibrahim',
    role: 'Sekretaris',
    photo: '/anggota/WAKORDES.png',
    instagram: '#',
    linkedin: '#',
    email: 'siti@kkn.ac.id',
    nim: '531423006',
    bio: 'Mengelola dokumentasi kegiatan, surat menyurat, dan administrasi program KKN secara terstruktur.'
  },
  {
    id: 3,
    slug: 'Nazly-siti-zulaiha-napu',
    name: 'Nazly siti zulaiha Napu',
    role: 'Pubdekdok',
    photo: '/anggota/SEKRETARIS.png',
    instagram: '#',
    email: 'alya@kkn.ac.id',
    nim: '531423013',
    bio: 'Bertanggung jawab atas perencanaan dan pelaporan keuangan kegiatan agar tetap transparan.'
  },
  {
    id: 4,
    slug: 'suci-rahmawaty-utina',
    name: 'Suci Rahmawaty Utina',
    role: 'Software Engineer',
    photo: '/anggota/BENDAHARA.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423009',
    bio: 'Menyusun timeline dan eksekusi teknis program dengan pendekatan kolaboratif bersama warga.'
  },
  {
    id: 5,
    slug: 'alya-awaliyah-tokalang',
    name: 'Alya Awaliyah Tokalang',
    role: 'Koordinator Acara',
    photo: '/anggota/ACARA.png',
    instagram: '#',
    nim: '531423078',
    bio: 'Memastikan kebutuhan logistik lapangan terpenuhi selama kegiatan berlangsung di lokasi program.'
  },
  {
    id: 6,
    slug: 'rashyid-ridho-akuba',
    name: 'Rashyaid Ridho Akuba',
    role: 'Koordinator Humas',
    photo: '/anggota/PUBDOK.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423085',
    bio: 'Mengelola komunikasi publik, publikasi kegiatan, dan hubungan baik dengan mitra desa.'
  },
  {
    id: 7,
    slug: 'zulvkry-andre-lantu',
    name: 'Zulvkry Andre Lantu',
    role: 'Koordinator Perlengkapan',
    photo: '/anggota/PERLENGKAPAN.png',
    instagram: '#',
    nim: '531423040',
    bio: 'Mendokumentasikan setiap kegiatan agar hasil program dapat dipublikasikan dengan baik.'
  },
  {
    id: 8,
    slug: 'alif-bima-pradana',
    name: 'Alif Bima Pradana',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA.png',
    instagram: 'https://www.instagram.com/alifbimapradana07/',
    linkedin: 'https://www.linkedin.com/in/alif-bima-pradana/',
    github: 'https://github.com/4lifbima/',
    website: 'https://alifbima.my.id',
    whatsapp: 'https://wa.me/6282291383797',
    nim: '531423009',
    bio: 'Membantu pelaksanaan program kerja lapangan serta mendukung koordinasi antar divisi untuk kelancaran kegiatan KKN. alif bima juga adalah salah satu progrmammer utama dalam pengembangan website resmi KKN Berdampak Desa Molotabu, memastikan informasi kegiatan dapat diakses dengan mudah oleh para pelaku umkm dan masyarakat luas.'
  },
  {
    id: 9,
    slug: 'raya-rizali-mutawakkil-mantau',
    name: 'Raya Rizali Mutawakkil Mantau',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA-2.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423054',
    bio: 'Berperan aktif dalam pelaksanaan program kerja lapangan dan penguatan kolaborasi dengan masyarakat desa.'
  },
  {
    id: 10,
    slug: 'ilham-ts-bullah',
    name: 'Ilham TS Bullah',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA-3.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423017',
    bio: 'Mendukung perencanaan kegiatan edukatif serta membantu pendampingan program berbasis kebutuhan warga.'
  },
  {
    id: 11,
    slug: 'sitti-rahwati-moki',
    name: 'Sitti Rahwati Moki',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA-4.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423039',
    bio: 'Membantu koordinasi kegiatan harian tim dan memastikan komunikasi internal berjalan dengan baik.'
  },
  {
    id: 12,
    slug: 'sri-wahyuni-j-mahadi',
    name: 'Sri Wahyuni J. Mahadi',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA-5.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423024',
    bio: 'Terlibat dalam pengumpulan data kegiatan serta penyusunan laporan kemajuan program kerja tim KKN.'
  },
  {
    id: 13,
    slug: 'dea-maharani-r-yunus',
    name: 'Dea Maharani R. Yunus',
    role: 'Anggota',
    photo: '/anggota/ANGGOTA-6.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423083',
    bio: 'Berkontribusi pada pelaksanaan teknis program dan mendukung dokumentasi hasil kegiatan di lapangan.'
  },
]
