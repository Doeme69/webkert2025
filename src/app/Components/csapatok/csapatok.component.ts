import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Csapat } from '../../Model/csapat';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../../Services/auth.service';
import { CsapatService } from '../../Services/csapat.service';

@Component({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule
  ],
  selector: 'app-csapatok',
  templateUrl: './csapatok.component.html',
  styleUrl: './csapatok.component.css'
})
export class CsapatokComponent {

  constructor(private authService: AuthService, private csapatService: CsapatService) {}

   csapatForm = new FormGroup({
    nev: new FormControl('', Validators.required)
  });

  createTeam() {
    if (this.csapatForm.valid) {
      const newTeam: Csapat = {
        nev: this.csapatForm.value.nev!,
        csoport: '',
        pontszam: 0, 
        gyozelem: 0,
        veszteseg: 0,
        jatekosok: ''
      };

      this.csapatService.createCsapat(newTeam);

      console.log('New team:', newTeam);
      }
  }

  isPlayer() {
    return localStorage.getItem('isPlayer') === 'true';
  }
}
