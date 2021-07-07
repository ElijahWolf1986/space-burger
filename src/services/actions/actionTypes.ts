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
} from "../types";

//Типы props

export type TDnDIndex = {
  //Тип для работы с библиотекой DnD
  dragIndex: number;
  hoverIndex: number;
};
export type TIngredients = [];

export type TIngredient = {
  //Тип ингредиента приходящего с сервера
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

export type TOrders = [];

//Тип ошибки приходящей с сервера
export type TError = {
  status?: string;
  title?: string;
  statusText?: string;
};

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
  | IwsConnectionClosed;
