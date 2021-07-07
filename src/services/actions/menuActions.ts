import {
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
} from "../types";
import {
  IshowMenu,
  IhideMenu,
  IshowPersonalMenu,
  IhidePersonalMenu,
} from "./actionTypes";

export const showMenu = (): IshowMenu => {
  return {
    type: SHOW_MENU,
  };
};

export const hideMenu = (): IhideMenu => {
  return {
    type: HIDE_MENU,
  };
};
export const showPersonalMenu = (): IshowPersonalMenu => {
  return {
    type: SHOW_PERSONAL_MENU,
  };
};
export const hidePersonalMenu = (): IhidePersonalMenu => {
  return {
    type: HIDE_PERSONAL_MENU,
  };
};
