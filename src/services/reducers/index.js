import { combineReducers } from "redux";
import {
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
  SHOW_ERROR_POPUP,
  HIDE_ERROR_POPUP,
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
} from "../types";

const initialStateIngredients = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  currentConstructorIngredientsList: [],
};

const initialStateOrder = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

const initialStateApp = {
  error: {},
};

const initialStateIngredient = {
  currentIngredient: null,
};

const initialStateMenu = {
  isTooglePopup: false,
  isTooglePersonal: false,
};

const menuReducer = (state = initialStateMenu, action) => {
  switch (action.type) {
    case SHOW_MENU: {
      return {
        ...state,
        isTooglePopup: true,
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

const putAppErrorsReducer = (state = initialStateApp, action) => {
  switch (action.type) {
    case SHOW_ERROR_POPUP: {
      return {
        ...state,
        isShowErrorPopup: true,
        error: action.payload,
      };
    }
    case HIDE_ERROR_POPUP: {
      return {
        ...state,
        error: {},
        isShowErrorPopup: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const putIngredientsListReducer = (state = initialStateIngredients, action) => {
  switch (action.type) {
    case GET_ITEMS_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_ITEMS_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsFailed: false,
        ingredients: action.payload,
        ingredientsRequest: false,
      };
    }
    case GET_ITEMS_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

const getIngredientInfoReducer = (state = initialStateIngredient, action) => {
  switch (action.type) {
    case GET_SELECTED_INGREDIENT_INFO: {
      return {
        ...state,
        currentIngredient: action.payload,
      };
    }
    case REM_SELECTED_INGREDIENT_INFO: {
      return {
        ...state,
        currentIngredient: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

const getOrderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.payload,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case REM_ORDER: {
      return {
        ...state,
        orderFailed: false,
        orderRequest: false,
        order: null,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

const rootReducer = combineReducers({
  burgerIngredients: putIngredientsListReducer,
  burgerIngredient: getIngredientInfoReducer,
  errors: putAppErrorsReducer,
  order: getOrderReducer,
  menu: menuReducer,
});

export default rootReducer;