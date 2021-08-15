import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarComponent } from './car/car.component';
import { CarsListComponent } from './car/cars-list/cars-list.component';
import { CarsDetailsComponent } from './car/cars-details/cars-details.component';
import { MaterialModule } from '@inventory/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@inventory/core-data';
import { CoreStateModule } from '@inventory/core-state';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, CarComponent, CarsListComponent, CarsDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
