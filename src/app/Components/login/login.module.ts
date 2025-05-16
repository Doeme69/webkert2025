 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'login', component: LoginComponent}])
  ]
})
export class LoginModule {}
