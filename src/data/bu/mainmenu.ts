import { ChatNode } from '@/types/chat';

export const buMainMenu: Record<string, ChatNode> = {
  // ======================
  // 1. ROOT LEVEL: THE GATEKEEPER
  // ======================
  'bu_start': {
    id: 'bu_start',
    type: 'question',
    message: "Selamat datang di Layanan Informasi **Beasiswa Unggulan 2025**. Agar kami dapat melayani Anda dengan tepat, mohon pilih status Anda saat ini:",
    options: [
      { label: "Saya Calon Peserta (Ingin Mendaftar)", nextId: 'gate_calon' },
      { label: "Saya Penerima Beasiswa (Awardee)", nextId: 'gate_penerima' },
      { label: "Jadwal & Helpdesk", nextId: 'gate_umum' }
    ]
  },

  'gate_umum': {
    id: 'gate_umum',
    type: 'question',
    message: "Informasi Umum Beasiswa Unggulan:",
    options: [
      { label: "Jadwal Seleksi 2025", nextId: 'bu_timeline' },
      { label: "Kontak Helpdesk", nextId: 'bu_helpdesk' },
      { label: "Kembali ke Awal", nextId: 'bu_start' }
    ]
  },

  // ======================
  // 2. PATH A: CALON PENERIMA (Candidates)
  // ======================
  'gate_calon': {
    id: 'gate_calon',
    type: 'question',
    message: "Halo Pejuang Beasiswa! Untuk melihat syarat yang sesuai, pilih kategori pelamar Anda:",
    options: [
      { label: "Pegawai Kemendikdasmen (PNS)", nextId: 'calon_pegawai_menu' },
      { label: "Masyarakat Berprestasi / Disabilitas", nextId: 'calon_mapres_menu' },
      { label: "Kembali", nextId: 'bu_start' }
    ]
  },

  // --- SUB-MENU: CALON PEGAWAI ---
  'calon_pegawai_menu': {
    id: 'calon_pegawai_menu',
    type: 'question',
    message: "**Menu Pendaftaran Pegawai (PNS)**\nSiapkan karir akademik Anda. Apa yang ingin dicek?",
    options: [
      { label: "Cek Syarat & Batas Usia", nextId: 'sel_pegawai_req' },
      { label: "Alur Pendaftaran (Izin Biro SDM)", nextId: 'mech_pegawai_flow' },
      { label: "Dokumen Wajib Upload", nextId: 'sel_pegawai_docs' },
      { label: "Ganti Kategori", nextId: 'gate_calon' }
    ]
  },

  // --- SUB-MENU: CALON MAPRES ---
  'calon_mapres_menu': {
    id: 'calon_mapres_menu',
    type: 'question',
    message: "**Menu Pendaftaran Masyarakat Berprestasi**\nTerbuka untuk umum dan penyandang disabilitas. Pilih topik:",
    options: [
      { label: "Syarat Jenjang (S1/S2/S3)", nextId: 'sel_mapres_req' },
      { label: "Syarat Khusus Disabilitas", nextId: 'sel_disabilitas_req' },
      { label: "Dokumen & Essay", nextId: 'sel_mapres_docs' },
      { label: "Ganti Kategori", nextId: 'gate_calon' }
    ]
  },

  // ======================
  // 3. PATH B: PENERIMA (Awardees)
  // ======================
  'gate_penerima': {
    id: 'gate_penerima',
    type: 'question',
    message: "Halo Awardee! Silakan pilih jalur beasiswa Anda untuk melihat hak dan kewajiban spesifik:",
    options: [
      { label: "Pegawai Kemendikdasmen (PNS)", nextId: 'penerima_pegawai_menu' },
      { label: "Masyarakat Berprestasi", nextId: 'penerima_mapres_menu' },
      { label: "Kembali", nextId: 'bu_start' }
    ]
  },

  // --- SUB-MENU: PENERIMA PEGAWAI ---
  'penerima_pegawai_menu': {
    id: 'penerima_pegawai_menu',
    type: 'question',
    message: "**Dashboard Awardee Pegawai**\nInfo pengelolaan beasiswa tugas belajar:",
    options: [
      { label: "Komponen Dana (Hak Anda)", nextId: 'komp_pegawai' },
      { label: "Kewajiban & Laporan Studi", nextId: 'wajib_pegawai' },
      { label: "Sistem Penyaluran Dana", nextId: 'komp_pegawai_flow' },
      { label: "Ganti Kategori", nextId: 'gate_penerima' }
    ]
  },

  // --- SUB-MENU: PENERIMA MAPRES ---
  'penerima_mapres_menu': {
    id: 'penerima_mapres_menu',
    type: 'question',
    message: "**Dashboard Awardee Mapres**\nInfo pengelolaan beasiswa umum:",
    options: [
      { label: "Komponen Dana (Hak Anda)", nextId: 'komp_mapres' },
      { label: "Sanksi & Pengembalian Dana", nextId: 'wajib_mapres' },
      { label: "Ganti Kategori", nextId: 'gate_penerima' }
    ]
  },

  // ======================
  // 4. UTILITIES
  // ======================
  'bu_timeline': {
    id: 'bu_timeline',
    type: 'info',
    message: "**Jadwal Seleksi 2025:**\n1. **Pendaftaran:** 14 - 27 Juli 2025\n2. **Seleksi Administrasi:** 28 Juli - 10 Agustus 2025\n3. **Pengumuman Administrasi:** 11 Agustus 2025\n4. **Wawancara:** 18 Agustus - 16 September 2025\n5. **Pengumuman Akhir:** 17 September 2025",
    options: [{ label: "Kembali", nextId: 'bu_start' }]
  },
  'bu_helpdesk': {
    id: 'bu_helpdesk',
    type: 'info',
    message: "Layanan Pengaduan & Helpdesk Beasiswa Unggulan:\n📍 Gedung C Lantai Dasar, Jl. Jenderal Sudirman, Senayan\n📞 Call Center: 177\n📧 Email: pengaduan@dikdasmen.go.id",
    options: [{ label: "Kembali", nextId: 'bu_start' }]
  }
};