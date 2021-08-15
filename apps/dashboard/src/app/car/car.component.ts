import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyCar, Car } from '@inventory/api-interfaces';
import { CarFacade } from '@inventory/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'inventory-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  allCars$: Observable<Car[]> = this.carFacade.allCars$;
  selectedCar$: Observable<Car> = this.carFacade.selectedCar$;

  form: FormGroup

  constructor(
    private carFacade: CarFacade,
    private formBuilder: FormBuilder
  ) {
    this.carFacade.mutations$.subscribe((_) => this.resetCar());
  }



  ngOnInit() {
    this.initForm();
    this.carFacade.loadCars();
    this.resetCar();
  }

  selectCar(car: Car) {
    this.form.patchValue(car);
    this.carFacade.selectCar(car.id)
  }

  saveCar(car: Car) {
    this.carFacade.saveCar(car)
  }

  deleteCar(car: Car) {
    this.carFacade.deleteCar(car)
  }

  resetCar() {
    this.form.reset();
    this.selectCar(emptyCar)
  }

  cancel() {
    this.resetCar();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      make: [''],
      model: [''],
      year: ['']
    })
  }

}
