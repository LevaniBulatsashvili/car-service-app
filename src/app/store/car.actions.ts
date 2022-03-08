import { createAction, props } from "@ngrx/store";
import { CarInterface } from "src/app/interfaces/car.interface";

export const addToPassed = createAction(
  'addToPassed',
  props<{ car: CarInterface }>()
)

export const addToActive = createAction(
  'addToActive',
  props<{ car: CarInterface }>()
)
