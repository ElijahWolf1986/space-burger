import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP } from "../types";
import { TError, IhideError, IshowError } from "./actionTypes";

export const showError = (error: TError): IshowError => {
  return {
    type: SHOW_ERROR_POPUP,
    payload: error,
  };
};

export const hideError = (): IhideError => {
  return {
    type: HIDE_ERROR_POPUP,
  };
};
