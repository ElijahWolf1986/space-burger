import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP } from "../types";
import { TError, TApplicationActions } from "../actions/actionTypes";

type TinitialStateApp = {
  error: TError;
};

const initialStateApp: TinitialStateApp = {
  error: {},
};

export const putAppErrorsReducer = (
  state = initialStateApp,
  action: TApplicationActions
): TinitialStateApp => {
  switch (action.type) {
    case SHOW_ERROR_POPUP: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case HIDE_ERROR_POPUP: {
      return {
        ...state,
        error: {},
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
