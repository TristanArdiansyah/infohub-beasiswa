import { ChatNode } from '@/types/chat';

export const buMekanismeNodes: Record<string, ChatNode> = {
  // ======================
  // MEKANISME PEGAWAI
  // ======================
  'mech_pegawai_flow': {
    id: 'mech_pegawai_flow',
    type: 'info',
    message: "Proses pendaftaran Beasiswa Pegawai sedikit berbeda karena melibatkan izin instansi. Berikut alur utamanya:\n\n1. **Persetujuan Internal:** Dapatkan surat usulan dari Pejabat Eselon II dan persetujuan Biro SDM.\n2. **Pendaftaran Online:** Buat akun dan unggah berkas di website Beasiswa Unggulan.\n3. **Seleksi Administrasi:** Verifikasi kelengkapan dokumen.\n4. **Wawancara:** Bagi yang lolos administrasi.\n5. **Penetapan:** Pengumuman final penerima beasiswa.",
    options: [
      { label: "Kapan jadwalnya?", nextId: 'bu_timeline' },
      { label: "Detail Persetujuan Biro SDM", nextId: 'mech_pegawai_sdm' },
      { label: "Kembali ke Menu Pegawai", nextId: 'calon_pegawai_menu' } // Updated
    ]
  },
  'mech_pegawai_sdm': {
    id: 'mech_pegawai_sdm',
    type: 'info',
    message: "PENTING: Sebelum mendaftar online, Anda wajib mengurus administrasi kepegawaian terlebih dahulu. Anda harus mendapatkan **Surat Usulan** dari Pimpinan Unit Utama (Eselon II) dan **Surat Persetujuan Tugas Belajar** yang diterbitkan oleh Kepala Biro Sumber Daya Manusia (SDM) Kementerian.",
    options: [{ label: "Kembali ke Menu Pegawai", nextId: 'calon_pegawai_menu' }] // Updated
  }
};