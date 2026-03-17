export type ArtikelItem = {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  author: string
  contentHtml: string
}

export const articles: ArtikelItem[] = [
  {
    id: 1,
    slug: 'transformasi-umkm-desa-molotabu',
    title: 'Transformasi UMKM Desa Molotabu Melalui Digitalisasi',
    excerpt: 'Pendampingan intensif KKN membantu pelaku UMKM desa memanfaatkan media digital untuk memperluas pasar, meningkatkan branding, dan mempercepat pertumbuhan omzet.',
    category: 'Ekonomi',
    date: '12 Maret 2026',
    readTime: '8 menit baca',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200&h=700&fit=crop',
    author: 'Tim KKN Molotabu',
    contentHtml: `<p>Digitalisasi menjadi langkah penting bagi UMKM desa untuk naik kelas. Tim KKN melakukan pemetaan kebutuhan pelaku usaha, mulai dari kemampuan promosi hingga pengelolaan pelanggan.</p>
    <p>Pelatihan difokuskan pada pembuatan katalog digital, penggunaan media sosial, dan teknik komunikasi pemasaran yang sederhana namun efektif. Materi disusun berdasarkan kondisi riil pelaku usaha di lapangan.</p>
    <h2>Fokus Program</h2>
    <ul>
      <li>Pembuatan identitas merek sederhana dan konsisten.</li>
      <li>Optimalisasi konten promosi untuk WhatsApp dan Instagram.</li>
      <li>Pendampingan komunikasi pelanggan dan pencatatan pesanan.</li>
    </ul>
    <p>Hasil awal menunjukkan peningkatan interaksi calon pembeli dan kepercayaan pelaku UMKM dalam menjalankan promosi online secara mandiri.</p>`
  },
  {
    id: 2,
    slug: 'literasi-keuangan-pemuda-desa',
    title: 'Pentingnya Literasi Keuangan untuk Pemuda Desa',
    excerpt: 'Workshop literasi keuangan membuka wawasan generasi muda untuk mengelola pemasukan, menabung, dan merancang usaha mandiri secara berkelanjutan.',
    category: 'Edukasi',
    date: '10 Maret 2026',
    readTime: '5 menit baca',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop',
    author: 'Divisi Edukasi',
    contentHtml: `<p>Kegiatan literasi keuangan dimulai dari pemahaman dasar alur uang masuk dan keluar dalam rumah tangga. Peserta diajak menyusun skala prioritas kebutuhan harian.</p>
    <p>Workshop berlangsung interaktif dengan simulasi pengelolaan kas mingguan agar materi lebih mudah diterapkan.</p>
    <h2>Materi Utama</h2>
    <ol>
      <li>Menyusun anggaran personal sederhana.</li>
      <li>Membangun dana darurat bertahap.</li>
      <li>Menghindari utang konsumtif yang tidak terencana.</li>
    </ol>
    <p>Program ini diharapkan mendorong pemuda desa lebih siap membangun usaha kecil yang sehat secara finansial.</p>`
  },
  {
    id: 3,
    slug: 'kelas-belajar-sore-siswa',
    title: 'Kelas Belajar Sore: Meningkatkan Semangat Siswa',
    excerpt: 'Program bimbingan belajar rutin menghadirkan suasana belajar yang menyenangkan dan mendorong siswa lebih percaya diri menghadapi ujian sekolah.',
    category: 'Edukasi',
    date: '8 Maret 2026',
    readTime: '6 menit baca',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    author: 'Divisi Pengajaran',
    contentHtml: `<p>Kelas belajar sore dirancang interaktif dengan pendekatan permainan edukatif untuk meningkatkan fokus belajar siswa.</p>
    <p>Materi difokuskan pada mata pelajaran inti yang sering menjadi kendala, terutama matematika dan IPA.</p>
    <blockquote>Belajar yang menyenangkan membuat siswa lebih percaya diri bertanya dan aktif berdiskusi.</blockquote>
    <p>Perkembangan siswa dievaluasi setiap minggu untuk memastikan pembelajaran tetap efektif dan berkelanjutan.</p>`
  },
  {
    id: 4,
    slug: 'gerakan-lingkungan-bersih',
    title: 'Gerakan Lingkungan Bersih Bersama Warga',
    excerpt: 'Kolaborasi mahasiswa dan masyarakat dalam aksi bersih desa berhasil meningkatkan kesadaran pengelolaan sampah rumah tangga.',
    category: 'Lingkungan',
    date: '6 Maret 2026',
    readTime: '4 menit baca',
    image: 'https://images.unsplash.com/photo-1618477462146-050d2767eac4?w=800&h=500&fit=crop',
    author: 'Divisi Lingkungan',
    contentHtml: `<p>Aksi bersih desa melibatkan berbagai kelompok warga, karang taruna, dan perangkat desa dalam satu gerakan kolaboratif.</p>
    <p>Selain kegiatan lapangan, tim juga memberikan edukasi pemilahan sampah rumah tangga agar dampak program tidak berhenti pada kegiatan seremonial.</p>
    <h2>Dampak Awal</h2>
    <ul>
      <li>Area umum desa lebih tertata dan bersih.</li>
      <li>Meningkatnya kesadaran warga tentang pemilahan sampah.</li>
      <li>Terbentuk jadwal gotong royong rutin tingkat RT.</li>
    </ul>`
  },
  {
    id: 5,
    slug: 'edukasi-gizi-posyandu',
    title: 'Posyandu Aktif: Edukasi Gizi untuk Ibu dan Balita',
    excerpt: 'Kegiatan posyandu terpadu memberikan edukasi praktis tentang gizi seimbang, pencegahan stunting, dan pola asuh sehat di rumah.',
    category: 'Kesehatan',
    date: '4 Maret 2026',
    readTime: '7 menit baca',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop',
    author: 'Divisi Kesehatan',
    contentHtml: `<p>Sesi edukasi dipandu bersama kader posyandu agar informasi kesehatan mudah dipahami dan langsung bisa dipraktikkan di rumah.</p>
    <p>Topik utama meliputi pola makan balita, pemantauan tumbuh kembang, serta pentingnya sanitasi keluarga.</p>
    <p>Partisipasi aktif ibu-ibu menunjukkan antusiasme tinggi terhadap peningkatan kualitas kesehatan keluarga.</p>`
  },
  {
    id: 6,
    slug: 'branding-produk-lokal-desa',
    title: 'Tips Memulai Branding Produk Lokal Desa',
    excerpt: 'Mulai dari menentukan identitas merek hingga membuat konten promosi, artikel ini merangkum strategi praktis untuk pelaku usaha desa.',
    category: 'UMKM',
    date: '1 Maret 2026',
    readTime: '6 menit baca',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop',
    author: 'Divisi UMKM',
    contentHtml: `<p>Branding bukan hanya logo, tetapi keseluruhan persepsi konsumen terhadap kualitas produk dan layanan.</p>
    <p>Pelaku usaha diajak menentukan karakter visual, gaya komunikasi, dan pesan utama produk yang konsisten.</p>
    <h2>Langkah Praktis</h2>
    <ol>
      <li>Tentukan nilai unik produk.</li>
      <li>Bangun identitas visual sederhana.</li>
      <li>Susun template konten promosi rutin.</li>
    </ol>
    <p>Dengan identitas merek yang jelas, produk lokal desa akan lebih mudah dikenali di pasar digital.</p>`
  }
]

export const featuredArticle = articles[0]!
