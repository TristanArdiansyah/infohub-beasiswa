// data/chat/mainMenu.ts
import { ChatNode } from '@/types/chat';

export const mainMenuNodes: Record<string, ChatNode> = {
  // ======================
  // 1. ROOT (Identity Choice)
  // ======================
  'start': {
    id: 'start',
    type: 'question', // Changed to question for better UI engagement
    message: "Selamat datang di Pusat Informasi Digital ADEM. Agar informasi yang kami berikan akurat, mohon pilih jalur program Anda:",
    options: [
      { label: "ADEM Wilayah Papua", nextId: 'hub_papua' },
      { label: "ADEM Repatriasi (Luar Negeri)", nextId: 'hub_repat' },
      { label: "ADEM Daerah Khusus (3T)", nextId: 'hub_3t' },
      { label: "Informasi Umum (Dana/Lapor/Aturan)", nextId: 'hub_general' },
    ]
  },

  // ======================
  // 2. PROGRAM HUBS
  // ======================
  
  // --- HUB PAPUA ---
  'hub_papua': {
    id: 'hub_papua',
    type: 'question',
    message: "Menu Khusus **ADEM Wilayah Papua**. Topik apa yang ingin Anda akses?",
    options: [
      { label: "Seleksi & Kuota (Papua)", nextId: 'sel_papua_start' },
      { label: "Penjemputan & Tiket Berangkat", nextId: 'jemput_papua_flow' },
      { label: "Pemulangan (Lulus/DO)", nextId: 'pulang_papua_flow' },
      { label: "Wawasan Kebangsaan", nextId: 'pwk_start' },
      { label: "Kembali ke Awal", nextId: 'start' }
    ]
  },

  // --- HUB REPATRIASI ---
  'hub_repat': {
    id: 'hub_repat',
    type: 'question',
    message: "Menu Khusus **ADEM Repatriasi** (Anak PMI / CLC / SILN). Topik apa yang ingin Anda akses?",
    options: [
      { label: "Seleksi & Kuota (Repatriasi)", nextId: 'sel_repat_start' },
      { label: "Penjemputan (Bandara -> Sekolah)", nextId: 'jemput_repat_flow' },
      { label: "Pemulangan (Ke Luar Negeri/Asal)", nextId: 'pulang_repat_flow' },
      { label: "Wawasan Kebangsaan", nextId: 'pwk_start' },
      { label: "Kembali ke Awal", nextId: 'start' }
    ]
  },

  // --- HUB 3T ---
  'hub_3t': {
    id: 'hub_3t',
    type: 'question',
    message: "Menu Khusus **ADEM Daerah Khusus (3T)**. Topik apa yang ingin Anda akses?",
    options: [
      { label: "Seleksi & Kuota (3T)", nextId: 'sel_3t_start' },
      // Note: 3T usually follows generic rules for transport, often handled by local Dinas
      { label: "Tata Tertib & Aturan", nextId: 'lain_rules' }, 
      { label: "Kembali ke Awal", nextId: 'start' }
    ]
  },

  // --- HUB GENERAL (Utilities) ---
  'hub_general': {
    id: 'hub_general',
    type: 'question',
    message: "Menu Informasi Umum & Administratif. Silakan pilih:",
    options: [
      { label: "Pengembalian Dana (Retur)", nextId: 'dana_start' },
      { label: "Tata Cara Pelaporan (LPJ)", nextId: 'lapor_start' },
      { label: "Manajemen Sekolah (Pengelolaan)", nextId: 'kelola_start' },
      { label: "Peran Guru & Solusi Masalah", nextId: 'lain_start' },
      { label: "Kembali ke Awal", nextId: 'start' }
    ]
  }
};