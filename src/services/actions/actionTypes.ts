import {
  PUT_CLIENT_INGREDIENT,
  REM_CLIENT_INGREDIENT,
  MOVE_CLIENT_INGREDIENT,
  CLEAR_CLIENT_INGREDIENTS,
  HIDE_ERROR_POPUP,
  SHOW_ERROR_POPUP,
  SHOW_MENU,
  HIDE_MENU,
  SHOW_PERSONAL_MENU,
  HIDE_PERSONAL_MENU,
  GET_SELECTED_INGREDIENT_INFO,
  REM_SELECTED_INGREDIENT_INFO,
  REM_ORDER,
  GET_SELECTED_ORDER,
  REM_SELECTED_ORDER,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_MESSAGE,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  RESET_USER_PASSWORD,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REM_USER_INFO,
  REFRESH_USER_TOKEN,
  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  GET_USER_PASSWORD_CODE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILED,
  GET_ITEMS_INGREDIENTS_REQUEST,
  GET_ITEMS_INGREDIENTS_SUCCESS,
  GET_ITEMS_INGREDIENTS_FAILED,
} from "../types";

//Типы props

export type TDnDIndex = {
  dragIndex: number;
  hoverIndex: number;
};
export type TIngredients = [];

export type TIngredient = {
  calories: number;
  carbohydrates: number;
  count: number;
  fat: number;
  image: string;
  image_large?: string;
  image_mobile?: string;
  name: string;
  proteins: number;
  type: string;
  _id: string;
  price?: number;
};

export type TOrder = {
  createdAt: string;
  ingredients: TIngredients;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TOrders = {
  orders:
    | [
        {
          ingredients: TIngredients;
          _id: string;
          status: string;
          number: number;
          createdAt: string;
        }
      ]
    | [];
  total: number;
  totalToday: number;
};

export type TError = {
  status?: string;
  title?: string;
  statusText?: string;
};

type TUser = { email: string; name: string };

//************************* */

//Interfaces clientIngredientctions

export interface IclearClientIngredients {
  readonly type: typeof CLEAR_CLIENT_INGREDIENTS;
}

export interface ImoveClientIngredient {
  readonly type: typeof MOVE_CLIENT_INGREDIENT;
  payload: TDnDIndex;
}

export interface IremoveClientIngredient {
  readonly type: typeof REM_CLIENT_INGREDIENT;
  payload: string;
}

export interface IaddClientIngredient {
  readonly type: typeof PUT_CLIENT_INGREDIENT;
  payload: TIngredient;
}

//************************* */

//Interfaces userActions
export interface IgetUserInfo {
  readonly type:
    | typeof GET_USER_INFO_REQUEST
    | typeof GET_USER_INFO_SUCCESS
    | typeof GET_USER_INFO_FAILED;
  payload: {
    success: boolean;
    user: TUser;
  };
}

export interface IupdateUserInfo {
  readonly type:
    | typeof UPDATE_USER_INFO_REQUEST
    | typeof UPDATE_USER_INFO_SUCCESS
    | typeof UPDATE_USER_INFO_FAILED;
  payload: {
    success: boolean;
    user: TUser;
  };
}

export interface IloginUser {
  //add type Tuser
  readonly type:
    | typeof LOGIN_USER_REQUEST
    | typeof LOGIN_USER_SUCCESS
    | typeof LOGIN_USER_FAILED;
  payload: {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
}

export interface IcreateUser {
  readonly type:
    | typeof CREATE_USER_REQUEST
    | typeof CREATE_USER_SUCCESS
    | typeof CREATE_USER_FAILED;
  payload: {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
}

export interface IgetCodeUserPassword {
  readonly type: typeof GET_USER_PASSWORD_CODE;
  payload: { success: boolean; message: string };
}

export interface IresetUserPassword {
  readonly type: typeof RESET_USER_PASSWORD;
  payload: { success: boolean; message: string };
}

export interface Ilogout {
  readonly type: typeof REM_USER_INFO;
  payload: { success: boolean; message: string };
}

export interface IrefreshToken {
  readonly type: typeof REFRESH_USER_TOKEN;
  payload: {
    success: boolean;
    user: TUser;
    accessToken: string;
    refreshToken: string;
  };
}

//************************* */

//Interfaces ingredientsListActions

export interface IputIngredientsList {
  readonly type:
    | typeof GET_ITEMS_INGREDIENTS_REQUEST
    | typeof GET_ITEMS_INGREDIENTS_SUCCESS
    | typeof GET_ITEMS_INGREDIENTS_FAILED;
  payload: TIngredients;
}

//************************* */

//Interfaces errorActions
export interface IhideError {
  readonly type: typeof HIDE_ERROR_POPUP;
}

export interface IshowError {
  readonly type: typeof SHOW_ERROR_POPUP;
  payload: TError;
}

//************************* */

//Interfaces menuActions
export interface IshowMenu {
  readonly type: typeof SHOW_MENU;
}
export interface IhideMenu {
  readonly type: typeof HIDE_MENU;
}
export interface IshowPersonalMenu {
  readonly type: typeof SHOW_PERSONAL_MENU;
}
export interface IhidePersonalMenu {
  readonly type: typeof HIDE_PERSONAL_MENU;
}

//************************* */

//Interfaces IngredientsActions
export interface IgetSelectedIngredient {
  readonly type: typeof GET_SELECTED_INGREDIENT_INFO;
  payload: TIngredient;
}

export interface IremoveSelectedIngredient {
  readonly type: typeof REM_SELECTED_INGREDIENT_INFO;
}

//************************* */

//Interfaces orderActions
export interface IgetOrder {
  readonly type:
    | typeof GET_ORDER_REQUEST
    | typeof GET_ORDER_SUCCESS
    | typeof GET_ORDER_FAILED;
  payload: TOrder;
}

export interface IhideOrder {
  readonly type: typeof REM_ORDER;
}

export interface IgetSelectedOrder {
  readonly type: typeof GET_SELECTED_ORDER;
  payload: TOrder;
}

export interface IremoveSelectedOrder {
  readonly type: typeof REM_SELECTED_ORDER;
}

//************************* */

//Interfaces wsActions
export interface IwsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IwsGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: TOrders;
}
export interface IwsSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
  payload: string;
}
export interface IwsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IwsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

//************************* */

//union

export type TApplicationActions =
  | IclearClientIngredients
  | ImoveClientIngredient
  | IremoveClientIngredient
  | IaddClientIngredient
  | IhideError
  | IshowError
  | IshowMenu
  | IhideMenu
  | IshowPersonalMenu
  | IhidePersonalMenu
  | IgetSelectedIngredient
  | IremoveSelectedIngredient
  | IhideOrder
  | IgetSelectedOrder
  | IremoveSelectedOrder
  | IwsConnectionSuccess
  | IwsGetOrders
  | IwsSendMessage
  | IwsConnectionError
  | IwsConnectionClosed
  | IgetOrder
  | IgetUserInfo
  | IupdateUserInfo
  | IloginUser
  | IcreateUser
  | IresetUserPassword
  | IgetCodeUserPassword
  | IrefreshToken
  | Ilogout
  | IputIngredientsList;
