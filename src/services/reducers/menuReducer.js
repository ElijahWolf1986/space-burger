import {
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
} from "../types";

const initialStateMenu = {
  isTooglePopup: false,
  isTooglePersonal: false,
};

export const menuReducer = (state = initialStateMenu, action) => {
  switch (action.type) {
    case SHOW_MENU: {
      return {
        ...state,
        isTooglePopup: true,
        isTooglePersonal: false,
      };
    }
    case HIDE_MENU: {
      return {
        ...state,
        isTooglePopup: false,
        isTooglePersonal: false,
      };
    }
    case SHOW_PERSONAL_MENU: {
      return {
        ...state,
        isTooglePersonal: true,
      };
    }
    case HIDE_PERSONAL_MENU: {
      return {
        ...state,
        isTooglePersonal: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
