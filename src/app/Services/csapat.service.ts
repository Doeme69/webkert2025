import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc } from '@angular/fire/firestore';
import { Csapat } from '../Model/csapat';

@Injectable({
  providedIn: 'root'
})
export class CsapatService {

  constructor(private firestore: Firestore) {}

  async createCsapat(csapat: Csapat): Promise<void> {
    
    const csapatRef = doc(this.firestore, 'teams', csapat.nev);
    await setDoc(csapatRef, csapat);
  }

}
