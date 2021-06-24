import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP } from "../types";

const initialStateApp = {
  error: {},
};

export const putAppErrorsReducer = (state = initialStateApp, action) => {
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
