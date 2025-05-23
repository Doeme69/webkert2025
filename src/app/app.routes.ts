import { Routes } from '@angular/router';
import {RegisterComponent} from './Components/register/register.component';
import {MeccsComponent} from './Components/meccs/meccs.component';
import {LoginComponent} from './Components/login/login.component';
import {HomeComponent} from './Components/home/home.component';
import {CsapatokComponent} from './Components/csapatok/csapatok.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'csapatok', component: CsapatokComponent},
  {path: 'meccsek', component: MeccsComponent}
];
