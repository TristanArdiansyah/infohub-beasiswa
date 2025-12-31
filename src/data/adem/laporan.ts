import { ChatNode } from '@/types/chat';

export const laporanNodes: Record<string, ChatNode> = {
  'lapor_start': {
    id: 'lapor_start',
    type: 'question',
    message: "Selamat datang di menu Pelaporan Program ADEM. Laporan yang tertib adalah syarat pencairan dana tahap berikutnya. Apa peran Anda?",
    options: [
      { label: "Pihak Sekolah", nextId: 'lapor_sekolah' },
      { label: "Dinas Pendidikan", nextId: 'lapor_dinas' },
      { label: "Kembali", nextId: 'start' }
    ]
  },
  'lapor_sekolah': {
    id: 'lapor_sekolah',
    type: 'info',
    // CITED FACT: Hardfile at school, Softfile uploaded (Source 469, 470)
    message: "Sekolah wajib membuat Laporan Pertanggungjawaban (LPJ) setiap penyaluran dana.\n\n1. **Softfile (Scan BKU & Dokumen)**: WAJIB diunggah ke 🔗 <a>https://simadem.kemdikbud.go.id/</a>.\n2. **Hardfile (Asli)**: Disimpan di sekolah sebagai arsip pemeriksaan.",
    options: [{ label: "Kembali ke Menu", nextId: 'start' }]
  },
  'lapor_dinas': {
    id: 'lapor_dinas',
    type: 'info',
    message: "Dinas Pendidikan Provinsi bertugas melaporkan hasil Monitoring & Evaluasi (Monev) serta pengawasan pelaksanaan program di wilayahnya. Laporan disampaikan berjenjang ke Puslapdik.",
    options: [{ label: "Kembali ke Menu", nextId: 'start' }]
  }
};