import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP } from "../types";

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
