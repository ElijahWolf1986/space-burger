import {
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CLEAR_CLIENT_INGREDIENTS,
} from "../types";
import {
  TDnDIndex,
  TIngredient,
  IclearClientIngredients,
  ImoveClientIngredient,
  IremoveClientIngredient,
  IaddClientIngredient,
} from "./actionTypes";

export const moveClientIngredient = ({
  dragIndex,
  hoverIndex,
}: TDnDIndex): ImoveClientIngredient => {
  return {
    type: MOVE_CLIENT_INGREDIENT,
    payload: { dragIndex, hoverIndex },
  };
};

export const removeClientIngredient = (
  ingredientId: string
): IremoveClientIngredient => {
  return {
    type: REM_CLIENT_INGREDIENT,
    payload: ingredientId,
  };
};

export const addClientIngredient = (
  ingredient: TIngredient
): IaddClientIngredient => {
  return {
    type: PUT_CLIENT_INGREDIENT,
    payload: ingredient,
  };
};

export const clearClientIngredients = (): IclearClientIngredients => {
  return {
    type: CLEAR_CLIENT_INGREDIENTS,
  };
};
