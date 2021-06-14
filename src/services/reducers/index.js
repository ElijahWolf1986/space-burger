import { combineReducers } from "redux";
import { userInfoReducer } from "./userInfoReducer";
import { getOrderReducer } from "./orderReduser";
import { putIngredientsListReducer } from "./ingredientsListReducer";
import { menuReducer } from "./menuReducer";
import { getIngredientInfoReducer } from "./ingredientInfoReducer";
import { putAppErrorsReducer } from "./errorReducer";
import { getClientIngredientsReducer } from "./clientIngredientsReducer";

const rootReducer = combineReducers({
  burgerIngredients: putIngredientsListReducer,
  burgerIngredient: getIngredientInfoReducer,
  errors: putAppErrorsReducer,
  order: getOrderReducer,
  menu: menuReducer,
  client: getClientIngredientsReducer,
  user: userInfoReducer,
});

export default rootReducer;
