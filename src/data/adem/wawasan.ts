import { ChatNode } from '@/types/chat';

export const wawasanNodes: Record<string, ChatNode> = {
  // ======================
  // 1. ENTRY POINT
  // ======================
  'pwk_start': {
    id: 'pwk_start',
    type: 'question',
    message: "Selamat datang di menu Penguatan Wawasan Kebangsaan (PWK). Ini adalah tahap orientasi vital untuk menjembatani perbedaan budaya sebelum siswa masuk sekolah. Apa yang ingin Anda pelajari?",
    options: [
      { label: "Tujuan & Materi Utama", nextId: 'pwk_materi' },
      { label: "Waktu Pelaksanaan", nextId: 'pwk_timing' },
      { label: "Aturan Serah Terima", nextId: 'pwk_handover' },
      { label: "Kembali ke Menu Utama", nextId: 'start' }
    ]
  },

  // ======================
  // 2. PURPOSE & MATERIAL
  // ======================
  'pwk_materi': {
    id: 'pwk_materi',
    type: 'info',
    message: "PWK dirancang untuk membangun mental siswa di lingkungan baru. Sesuai pedoman, fokus utamanya adalah:\n\n1. Penanaman Nilai Luhur Pancasila.\n2. Kedisiplinan & Kemandirian.\n3. Pemahaman Keberagaman (Toleransi).\n4. Peningkatan Rasa Percaya Diri siswa.",
    options: [{ label: "Kapan kegiatan ini dilakukan?", nextId: 'pwk_timing' }]
  },

  // ======================
  // 3. TIMING & LOCATION
  // ======================
  'pwk_timing': {
    id: 'pwk_timing',
    type: 'info',
    message: "Kegiatan ini dilaksanakan **setibanya siswa di Provinsi Penerima**. Sebelum masuk ke asrama/sekolah, siswa akan dikumpulkan di lokasi terpusat yang ditentukan Dinas Provinsi untuk menjalani masa orientasi ini (biasanya 3-4 hari).",
    options: [{ label: "Bagaimana prosedurnya dengan sekolah?", nextId: 'pwk_handover' }]
  },

  // ======================
  // 4. HANDOVER RULE (Crucial)
  // ======================
  'pwk_handover': {
    id: 'pwk_handover',
    type: 'rejection', // Warning type to emphasize the SOP
    message: "⚠️ **ATURAN SERAH TERIMA:**\n\nDemi ketertiban administrasi dan kesiapan mental siswa, Serah Terima resmi dari Dinas Pendidikan Provinsi ke Pihak Sekolah **HANYA** boleh dilakukan setelah rangkaian PWK selesai.\n\nSekolah dilarang membawa siswa langsung dari bandara sebelum kegiatan ini tuntas.",
    options: [{ label: "Saya Mengerti", nextId: 'start' }]
  }
};