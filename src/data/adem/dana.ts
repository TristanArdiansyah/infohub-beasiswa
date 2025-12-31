import { ChatNode } from '@/types/chat';

export const danaNodes: Record<string, ChatNode> = {
  // ======================
  // 1. ENTRY POINT
  // ======================
  'dana_start': {
    id: 'dana_start',
    type: 'question',
    // Tone shift: Welcoming rather than immediately demanding money.
    message: "Halo. Anda berada di menu Pengembalian Dana Bantuan (Retur). Kami akan membantu Anda memproses pengembalian dana ke Kas Negara jika terjadi ketidaksesuaian data. Apa yang ingin Anda ketahui?",
    options: [
      { label: "Kenapa dana harus dikembalikan?", nextId: 'dana_causes_menu' },
      { label: "Panduan Setor (Kode Billing)", nextId: 'dana_billing_intro' },
      { label: "Lapor Bukti Setor", nextId: 'dana_upload' },
      { label: "Kembali ke Menu Utama", nextId: 'start' }
    ]
  },

  // ======================
  // 2. CAUSE TRIAGE
  // ======================
  'dana_causes_menu': {
    id: 'dana_causes_menu',
    type: 'question',
    // Smoother delivery: Asking a helping question instead of listing facts.
    message: "Untuk memastikan prosedurnya tepat, mohon pilih kondisi yang dialami di sekolah Anda saat ini:",
    options: [
      { label: "Siswa Mengundurkan Diri / Putus Sekolah", nextId: 'dana_cause_dropout' },
      { label: "Siswa Meninggal Dunia", nextId: 'dana_cause_deceased' },
      { label: "Terima Double Funding (KIP/Lainnya)", nextId: 'dana_cause_double' },
      { label: "Kesalahan Data Rekening", nextId: 'dana_cause_error' },
    ]
  },

  'dana_cause_dropout': {
    id: 'dana_cause_dropout',
    type: 'info',
    // Clarified the logic without being aggressive.
    message: "Baik. Jika siswa mengundurkan diri atau dikeluarkan (DO), maka dana bantuan yang sudah cair namun *belum digunakan* (atau sisa dana setelah tanggal keluar) perlu dikembalikan ke negara.",
    options: [{ label: "Bagaimana cara mengembalikannya?", nextId: 'dana_billing_intro' }]
  },
  'dana_cause_deceased': {
    id: 'dana_cause_deceased',
    type: 'info',
    // Added empathy ("Turut berduka cita"). This is crucial for a friendly bot.
    message: "Kami turut berduka cita. Secara administratif, dana yang disalurkan *setelah tanggal wafat* perlu dikembalikan. Namun, dana yang cair sebelum tanggal wafat tetap menjadi hak ahli waris.",
    options: [{ label: "Lanjut ke prosedur setor", nextId: 'dana_billing_intro' }]
  },
  'dana_cause_double': {
    id: 'dana_cause_double',
    type: 'info',
    message: "Sesuai aturan, siswa tidak diperkenankan menerima bantuan sejenis (Double Funding) dari sumber APBN/APBD lain. Jika terdeteksi, salah satu bantuan harus dikembalikan penuh sesuai periode ganda.",
    options: [{ label: "Saya mengerti, lanjut", nextId: 'dana_billing_intro' }]
  },
  'dana_cause_error': {
    id: 'dana_cause_error',
    type: 'info',
    message: "Jika terjadi retur otomatis dari bank (rekening pasif/salah), mohon segera perbaiki data di SIM ADEM. Namun, jika dana terlanjur masuk ke rekening yang salah, dana tersebut wajib dikembalikan.",
    options: [{ label: "Lanjut ke prosedur setor", nextId: 'dana_billing_intro' }]
  },

  // ======================
  // 3. THE MECHANISM (Billing)
  // ======================
  'dana_billing_intro': {
    id: 'dana_billing_intro',
    type: 'rejection', // Kept type 'rejection' for visual cue (red bubble), but softened the text.
    // Tone shift: Framed as "Safety First" rather than "Don't do this OR ELSE".
    message: "⚠️ PENTING: Demi keamanan, mohon jangan mentransfer uang ke rekening pribadi staf siapapun. Pengembalian resmi WAJIB menggunakan 'Kode Billing SIMPONI'. Apakah Anda sudah memiliki kodenya?",
    options: [
      { label: "Belum Punya / Apa itu?", nextId: 'dana_how_to_billing' },
      { label: "Sudah Punya Kode Billing", nextId: 'dana_payment_channels' },
    ]
  },

  'dana_how_to_billing': {
    id: 'dana_how_to_billing',
    type: 'info',
    // Broken down into a clearer narrative flow.
    message: "Kode Billing adalah tiket pembayaran resmi ke Kas Negara. Berikut alur mendapatkannya:\n\n1. Sekolah melapor ke Dinas Pendidikan Provinsi.\n2. Dinas mengajukan permohonan ke Puslapdik.\n3. Puslapdik menerbitkan Kode Billing (Berlaku 3-7 hari).",
    requirements: ["Siapkan Nama Siswa", "Nominal Pengembalian", "Alasan Pengembalian"],
    options: [
      { label: "Saya sudah dapat kodenya", nextId: 'dana_payment_channels' },
      { label: "Kembali ke Awal", nextId: 'dana_start' }
    ]
  },

  'dana_payment_channels': {
    id: 'dana_payment_channels',
    type: 'info',
    message: "Silakan lakukan penyetoran menggunakan Kode Billing melalui:\n\n• Teller Bank (BUMN/Swasta)\n• ATM (Menu Pembayaran Negara/PNBP)\n• Mobile Banking (Menu Penerimaan Negara)\n• Kantor Pos\n\nJangan lupa simpan bukti setornya (BPN/SSBP) ya!",
    options: [
      { label: "Sudah setor, apa langkah selanjutnya?", nextId: 'dana_upload' }
    ]
  },

  // ======================
  // 4. CLOSING THE LOOP
  // ======================
  'dana_upload': {
    id: 'dana_upload',
    type: 'ending',
    // Encouraging closing.
    message: "Satu langkah terakhir! Agar pengembalian dana tercatat sah secara sistem, silakan login ke aplikasi SIM ADEM, buka menu 'Pengembalian Dana', dan unggah bukti setor Anda.",
    requirements: ["Scan Bukti Setor (Jelas)", "Nomor NTPN (tertera di bukti)"],
    options: [
      { label: "Selesai & Kembali ke Menu", nextId: 'start', action: 'reset' }
    ]
  }
};