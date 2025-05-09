import { Injectable } from '@angular/core';
import { Meccs } from '../Model/meccs';

@Injectable({
  providedIn: 'root'
})
export class MeccsService {

  constructor() { }

  addMatch(meccs: Meccs): void {
    console.log('Match added:', meccs);
  }
}
