import { ChatNode } from '@/types/chat';

export const penjemputanNodes: Record<string, ChatNode> = {
  // ======================
  // 1. PAPUA FLOW
  // ======================
  'jemput_papua_flow': {
    id: 'jemput_papua_flow',
    type: 'info',
    message: "Biaya transportasi siswa ADEM Papua dari daerah asal ke provinsi tujuan dibebankan pada **APBD Provinsi/Kabupaten/Kota Asal**. Siswa akan didampingi oleh Dinas Pendidikan daerah pengirim.",
    options: [
      { label: "Prosedur Serah Terima", nextId: 'jemput_arrival' },
      { label: "Kembali ke Menu Papua", nextId: 'hub_papua' }
    ]
  },

  // ======================
  // 2. REPATRIASI FLOW
  // ======================
  'jemput_repat_flow': {
    id: 'jemput_repat_flow',
    type: 'info',
    message: "Biaya pemberangkatan siswa ADEM Repatriasi dari negara asal (Malaysia/Arab Saudi) ke Indonesia ditanggung oleh **APBN (Puslapdik/Kemdikbud)** atau Perwakilan Pemerintah RI (Atase).",
    options: [
      { label: "Prosedur Serah Terima", nextId: 'jemput_arrival' },
      { label: "Kembali ke Menu Repatriasi", nextId: 'hub_repat' }
    ]
  },

  // ======================
  // 3. SHARED ARRIVAL LOGIC
  // ======================
  'jemput_arrival': {
    id: 'jemput_arrival',
    type: 'info',
    message: "Prosedur Serah Terima (Handover) di Provinsi Tujuan:\n1. Siswa tiba di Bandara/Titik Kumpul.\n2. Dinas Pendidikan Provinsi Penerima menjemput siswa.\n3. Siswa mengikuti **Penguatan Wawasan Kebangsaan**.\n4. Dinas menyerahkan siswa secara resmi ke Sekolah Penerima.",
    options: [
      { label: "Apa itu Wawasan Kebangsaan?", nextId: 'pwk_start' },
      { label: "Kembali ke Menu Utama", nextId: 'start' }
    ]
  }
};