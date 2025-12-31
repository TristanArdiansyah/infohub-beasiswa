import { ChatNode } from '@/types/chat';

export const buSeleksiNodes: Record<string, ChatNode> = {
    // --- PEGAWAI REQUIREMENTS ---
    'sel_pegawai_req': {
        id: 'sel_pegawai_req',
        type: 'question',
        message: "Mari kita cek kelayakan Anda. Syarat usia dibedakan berdasarkan status kepegawaian (Tugas Belajar Murni vs. Izin Belajar) dan jenjang studi. Jenjang apa yang akan Anda tempuh?",
        options: [
            { label: "Sarjana / Diploma IV (S1/D4)", nextId: 'sel_pegawai_s1' },
            { label: "Magister (S2)", nextId: 'sel_pegawai_s2' },
            { label: "Doktor (S3)", nextId: 'sel_pegawai_s3' },
            { label: "Kembali", nextId: 'calon_pegawai_menu' } // Updated
        ]
    },
    'sel_pegawai_s1': {
        id: 'sel_pegawai_s1',
        type: 'info',
        message: "Untuk jenjang S1/D4, berikut ketentuannya:\n\n**Batas Usia:**\n- Maksimal **43 tahun** (jika dibebastugaskan/Tugas Belajar).\n- Maksimal **48 tahun** (jika tetap bekerja/Izin Belajar).\n\n**Syarat Akademik:**\n- Memiliki IPK minimal 3.00 (bagi yang *on-going*).\n- Wajib menulis Esai bertema: *'Pengembangan Kompetensi menuju ASN Yang Adaptif'* (1000-1500 kata).",
        options: [{ label: "Cek Dokumen Wajib", nextId: 'sel_pegawai_docs' }]
    },
    'sel_pegawai_s2': {
        id: 'sel_pegawai_s2',
        type: 'info',
        message: "Untuk jenjang Magister (S2), persaingannya cukup ketat. Pastikan Anda memenuhi kriteria ini:\n\n**Batas Usia:**\n- Maks **49 tahun** (Tugas Belajar).\n- Maks **52 tahun** (Izin Belajar).\n\n**Syarat Akademik:**\n- IPK S1 minimal **3.00**.\n- Wajib memiliki sertifikat **UKBI Paket 1** dengan predikat minimal *Unggul* (Skor 578-640).\n- Jika ke Luar Negeri: TOEFL ITP 550 / IELTS 6.5.",
        options: [{ label: "Cek Dokumen Wajib", nextId: 'sel_pegawai_docs' }]
    },
    'sel_pegawai_s3': {
        id: 'sel_pegawai_s3',
        type: 'info',
        message: "Untuk jenjang Doktoral (S3), kami mencari kandidat dengan visi riset yang jelas:\n\n**Batas Usia:**\n- Maks **46 tahun** (Tugas Belajar).\n- Maks **50 tahun** (Izin Belajar).\n\n**Syarat Khusus:**\n- IPK S2 minimal **3.00**.\n- Wajib menyusun **Proposal Disertasi**.\n- Sertifikat UKBI Paket 1 (Predikat Unggul) dan Bahasa Inggris (TOEFL 550/IELTS 6.5 untuk LN) adalah mutlak.",
        options: [{ label: "Cek Dokumen Wajib", nextId: 'sel_pegawai_docs' }]
    },
    'sel_pegawai_docs': {
        id: 'sel_pegawai_docs',
        type: 'info',
        message: "Selain dokumen pribadi (KTP/KK), Pegawai **WAJIB** mengunggah dokumen khusus ini:\n1. SK PNS & SK Jabatan Terakhir.\n2. Dokumen Penilaian Prestasi Kerja (SKP) 2 tahun terakhir.\n3. Surat Usulan dari Pejabat Eselon II.\n4. Surat Persetujuan dari Kepala Biro SDM.\n5. Sertifikat UKBI (Wajib untuk Dalam & Luar Negeri).",
        options: [{ label: "Kembali ke Menu Pegawai", nextId: 'calon_pegawai_menu' }] // Updated
    },

    // --- MAPRES REQUIREMENTS ---
    'sel_mapres_req': {
        id: 'sel_mapres_req',
        type: 'question',
        message: "**Kriteria Masyarakat Berprestasi:**\nDiutamakan memiliki sertifikat prestasi Nasional/Internasional. Pilih jenjang:",
        options: [
            { label: "S1 (Sarjana)", nextId: 'sel_mapres_s1' },
            { label: "S2 (Magister)", nextId: 'sel_mapres_s2' },
            { label: "S3 (Doktor)", nextId: 'sel_mapres_s3' },
            { label: "Kembali", nextId: 'calon_mapres_menu' } // Updated
        ]
    },
    'sel_mapres_s1': {
        id: 'sel_mapres_s1',
        type: 'info',
        message: "**Syarat S1 Mapres:**\n- **Usia:** Lulus SMA maks 2 tahun terakhir.\n- **IPK (On-Going):** Min 2.75.\n- **UKBI:** Paket 1, Predikat Madya (Skor 482-577).\n- **Essay:** 'Dampak Teknologi Terhadap Karakter Pada Era Digital' (1000-1500 kata).",
        options: [{ label: "Kembali ke Menu Mapres", nextId: 'calon_mapres_menu' }] // Updated
    },
    'sel_mapres_s2': {
        id: 'sel_mapres_s2',
        type: 'info',
        message: "**Syarat S2 Mapres:**\n- **Usia:** Maks 32 th (Baru) atau 33 th (On-Going).\n- **IPK S1:** Min 3.00.\n- **UKBI:** Paket 1, Predikat Unggul (Skor 578-640).\n- **Essay:** 1500-2000 kata.",
        options: [{ label: "Kembali ke Menu Mapres", nextId: 'calon_mapres_menu' }] // Updated
    },
    'sel_mapres_s3': {
        id: 'sel_mapres_s3',
        type: 'info',
        message: "**Syarat S3 Mapres:**\n- **Usia:** Maks 46 th (Baru) atau 47 th (On-Going).\n- **IPK S2:** Min 3.00.\n- **Proposal:** Wajib Proposal Disertasi.\n- **UKBI:** Paket 1, Predikat Unggul (Skor 578-640).",
        options: [{ label: "Kembali ke Menu Mapres", nextId: 'calon_mapres_menu' }] // Updated
    },
    'sel_mapres_docs': {
        id: 'sel_mapres_docs',
        type: 'info',
        message: "**Dokumen Wajib Upload:**\n1. KTP, KK, Sertifikat Prestasi.\n2. LoA Unconditional / Surat Aktif Kuliah.\n3. KHS / Transkrip Nilai.\n4. Sertifikat Bahasa (UKBI Wajib, TOEFL/IELTS jika ke LN).\n5. Surat Rekomendasi Akademisi.",
        options: [{ label: "Kembali", nextId: 'calon_mapres_menu' }] // Updated
    },

    // --- DISABILITAS REQUIREMENTS ---
    'sel_disabilitas_req': {
        id: 'sel_disabilitas_req',
        type: 'info',
        message: "**Syarat Jalur Disabilitas:**\n1. Surat Keterangan Disabilitas dari Dokter/Ahli.\n2. Menandatangani Surat Pernyataan Kebutuhan Khusus.\n3. **IPK Minimal (On-Going):** S2 min 3.25 | S3 min 3.40.\n4. Essay & Rekomendasi sama dengan jalur Mapres.",
        options: [{ label: "Lihat Fasilitas Dana", nextId: 'komp_mapres' }] // Links to benefits (which allows backing to Penerima, but here flow is tricky. Ideally mapres menu)
    }
};