import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: Observable<User | null>;

  constructor(private authService: AuthService, private router: Router) {}

  loginUser(email: string, password: string) {
    this.authService.signIn(email, password)
          .then(userCredential => {
            console.log('Login successful:', userCredential.user);
            this.authService.updateLoginStatus(true);
            this.router.navigateByUrl('/home');
          })
          .catch(error => {            
            alert('Invalid email or password:');
      });
    }
}
