import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'active-cars', pathMatch: 'full'},
  { path: 'active-cars', loadChildren: () => import('./active-cars/active-cars.module').then(module => module.ActiveCarsModule) },
  { path: 'passed-cars', loadChildren: () => import('./passed-cars/passed-cars.module').then(module => module.PassedCarsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
