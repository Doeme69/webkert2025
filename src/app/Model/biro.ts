import {User} from './user';
import {Meccs} from './meccs';

export interface Biro extends User{
    biraltMeccsek?: Meccs[];
}
