import {
  getIngredients,
  getSelectedIngredient,
  removeSelectedIngredient,
} from "./ingredientsActions";
import {
  loginUser,
  createUser,
  resetUserPassword,
  getCodeUserPassword,
  logout,
  refreshToken,
  getUserInfo,
  updateUserInfo,
} from "./userInfoActions";
import { showError, hideError } from "./errorActions";
import {
  getOrder,
  hideOrder,
  getSelectedOrder,
  removeSelectedOrder,
} from "./orderActions";
import {
  showMenu,
  hideMenu,
  showPersonalMenu,
  hidePersonalMenu,
} from "./menuActions";
import {
  moveClientIngredient,
  removeClientIngredient,
  addClientIngredient,
  clearClientIngredients,
} from "./clientIngredientsActions";

import {
  wsConnectionSuccess,
  wsGetOrders,
  wsSendMessage,
  wsConnectionError,
  wsConnectionClosed,
} from "./webSocketActions";
import { AppDispatch, AppThunk } from "../store";


export {
  loginUser,
  createUser,
  resetUserPassword,
  getCodeUserPassword,
  showError,
  getOrder,
  hideOrder,
  moveClientIngredient,
  removeClientIngredient,
  addClientIngredient,
  clearClientIngredients,
  showMenu,
  hideMenu,
  showPersonalMenu,
  hidePersonalMenu,
  getIngredients,
  getSelectedIngredient,
  removeSelectedIngredient,
  logout,
  refreshToken,
  getUserInfo,
  updateUserInfo,
  getSelectedOrder,
  removeSelectedOrder,
  wsConnectionSuccess,
  wsGetOrders,
  wsSendMessage,
  wsConnectionError,
  wsConnectionClosed,
};

export const closeAllPopups: AppThunk = (afterClose) => {
  return (dispatch: AppDispatch) => {
    dispatch(hideError());
    dispatch(removeSelectedIngredient());
    dispatch(hideOrder());
    dispatch(hideMenu());
    dispatch(hidePersonalMenu());
    dispatch(removeSelectedOrder());
    if (afterClose) dispatch(afterClose);
  };
}
