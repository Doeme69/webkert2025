import {Jatekos} from './jatekos';

export interface Csapat {
  nev:string;
  jatekoksok: Jatekos[];
  csoport?: string;
  pontszam: number;
  gyozelem: number;
  veszteseg: number;
}
