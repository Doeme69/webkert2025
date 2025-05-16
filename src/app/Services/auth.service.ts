import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Auth, authState, signInWithEmailAndPassword, User as FireBaseUser, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Observable<FireBaseUser | null>;

 constructor(
  private auth: Auth, 
  private firestore: Firestore,
  private router: Router
) {
    this.currentUser = authState(this.auth);
  }

  async signIn(email: string, password: string) {
    const loggedUser = await signInWithEmailAndPassword(this.auth, email, password);
    
    const userRef = doc(this.firestore, 'users', loggedUser.user.uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const userData = userDoc.data() as User;
      this.setRole(userData);
      if (userData.csapat) {
        localStorage.setItem('userTeam', userData.csapat);
       
      }
    }
    localStorage.setItem('isLoggedIn', 'true');
    return loggedUser;
  }
  
  signOut() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.clear();
    return this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  setRole(user: User) {
    localStorage.setItem('role', user.role);
  }

  isLoggedIn(): Observable<FireBaseUser | null> {
    return this.currentUser
  }

  async createUser(user: User) {
    try {
      // Create authentication user
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        user.email,
        user.jelszo
      );

      await this.createUserData(userCredential.user.uid, {
        nev: user.nev,
        username: user.username,
        email: user.email,
        role: user.role,
        jelszo: user.jelszo,
        csapat: user.csapat || ''
      });

      this.setRole(user);

      return;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, userData: Partial<User>): Promise<void> {
    try {
      const userRef = doc(this.firestore, 'users', userData.username!);
      await setDoc(userRef, {
        ...userData,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Error saving user data:', error);
      throw error;
    }
  }

  isPlayer() {
    localStorage.getItem('role') == 'jatekos';
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }
}
