import newsBanner1 from "@/assets/news-banner-1.jpg";
import newsBanner2 from "@/assets/news-banner-2.jpg";
import newsBanner3 from "@/assets/news-banner-3.jpg";
import banner from "@/assets/banner.png";
import mewarnaiPoster from "@/data/poster/mewarnai.png";
import fashionShowPoster from "@/data/poster/fashion_show.png";
import tariKreasiPoster from "@/data/poster/tari_kreasi.png";
import pildacilPoster from "@/data/poster/pildacil.png";
import mhqPoster from "@/data/poster/mhq.png";
import futsalPoster from "@/data/poster/futsal.png";
import nyanyiSoloPoster from "@/data/poster/nyanyi_solo.png";
import storyTellingPoster from "@/data/poster/story_telling.png";
import desainPoster from "@/data/poster/desain_poster.png";
import vidiografiPoster from "@/data/poster/viceografi.png";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  optionCategory: "option1" | "option2" | "option3" | "option4";
  image: string;
  contentImages?: string[];
  date: string;
  author: string;
  registrationLink: string;
  content: {
    subtitle?: string;
    paragraphs: Array<{
      type: "paragraph" | "subtitle" | "quote";
      text: string;
      formatting?: Array<{
        type: "bold" | "italic" | "underline";
        start: number;
        end: number;
      }>;
    }>;
  };
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    slug: "lomba-mewarnai-ra-tk",
    title: "Lomba Mewarnai - RA/TK",
    excerpt: "Kreasikan karya mewarnai terbaikmu dan tunjukkan imajinasimu!",
    category: "Seni",
    optionCategory: "option1",
    image: mewarnaiPoster,
    contentImages: [mewarnaiPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/3yhRvc5sopZqz8az8",
    content: {
      subtitle: "Lomba Mewarnai untuk Anak RA/TK",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Mewarnai merupakan ajang kompetisi yang menyenangkan untuk anak-anak RA/TK. Peserta akan diberikan tema tertentu dan diminta untuk mewarnai gambar dengan kreativitas maksimal.",
          formatting: [
            { type: "bold", start: 0, end: 15 },
          ]
        },
        {
          type: "subtitle",
          text: "Persyaratan Peserta"
        },
        {
          type: "paragraph",
          text: "Peserta merupakan siswa/i RA. Setiap sekolah diperkenankan mengirimkan maksimal 5 peserta dari setiap sekolah."
        },
        {
          type: "paragraph",
          text: "Peserta diwajibkan datang 15 menit sebelum lomba dimulai. Peserta disarankan untuk membawa meja lipat dan diwajibkan membawa peralatan mewarnai sendiri."
        },
        {
          type: "paragraph",
          text: "Peserta memakai pakaian seragam olahraga. Waktu pengerjaan paling lama 50 menit. Alat mewarnai yang dipergunakan bebas."
        },
        {
          type: "paragraph",
          text: "Peserta tidak diizinkan meninggalkan lokasi saat perlombaan, kecuali ke toilet. Peserta tidak boleh dibantu oleh pendamping selama perlombaan berlangsung."
        },
        {
          type: "paragraph",
          text: "Pengumuman pemenang akan diumumkan setelah zuhur."
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Kerapian: Ketepatan mewarnai tanpa keluar garis, kebersihan kertas."
        },
        {
          type: "paragraph",
          text: "Teknik dan alat: Ketelitian dalam mengaplikasikan warna."
        },
        {
          type: "paragraph",
          text: "Kesesuaian dengan tema: Warna yang dipilih sesuai dengan objek atau tema gambar."
        }
      ]
    }
  },
  {
    id: "2",
    slug: "lomba-fashion-show-ra-tk",
    title: "Lomba Fashion Show - RA/TK",
    excerpt: "Tampilkan gaya busana unik dan percaya diri di atas panggung!",
    category: "Seni",
    optionCategory: "option1",
    image: fashionShowPoster,
    contentImages: [fashionShowPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/P2jser4USK4vV6on7",
    content: {
      subtitle: "Lomba Fashion Show untuk Anak RA/TK",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Fashion Show mengundang anak-anak RA/TK untuk menampilkan busana kreatif dan penampilan yang menarik. Peserta dapat menggunakan kostum dari bahan daur ulang atau kreasi sendiri.",
          formatting: [
            { type: "bold", start: 0, end: 21 },
          ]
        },
        {
          type: "subtitle",
          text: "Persyaratan Lomba"
        },
        {
          type: "paragraph",
          text: "Tema: Oceanic Kingdom. Tingkat peserta: TK. Pendamping: maksimal 1 orang. Durasi: 5-7 menit."
        },
        {
          type: "paragraph",
          text: "Mengisi formulir pendaftaran sebelum hari H."
        },
        {
          type: "subtitle",
          text: "Peraturan Lomba"
        },
        {
          type: "paragraph",
          text: "Pendaftaran ulang dimulai pada pukul yang telah ditentukan. Peserta hadir di tempat lomba 15 menit sebelum waktu pelaksanaan lomba dimulai."
        },
        {
          type: "paragraph",
          text: "Setiap peserta mempersiapkan perlengkapan fashion show. Setiap sekolah mengirimkan maksimal 2 peserta. Peserta dibatasi, hanya 30 pendaftar pertama."
        },
        {
          type: "paragraph",
          text: "Backsound atau music akan disediakan panitia. Peserta lomba tampil sesuai dengan nomor urutan."
        },
        {
          type: "paragraph",
          text: "Peserta lomba yang belum hadir pada panggilan pertama (setelah 3x panggilan), maka akan dipanggil pada urutan terakhir atau didiskualifikasi."
        },
        {
          type: "paragraph",
          text: "Undian peserta dilakukan saat daftar ulang. Setiap peserta dilarang membuat keributan dan mengganggu peserta lain."
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Aspek Busana (35%): Kreativitas, inovasi desain, kualitas detail, dan kesesuaian dengan tema."
        },
        {
          type: "paragraph",
          text: "Aspek Peragaan (35%): Teknik catwalk, ekspresi, dan penguasaan panggung model."
        },
        {
          type: "paragraph",
          text: "Aspek Keserasian (20%): Kesatuan antara busana, tata rias, rambut, dan aksesoris (Total Look Harmony)."
        },
        {
          type: "paragraph",
          text: "Aspek Sikap (10%): Kedisiplinan waktu dan profesionalisme/sikap model."
        }
      ]
    }
  },
  {
    id: "3",
    slug: "lomba-tari-kreasi-sd-mi",
    title: "Lomba Tari Kreasi - SD/MI (Kelas 4,5,6)",
    excerpt: "Ekspresikan gerakan tari kreatifmu dalam kompetisi yang seru!",
    category: "Seni",
    optionCategory: "option2",
    image: tariKreasiPoster,
    contentImages: [tariKreasiPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/RTsW3HU1NXi6Utgc7",
    content: {
      subtitle: "Lomba Tari Kreasi untuk Siswa SD/MI Kelas 4-6",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Tari Kreasi terbuka untuk siswa SD/MI kelas 4, 5, dan 6. Peserta dapat menampilkan tarian kreasi sendiri dengan musik pilihan.",
          formatting: [
            { type: "bold", start: 0, end: 20 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Peserta"
        },
        {
          type: "paragraph",
          text: "1. Setiap sekolah mengirimkan 1 tim berisi maksimal 7 orang"
        },
        {
          type: "paragraph",
          text: "2. Peserta dibebaskan untuk memilih lagu tradisional"
        },
        {
          type: "paragraph",
          text: "3. Tarian dibuat sekreatif mungkin"
        },
        {
          type: "paragraph",
          text: "4. Diperbolehkan untuk membawa properti"
        },
        {
          type: "paragraph",
          text: "5. Satu guru pendamping yang ditugaskan sekolah untuk mendampingi peserta lomba yang berasal dari sekolah yang sama."
        },
        {
          type: "paragraph",
          text: "6. Musik di sediakan oleh sekolah sendiri dan wajib dikirimkan ke nomor KPSA paling lambat 2 hari sebelum lomba dan dikirimkan dalam bentuk file mp3"
        },
        {
          type: "paragraph",
          text: "7. Peserta lomba wajib hadir minimal 1 jam sebelum lomba mulai"
        },
        {
          type: "paragraph",
          text: "8. Urutan nomor ditentukan oleh waktu kedatangan, dimulai dari yang paling awal"
        },
        {
          type: "paragraph",
          text: "9. Waktu yang diberikan untuk tiap tim adalah 3-10 menit untuk penampilan"
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Wiraga (Kemampuan Gerak tari dari masing masing penari)"
        },
        {
          type: "paragraph",
          text: "Wirasa (Penghayatan dalam pencapaian ekspresi)"
        },
        {
          type: "paragraph",
          text: "Wirama (Ketepatan Gerak tari dengan musik iringan)"
        },
        {
          type: "paragraph",
          text: "Harmonisasi (Keserasian dari wiraga, wirasa, dan wirama)"
        },
        {
          type: "paragraph",
          text: "Keserasian tata busana (kostum tari) dan tata busana (make up dan aksesoris) dengan tarian yang dibawakan"
        },
        {
          type: "paragraph",
          text: "Kekompakan berpindah tempat, keserasian dalam bergerak"
        }
      ]
    }
  },
  {
    id: "4",
    slug: "lomba-pildacil-sd-mi",
    title: "Lomba Pildacil - SD/MI (Kelas 4,5,6)",
    excerpt: "Kompetisi pidato anak yang menginspirasi dan menghibur!",
    category: "Bahasa",
    optionCategory: "option2",
    image: pildacilPoster,
    contentImages: [pildacilPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/Ka2ATeM2cM6747sP8",
    content: {
      subtitle: "Lomba Pildacil untuk Siswa SD/MI Kelas 4-6",
      paragraphs: [
        {
          type: "paragraph",
          text: "Pildacil atau Pidato Anak adalah kompetisi pidato yang disesuaikan untuk anak-anak SD/MI. Peserta akan berpidato dengan tema menarik dan cara yang menghibur.",
          formatting: [
            { type: "bold", start: 0, end: 15 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Umum"
        },
        {
          type: "paragraph",
          text: "Setiap sekolah mengirimkan maksimal 3 orang peserta (SD/MI). Peserta lomba wajib mengenakan pakaian muslim yang rapih, sopan dan syar'i. Peserta dilarang membawa catatan kecil atau contekan pada saat lomba berlangsung."
        },
        {
          type: "paragraph",
          text: "Setiap peserta diberikan durasi waktu minimal 5 menit sampai maksimal 7 menit. Peserta wajib menyediakan 2 teks pidato (1 untuk pribadi dan 1 untuk dewan juri)."
        },
        {
          type: "paragraph",
          text: "Setiap sekolah memilih tema yang telah ditentukan sebagai berikut: Pentingnya berbakti kepada kedua orang tua, Pentingnya mencari ilmu, Tantangan generasi muslim di era modern. Jika melebihi atau kurang dari waktu yang telah ditetapkan peserta akan dikenakan pengurangan poin."
        },
        {
          type: "subtitle",
          text: "Ketentuan Khusus"
        },
        {
          type: "paragraph",
          text: "Peserta wajib hadir 30 menit sebelum perlombaan dimulai. Peserta yang terlambat hadir dengan alasan yang syar'i akan tetap diizinkan untuk tampil dengan catatan tampil di akhir."
        },
        {
          type: "paragraph",
          text: "Peserta dianggap mengundurkan diri dari perlombaan jika tidak kunjung hadir di tempat lomba setelah dilakukan pemanggilan sebanyak 3 (tiga) kali. Peserta tampil berdasarkan nomor urut yang diberikan panitia saat registrasi ulang pada hari pelaksanaan lomba."
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Penguasaan panggung, Ekspresi wajah, Kesesuaian tema, Kostum, Intonasi dari kelancaran berbicara."
        }
      ]
    }
  },
  {
    id: "5",
    slug: "lomba-mhq-sd-mi",
    title: "Lomba MHQ - SD/MI (Kelas 4,5,6)",
    excerpt: "Kompetisi menghafal Al-Quran untuk siswa SD/MI yang tekun!",
    category: "Keagamaan",
    optionCategory: "option2",
    image: mhqPoster,
    contentImages: [mhqPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/wd7C2R4q8hGbbu169",
    content: {
      subtitle: "Lomba Menghafal Al-Quran untuk Siswa SD/MI Kelas 4-6",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba MHQ (Menghafal Al-Quran) menguji kemampuan siswa SD/MI dalam menghafal ayat-ayat suci Al-Quran dengan tartil yang baik.",
          formatting: [
            { type: "bold", start: 0, end: 8 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Peserta"
        },
        {
          type: "paragraph",
          text: "Peserta lomba adalah tingkat SD/MI. Setiap sekolah mengirimkan maksimal 2 peserta yang terdiri dari (1 putra 1 putri)."
        },
        {
          type: "paragraph",
          text: "Ketika peserta sudah sampai di tempat lomba segera mengambil undian nomor urut di bapenta. Peserta wajib menggunakan pakaian syar'i dan sopan."
        },
        {
          type: "paragraph",
          text: "Pemanggilan peserta berdasarkan nomor urut, jika peserta dipanggil sebanyak 3 kali tetap tidak ada maka akan dipindahkan ke nomor urut selanjutnya."
        },
        {
          type: "subtitle",
          text: "Materi Soal"
        },
        {
          type: "paragraph",
          text: "Peserta mengambil amplop yang telah disediakan yang terdiri dari 5 soal juz 30 yaitu:"
        },
        {
          type: "paragraph",
          text: "Soal 1: soal wajib yang terdiri dari surah al-insyiqoq, al-buruj, at-takwir, al-ghasiyyah, al-balad"
        },
        {
          type: "paragraph",
          text: "Soal 2: sambung ayat dalam 1 surat"
        },
        {
          type: "paragraph",
          text: "Soal 3: sambung ayat dalam 1 surat"
        },
        {
          type: "paragraph",
          text: "Soal 4: sambung ayat lanjut surat"
        },
        {
          type: "paragraph",
          text: "Soal 5: tebak surat"
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Kelancaran dalam membaca, Ketepatan tajwid, Keindahan suara, Tartil."
        }
      ]
    }
  },
  {
    id: "6",
    slug: "lomba-futsal-smp-mts",
    title: "Lomba Futsal - SMP/MTS",
    excerpt: "Pertandingan futsal seru untuk siswa SMP/MTS yang energik!",
    category: "Olahraga",
    optionCategory: "option3",
    image: futsalPoster,
    contentImages: [futsalPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/k9zttitsejgcJ3F7A",
    content: {
      subtitle: "Lomba Futsal untuk Siswa SMP/MTS",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Futsal menghadirkan kompetisi olahraga yang menarik untuk siswa SMP/MTS. Tim akan bertanding dalam format yang fair dan sportif.",
          formatting: [
            { type: "bold", start: 0, end: 13 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Umum dan Persyaratan"
        },
        {
          type: "paragraph",
          text: "Pelajar merupakan siswa tingkat SLTP sederajat se-wilayah Jawa Barat. Peserta membayar uang pendaftaran sebesar Rp 250.000 ke rekening yang telah ditentukan."
        },
        {
          type: "paragraph",
          text: "Peserta mendaftarkan diri secara online di link pendaftaran yang telah disediakan. Peserta melakukan pendaftaran ulang di POS bapenta."
        },
        {
          type: "paragraph",
          text: "Peserta menyerahkan data diri siswa yang mengikuti lomba tersebut, dengan melampirkan fotocopy kartu keluarga, identitas serta surat aktif siswa."
        },
        {
          type: "paragraph",
          text: "Peserta diwajibkan hadir di tempat 15 menit sebelum pelaksanaan lomba. Peserta wajib follow akun Instagram @ponpes.santiasromo @official_posmotion."
        },
        {
          type: "paragraph",
          text: "Pemain tidak diperbolehkan memakai aksesoris (gelang, kalung, cincin, jam tangan, dll). Setiap pemain wajib membawa perlengkapan futsalnya sendiri seperti kostum minimal 2, kaos kaki, lejing, sepatu dll."
        },
        {
          type: "subtitle",
          text: "Konsep Perlombaan"
        },
        {
          type: "paragraph",
          text: "Peraturan yang digunakan adalah peraturan AFI dan FIFA. Setiap sekolah maksimal mengirimkan 2 tim. Pertandingan diselenggarakan dengan sistem gugur."
        },
        {
          type: "paragraph",
          text: "Setiap tim wajib mensertakan minimal 2 orang saat technical meeting. Tim yang tertinggal maksimal 15 menit maka akan dianggap walk out (WO)."
        },
        {
          type: "paragraph",
          text: "Lama waktu pertandingan adalah 2x15 menit (kotor) dengan waktu istirahat 3 menit."
        },
        {
          type: "subtitle",
          text: "Periode/Durasi Pertandingan"
        },
        {
          type: "paragraph",
          text: "Sistem pertandingan yang digunakan adalah sistem gugur. Pertandingan dimainkan dengan waktu 2x15 menit."
        },
        {
          type: "paragraph",
          text: "Jika terdapat 5 fouls pada setiap babak saat pertandingan maka dilakukan second finalty terhadap tim lawan. Istirahat antar babak adalah 3 menit."
        },
        {
          type: "paragraph",
          text: "Tim yang menang di semifinal, akan maju ke fase final sementara tim yang kalah akan menuju ke perebutan juara 3 dan 4."
        },
        {
          type: "paragraph",
          text: "Bila pertandingan 2 kali 15 menit berakhir seri maka langsung diadakan finalty: 3 penendang utama, bila masih seri maka akan dilakukan coin toss."
        },
        {
          type: "paragraph",
          text: "Tim yang tidak hadir di pertandingan atau akan dilakukan walk out (WO) dan dinyatakan kalah dengan skor 3-0."
        },
        {
          type: "paragraph",
          text: "Jika ada pemain yang tidak memenuhi persyaratan maka pemain tersebut tidak diperbolehkan mengikuti pertandingan."
        },
        {
          type: "paragraph",
          text: "Setiap keputusan yang dibuat oleh panitia pelaksana dan wasit pertandingan merupakan keputusan final dan tidak dapat diganggu gugat."
        },
        {
          type: "subtitle",
          text: "Peraturan Pertandingan"
        },
        {
          type: "paragraph",
          text: "Setiap permainan dimainkan oleh 2 tim. Setiap tim terdiri dari 14 pemain, 5 tim inti termasuk penjaga gawang, dan 7 pemain cadangan, didampingi oleh 1 official dan 1 pelatih."
        }
      ]
    }
  },
  {
    id: "7",
    slug: "lomba-nyanyi-solo-smp-mts",
    title: "Lomba Nyanyi Solo - SMP/MTS",
    excerpt: "Tampilkan suara emasmu dalam kompetisi nyanyi solo!",
    category: "Seni",
    optionCategory: "option3",
    image: nyanyiSoloPoster,
    contentImages: [nyanyiSoloPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/rHh4zPfUg5w2aPLv8",
    content: {
      subtitle: "Lomba Nyanyi Solo untuk Siswa SMP/MTS",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Nyanyi Solo mengundang siswa SMP/MTS untuk menampilkan kemampuan bernyanyi dengan lagu pilihan sendiri atau yang disediakan panitia.",
          formatting: [
            { type: "bold", start: 0, end: 18 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Peserta"
        },
        {
          type: "paragraph",
          text: "Peserta wajib datang pada pukul 07.30 untuk menyaksikan GO. Peserta menyanyikan 1 lagu wajib dan satu lagu pilihan yang sudah disediakan oleh panitia."
        },
        {
          type: "paragraph",
          text: "Peserta wajib menggunakan pakaian sopan dan syar'i."
        },
        {
          type: "subtitle",
          text: "Lagu Wajib"
        },
        {
          type: "paragraph",
          text: "Ibu Pertiwi"
        },
        {
          type: "subtitle",
          text: "Lagu Pilihan"
        },
        {
          type: "paragraph",
          text: "Sampai Menutup Mata (Mahalini Raharja), Terlalu Cinta (Lyodra Ginting)"
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Penguasaan panggung, Kerapihan pakaian, Penyesuaian nada, Mimik wajah, Kesesuaian lirik."
        }
      ]
    }
  },
  {
    id: "8",
    slug: "lomba-story-telling-smp-mts",
    title: "Lomba Story Telling - SMP/MTS",
    excerpt: "Ceritakan kisah menarik dengan gaya yang memukau!",
    category: "Bahasa",
    optionCategory: "option3",
    image: storyTellingPoster,
    contentImages: [storyTellingPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/zEJ2JaFMfgsWcQjC9",
    content: {
      subtitle: "Lomba Story Telling untuk Siswa SMP/MTS",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Story Telling menantang siswa SMP/MTS untuk menceritakan sebuah kisah dengan cara yang menarik dan ekspresif.",
          formatting: [
            { type: "bold", start: 0, end: 20 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Peserta"
        },
        {
          type: "paragraph",
          text: "1. Lomba diikuti oleh individu, setiap sekolah mengirimkan peserta lomba maksimal 2 orang."
        },
        {
          type: "paragraph",
          text: "2. Peserta menampilkan cerita sesuai dengan tema yang disediakan (Fantasi Imajinatif)."
        },
        {
          type: "paragraph",
          text: "3. Durasi minimal 5-7 menit (Toleransi kelebihan\\kekurangan waktu 30 detik)."
        },
        {
          type: "paragraph",
          text: "4. Peserta WAJIB menggunakan kostum dan properties untuk mendukung cerita."
        },
        {
          type: "paragraph",
          text: "5. Peserta WAJIB menyerahkan naskah kepada juri (format A4, Font Times New Roman ukuran 14) dengan rapih sebelum tampil."
        },
        {
          type: "paragraph",
          text: "6. Keputusan juri bersifat ABSOLUTE (mutlak)."
        }
      ]
    }
  },
  {
    id: "9",
    slug: "lomba-desain-poster-sma-ma",
    title: "Lomba Desain Poster - SMA/MA",
    excerpt: "Kreasikan poster yang informatif dan menarik perhatian!",
    category: "Seni",
    optionCategory: "option4",
    image: desainPoster,
    contentImages: [desainPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/9aqUUSh3NyvhX6oE6",
    content: {
      subtitle: "Lomba Desain Poster untuk Siswa SMA/MA",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Desain Poster menguji kreativitas siswa SMA/MA dalam membuat poster dengan tema yang diberikan menggunakan software desain.",
          formatting: [
            { type: "bold", start: 0, end: 21 },
          ]
        },
        {
          type: "subtitle",
          text: "Ketentuan Peserta"
        },
        {
          type: "paragraph",
          text: "Peserta yang mengikuti lomba desain poster merupakan pelajar aktif kelas X,XI,XII. Setiap sekolah diperbolehkan mendaftar dengan maksimal kuota 2 peserta."
        },
        {
          type: "paragraph",
          text: "Tema desain poster adalah \"ocean\" dengan materi \"konservasi dan lingkungan\". Cakupan software atau aplikasi yang digunakan bebas."
        },
        {
          type: "paragraph",
          text: "Peserta WAJIB memverifikasi keaslian karya dengan melakukan pengiriman dokumentasi pembuatan desain poster sebagai bukti tidak adanya campur tangan orang lain maupun AI dan juga menunjukkan file kerja dari awal hingga hasil akhir."
        },
        {
          type: "paragraph",
          text: "Verifikasi dilakukan oleh pihak sekolah dan tim juri. Karya desain poster disimpan dengan format nama: Desain poster_NAMA PESERTA_Asal SMA."
        },
        {
          type: "paragraph",
          text: "Karya desain poster tidak boleh mengandung unsur yang bertentangan dengan peraturan perundang-undangan yang berlaku di Indonesia: keusilan, moral, kekerasan dan tidak mengandung isi pornografi, serta bertentangan dengan SARA (suku agama dan RAS)."
        },
        {
          type: "subtitle",
          text: "LOMBA DESAIN POSTER"
        },
        {
          type: "paragraph",
          text: "Karya yang dilombakan merupakan hasil karya asli peserta, panitia berhak menggunakan desain poster untuk keperluan publikasi."
        },
        {
          type: "paragraph",
          text: "Peserta mengunggah hasil karya pada feeds instagram masing masing peserta dengan menyertakan #POSMOTION4_2026 #DesainPosterOnlinePosmotion4_2026, saat memposting di instagram peserta WAJIB untuk follow dan tag akun resmi @official.posmotion, akun peserta tidak boleh di private, peserta menggunakan format caption: POSMOTION4_2026 - kategori lomba – nama sekolah serta menjelaskan filosofi atau ide dari desain poster."
        },
        {
          type: "paragraph",
          text: "Pemenang akan tampilkan hasil karya nya di malam puncak. Peserta mengikutin lomba ini secara online."
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian"
        },
        {
          type: "paragraph",
          text: "Relevansi dengan tema, Gagasan (penggalian ide), Kreativitas artistik (visualisasi, craftsmanship, teknik dan finishing), Orisinalitas (unsur kebaruan dan hasil karya)."
        }
      ]
    }
  },
  {
    id: "10",
    slug: "lomba-vidiografi-sma-ma",
    title: "Lomba Vidiografi - SMA/MA",
    excerpt: "Buat video kreatif yang menginspirasi dan menghibur!",
    category: "Seni",
    optionCategory: "option4",
    image: vidiografiPoster,
    contentImages: [vidiografiPoster],
    date: "1 Januari 2026",
    author: "Panitia Posmotion",
    registrationLink: "https://forms.gle/Q2Tcyxvpc6jeeTEa9",
    content: {
      subtitle: "Lomba Vidiografi untuk Siswa SMA/MA",
      paragraphs: [
        {
          type: "paragraph",
          text: "Lomba Vidiografi menantang siswa SMA/MA untuk membuat video pendek dengan tema tertentu menggunakan smartphone atau kamera.",
          formatting: [
            { type: "bold", start: 0, end: 17 },
          ]
        },
        {
          type: "subtitle",
          text: "Syarat dan Ketentuan"
        },
        {
          type: "paragraph",
          text: "Peserta adalah siswa SMA sederajat. Peserta wajib terlebih dahulu follow dan subscribe akun media sosial Posmotion seperti Instagram, TikTok."
        },
        {
          type: "paragraph",
          text: "Peserta lomba boleh berasal dari individu maupun tim/kelompok. Keputusan dewan juri bersifat mutlak, tidak dapat diganggu gugat, dan tidak ada koresponden apapun terkait dengan Keputusan juri."
        },
        {
          type: "paragraph",
          text: "Jenis video berbasis konten promosi untuk acara Posmotion."
        },
        {
          type: "subtitle",
          text: "Spesifikasi Video"
        },
        {
          type: "paragraph",
          text: "Durasi video maksimal 2 menit. Tema lomba video menyelaraskan dengan tema acara Posmotion."
        },
        {
          type: "paragraph",
          text: "Konten Video wajib menyertakan logo Posmotion. Konten Video wajib menyertakan promosi kegiatan acara Posmotion."
        },
        {
          type: "paragraph",
          text: "Karya video peserta merupakan hasil karya asli dan tidak pernah dilombakan sebelumnya. Video dapat berupa film pendek, vlog, video musik, dokumenter, parodi, ataupun jenis video kreatif yang lain."
        },
        {
          type: "paragraph",
          text: "Format .mp4, resolusi maksimal 1080p dengan rasio 9:16 (portrait). Video tidak mempertentangkan unsur SARA dan tidak melanggar hukum/aturan yang berlaku."
        },
        {
          type: "subtitle",
          text: "Tata Cara Upload Video"
        },
        {
          type: "paragraph",
          text: "Video perkenalan diupload di akun media Instagram masing-masing peserta lomba dengan menyertakan hashtag: #Officialposmotion #Videografipomsotion2026 #Berkaryabersamaposmotion #lautaninspirasisamudrapenuhprestasi."
        },
        {
          type: "paragraph",
          text: "Dan mention akun: @official.posmotion. Video yang dilombakan diunggah pada Google Drive dan peserta lomba menyampaikan tautan videonya melalui WA Narahubung: (M.Fachri) 0853-2185-8169 dengan subjek 'Lomba Videografi Posmotion 2026' paling lambat 1 Maret 2026."
        },
        {
          type: "subtitle",
          text: "Waktu Kegiatan Lomba Vidiografi"
        },
        {
          type: "paragraph",
          text: "Pendaftaran: 1 Januari 2026, Upload Video: 20 Februari 2026."
        },
        {
          type: "subtitle",
          text: "Kriteria Penilaian Lomba Vidiografi"
        },
        {
          type: "paragraph",
          text: "Kesesuaian dengan spesifikasi video, Kesesuaian video dengan tema, Teknik pengambilan video (angle, pencahayaan, keindahan dan penggunaan komposisi), Pesan yang disampaikan dalam video, Kreativitas dan Orisinalitas."
        },
        {
          type: "subtitle",
          text: "Ketentuan Lain-lain"
        },
        {
          type: "paragraph",
          text: "Semua video yang masuk akan menjadi hak milik Posmotion dan dapat dipublikasikan."
        },
        {
          type: "subtitle",
          text: "Akun Media Sosial Posmotion"
        },
        {
          type: "paragraph",
          text: "Instagram: @official.posmotion, TikTok: @official.posmotion."
        }
      ]
    }
  }
];
