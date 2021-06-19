import {
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
} from "../types";

export function showMenu() {
  return {
    type: SHOW_MENU,
  };
}

export function hideMenu() {
  return {
    type: HIDE_MENU,
  };
}
export function showPersonalMenu() {
  return {
    type: SHOW_PERSONAL_MENU,
  };
}
export function hidePersonalMenu() {
  return {
    type: HIDE_PERSONAL_MENU,
  };
}
