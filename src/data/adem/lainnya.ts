import { ChatNode } from '@/types/chat';

export const lainnyaNodes: Record<string, ChatNode> = {
  'lain_start': {
    id: 'lain_start',
    type: 'question',
    message: "Selamat datang di menu Informasi Tambahan. Kami menyediakan panduan peran guru, tata tertib siswa, dan solusi kendala. Pilih topik:",
    options: [
      { label: "Peran Guru Pendamping", nextId: 'lain_guru_roles' },
      { label: "Tata Tertib & Sanksi Siswa", nextId: 'lain_rules' }, // NEW SECTION
      { label: "Masalah (Sakit/Pindah)", nextId: 'lain_problems' },
      { label: "Kontak Darurat", nextId: 'lain_kontak' },
      { label: "Kembali", nextId: 'start' }
    ]
  },

  // --- GURU PENDAMPING ---
  'lain_guru_roles': {
    id: 'lain_guru_roles',
    type: 'question',
    message: "Guru Pendamping adalah 'Orang Tua' pengganti di sekolah (Wali Siswa ADEM). Apa yang ingin Anda ketahui?",
    options: [
      { label: "Tugas Akademik", nextId: 'lain_guru_academic' },
      { label: "Tugas Keuangan", nextId: 'lain_guru_finance' },
      { label: "Honorarium", nextId: 'lain_guru_honor' }, // NEW: Added based on Source 419
    ]
  },
  'lain_guru_academic': {
    id: 'lain_guru_academic',
    type: 'info',
    message: "Guru wajib memantau kehadiran, nilai, dan memberikan bimbingan remedial. Guru juga bertugas melaporkan hasil belajar (Rapor) ke Puslapdik setiap semester.",
    options: [{ label: "Kembali", nextId: 'lain_guru_roles' }]
  },
  'lain_guru_finance': {
    id: 'lain_guru_finance',
    type: 'rejection',
    message: "⚠️ PENTING: Guru mendampingi pengelolaan uang, bukan menguasainya. Dilarang menahan ATM siswa. Sekolah menerapkan manajemen berbasis sekolah untuk kebutuhan prioritas siswa.",
    options: [{ label: "Kembali", nextId: 'lain_guru_roles' }]
  },
  'lain_guru_honor': {
    id: 'lain_guru_honor',
    type: 'info',
    // CITED FACT: Specific amounts
    message: "Sesuai pedoman 2025: \n- Honor Kepala Sekolah (Penanggung Jawab): Maks Rp 500.000/bulan.\n- Honor Guru Pendamping: Maks Rp 300.000/bulan (Rasio 1 guru : 2-5 siswa).",
    options: [{ label: "Kembali", nextId: 'lain_guru_roles' }]
  },

  // --- TATA TERTIB (NEW SECTION) ---
  'lain_rules': {
    id: 'lain_rules',
    type: 'question',
    message: "Pelanggaran apa yang terjadi? Sanksi diberikan bertingkat dari Teguran hingga Pemberhentian Beasiswa.",
    options: [
      { label: "Absensi / Bolos", nextId: 'rule_absen' },
      { label: "Berkelahi / Miras / Sajam", nextId: 'rule_berat' },
      { label: "Hamil / Menikah / Kriminal", nextId: 'rule_very_berat' },
    ]
  },
  'rule_absen': {
    id: 'rule_absen',
    type: 'info',
    // CITED FACT: Table 1 Source 498
    message: "Akumulasi Alpha (Tanpa Keterangan) per semester:\n- 5 Hari: Teguran Wali Kelas (Sanksi 1)\n- 15 Hari: Teguran Kepsek & Surat Pernyataan (Sanksi 3)\n- 30 Hari: **Pemberhentian Beasiswa** (Sanksi 6).",
    options: [{ label: "Kembali ke Rules", nextId: 'lain_rules' }]
  },
  'rule_berat': {
    id: 'rule_berat',
    type: 'rejection',
    // CITED FACT: Table 1 Source 500
    message: "Pelanggaran Berat (Miras, Senjata Tajam, Perkelahian) langsung dikenakan **Sanksi Tingkat 2** (Teguran Guru BK). Jika berulang atau mencemarkan nama baik sekolah, naik ke **Sanksi Tingkat 3**.",
    options: [{ label: "Kembali ke Rules", nextId: 'lain_rules' }]
  },
  'rule_very_berat': {
    id: 'rule_very_berat',
    type: 'rejection',
    // CITED FACT: Table 1 Source 500
    message: "Pelanggaran Sangat Berat (Kriminal, Asusila/Pornoaksi, Hamil/Menikah) dikenakan **Sanksi Tingkat 3**. Jika tidak ada perubahan, dapat berujung pada pengembalian siswa ke daerah asal].",
    options: [{ label: "Kembali ke Rules", nextId: 'lain_rules' }]
  },


  // --- MASALAH LAIN ---
  'lain_problems': {
    id: 'lain_problems',
    type: 'question',
    message: "Pilih kendala lapangan lainnya:",
    options: [
      { label: "Siswa Sakit", nextId: 'lain_sick' },
      { label: "Ingin Pindah Sekolah", nextId: 'lain_move' },
    ]
  },
  'lain_sick': {
    id: 'lain_sick',
    type: 'info',
    message: "Gunakan BPJS siswa untuk faskes terdekat. Biaya obat yang *tidak* ditanggung BPJS dapat menggunakan dana bantuan komponen kesehatan.",
    options: [{ label: "Kembali", nextId: 'lain_start' }]
  },
  'lain_move': {
    id: 'lain_move',
    type: 'rejection',
    message: "Mutasi sekolah pada prinsipnya **tidak diperkenankan** karena berbasis penetapan lokasi. Pindah tanpa persetujuan Puslapdik dianggap mengundurkan diri.",
    options: [{ label: "Kembali", nextId: 'lain_start' }]
  },
  
  // --- KONTAK ---
  'lain_kontak': {
    id: 'lain_kontak',
    type: 'info',
    message: "Akses aplikasi SIM ADEM di 🔗 https://simadem.kemdikbud.go.id/\n\nLayanan Pengaduan:\n- Hotline: 177\n- WA: 0811976929\n- Email: pengaduan@kemdikbud.go.id",
    options: [{ label: "Selesai", nextId: 'start', action: 'reset' }]
  }
};