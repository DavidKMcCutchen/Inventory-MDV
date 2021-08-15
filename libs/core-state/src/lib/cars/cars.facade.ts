import { Injectable } from "@angular/core";
import { Car } from "@inventory/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { filter } from "rxjs/operators";
import * as CarActions from './cars.actions';
import * as CarSelectors from './cars.selectors';
import * as FromCars from './cars.reducer'

@Injectable({
  providedIn: 'root',
})

export class CarFacade {
  allCars$ = this.store.pipe(select(CarSelectors.getAllCars));
  selectedCar$ = this.store.pipe(select(CarSelectors.getSelectedCar));
  loaded$ = this.store.pipe(select(CarSelectors.getCarsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
     action.type === CarActions.createCar({} as any) .type ||
     action.type === CarActions.deleteCar({} as any) .type ||
     action.type === CarActions.updateCar({} as any) .type 
  )
);

selectCar (carId: string) {
  this.dispatch(CarActions.selectCar({ carId })
  )
}

loadCars() {
  this.dispatch(CarActions.loadCars())
}

loadCar(carId: string) {
  this.dispatch(CarActions.loadCar({ carId }))
}

saveCar(car: Car) {
  car.id ? this.updateCar(car) : this.createCar(car)
}

createCar(car: Car) {
  this.dispatch(CarActions.createCar({ car }))
}

updateCar(car: Car) {
  this.dispatch(CarActions.updateCar({ car }))
}

deleteCar(car: Car) {
  this.dispatch(CarActions.deleteCar({ car }))
}


dispatch(action: Action) {
  this.store.dispatch(action)

}

constructor(
  private store: Store<FromCars.CarPartialState>,
  private actions$: ActionsSubject 
) {}
}