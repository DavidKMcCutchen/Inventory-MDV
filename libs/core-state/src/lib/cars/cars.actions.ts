import { Car } from "@inventory/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity

export const selectCar = createAction(
  '[CARS] Select Car',
  props<{ carId: string }>()
);

// Load All Entities

export const loadCars = createAction(
  '[CARS] Load Cars'
);

export const loadCarsSuccess = createAction(
  '[CARS] Load Cars Success',
  props<{ cars: Car[] }>()
);

export const loadCarsFailure = createAction(
  '[CARS] Load Cars Failure',
  props<{ error: any }>()
);

// Load Single Entity

export const loadCar = createAction(
  '[CARS] Load Car',
  props<{ carId: string }>()
);

export const loadCarSuccess = createAction(
  '[CARS] Load Car Success',
  props<{ car: Car}>()
);

export const loadCarFailure = createAction(
  '[CARS] Load Car Failure',
  props<{ error: any }>()
);

// Load Update Entity

export const updateCar = createAction(
  '[CARS] Update Car',
  props<{ car: Car}>()
);

export const updateCarSuccess = createAction(
  '[CARS] Update Car Success',
  props<{ car: Car}>()
);

export const updateCarFailure = createAction(
  '[CARS] Update Car Failure',
  props<{ error: any }>()
);

// Load Delete Entity

export const deleteCar = createAction(
  '[CARS] Delete Car',
  props<{ car: Car}>()
);

export const deleteCarSuccess = createAction(
  '[CARS] Delete Car Success',
  props<{ car: Car}>()
);

export const deleteCarFailure = createAction(
  '[CARS] Delete Car Failure',
  props<{ error: any }>()
);

// Load Create Entity

export const createCar = createAction(
  '[CARS] Create Car',
  props<{ car: Car}>()
);

export const createCarSuccess = createAction(
  '[CARS] Create Car Success',
  props<{ car: Car}>()
);

export const createCarFailure = createAction(
  '[CARS] Create Car Failure',
  props<{ error: any}>()
);