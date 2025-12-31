import { buMainMenu } from './mainmenu';
import { buSeleksiNodes } from './seleksi';
import { buKomponenNodes } from './komponen';
import { buKewajibanNodes } from './kewajiban';
import { buMekanismeNodes } from './mekanisme';

export const BU_CHAT_NODES = {
  ...buMainMenu,
  ...buSeleksiNodes,
  ...buKomponenNodes,
  ...buKewajibanNodes,
  ...buMekanismeNodes,
};