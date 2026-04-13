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
    category: 'berita',
    date: '8 April 2026',
    readTime: '8 menit baca',
    image: '/artikel/thumb.jpeg',
    author: 'Tim KKN Molotabu',
    contentHtml: `<div class="article">
    <h1>“ANDASOPAN” Menyambut Para Ksatria Kode:<br>Selamat Datang Mahasiswa Teknik Informatika UNG di Kampung Segan, Desa Molutabu!</h1>
    <div class="author">Oleh: Warga & Pemerintah Desa Molutabu, Kec. Kabila Bone, Kab. Bonebol</div>

    <p><strong>Bonebol </strong> Ada yang beda di Kampung Segan, Desa Molutabu, awal April 2026 ini. Biasanya yang ramai cuma suara jangkrik dan ayam berkokok, tapi hari-hari ini suasananya berubah. Ada suara laptop terketik-20-an, diskusi soal algoritma di serambi masjid, bahkan sinyal Wi-Fi desa mendadak jadi primadona.</p>

    <p>Ya, <strong>Kampung Segan</strong> yang bukan berarti pemalas, justru penuh rasa hormat antarwarga kini kedatangan tamu istimewa: <strong>adik-adik mahasiswa Teknik Informatika Universitas Negeri Gorontalo (UNG)</strong> yang tergabung dalam program <strong>KKN Tematik 1 dan Berdampak tahun 2026</strong>.</p>

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

    <p>Kami sadar, desa ini mungkin belum ada startup atau laboratorium canggih. Tapi kami punya langit luas, sinyal yang kadang naik turun, dan hati yang tulus. Dan kami percaya, anak-anak Teknik Informatika UNG inilah yang akan membantu desa kami melompat ke era digital  tanpa meninggalkan akar gotong royong.</p>

    <h2>Pesan dari Warga: Terima Kasih Sudah Mau Turun ke Tanah</h2>
    <p>Di sela-sela acara penyambutan, seorang nenek bernama <strong>Oma Fatma</strong> memegang tangan salah satu mahasiswa dan berkata, “Kamu anak mana, Nak? Jangan sungkan-sungkan ke sini. Nanti kalau kangen masakan kampung, mampir lagi ya. Jangan cuma pas KKN.”</p>

    <p>Semua tertawa, tapi mata beberapa mahasiswa terlihat berkaca-kaca. Karena di tengah hiruk-pikuk dunia kode dan logika, mereka menemukan sesuatu yang nggak bisa dipelajari di ruang kuliah: <strong>kehangatan kampung</strong>.</p>

    <div class="sambutan">
        <p><strong>Penutup dari Kami, Warga Desa Molutabu:</strong></p>
        <p>Selamat menjalankan KKN, adik-adik Teknik Informatika UNG. Semoga <strong>ANDASOPAN</strong> saling menjaga selalu menyertai langkah kalian. Jangan lupa makan, jangan lupa ibadah, dan jangan lupa kalau desa ini sudah jadi rumah kedua kalian.</p>
    </div>

    <div class="footer">
        <strong>Salam hangat dari Kampung Segan,</strong><br>
        Desa Molutabu, 9 April 2026
    </div>
</div>`
  },
 
]

export const featuredArticle = articles[0]!
