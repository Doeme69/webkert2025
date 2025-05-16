import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { User } from '../../Model/user';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-register',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private registerService: RegisterService
  ){}

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', Validators.required)
  })

  async registerUser() {
    const newUser : User = {
      nev: this.registerForm.value.name!,
      username: this.registerForm.value.username!,
      email: this.registerForm.value.email!,
      jelszo: this.registerForm.value.psw!,
      role: this.registerForm.value.role!,
      csapat: ''
    }

    if (this.registerForm.valid) {
      this.registerService.registerUser(newUser);
      //this.router.navigateByUrl('/home')
    } else {
      console.log('Form is invalid');
    }
  }
}
