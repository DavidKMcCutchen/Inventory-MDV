import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { CarComponent } from './car/car.component';
import { CarService } from "@inventory/core-data";
import { LoginComponent } from "@inventory/ui-login";

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path:'cars', component: CarComponent},
  {path:'login', component: LoginComponent},
  {path:'**', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
