import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
} from "../types";
import { TIngredients, TApplicationActions } from "../actions/actionTypes";

type TinitialStateIngredients = {
  ingredients: TIngredients;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
};

const initialStateIngredients: TinitialStateIngredients = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const putIngredientsListReducer = (
  state = initialStateIngredients,
  action: TApplicationActions
): TinitialStateIngredients => {
  switch (action.type) {
    case GET_ITEMS_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_ITEMS_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.payload,
        ingredientsRequest: false,
      };
    }
    case GET_ITEMS_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
