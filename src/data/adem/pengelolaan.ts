import { ChatNode } from '@/types/chat';

export const pengelolaanNodes: Record<string, ChatNode> = {
  // ======================
  // 1. ENTRY POINT (Admin/School View)
  // ======================
  'kelola_start': {
    id: 'kelola_start',
    type: 'question',
    message: "Halo Bapak/Ibu Tim Pengelola. Di menu ini, kami menyajikan panduan administratif untuk Sekolah dan Dinas. Topik mana yang perlu ditinjau?",
    options: [
      { label: "Kriteria Sekolah Penyelenggara", nextId: 'kelola_syarat_sekolah' },
      { label: "Ketentuan Guru Pendamping", nextId: 'kelola_guru' },
      { label: "Sanksi & Kewajiban Retur", nextId: 'kelola_sanksi' },
      { label: "Kembali ke Menu Utama", nextId: 'start' }
    ]
  },

  // ======================
  // 2. SCHOOL CRITERIA
  // ======================
  'kelola_syarat_sekolah': {
    id: 'kelola_syarat_sekolah',
    type: 'info',
    message: "Penetapan Sekolah Penyelenggara dilakukan oleh Puslapdik berdasarkan rekomendasi Dinas Provinsi dengan syarat mutlak:\n\n1. Memiliki Akreditasi A atau B.\n2. Memiliki minimal 60 siswa reguler (Non-ADEM) untuk menjamin sosialisasi.\n3. Sanggup menunjuk Guru Pendamping & mengelola dana bantuan.",
    options: [{ label: "Apa tugas Guru Pendamping?", nextId: 'kelola_guru' }]
  },

  // ======================
  // 3. GURU PENDAMPING (Roles & Money)
  // ======================
  'kelola_guru': {
    id: 'kelola_guru',
    type: 'info',
    message: "Guru Pendamping ditetapkan melalui SK Kepala Sekolah.\n\n**Ketentuan Teknis:**\n- **Rasio:** 1 Guru mendampingi 2 s.d 5 Siswa.\n- **Honorarium:** Maksimal Rp 300.000/bulan (termasuk pajak).\n- **Tugas:** Membina akademik, mengelola keuangan siswa, dan melaporkan perkembangan studi.",
    options: [{ label: "Pahami Sanksi & Larangan", nextId: 'kelola_sanksi' }]
  },

  // ======================
  // 4. SANCTIONS & REFUNDS
  // ======================
  'kelola_sanksi': {
    id: 'kelola_sanksi',
    type: 'rejection',
    message: "⚠️ **PENTING: Integritas Pengelolaan**\n\n1. **Sanksi Hukum:** Pelanggaran terhadap Perjanjian Kerja Sama (PKS) yang merugikan negara akan dikenai sanksi hukum.\n2. **Wajib Retur:** Jika siswa pindah sekolah, keluar, atau meninggal, sisa dana **WAJIB** dikembalikan ke Kas Negara. Tidak boleh dialihkan ke siswa lain.",
    options: [{ label: "Saya Mengerti", nextId: 'start' }]
  }
};