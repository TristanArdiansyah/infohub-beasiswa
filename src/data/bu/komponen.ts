import { ChatNode } from '@/types/chat';

export const buKomponenNodes: Record<string, ChatNode> = {
  // PEGAWAI
  'komp_pegawai': {
    id: 'komp_pegawai',
    type: 'info',
    message: "Sebagai investasi negara, Beasiswa Unggulan Pegawai menanggung komponen berikut secara komprehensif:\n\n1. **Biaya Pendidikan:** SPP/UKT dibayar penuh (*at cost*).\n2. **Biaya Pendukung:** Tunjangan Buku dan Biaya Penelitian (Tesis/Disertasi).\n3. **Biaya Hidup:** Uang saku bulanan (Living Cost).\n4. **Khusus Luar Negeri:** Tiket Pesawat PP, Biaya Visa/Paspor, dan Asuransi Kesehatan.",
    options: [
      { label: "Bagaimana sistem penyalurannya?", nextId: 'komp_pegawai_flow' },
      { label: "Kembali ke Dashboard Pegawai", nextId: 'penerima_pegawai_menu' } // Updated
    ]
  },
  'komp_pegawai_flow': {
    id: 'komp_pegawai_flow',
    type: 'info',
    message: "Penyaluran dana dilakukan melalui Bank Penyalur dengan mekanisme:\n- **Biaya Pendidikan (UKT):** Ditransfer langsung ke rekening Perguruan Tinggi.\n- **Biaya Hidup & Lainnya:** Ditransfer ke rekening pribadi Pegawai Penerima Beasiswa.",
    options: [{ label: "Kembali ke Dashboard Pegawai", nextId: 'penerima_pegawai_menu' }] // Updated
  },

  // MAPRES & DISABILITAS
  'komp_mapres': {
    id: 'komp_mapres',
    type: 'info',
    message: "**Komponen Beasiswa Mapres:**\n- Biaya Pendidikan, Biaya Hidup, Biaya Buku.\n\n**Khusus Disabilitas:**\n- Ditambah **Biaya Pendamping** dan Biaya Penelitian.",
    options: [{ label: "Kembali ke Dashboard Mapres", nextId: 'penerima_mapres_menu' }] // Updated
  }
};