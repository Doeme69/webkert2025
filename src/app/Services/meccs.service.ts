import { Injectable } from '@angular/core';
import { Meccs } from '../Model/meccs';
import { Firestore, setDoc, doc, getDocs, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MeccsService {

  constructor(private firestore: Firestore) { }

  async addMatch(meccs: Meccs) {
    const meccsRef = doc(this.firestore, 'meccs', meccs.hazai + '-' + meccs.vendeg);
    await setDoc(meccsRef, meccs);
  }

  async getMatches(): Promise<Meccs[]> {
    const meccsRef = collection(this.firestore, 'meccs');
    const meccsSnapshot = await getDocs(meccsRef);
    const meccsList: Meccs[] = meccsSnapshot.docs.map(doc => doc.data() as Meccs);
    return meccsList;
  }
}
