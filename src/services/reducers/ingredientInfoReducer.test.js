import {
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
} from "../types";
import { getIngredientInfoReducer } from "./ingredientInfoReducer";

const initialStateIngredient = {
  currentIngredient: null,
};

const currentIngredient = { name: "хлеб", id: "0003454" };

describe("getIngredientInfoReducer", () => {
  it("should return the initial state", () => {
    expect(getIngredientInfoReducer(undefined, {})).toEqual(
      initialStateIngredient
    );
  });

  it("should get selected ingredient", () => {
    expect(
      getIngredientInfoReducer(initialStateIngredient, {
        type: GET_SELECTED_INGREDIENT_INFO,
        payload: currentIngredient,
      })
    ).toEqual(
      expect.objectContaining({
        currentIngredient: currentIngredient,
      })
    );
  });
  it("should remove selected ingredient", () => {
    expect(
      getIngredientInfoReducer(initialStateIngredient, {
        type: REM_SELECTED_INGREDIENT_INFO,
      })
    ).toEqual(
      expect.objectContaining({
        currentIngredient: null,
      })
    );
  });
});
