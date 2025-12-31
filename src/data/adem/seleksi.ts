import { ChatNode } from '@/types/chat';
import { QUOTA_PAPUA, QUOTA_3T, QUOTA_REPATRIASI } from '@/data/adem/quotaTables';

export const seleksiNodes: Record<string, ChatNode> = {
  // ======================
  // 1. PAPUA FLOW
  // ======================
  'sel_papua_start': {
    id: 'sel_papua_start',
    type: 'info',
    // Combined Quota + Context
    message: `**Info Seleksi ADEM Papua**\n\nTotal Kuota: **${QUOTA_PAPUA.Total} Siswa**.\nAlokasi: Papua Induk (${QUOTA_PAPUA['Papua']}), Papua Tengah (${QUOTA_PAPUA['Papua Tengah']}), Papua Pegunungan (${QUOTA_PAPUA['Papua Pegunungan']}), Papua Barat Daya (${QUOTA_PAPUA['Papua Barat Daya']}), Papua Barat (${QUOTA_PAPUA['Papua Barat']}), Papua Selatan (${QUOTA_PAPUA['Papua Selatan']}).`,
    options: [
      { label: "Lihat Syarat & Dokumen", nextId: 'sel_papua_req' },
      { label: "Mekanisme Pendaftaran", nextId: 'sel_mechanism' },
      { label: "Kembali ke Menu Papua", nextId: 'hub_papua' }
    ]
  },
  'sel_papua_req': {
    id: 'sel_papua_req',
    type: 'info',
    message: "Syarat Calon Siswa Papua:\n1. Orang Asli Papua (OAP) atau lulusan SMP/MTs yang tinggal di wilayah Papua.\n2. Belum berusia 22 tahun pada 1 Juli pada tahun berjalan.\n3. Memiliki Akta & KK.",
    options: [{ label: "Lihat Dokumen yg Dibutuhkan", nextId: 'sel_documents_intro' }]
  },

  // ======================
  // 2. REPATRIASI FLOW
  // ======================
  'sel_repat_start': {
    id: 'sel_repat_start',
    type: 'info',
    message: `**Info Seleksi ADEM Repatriasi**\n\nTotal Kuota: **${QUOTA_REPATRIASI.Total} Siswa**.\nFokus: Anak Pekerja Migran Indonesia (PMI) di Malaysia (${QUOTA_REPATRIASI['Malaysia']}) dan Arab Saudi (${QUOTA_REPATRIASI['Arab Saudi']}).`,
    options: [
      { label: "Lihat Syarat & Dokumen", nextId: 'sel_repat_req' },
      { label: "Mekanisme Pendaftaran", nextId: 'sel_mechanism' },
      { label: "Kembali ke Menu Repatriasi", nextId: 'hub_repat' }
    ]
  },
  'sel_repat_req': {
    id: 'sel_repat_req',
    type: 'info',
    message: "Syarat Calon Siswa Repatriasi:\n1. Lulusan CLC (Community Learning Center) atau SILN (Sekolah Indonesia Luar Negeri).\n2. Belum berusia 22 tahun pada 1 Juli pada tahun berjalan.\n3. Mendapat persetujuan Orang Tua.",
    options: [{ label: "Lihat Dokumen yg Dibutuhkan", nextId: 'sel_documents_intro' }]
  },

  // ======================
  // 3. 3T FLOW
  // ======================
  'sel_3t_start': {
    id: 'sel_3t_start',
    type: 'info',
    message: `**Info Seleksi ADEM 3T**\n\nTotal Kuota: **${QUOTA_3T.Total} Siswa**.\nPrioritas: NTT (${QUOTA_3T['Nusa Tenggara Timur']}), Maluku (${QUOTA_3T['Maluku']}), Kalbar (${QUOTA_3T['Kalimantan Barat']}), dan wilayah 3T lainnya.`,
    options: [
      { label: "Lihat Syarat & Dokumen", nextId: 'sel_3t_req' },
      { label: "Mekanisme Pendaftaran", nextId: 'sel_mechanism' },
      { label: "Kembali ke Menu 3T", nextId: 'hub_3t' }
    ]
  },
  'sel_3t_req': {
    id: 'sel_3t_req',
    type: 'info',
    message: "Syarat Calon Siswa 3T:\n1. Sekolah asal berada di wilayah 3T yang ditetapkan.\n2. Keluarga Miskin/Rentan Miskin (Wajib punya KIP/KKS/SKTM).\n3. Belum berusia 22 tahun pada 1 Juli pada tahun berjalan.",
    options: [{ label: "Lihat Dokumen yg Dibutuhkan", nextId: 'sel_documents_intro' }]
  },

  // ======================
  // 4. SHARED NODES (Mechanism & Docs)
  // ======================
  'sel_mechanism': {
    id: 'sel_mechanism',
    type: 'info',
    message: "PENTING: Siswa **tidak mendaftar sendiri**.\n\nAlur Pendaftaran:\n1. Dinas Pendidikan Kab/Kota (atau SILN) menyeleksi siswa.\n2. Dinas/SILN mendaftarkan siswa terpilih via SIM ADEM.\n3. Dinas Provinsi/Atase memverifikasi data.\n4. Puslapdik menetapkan kelulusan.",
    options: [{ label: "Kembali ke Menu Awal", nextId: 'start' }]
  },

  'sel_documents_intro': {
    id: 'sel_documents_intro',
    type: 'ending',
    message: "Siapkan dokumen (Scan Asli) untuk diserahkan ke Operator Dinas/Sekolah:",
    requirements: [
      "Ijazah / SKL",
      "Akta Kelahiran (Wajib)",
      "Kartu Keluarga (KK)",
      "Surat Ket. Sehat Jasmani",
      "Surat Izin Orang Tua & Kesediaan (Format Khusus)",
      "Kartu KIP/PKH/KKS (Khusus Jalur 3T)"
    ],
    options: [
      { label: "Selesai", nextId: 'start', action: 'reset' }
    ]
  }
};