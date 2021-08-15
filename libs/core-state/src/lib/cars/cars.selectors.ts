import { emptyCar } from "@inventory/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { carAdapter, CarState, CAR_FEATURE_KEY } from "./cars.reducer";

export const getCarState = createFeatureSelector<CarState>(CAR_FEATURE_KEY);

const { selectAll, selectEntities } = carAdapter.getSelectors();

export const getCarsLoaded = createSelector(
  getCarState,
  (state: CarState) => state.loaded
);

export const getCarError = createSelector(
  getCarState,
  (state: CarState) => state.error
);

export const getAllCars = createSelector(
  getCarState,
  (state: CarState) => selectAll(state)
);

export const getCarEntities = createSelector(
  getCarState,
  (state: CarState) => selectEntities(state)
);

export const getSelectedCarId = createSelector(
  getCarState,
  (state: CarState) => state.selectedId
);

export const getSelectedCar = createSelector(
  getCarEntities,
  getSelectedCarId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyCar
)