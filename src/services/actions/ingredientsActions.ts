import IngredientsApi from "../../utils/Api";
import { showError } from "./errorActions";
import { urlApi } from "../../utils/constants";
import { AppDispatch, AppThunk } from "../store";
import { TIngredient, IgetSelectedIngredient, IremoveSelectedIngredient } from "../actions/actionTypes";
import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
} from "../types";

const burgerApi = new IngredientsApi(urlApi);

export const getIngredients: AppThunk = () => {
  return (dispatch: AppDispatch) => {
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
};

export const getSelectedIngredient = (ingredient: TIngredient): IgetSelectedIngredient => {
  return {
    type: GET_SELECTED_INGREDIENT_INFO,
    payload: ingredient,
  };
}

export const removeSelectedIngredient = (): IremoveSelectedIngredient => {
  return {
    type: REM_SELECTED_INGREDIENT_INFO,
  };
}
