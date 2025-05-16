import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Auth, authState, signInWithEmailAndPassword, User as FireBaseUser, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
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

  signIn(email: string, password: string) {
    console.log('Attempting to sign in with email:', email);
    console.log('Attempting to sign in with password:', password);
    
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  
  signOut() {
    localStorage.setItem('isLoggedIn', 'false');
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
      const userRef = doc(this.firestore, 'users', userId);
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
