import { mainMenuNodes } from './mainMenu';
import { seleksiNodes } from './seleksi';
import { danaNodes } from './dana';
import { penjemputanNodes } from './penjemputan';
import { pemulanganNodes } from './pemulangan';
import { pengelolaanNodes } from './pengelolaan';
import { laporanNodes } from './laporan';
import { wawasanNodes } from './wawasan';
import { lainnyaNodes } from './lainnya';

// The Master Record of all nodes
// This allows the ChatInterface to look up ANY node by ID, 
// regardless of which file it lives in.
export const ALL_CHAT_NODES = {
  ...mainMenuNodes,
  ...seleksiNodes,
  ...danaNodes,
  ...penjemputanNodes,
  ...pemulanganNodes,
  ...pengelolaanNodes,
  ...laporanNodes,
  ...wawasanNodes,
  ...lainnyaNodes,
};