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
    photo: '/anggota/wayan.png',
    instagram: '#',
    linkedin: '#',
    email: 'wayan@kkn.ac.id',
    nim: '531423040',
    bio: 'Memimpin koordinasi lintas divisi untuk memastikan setiap program berjalan tepat sasaran dan tepat waktu.'
  },
  {
    id: 2,
    slug: 'rizki-ibrahim',
    name: 'Rizki Ibrahim',
    role: 'Wakil Koordinator Desa',
    photo: '/anggota/rizky.png',
    instagram: '#',
    linkedin: '#',
    email: 'rizki@kkn.ac.id',
    nim: '531423064',
    bio: 'Mengelola dokumentasi kegiatan, surat menyurat, dan administrasi program KKN secara terstruktur.'
  },
  {
    id: 3,
    slug: 'Nazly-siti-zulaiha-napu',
    name: 'Nazly siti zulaiha Napu',
    role: 'Sekretaris',
    photo: '/anggota/nazly.png',
    instagram: '#',
    email: 'nazly@kkn.ac.id',
    nim: '531423006',
    bio: 'Bertanggung jawab atas perencanaan dan pelaporan keuangan kegiatan agar tetap transparan.'
  },
  {
    id: 4,
    slug: 'suci-rahmawaty-utina',
    name: 'Suci Rahmawaty Utina',
    role: 'Bendahara',
    photo: '/anggota/suci.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423024',
    bio: 'Menyusun timeline dan eksekusi teknis program dengan pendekatan kolaboratif bersama warga.'
  },
  {
    id: 5,
    slug: 'alya-awaliyah-tokalang',
    name: 'Alya Awaliyah Tokalang',
    role: 'Koordinator Acara',
    photo: '/anggota/alya.png',
    instagram: '#',
    nim: '531423013',
    bio: 'Memastikan kebutuhan logistik lapangan terpenuhi selama kegiatan berlangsung di lokasi program.'
  },
  {
    id: 6,
    slug: 'rashyid-ridho-akuba',
    name: 'Rashyaid Ridho Akuba',
    role: 'Koordinator Pubdok',
    photo: '/anggota/ridho.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423077',
    bio: 'Mengelola komunikasi publik, publikasi kegiatan, dan hubungan baik dengan mitra desa.'
  },
  {
    id: 7,
    slug: 'zulvkry-andre-lantu',
    name: 'Zulvkry Andre Lantu',
    role: 'Koordinator Perlengkapan',
    photo: '/anggota/andre.png',
    instagram: '#',
    nim: '531423083',
    bio: 'Mendokumentasikan setiap kegiatan agar hasil program dapat dipublikasikan dengan baik.'
  },
  {
    id: 8,
    slug: 'alif-bima-pradana',
    name: 'Alif Bima Pradana',
    role: 'Programmer',
    photo: '/anggota/alif.png',
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
    photo: '/anggota/raya.png',
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
    photo: '/anggota/ilham.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423078',
    bio: 'Mendukung perencanaan kegiatan edukatif serta membantu pendampingan program berbasis kebutuhan warga.'
  },
  {
    id: 11,
    slug: 'sitti-rahwati-moki',
    name: 'Sitti Rahwati Moki',
    role: 'Anggota',
    photo: '/anggota/awa-moki.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423017',
    bio: 'Membantu koordinasi kegiatan harian tim dan memastikan komunikasi internal berjalan dengan baik.'
  },
  {
    id: 12,
    slug: 'sri-wahyuni-j-mahadi',
    name: 'Sri Wahyuni J. Mahadi',
    role: 'Anggota',
    photo: '/anggota/yuni.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423039',
    bio: 'Terlibat dalam pengumpulan data kegiatan serta penyusunan laporan kemajuan program kerja tim KKN.'
  },
  {
    id: 13,
    slug: 'dea-maharani-r-yunus',
    name: 'Dea Maharani R. Yunus',
    role: 'Anggota',
    photo: '/anggota/dea.png',
    instagram: '#',
    linkedin: '#',
    nim: '531423011',
    bio: 'Berkontribusi pada pelaksanaan teknis program dan mendukung dokumentasi hasil kegiatan di lapangan.'
  },
]
