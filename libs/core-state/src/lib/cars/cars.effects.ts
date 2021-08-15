import { Injectable } from "@angular/core";
import { CarService } from "@inventory/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as CarActions from './cars.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Car } from "@inventory/api-interfaces";

@Injectable()
export class CarEffects {
  loadCar$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CarActions.loadCar),
    fetch({
      run: (action) =>
       this.carService
       .find(action.carId)
       .pipe(
         map((car: Car) =>
          CarActions.loadCarSuccess({ car })
         )
       ),
      onError: (action, error) => CarActions.loadCarFailure({ error }),
    })
   ),
  );

  loadCars$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CarActions.loadCars),
    fetch({
      run: () =>
       this.carService
       .all()
       .pipe(
         map((cars: Car[]) =>
          CarActions.loadCarsSuccess({ cars })
       )
      ),
    onError: (action, error) => CarActions.loadCarsFailure({ error }) 
    })
  ) )

  updateCar$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CarActions.updateCar),
    pessimisticUpdate({
      run: (action) =>
       this.carService
       .update(action.car)
       .pipe(
         map((car: Car) => 
         CarActions.updateCarSuccess({car})
         )
       ),
      onError: (action, error) => CarActions.updateCarFailure({ error }), 
    })
  ) )

  deleteCar$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CarActions.deleteCar),
    pessimisticUpdate({
      run: (action) =>
      this.carService
      .delete(action.car)
      .pipe(
        map(() =>
        CarActions.deleteCarSuccess({ car: action.car })
        )
      ),
    onError: (action, error) => CarActions.deleteCarFailure  
    })
  ) )

  createCar$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CarActions.createCar),
    pessimisticUpdate({
      run: (action) =>
      this.carService
      .create(action.car)
      .pipe(
        map((car: Car) =>
        CarActions.createCarSuccess({ car }) 
        )
      ),
    onError: (action, error) => CarActions.createCarFailure({ error })  
    })
  ) )
  
   constructor(
     private actions$: Actions,
     private carService: CarService
   ) {}
}