import IngredientsApi from "../../utils/Api";
import { showError } from "./errorActions";
import { urlApi } from "../../utils/constants";
import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
} from "../types";

const burgerApi = new IngredientsApi(urlApi);

export function getIngredients() {
  return (dispatch) => {
    dispatch({
      type: GET_ITEMS_INGREDIENTS_REQUEST,
    });
    burgerApi
      .getIngredientList()
      .then((res) => {
        dispatch({
          type: GET_ITEMS_INGREDIENTS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
        dispatch({
          type: GET_ITEMS_INGREDIENTS_FAILED,
        });
      });
  };
}

export function getSelectedIngredient(ingredient) {
  return {
    type: GET_SELECTED_INGREDIENT_INFO,
    payload: ingredient,
  };
}

export function removeSelectedIngredient() {
  return {
    type: REM_SELECTED_INGREDIENT_INFO,
  };
}
