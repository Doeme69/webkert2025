import {Jatekos} from './jatekos';

export interface Csapat {
  jatekoksok: Jatekos[];
  csoport: string;
  pontszam: number;
  gyozelem: number;
  veszteseg: number;
}
