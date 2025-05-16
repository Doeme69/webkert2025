import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, collection, query, where, getDocs, updateDoc } from '@angular/fire/firestore';
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

  async searchUser(username: string): Promise<any> {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);

    console.log('Query snapshot:', querySnapshot.docs[0].data());
    
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      console.log('No user found with that username');
      return null;
    }
  }

  async addPlayerToTeam(player: any): Promise<void> {

    const csapatToBeAdded = localStorage.getItem('userTeam');

    const userRef = doc(this.firestore, 'users', player.username);
    await updateDoc(userRef, { csapat: csapatToBeAdded });

    console.log('geci');

    const csapatRef = doc(this.firestore, 'teams', csapatToBeAdded!);
    const csapatDoc = await getDocs(query(collection(this.firestore, 'teams'), where('nev', '==', csapatToBeAdded)));
    const currentPlayers = csapatDoc.docs[0].data()['jatekosok'] || '';
    await updateDoc(csapatRef, { jatekosok: currentPlayers + player.username + ',' });
  }
}
