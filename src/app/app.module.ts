import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActiveCarsModule } from './active-cars/active-cars.module';
import { PassedCarsModule } from './passed-cars/passed-cars.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carReducer } from './store/car.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ car: carReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
