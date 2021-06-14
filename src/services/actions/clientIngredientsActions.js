import {
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CLEAR_CLIENT_INGREDIENTS,
} from "../types";

export function moveClientIngredient({ dragIndex, hoverIndex }) {
  return {
    type: MOVE_CLIENT_INGREDIENT,
    payload: { dragIndex, hoverIndex },
  };
}

export function removeClientIngredient(ingredientId) {
  return {
    type: REM_CLIENT_INGREDIENT,
    payload: ingredientId,
  };
}

export function addClientIngredient(ingredient) {
  return {
    type: PUT_CLIENT_INGREDIENT,
    payload: ingredient,
  };
}

export function clearClientIngredients() {
  return {
    type: CLEAR_CLIENT_INGREDIENTS,
  };
}
