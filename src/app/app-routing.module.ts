import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {RegisterComponent} from './Components/register/register.component';
import {HomeComponent} from './Components/home/home.component';
import {MeccsComponent} from './Components/meccs/meccs.component';
import {CsapatokComponent} from './Components/csapatok/csapatok.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'csapatok', component: CsapatokComponent},
  {path: 'meccsek', component: MeccsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
