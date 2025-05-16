import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { User } from '../Model/user'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore) { }

  async searchUser(searchedUsername: string): Promise<any> {
    const usersRef = collection(this.firestore,'users');
    const queryRef = query(
      usersRef,
      where('username', '==', searchedUsername),
      where('role', '==', 'jatekos')
    )

    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map(doc => doc.data() as User);
  }
}
