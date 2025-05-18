import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Csapat } from '../../Model/csapat';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../../Services/auth.service';
import { CsapatService } from '../../Services/csapat.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@Component({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  selector: 'app-csapatok',
  templateUrl: './csapatok.component.html',
  styleUrl: './csapatok.component.css'
})
export class CsapatokComponent implements OnInit {

  constructor(private authService: AuthService, private csapatService: CsapatService) {}

  osszesCsapat: Csapat[] = [];
  displayedColumns: string[] = ['nev', 'csoport', 'gyozelem', 'veszteseg', 'pontszam'];

  async ngOnInit(){
    this.osszesCsapat = await this.csapatService.getCsapatok();
  }

  searchResult: any;

  csapatForm = new FormGroup({
    nev: new FormControl('', Validators.required)
  });

  searchForm = new FormGroup({
    username: new FormControl('', Validators.required)
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
   
  async searchUser(){
    const searchedUser = await this.csapatService.searchUser(this.searchForm.value.username!);
    this.searchResult = searchedUser;
  }

  addPlayer(){
    console.log('Inviting player:', this.searchResult);
    this.csapatService.addPlayerToTeam(this.searchResult)
  }

  isPlayer() {
    return localStorage.getItem('isPlayer') === 'true';
  }
}
