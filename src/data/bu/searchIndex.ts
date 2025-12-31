export type SearchResult = {
    id: string;
    title: string;
    keywords: string[];
    targetNodeId: string;
    category: 'Pegawai' | 'Umum' | 'Syarat' | 'Jadwal';
};

export const BU_KNOWLEDGE_INDEX: SearchResult[] = [
    {
        id: 'bu-1',
        title: 'Jadwal Pendaftaran BU 2025',
        keywords: ['jadwal', 'tanggal', 'kapan buka', 'deadline', 'pendaftaran'],
        targetNodeId: 'bu_timeline',
        category: 'Jadwal'
    },
    {
        id: 'bu-2',
        title: 'Syarat Beasiswa Pegawai (PNS)',
        keywords: ['pegawai', 'pns', 'syarat pns', 'tugas belajar', 'izin belajar'],
        targetNodeId: 'sel_pegawai_req',
        category: 'Pegawai'
    },
    {
        id: 'bu-3',
        title: 'Syarat Beasiswa Masyarakat Berprestasi',
        keywords: ['mapres', 'umum', 'syarat s1', 'syarat s2', 'prestasi'],
        targetNodeId: 'sel_mapres_req',
        category: 'Umum'
    },
    {
        id: 'bu-4',
        title: 'Syarat Jalur Disabilitas',
        keywords: ['disabilitas', 'difabel', 'biaya pendamping', 'syarat khusus'],
        targetNodeId: 'sel_disabilitas_req',
        category: 'Umum'
    },
    {
        id: 'bu-5',
        title: 'Ketentuan Essay / Karya Tulis',
        keywords: ['essay', 'esai', 'judul essay', 'tema', 'karya tulis'],
        targetNodeId: 'sel_mapres_s1', // General link, user can navigate
        category: 'Syarat'
    },
    {
        id: 'bu-6',
        title: 'Standar UKBI & TOEFL',
        keywords: ['ukbi', 'toefl', 'bahasa', 'sertifikat bahasa', 'ielts'],
        targetNodeId: 'sel_mapres_s2', // Where details are most dense
        category: 'Syarat'
    }
];