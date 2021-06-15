import {
  getIngredients,
  getSelectedIngredient,
  removeSelectedIngredient,
} from "./ingredientsActions";
import { loginUser, createUser, resetUserPassword, getCodeUserPassword, logout, refreshToken, getUserInfo } from "./userInfoActions";
import { showError, hideError } from "./errorActions";
import { getOrder, hideOrder } from "./orderActions";
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
};

export function closeAllPopups() {
  return (dispatch) => {
    dispatch(hideError());
    dispatch(removeSelectedIngredient());
    dispatch(hideOrder());
    dispatch(hideMenu());
    dispatch(hidePersonalMenu());
  };
}

