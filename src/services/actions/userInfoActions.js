import { urlApi } from "../../utils/constants";
import IngredientsApi from "../../utils/Api";
import { showError } from "./errorActions";
import { setCookie } from "../../utils/func";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_USER_PASSWORD,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REM_USER_INFO,
  REFRESH_USER_TOKEN,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  GET_USER_PASSWORD_CODE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILED,
} from "../types";

const burgerApi = new IngredientsApi(urlApi);

export function getUserInfo() {
  return (dispatch) => {
    dispatch({
      type: GET_USER_INFO_REQUEST,
    });
    burgerApi
      .getUserInfo()
      .then((res) => {
        if (!res.success) {
          throw res;
        }
        dispatch({
          type: GET_USER_INFO_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        if (error.message === "jwt expired") {
          dispatch(refreshToken(getUserInfo()));
          console.log(error);
          dispatch({
            type: GET_USER_INFO_FAILED,
          });
        }
      });
  };
}

export function updateUserInfo(name, email, password) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_USER_INFO_REQUEST,
    });
    burgerApi
      .updateUserInfo(name, email, password)
      .then((res) => {
        if (!res.success) {
          throw res;
        }
        dispatch({
          type: UPDATE_USER_INFO_SUCCESS,
          payload: res,
        });
      })
      .catch((error) => {
        if (error.message === "jwt expired") {
          dispatch(refreshToken(updateUserInfo(name, email, password)));
          console.log(error);
          dispatch({
            type: UPDATE_USER_INFO_FAILED,
          });
        }
      });
  };
}

export function loginUser({ email, password }) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    burgerApi
      .loginUser(email, password)
      .then((res) => {
        if (res.accessToken && res.refreshToken) {
          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
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
        if (res.accessToken && res.refreshToken) {
          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
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
export function getCodeUserPassword(email) {
  return (dispatch) => {
    burgerApi
      .forgotPassword(email)
      .then((res) => {
        dispatch({
          type: GET_USER_PASSWORD_CODE,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
      });
  };
}

export function resetUserPassword(password, code) {
  return (dispatch) => {
    burgerApi
      .resetPassword(password, code)
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

export function logout(refreshToken) {
  return (dispatch) => {
    burgerApi
      .logout(refreshToken)
      .then((res) => {
        dispatch({
          type: REM_USER_INFO,
          payload: res,
        });
        setCookie("token", "");
        localStorage.removeItem("refreshToken");
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
      });
  };
}

export function refreshToken(afterRefresh) {
  return (dispatch) => {
    burgerApi
      .refreshToken(localStorage.getItem("refreshToken"))
      .then((res) => {
        if (res.accessToken && res.refreshToken) {
          setCookie("token", res.accessToken.split("Bearer ")[1]);
          localStorage.setItem("refreshToken", res.refreshToken);
        }
        dispatch({
          type: REFRESH_USER_TOKEN,
          payload: res,
        });
        if (afterRefresh) dispatch(afterRefresh);
      })
      .catch((error) => {
        console.log(error);
        dispatch(showError(error));
      });
  };
}
