import {Meccs} from './meccs';

export interface User {
  id: number;
  nev: string;
  username: string;
  jelszo: string;
  meccs: Meccs;
}
