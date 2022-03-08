import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassedCarsComponent } from './passed-cars.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PassedCarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PassedCarsComponent }]),
    MaterialModule
  ]
})
export class PassedCarsModule { }
