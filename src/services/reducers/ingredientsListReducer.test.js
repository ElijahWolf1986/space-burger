import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
} from "../types";
import { putIngredientsListReducer } from "./ingredientsListReducer";

const initialStateIngredients = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const ingredients = {
  data: [1, 2, 3, 4],
};

describe("putIngredientsListReducer", () => {
  it("should return the initial state", () => {
    expect(putIngredientsListReducer(undefined, {})).toEqual(
      initialStateIngredients
    );
  });

  it("should set isLoading", () => {
    expect(
      putIngredientsListReducer(initialStateIngredients, {
        type: GET_ITEMS_INGREDIENTS_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsRequest: true,
        ingredientsFailed: false,
      })
    );
  });

  it("should set data", () => {
    expect(
      putIngredientsListReducer(initialStateIngredients, {
        type: GET_ITEMS_INGREDIENTS_SUCCESS,
        payload: ingredients,
      })
    ).toEqual({
      ingredients: ingredients,
      ingredientsRequest: false,
      ingredientsFailed: false,
    });
  });

  it("should set Error", () => {
    expect(
      putIngredientsListReducer(initialStateIngredients, {
        type: GET_ITEMS_INGREDIENTS_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsFailed: true,
        ingredientsRequest: false,
      })
    );
  });
});
