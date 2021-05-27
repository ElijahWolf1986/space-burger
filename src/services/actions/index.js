import IngredientsApi from "../../utils/Api";
import { urlIngredients, urlOrder } from "../../utils/Utils";
import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
  SHOW_ERROR_POPUP,
  HIDE_ERROR_POPUP,
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
} from "../types";

const ingredientsApi = new IngredientsApi(urlIngredients);
const orderApi = new IngredientsApi(urlOrder);

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

export function showMenu() {
  return {
    type: SHOW_MENU,
  };
}

export function hideMenu() {
  return {
    type: HIDE_MENU,
  };
}
export function showPersonalMenu() {
  return {
    type: SHOW_PERSONAL_MENU,
  };
}
export function hidePersonalMenu() {
  return {
    type: HIDE_PERSONAL_MENU,
  };
}

export function closeAllPopups() {
  return (dispatch) => {
    dispatch(hideError());
    dispatch(removeSelectedIngredient());
    dispatch(hideOrder());
    dispatch(hideMenu());
    dispatch(hidePersonalMenu());
  };
}

export function showError(error) {
  return {
    type: SHOW_ERROR_POPUP,
    payload: error,
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR_POPUP,
  };
}

export function getIngredients() {
  return (dispatch) => {
    dispatch({
      type: GET_ITEMS_INGREDIENTS_REQUEST,
    });
    ingredientsApi
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

export function getOrder(ingredients) {
  return (dispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    });

    orderApi
      .getOrder(ingredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res,
        });
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
