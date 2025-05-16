import { Jatekos } from './jatekos';
import { User } from './user';

export interface Csapat {
  nev:string;
  jatekosok: string;
  csoport?: string;
  pontszam: number;
  gyozelem: number;
  veszteseg: number;
}
