import { ActionReducerMap } from "@ngrx/store";
import * as fromCars from './cars/cars.reducer';

export interface AppState {
  [fromCars.CAR_FEATURE_KEY]: fromCars.CarState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromCars.CAR_FEATURE_KEY]: fromCars.carReducer
};