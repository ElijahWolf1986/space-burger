import {
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
} from "../types";
import { TIngredient, TApplicationActions } from "../actions/actionTypes";

export type TinitialStateIngredient = {
  currentIngredient: TIngredient | null;
};

const initialStateIngredient: TinitialStateIngredient = {
  currentIngredient: null,
};

export const getIngredientInfoReducer = (
  state = initialStateIngredient,
  action: TApplicationActions
): TinitialStateIngredient => {
  switch (action.type) {
    case GET_SELECTED_INGREDIENT_INFO: {
      return {
        ...state,
        currentIngredient: action.payload,
      };
    }
    case REM_SELECTED_INGREDIENT_INFO: {
      return {
        ...state,
        currentIngredient: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
