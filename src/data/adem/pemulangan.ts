import { ChatNode } from '@/types/chat';

export const pemulanganNodes: Record<string, ChatNode> = {
  // ======================
  // 1. PAPUA FLOW
  // ======================
  'pulang_papua_flow': {
    id: 'pulang_papua_flow',
    type: 'question',
    message: "Pemulangan siswa ADEM Papua. Apa alasan pemulangan?",
    options: [
      { label: "Lulus Sekolah (Tamat)", nextId: 'pulang_lulus_papua' },
      { label: "Putus Sekolah / DO / Libur", nextId: 'pulang_non_covered' },
      { label: "Kembali ke Menu Papua", nextId: 'hub_papua' }
    ]
  },
  'pulang_lulus_papua': {
    id: 'pulang_lulus_papua',
    type: 'info',
    // CITED CORRECTION: Split funding explanation
    message: "Pemulangan siswa lulus menggunakan skema **Estafet Pembiayaan**:\n\n1. **Sekolah -> Ibukota Provinsi Papua**: Biaya ditanggung Puslapdik (Pusat) dan dikelola sekolah.\n2. **Ibukota Provinsi -> Daerah Asal (Kab/Kota)**: Biaya ditanggung Pemda setempat atau Mandiri.\n\nSekolah wajib berkoordinasi dengan Dinas Provinsi.",
    options: [{ label: "Kembali ke Menu Papua", nextId: 'hub_papua' }]
  },

  // ======================
  // 2. REPATRIASI FLOW
  // ======================
  'pulang_repat_flow': {
    id: 'pulang_repat_flow',
    type: 'question',
    message: "Pemulangan siswa ADEM Repatriasi. Apa alasan pemulangan?",
    options: [
      { label: "Lulus Sekolah (Tamat)", nextId: 'pulang_lulus_repat' },
      { label: "Putus Sekolah / DO / Libur", nextId: 'pulang_non_covered' },
      { label: "Kembali ke Menu Repatriasi", nextId: 'hub_repat' }
    ]
  },
  'pulang_lulus_repat': {
    id: 'pulang_lulus_repat',
    type: 'info',
    message: "Biaya pemulangan siswa lulus ke daerah asal (Indonesia) atau domisili orang tua ditanggung oleh **Puslapdik (APBN)** sesuai ketersediaan anggaran tahun berjalan.\n\nPastikan data kelulusan terupdate di SIM ADEM.",
    options: [{ label: "Kembali ke Menu Repatriasi", nextId: 'hub_repat' }]
  },

  // ======================
  // 3. SHARED (NON-COVERED)
  // ======================
  'pulang_non_covered': {
    id: 'pulang_non_covered',
    type: 'rejection',
    message: "⚠️ **BIAYA TIDAK DITANGGUNG NEGARA JIKA:**\n1. Pulang karena Libur Kenaikan Kelas.\n2. Pulang karena Dikeluarkan (Sanksi Pelanggaran).\n3. Pulang Atas Permintaan Sendiri (Mengundurkan Diri).\n\nBiaya tiket menjadi tanggung jawab pribadi/Orang Tua.",
    options: [{ label: "Mengerti", nextId: 'start' }]
  }
};