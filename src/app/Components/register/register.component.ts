import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    psw: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

    } else {
      console.log('Form is invalid');
    }
  }
}
