import { urlApi } from "../../utils/constants";
import IngredientsApi from "../../utils/Api";
import {showError} from "./errorActions";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_USER_PASSWORD,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../types";

const burgerApi = new IngredientsApi(urlApi);

export function loginUser({ email, password }) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    burgerApi
      .loginUser(email, password)
      .then((res) => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
        dispatch({
          type: LOGIN_USER_FAILED,
        });
      });
  };
}

export function createUser({ email, password, name }) {
  return (dispatch) => {
    dispatch({
      type: CREATE_USER_REQUEST,
    });
    burgerApi
      .registerUser(email, password, name)
      .then((res) => {
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
        dispatch({
          type: CREATE_USER_FAILED,
        });
      });
  };
}
export function resetUserPassword() {
  return (dispatch) => {
    burgerApi
      .forgotPassword()
      .then((res) => {
        dispatch({
          type: RESET_USER_PASSWORD,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
      });
  };
}
