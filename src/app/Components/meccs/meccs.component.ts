import { Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { Csapat } from '../../Model/csapat';
import { Meccs } from '../../Model/meccs';
import { Biro } from '../../Model/biro';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-meccs',
  imports: [
    MatLabel,
    MatFormField,
    MatButton,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatTimepickerModule,
    MatOption,
    ReactiveFormsModule
  ],
  templateUrl: './meccs.component.html',
  styleUrl: './meccs.component.css'
})
export class MeccsComponent {

  teams: Csapat[] = [
    {
      nev: 'Team 1',
      jatekoksok: [], // You can add players later
      csoport: 'A',
      pontszam: 0,
      gyozelem: 0,
      veszteseg: 0
    },
    {
      nev: 'Team 2',
      jatekoksok: [],
      csoport: 'A',
      pontszam: 3,
      gyozelem: 1,
      veszteseg: 0
    },
    {
      nev: 'Team 3',
      jatekoksok: [],
      csoport: 'B',
      pontszam: 6,
      gyozelem: 2,
      veszteseg: 1
    },
    {
      nev: 'Team 4',
      jatekoksok: [],
      csoport: 'B',
      pontszam: 9,
      gyozelem: 3,
      veszteseg: 0
    }
  ];

  meccsForm = new FormGroup({
    hazai: new FormControl<Csapat>({
      nev: '',
      jatekoksok: [],
      csoport: '',
      pontszam: 0,
      gyozelem: 0,
      veszteseg: 0
    }, Validators.required),
    vendeg: new FormControl<Csapat>({
      nev: '',
      jatekoksok: [],
      csoport: '',
      pontszam: 0,
      gyozelem: 0,
      veszteseg: 0
    }, Validators.required),
    datum: new FormControl('', Validators.required),
    ido: new FormControl('', Validators.required),
    helyszin: new FormControl('', Validators.required),
    biro: new FormControl<Biro>({
      nev: '',
      username: '',
      email: '',
      jelszo: '',
      role: 'biro'
    }, Validators.required)
  })

  onDateChange(event: any) {
    const date = event.value;
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      this.meccsForm.patchValue({
        datum: formattedDate
      });
    }
  }

  onTimeChange(event: any) {
    const time = event.value;
    if (time) {
      // Format time as HH:mm
      const hours = time.getHours().toString().padStart(2, '0');
      const minutes = time.getMinutes().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;
      
      this.meccsForm.patchValue({
        ido: formattedTime
      });
    }
  }

  createMatch() {
    const newMeccs: Meccs = {
      hazai: this.meccsForm.value.hazai!,
      vendeg: this.meccsForm.value.vendeg!,
      datum: this.meccsForm.value.datum!,
      ido: this.meccsForm.value.ido!,
      helyszin: this.meccsForm.value.helyszin!,
      biro: this.meccsForm.value.biro!
    } 

    if (this.meccsForm.valid) {
      console.log(newMeccs);
    } else {
      console.log('Form is invalid');
      console.log(newMeccs);
      
    }
  }
}
