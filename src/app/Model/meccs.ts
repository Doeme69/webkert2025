import { Biro } from "./biro";
import { Csapat } from "./csapat";

export interface Meccs {
    hazai: Csapat;
    vendeg: Csapat;
    datum: string;
    ido: string;
    helyszin: string;
    biro: Biro;
}
