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
    title: 'Menyambut Mahasiswa Teknik Informatika UNG di Desa Molutabu',
    excerpt: 'Pendampingan intensif KKN membantu pelaku UMKM desa memanfaatkan media digital untuk memperluas pasar, meningkatkan branding, dan mempercepat pertumbuhan omzet.',
    category: 'Ekonomi',
    date: '8 April 2026',
    readTime: '8 menit baca',
    image: '/artikel/thumb.jpeg',
    author: 'Tim KKN Molotabu',
    contentHtml: `<div class="article">
    <h1>“ANDASOPAN” Menyambut Para Ksatria Kode:<br>Selamat Datang Mahasiswa Teknik Informatika UNG di Kampung Segan, Desa Molutabu!</h1>
    <div class="author">Oleh: Warga & Pemerintah Desa Molutabu, Kec. Kabila Bone, Kab. Bonebol</div>

    <p><strong>Bonebol</strong> – Ada yang beda di Kampung Segan, Desa Molutabu, awal April 2026 ini. Biasanya yang ramai cuma suara jangkrik dan ayam berkokok, tapi hari-hari ini suasananya berubah. Ada suara laptop terketik-20-an, diskusi soal algoritma di serambi masjid, bahkan sinyal Wi-Fi desa mendadak jadi primadona.</p>

    <p>Ya, <strong>Kampung Segan</strong> –yang bukan berarti pemalas, justru penuh rasa hormat antarwarga– kini kedatangan tamu istimewa: <strong>adik-adik mahasiswa Teknik Informatika Universitas Negeri Gorontalo (UNG)</strong> yang tergabung dalam program <strong>KKN Tematik 1 dan Berdampak tahun 2026</strong>.</p>

    <p>Kedatangan mereka disambut dengan hangat oleh warga di bawah spanduk sederhana bertuliskan <strong>"ANDASOPAN"</strong>. Dalam bahasa lokal, Andasopan berarti <em>saling menjaga, saling mengayomi</em>. Dan itulah yang ingin kami tanamkan sejak kaki mereka pertama kali menginjak tanah desa.</p>

    <h2>Bukan Sekadar KKN, Tapi Keluarga Baru</h2>
    <p>“Kami dengar mereka dari Teknik Informatika. Jujur, awalnya kami kira yang datang rombongan tukang servis laptop,” canda Pak Lurah Desa Molutabu sambil tertawa kecil. “Tapi ternyata mereka lebih dari itu. Mereka anak-anak muda cerdas, ramah, dan nggak kaku. Bahkan nggak malu ikut ngecat pos ronda sambil jelasin cara kerja AI ke kami yang buta coding.”</p>

    <p>Para mahasiswa ini memang berbeda. Selain menjalankan program KKN tematik yang berfokus pada digitalisasi desa, mereka juga dengan rendah hati ikut <strong>gotong royong fisik</strong>: membersihkan saluran air, membantu ibu-ibu membuat pupuk organik, hingga ngajar ngaji sambil selingan <em>basic programming</em> untuk anak-anak SD.</p>

    <p>Salah satu anggota tim, <strong>Fadil (20)</strong>, mengaku kaget dengan sambutan warga. “Kami kira cuma dibilang ‘selamat datang’ lalu dibiarkan. Tapi ini… ibu-ibu rebutan ngasih makan, bapak-bapak nawarin bensin buat laptop. Padahal laptop pake listrik, Pak,” ujarnya sambil tertawa.</p>

    <h2>Selamat Datang, Para Ksatria Kode!</h2>
    <p>Warga Kampung Segan sebenarnya ingin mengucapkan sesuatu yang lebih dari sekadar “selamat datang”. Lewat tulisan <strong>ANDASOPAN</strong> di pintu gerbang desa, kami ingin bilang:</p>

    <div class="quote">
        “Kalian bukan tamu. Kalian adalah keluarga baru kami. Jangan segan-segan (meski kampung ini namanya Kampung Segan). Kalau butuh air, kopi, atau sekadar tempat nongkrong sambil nugas, rumah kami terbuka.”
    </div>

    <p>Kami sadar, desa ini mungkin belum ada startup atau laboratorium canggih. Tapi kami punya langit luas, sinyal yang kadang naik turun, dan hati yang tulus. Dan kami percaya, anak-anak Teknik Informatika UNG inilah yang akan membantu desa kami melompat ke era digital – tanpa meninggalkan akar gotong royong.</p>

    <h2>Pesan dari Warga: Terima Kasih Sudah Mau Turun ke Tanah</h2>
    <p>Di sela-sela acara penyambutan, seorang nenek bernama <strong>Oma Fatma</strong> memegang tangan salah satu mahasiswa dan berkata, “Kamu anak mana, Nak? Jangan sungkan-sungkan ke sini. Nanti kalau kangen masakan kampung, mampir lagi ya. Jangan cuma pas KKN.”</p>

    <p>Semua tertawa, tapi mata beberapa mahasiswa terlihat berkaca-kaca. Karena di tengah hiruk-pikuk dunia kode dan logika, mereka menemukan sesuatu yang nggak bisa dipelajari di ruang kuliah: <strong>kehangatan kampung</strong>.</p>

    <div class="sambutan">
        <p><strong>Penutup dari Kami, Warga Desa Molutabu:</strong></p>
        <p>Selamat menjalankan KKN, adik-adik Teknik Informatika UNG. Semoga <strong>ANDASOPAN</strong> –saling menjaga– selalu menyertai langkah kalian. Jangan lupa makan, jangan lupa ibadah, dan jangan lupa kalau desa ini sudah jadi rumah kedua kalian.</p>
    </div>

    <div class="footer">
        <strong>Salam hangat dari Kampung Segan,</strong><br>
        Desa Molutabu, 9 April 2026
    </div>
</div>`
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
