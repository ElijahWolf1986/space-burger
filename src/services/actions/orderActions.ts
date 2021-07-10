import { showError, hideError } from "./errorActions";
import { clearClientIngredients } from "./clientIngredientsActions";
import { urlApi } from "../../utils/constants";
import IngredientsApi from "../../utils/Api";
import { AppDispatch, AppThunk } from "../store";
import {
  TOrder,
  IhideOrder,
  IgetSelectedOrder,
  IremoveSelectedOrder,
} from "./actionTypes";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  GET_SELECTED_ORDER,
  REM_SELECTED_ORDER,
} from "../types";
const burgerApi = new IngredientsApi(urlApi);

export const getOrder: AppThunk = (ingredients) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST, 
    });
    dispatch(
      showError({ statusText: "подождите...", title: "идет загрузка заказа" })
    );
    burgerApi
      .getOrder(ingredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res,
        });
        dispatch(clearClientIngredients());
        dispatch(hideError());
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
};

export const hideOrder = (): IhideOrder => {
  return {
    type: REM_ORDER,
  };
};

export const getSelectedOrder = (currentOrder: TOrder): IgetSelectedOrder => {
  return {
    type: GET_SELECTED_ORDER,
    payload: currentOrder,
  };
};

export const removeSelectedOrder = (): IremoveSelectedOrder => {
  return {
    type: REM_SELECTED_ORDER,
  };
};
