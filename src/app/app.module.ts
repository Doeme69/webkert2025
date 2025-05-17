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
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCfR5wKFe_-JGbCo_-CajrBhS0DQLZww7s",
  authDomain: "webkertropi.firebaseapp.com",
  projectId: "webkertropi",
  storageBucket: "webkertropi.firebasestorage.app",
  messagingSenderId: "731566050483",
  appId: "1:731566050483:web:148913ca5a2a334a9574c6"
};

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatToolbar,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    AppComponent,
    HomeComponent,
    JatekosokComponent,
    LoginComponent,
    RegisterComponent,
    MeccsComponent
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppModule { }

const app = initializeApp(firebaseConfig);
