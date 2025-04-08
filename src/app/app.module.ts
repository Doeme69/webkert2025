import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppComponent} from './app.component';
import {HomeComponent} from './Components/home/home.component';
import {JatekosokComponent} from './Components/jatekosok/jatekosok.component';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {MeccsComponent} from './Components/meccs/meccs.component';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JatekosokComponent,
    LoginComponent,
    RegisterComponent,
    MeccsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppModule { }
