import { Component } from '@angular/core';
import {RouterOutlet, Router} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbar,
    MatButtonModule,
    AppRoutingModule,
    MatToolbar,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkertropi';

  isLoggedIn = false;
  isPlayer = false;

  constructor (private router: Router){}


  checkLogin() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  checkRole() {
    this.isPlayer = localStorage.getItem('isPlayer') === 'true';  
  }

  logout(){
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;

    localStorage.setItem('isPlayer', 'false');
    this.isPlayer = false;

    localStorage.removeItem('user');
    console.log('User logged out');
    this.router.navigateByUrl('/login');
  }
}
