import {Meccs} from './meccs';

export interface User {
  id: number;
  nev: string;
  username: string;
  email:string;
  jelszo: string;
  meccs: Meccs;
}
