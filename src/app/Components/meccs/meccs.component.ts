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
import { MatTimepickerModule } from '@angular/material/timepicker';
import { Csapat } from '../../Model/csapat';
import { Meccs } from '../../Model/meccs';
import { Biro } from '../../Model/biro';
import { ReactiveFormsModule } from '@angular/forms';
import { MeccsService } from '../../Services/meccs.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule, MatTab, MatTabGroup } from '@angular/material/tabs';

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
    ReactiveFormsModule,
    MatTabsModule,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './meccs.component.html',
  styleUrl: './meccs.component.css'
})
export class MeccsComponent {

  constructor(
    private meccsService: MeccsService,
    private snackBar: MatSnackBar
  ) { }

  teams: Csapat[] = [
    {
      nev: 'Team 1',
      jatekoksok: [],
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
      const formattedDate = date.toISOString().split('T')[0];
      this.meccsForm.patchValue({
        datum: formattedDate
      });
    }
  }

  onTimeChange(event: any) {
    console.log(event.value);
    
    let time = event.value;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    console.log(hours.toString(), minutes.toString());
    this.meccsForm.patchValue({
      ido: hours + ':' + minutes
    });
  }

  createMatch() {
    const newMeccs: Meccs = {
      hazai: this.meccsForm.value.hazai!,
      vendeg: this.meccsForm.value.vendeg!,
      datum: this.meccsForm.value.datum!,
      ido: this.meccsForm.value.ido!.toString().split(' ')[4],
      helyszin: this.meccsForm.value.helyszin!,
      biro: this.meccsForm.value.biro!
    }
    
    if (this.meccsForm.valid) {
      // TODO: Implement same team validation handling
      // if(this.meccsForm.value.hazai?.nev == this.meccsForm.value.vendeg?.nev) {
      //   this.snackBar.open('Hazai és vendég csapat nem lehet ugyanaz!', 'OK', {
      //     duration: 3000,
      //   });
      //   return;
      // }
      console.log('Form is valid');
      this.meccsService.addMatch(newMeccs);

    } else {
      console.log('Form is invalid');
      console.log(newMeccs);
    }


  }
  //TODO : Implement same team validation handling
  checkForSameTeam() {
    if (this.meccsForm.value.hazai?.nev == this.meccsForm.value.vendeg?.nev) {
      this.meccsForm.get('vendeg')?.setErrors({ sameTeam: true });
      return true;
    }
    return false;
  }
}
 