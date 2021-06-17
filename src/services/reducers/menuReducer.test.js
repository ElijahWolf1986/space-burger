import {
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
} from "../types";
import { menuReducer } from "./menuReducer";

const initialStateMenu = {
  isTooglePopup: false,
  isTooglePersonal: false,
};

describe("menuReducer", () => {
  it("should return the initial state", () => {
    expect(menuReducer(undefined, {})).toEqual(initialStateMenu);
  });

  it("should show menu", () => {
    expect(
      menuReducer(initialStateMenu, {
        type: SHOW_MENU,
      })
    ).toEqual(
      expect.objectContaining({
        isTooglePopup: true,
        isTooglePersonal: false,
      })
    );
  });
  it("should hide menu", () => {
    expect(
      menuReducer(initialStateMenu, {
        type: HIDE_MENU,
      })
    ).toEqual(
      expect.objectContaining({
        isTooglePopup: false,
        isTooglePersonal: false,
      })
    );
  });

  it("should show personal menu", () => {
    expect(
      menuReducer(initialStateMenu, {
        type: SHOW_PERSONAL_MENU,
      })
    ).toEqual(
      expect.objectContaining({
        isTooglePersonal: true,
      })
    );
  });

  it("should hide personal menu", () => {
    expect(
      menuReducer(initialStateMenu, {
        type: HIDE_PERSONAL_MENU,
      })
    ).toEqual(
      expect.objectContaining({
        isTooglePersonal: false,
      })
    );
  });
});
