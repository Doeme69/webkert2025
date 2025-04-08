import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: 'home', component: HomeComponent}])
  ]
})
export class HomeModule { }
