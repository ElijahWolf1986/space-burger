import {
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
} from "../types";

const initialStateIngredient = {
  currentIngredient: null,
};

export const getIngredientInfoReducer = (
  state = initialStateIngredient,
  action
) => {
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
