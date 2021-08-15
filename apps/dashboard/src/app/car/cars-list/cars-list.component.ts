import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from "@inventory/api-interfaces";

@Component({
  selector: 'inventory-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {
@Input() cars: Car[] | null;
@Input() readonly = false;
@Output() selected = new EventEmitter();
@Output() deleted = new EventEmitter();
}
