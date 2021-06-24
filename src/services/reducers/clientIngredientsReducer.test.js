import {
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CLEAR_CLIENT_INGREDIENTS,
} from "../types";
import { getClientIngredientsReducer } from "./clientIngredientsReducer";

const initialStateClient = {
  clientIngredients: [],
  whatIsBun: null,
};
const initialStateClientForMove = {
  clientIngredients: [0, 1, 2, 3, 4],
  whatIsBun: null,
};
const initialStateClientForRemove = {
  clientIngredients: [
    {
      name: "Хлеб",
      type: "main",
      ingredientId: 0,
    },
    {
      name: "Мясо",
      type: "main",
      ingredientId: 1,
    },
  ],
  whatIsBun: null,
};
const sampleDataWithRemove = 0;
const sampleDataWithMove = {
  dragIndex: 0,
  hoverIndex: 2,
};
const sampleDataIngredient = {
  name: "Краторная булка N-200i",
  type: "bun",
};

describe("getClientIngredientsReducer", () => {
  it("should return the initial state", () => {
    expect(getClientIngredientsReducer(undefined, {})).toEqual(
      initialStateClient
    );
  });

  it("should put ingredient", () => {
    expect(
      getClientIngredientsReducer(initialStateClient, {
        type: PUT_CLIENT_INGREDIENT,
        payload: sampleDataIngredient,
      })
    ).toEqual(
      expect.objectContaining({
        whatIsBun: sampleDataIngredient,
      })
    );
  });

  it("should move ingredient", () => {
    expect(
      getClientIngredientsReducer(initialStateClientForMove, {
        type: MOVE_CLIENT_INGREDIENT,
        payload: sampleDataWithMove,
      })
    ).toEqual(
      expect.objectContaining({
        clientIngredients: [2, 0, 1, 3, 4],
        whatIsBun: initialStateClient.whatIsBun,
      })
    );
  });

  it("should clear ingredient", () => {
    expect(
      getClientIngredientsReducer(initialStateClient, {
        type: CLEAR_CLIENT_INGREDIENTS,
      })
    ).toEqual(
      expect.objectContaining({
        clientIngredients: [],
        whatIsBun: null,
      })
    );
  });

  it("should remove ingredient", () => {
    expect(
      getClientIngredientsReducer(initialStateClientForRemove, {
        type: REM_CLIENT_INGREDIENT,
        payload: sampleDataWithRemove,
      })
    ).toEqual(
      expect.objectContaining({
        clientIngredients: [
          {
            name: "Мясо",
            type: "main",
            ingredientId: 1,
          },
        ],
        whatIsBun: null,
      })
    );
  });
});
