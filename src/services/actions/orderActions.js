import { showError } from "./errorActions";
import { clearClientIngredients } from "./clientIngredientsActions";
import { urlApi } from "../../utils/constants";
import IngredientsApi from "../../utils/Api";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  GET_SELECTED_ORDER,
  REM_SELECTED_ORDER,
} from "../types";
const burgerApi = new IngredientsApi(urlApi);

export function getOrder(ingredients) {
  return (dispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    burgerApi
      .getOrder(ingredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res,
        });
        dispatch(clearClientIngredients());
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
}

export function hideOrder() {
  return {
    type: REM_ORDER,
  };
}

export function getSelectedOrder(currentOrder) {
  return {
    type: GET_SELECTED_ORDER,
    payload: currentOrder,
  };
}

export function removeSelectedOrder() {
  return {
    type: REM_SELECTED_ORDER,
  };
}
