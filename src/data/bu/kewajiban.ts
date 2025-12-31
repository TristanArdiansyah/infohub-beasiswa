import { ChatNode } from '@/types/chat';

export const buKewajibanNodes: Record<string, ChatNode> = {
  // PEGAWAI RULES
  'wajib_pegawai': {
    id: 'wajib_pegawai',
    type: 'rejection',
    message: "⚠️ **Perhatian Serius:** Sebagai penerima beasiswa dari instansi sendiri, integritas adalah kunci. Anda **WAJIB MENGEMBALIKAN DANA** ke Kas Negara jika:\n\n1. Mengundurkan diri dari pendidikan atau dari status PNS.\n2. Pindah instansi di luar Kemendikdasmen.\n3. Gagal menyelesaikan studi atau diberhentikan (Drop Out).\n4. Terbukti menerima *Double Funding* (Beasiswa ganda).",
    options: [
      { label: "Bagaimana aturan pelaporannya?", nextId: 'wajib_pegawai_report' },
      { label: "Mengerti", nextId: 'penerima_pegawai_menu' } // Updated
    ]
  },
  'wajib_pegawai_report': {
    id: 'wajib_pegawai_report',
    type: 'info',
    message: "Untuk memantau progress, Perguruan Tinggi dan Anda wajib melaporkan **Hasil Studi (KHS)** setiap akhir semester ke Puslapdik. Kelalaian melapor selama 1 semester akan berakibat sanksi teguran hingga penundaan pencairan dana.",
    options: [{ label: "Kembali ke Dashboard Pegawai", nextId: 'penerima_pegawai_menu' }] // Updated
  },

  // MAPRES RULES
  'wajib_mapres': {
    id: 'wajib_mapres',
    type: 'rejection',
    message: "⚠️ **Sanksi & Pengembalian Dana (Mapres):**\nPenerima wajib mengembalikan dana 100% jika:\n1. Menerima Double Funding.\n2. Pindah Prodi/PT atas keinginan sendiri.\n3. Belum mulai kuliah 30 hari sejak dana cair.\n4. IPK di bawah standar berturut-turut (S1 < 2.75, S2/S3 < 3.00).",
    options: [{ label: "Mengerti", nextId: 'penerima_mapres_menu' }] // Updated
  }
};