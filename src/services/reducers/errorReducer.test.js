import { SHOW_ERROR_POPUP, HIDE_ERROR_POPUP } from "../types";
import { putAppErrorsReducer } from "./errorReducer";

const initialStateApp = {
  error: {},
};

const error = { errortext: "error" };

describe("putAppErrorsReducer", () => {
  it("should return the initial state", () => {
    expect(putAppErrorsReducer(undefined, {})).toEqual(initialStateApp);
  });

  it("should show error", () => {
    expect(
      putAppErrorsReducer(initialStateApp, {
        type: SHOW_ERROR_POPUP,
        payload: error,
      })
    ).toEqual(
      expect.objectContaining({
        error: error,
      })
    );
  });
  it("should hide error", () => {
    expect(
      putAppErrorsReducer(initialStateApp, {
        type: HIDE_ERROR_POPUP,
      })
    ).toEqual(
      expect.objectContaining({
        error: {},
      })
    );
  });
});
