import { Car } from "@inventory/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CarActions from './cars.actions';

export const CAR_FEATURE_KEY = 'cars';

export interface CarState extends EntityState<Car> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
};

export interface CarPartialState {
  readonly [CAR_FEATURE_KEY]: CarState
};

export const carAdapter: EntityAdapter<Car> = createEntityAdapter<Car>();

export const initialCarState: CarState = carAdapter.getInitialState(
  {
    loaded: false
  }
);

const onFailure = (state, { error }): CarState => ({ ...state, error });

const onDispatch = (state, action): CarState => ({
  ...state,
  loaded: false,
  error: null
});

const _carReducer = createReducer(
  initialCarState,
  on(
    CarActions.loadCarFailure,
    CarActions.loadCarsFailure,
    CarActions.updateCarFailure,
    CarActions.deleteCarFailure,
    CarActions.createCarFailure,
    onFailure
  ),
  on(
    CarActions.loadCar,
    CarActions.loadCars,
    CarActions.updateCar,
    CarActions.deleteCar,
    CarActions.createCar,
    onDispatch
  ),
  on(
    CarActions.loadCarSuccess, (state,{ car }) =>
    carAdapter.upsertOne(car, { ...state, loaded: true})
  ),
  on(
    CarActions.selectCar, (state, { carId }) => ({
      ...state,
      selectedId: carId
    })
  ),
  on(
    CarActions.loadCarsSuccess, (state, { cars }) =>
    carAdapter.setAll(cars, { ...state, loaded: true })
  ),
  on(
    CarActions.deleteCarSuccess, (state, { car }) =>
    carAdapter.removeOne(car.id, { ...state, loaded: true })
  ),
  on(
    CarActions.updateCarSuccess, (state, { car}) =>
    carAdapter.updateOne(
      { id: car.id, changes: car },
      { ...state, loaded: true }
    )
  ),
  on(
    CarActions.createCarSuccess, (state, { car }) =>
    carAdapter.addOne(car, { ...state, loaded: true })
  )
)

export function carReducer(
  state: CarState | undefined,
  action: Action
) {
  return _carReducer(state, action)
}