import { v4 as uuidv4 } from "uuid";
import {
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CLEAR_CLIENT_INGREDIENTS,
} from "../types";

const initialStateClient = {
  clientIngredients: [],
  whatIsBun: null,
};

export const getClientIngredientsReducer = (
  state = initialStateClient,
  action
) => {
  switch (action.type) {
    case PUT_CLIENT_INGREDIENT: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          whatIsBun: action.payload,
        };
      }
      return {
        ...state,
        clientIngredients: [
          ...state.clientIngredients,
          { ...action.payload, ingredientId: uuidv4()},
        ],
      };
    }
    case REM_CLIENT_INGREDIENT: {
      return {
        ...state,
        clientIngredients: [
          ...state.clientIngredients.filter(
            (item) => item.ingredientId !== action.payload
          ),
        ],
      };
    }
    case MOVE_CLIENT_INGREDIENT: {
      const { dragIndex, hoverIndex } = action.payload;
      const ingredients = [...state.clientIngredients];
      ingredients.splice(dragIndex, 0, ingredients.splice(hoverIndex, 1)[0]);
      return {
        ...state,
        clientIngredients: ingredients,
      };
    }
    case CLEAR_CLIENT_INGREDIENTS: {
      return {
        ...state,
        clientIngredients: [],
        whatIsBun: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
