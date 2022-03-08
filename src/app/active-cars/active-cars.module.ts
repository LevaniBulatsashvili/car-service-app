import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveCarsComponent } from './active-cars.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ActiveCarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ActiveCarsComponent }]),
    MaterialModule
  ]
})
export class ActiveCarsModule { }
