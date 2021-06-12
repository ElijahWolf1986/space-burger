import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

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
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_USER_PASSWORD,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../types";

const initialStateIngredients = {
  //ингредиенты запрошенные с севрра
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const initialStateOrder = {
  //заказ запрошенный с сервера
  order: null,
  orderRequest: false,
  orderFailed: false,
};

const initialStateClient = {
  //заказ который собирает клиент
  clientIngredients: [],
  whatIsBun: null,
};

const initialStateApp = {
  //Обработка и вывод ошибок на экран при работе с сервером
  error: {},
};

const initialStateIngredient = {
  //Работа с выводом деталей ингредиента
  currentIngredient: null,
};

const initialStateMenu = {
  //Работа с функиональностью меню для мобильных устройств
  isTooglePopup: false,
  isTooglePersonal: false,
};

const initialUserInfo = {
  user: {},
  success: false,
  accessToken: null,
  refreshToken: null,
  message: null,
  userRequest: false,
  userRequestFail: false,
};

const userInfoReducer = (state = initialUserInfo, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case CREATE_USER_SUCCESS: {
      const { success, user, accessToken, refreshToken } = action.payload;
      return {
        ...state,
        success: success,
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case CREATE_USER_FAILED: {
      return {
        ...state,
        userRequest: false,
        userRequestFail: true,
      };
    }
    case RESET_USER_PASSWORD: {
      const { success, message } = action.payload;
      return {
        ...state,
        success: success,
        message: message,
      };
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case LOGIN_USER_SUCCESS: {
      const { success, user, accessToken, refreshToken } = action.payload;
      return {
        ...state,
        success: success,
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        userRequest: false,
        userRequestFail: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

const getClientIngredientsReducer = (state = initialStateClient, action) => {
  switch (action.type) {
    case PUT_CLIENT_INGREDIENT: {
      if (action.payload.type === "bun") {
        return {
          ...state,
          whatIsBun: action.payload,
        };
      }
      return {
        ...state,
        clientIngredients: [
          ...state.clientIngredients,
          { ...action.payload, ingredientId: uuidv4() },
        ],
      };
    }
    case REM_CLIENT_INGREDIENT: {
      return {
        ...state,
        clientIngredients: [
          ...state.clientIngredients.filter(
            (item) => item.ingredientId !== action.payload
          ),
        ],
      };
    }
    case MOVE_CLIENT_INGREDIENT: {
      const { dragIndex, hoverIndex } = action.payload;
      const ingredients = [...state.clientIngredients];
      ingredients.splice(dragIndex, 0, ingredients.splice(hoverIndex, 1)[0]);
      return {
        ...state,
        clientIngredients: ingredients,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
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
  client: getClientIngredientsReducer,
  user: userInfoReducer,
});

export default rootReducer;
