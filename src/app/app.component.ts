import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

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
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webkertropi';

  isLoggedIn = false;

  checkLogin() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
}
