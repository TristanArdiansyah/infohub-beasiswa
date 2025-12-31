export type SearchResult = {
    id: string;       
    title: string;    
    keywords: string[]; 
    targetNodeId: string; 
    category: 'Seleksi' | 'Dana' | 'Transport' | 'Sekolah' | 'Lainnya';
  };
  
  export const KNOWLEDGE_INDEX: SearchResult[] = [
    // ============================
    // 1. SELEKSI (Selection & Quota)
    // ============================
    {
      id: 's-1',
      title: 'Syarat & Kuota Jalur Papua',
      keywords: ['papua', 'syarat papua', 'kuota papua', 'oap', 'seleksi papua'],
      targetNodeId: 'sel_papua_start',
      category: 'Seleksi'
    },
    {
      id: 's-2',
      title: 'Syarat & Kuota Jalur 3T (Daerah Khusus)',
      keywords: ['3t', 'daerah tertinggal', 'miskin', 'kip', 'sktm', 'kuota 3t', 'ntt', 'maluku'],
      targetNodeId: 'sel_3t_start',
      category: 'Seleksi'
    },
    {
      id: 's-3',
      title: 'Syarat Jalur Repatriasi (Anak PMI)',
      keywords: ['repatriasi', 'luar negeri', 'clc', 'siln', 'malaysia', 'arab saudi', 'anak tki', 'pmi'],
      targetNodeId: 'sel_repat_start',
      category: 'Seleksi'
    },
    {
      id: 's-4',
      title: 'Dokumen & Berkas Pendaftaran',
      keywords: ['dokumen', 'berkas', 'ijazah', 'akta', 'kk', 'surat sehat', 'persyaratan administrasi'],
      targetNodeId: 'sel_documents_intro',
      category: 'Seleksi'
    },
    {
      id: 's-5',
      title: 'Mekanisme & Alur Pendaftaran',
      keywords: ['cara daftar', 'alur daftar', 'mekanisme', 'siapa yang daftar', 'operator dinas'],
      targetNodeId: 'sel_mechanism',
      category: 'Seleksi'
    },
    {
      id: 's-6',
      title: 'Batas Usia Pendaftaran',
      keywords: ['umur', 'usia', '22 tahun', 'maksimal usia', 'kelahiran'],
      targetNodeId: 'sel_papua_req', // Contains age limit info
      category: 'Seleksi'
    },
  
    // ============================
    // 2. DANA (Funds & Refunds)
    // ============================
    {
      id: 'd-1',
      title: 'Cara Pengembalian Dana (Kode Billing)',
      keywords: ['kembali', 'retur', 'dana', 'uang', 'billing', 'simponi', 'cara setor'],
      targetNodeId: 'dana_how_to_billing',
      category: 'Dana'
    },
    {
      id: 'd-2',
      title: 'Penyebab Wajib Pengembalian Dana',
      keywords: ['kenapa kembali', 'do', 'dropout', 'berhenti', 'meninggal', 'double funding', 'salah rekening'],
      targetNodeId: 'dana_causes_menu',
      category: 'Dana'
    },
    {
      id: 'd-3',
      title: 'Saluran Pembayaran (ATM/Bank/Pos)',
      keywords: ['bayar dimana', 'atm', 'teller', 'kantor pos', 'mobile banking', 'cara transfer'],
      targetNodeId: 'dana_payment_channels',
      category: 'Dana'
    },
    {
      id: 'd-4',
      title: 'Upload Bukti Setor (SSBP/BPN)',
      keywords: ['bukti setor', 'upload bukti', 'ssbp', 'bpn', 'lapor bayar'],
      targetNodeId: 'dana_upload',
      category: 'Dana'
    },
    {
      id: 'd-5',
      title: 'Double Funding (Bantuan Ganda)',
      keywords: ['double funding', 'kip kuliah', 'beasiswa ganda', 'dua bantuan'],
      targetNodeId: 'dana_cause_double',
      category: 'Dana'
    },
  
    // ============================
    // 3. TRANSPORT (Jemput & Pulang)
    // ============================
    {
      id: 't-1',
      title: 'Biaya Tiket Papua (Berangkat)',
      keywords: ['tiket papua', 'biaya berangkat papua', 'pesawat papua', 'apbd'],
      targetNodeId: 'jemput_papua_flow',
      category: 'Transport'
    },
    {
      id: 't-2',
      title: 'Biaya Tiket Repatriasi (Berangkat)',
      keywords: ['tiket repatriasi', 'biaya berangkat malaysia', 'pesawat luar negeri', 'apbn', 'atase'],
      targetNodeId: 'jemput_repat_flow',
      category: 'Transport'
    },
    {
      id: 't-3',
      title: 'Serah Terima Siswa (Bandara)',
      keywords: ['serah terima', 'jemput di bandara', 'kedatangan', 'handover'],
      targetNodeId: 'jemput_arrival',
      category: 'Transport'
    },
    {
      id: 't-4',
      title: 'Pemulangan Siswa Lulus (Estafet Papua)',
      keywords: ['pulang lulus', 'tamat sekolah', 'estafet', 'biaya pulang papua'],
      targetNodeId: 'pulang_lulus_papua',
      category: 'Transport'
    },
    {
      id: 't-5',
      title: 'Biaya Pulang Libur / DO',
      keywords: ['pulang libur', 'mudik', 'lebaran', 'pulang paksa', 'biaya sendiri', 'tiket hangus'],
      targetNodeId: 'pulang_non_covered',
      category: 'Transport'
    },
  
    // ============================
    // 4. SEKOLAH (Admin & Guru)
    // ============================
    {
      id: 'sch-1',
      title: 'Honorarium Guru & Kepala Sekolah',
      keywords: ['gaji guru', 'honor guru', 'honor kepsek', '300 ribu', '500 ribu', 'insentif'],
      targetNodeId: 'lain_guru_honor',
      category: 'Sekolah'
    },
    {
      id: 'sch-2',
      title: 'Tugas & Peran Guru Pendamping',
      keywords: ['tugas guru', 'kewajiban guru', 'peran pendamping', 'wali siswa'],
      targetNodeId: 'kelola_guru',
      category: 'Sekolah'
    },
    {
      id: 'sch-3',
      title: 'Larangan Keras (Tahan ATM/Potong Dana)',
      keywords: ['tahan atm', 'buku tabungan', 'potong dana', 'sunat dana', 'pungli', 'pelanggaran sekolah'],
      targetNodeId: 'kelola_sanksi', // Also linked to 'lain_guru_finance'
      category: 'Sekolah'
    },
    {
      id: 'sch-4',
      title: 'Syarat Sekolah Penyelenggara',
      keywords: ['syarat sekolah', 'akreditasi', 'kriteria sekolah', 'jumlah siswa'],
      targetNodeId: 'kelola_syarat_sekolah',
      category: 'Sekolah'
    },
    {
      id: 'sch-5',
      title: 'Wawasan Kebangsaan (PWK)',
      keywords: ['pwk', 'wawasan kebangsaan', 'orientasi', 'sebelum masuk sekolah'],
      targetNodeId: 'pwk_start',
      category: 'Sekolah'
    },
    {
      id: 'sch-6',
      title: 'Laporan Pertanggungjawaban (LPJ)',
      keywords: ['lpj', 'laporan dana', 'bku', 'upload laporan', 'hardfile'],
      targetNodeId: 'lapor_sekolah',
      category: 'Sekolah'
    },
  
    // ============================
    // 5. LAINNYA (Rules & Problems)
    // ============================
    {
      id: 'oth-1',
      title: 'Aturan Absensi & Bolos',
      keywords: ['bolos', 'alpha', 'tidak masuk', 'absen', 'sanksi bolos'],
      targetNodeId: 'rule_absen',
      category: 'Lainnya'
    },
    {
      id: 'oth-2',
      title: 'Pelanggaran Berat (Miras/Berkelahi)',
      keywords: ['berkelahi', 'miras', 'alkohol', 'narkoba', 'senjata tajam', 'tawuran'],
      targetNodeId: 'rule_berat',
      category: 'Lainnya'
    },
    {
      id: 'oth-3',
      title: 'Pelanggaran Sangat Berat (Hamil/Kriminal)',
      keywords: ['hamil', 'menikah', 'kriminal', 'polisi', 'asusila', 'seksual'],
      targetNodeId: 'rule_very_berat',
      category: 'Lainnya'
    },
    {
      id: 'oth-4',
      title: 'Pindah Sekolah (Mutasi)',
      keywords: ['pindah sekolah', 'mutasi', 'keluar sekolah', 'ganti sekolah'],
      targetNodeId: 'lain_move',
      category: 'Lainnya'
    },
    {
      id: 'oth-5',
      title: 'Siswa Sakit & BPJS',
      keywords: ['sakit', 'berobat', 'bpjs', 'rumah sakit', 'kesehatan'],
      targetNodeId: 'lain_sick',
      category: 'Lainnya'
    },
    {
      id: 'oth-6',
      title: 'Kontak Helpdesk & Pengaduan',
      keywords: ['kontak', 'hubungi', 'nomor wa', 'email', 'helpdesk', 'pengaduan', 'hotline'],
      targetNodeId: 'lain_kontak',
      category: 'Lainnya'
    }
  ];