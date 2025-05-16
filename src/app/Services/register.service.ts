import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) { }

  async registerUser(user: any): Promise<void> {
    console.log('User registered:', user);
    try {
        await this.authService.createUser(user);
      } catch (error) {
        console.error('Error registering user:', error);
        throw error;
      }
  }  
}
