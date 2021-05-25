//actions для подтягивания листа ингредиентов через api
export const GET_ITEMS_INGREDIENTS_REQUEST = "GET_ITEMS_INGREDIENTS_REQUEST";
export const GET_ITEMS_INGREDIENTS_SUCCESS = "GET_ITEMS_INGREDIENTS_SUCCES";
export const GET_ITEMS_INGREDIENTS_FAILED = "GET_ITEMS_INGREDIENTS_FAILED";

//actions для работы popup-а с ошибками
export const SHOW_ERROR_POPUP = "SHOW_ERROR_POPUP";
export const HIDE_ERROR_POPUP = "HIDE_ERROR_POPUP";

//actions для работы модального окна с ингредиентами
export const GET_SELECTED_INGREDIENT_INFO = "GET_SELECTED_INGREDIENT_INFO";
export const REM_SELECTED_INGREDIENT_INFO = "REM_SELECTED_INGREDIENT_INFO";

//actions для работы модального окна с деталями заказа
export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";
export const REM_ORDER = "REM_ORDER";

//actions для работы модального окна меню
export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "HIDE_MENU";
export const SHOW_PERSONAL_MENU = "SHOW_PERSONAL_MENU";
export const HIDE_PERSONAL_MENU = "HIDE_PERSONAL_MENU";

//actions для работы с ингредиентами клиента
export const PUT_CLIENT_INGREDIENT = "PUT_CLIENT_INGREDIENT";
export const REM_CLIENT_INGREDIENT = "REM_CLIENT_INGREDIENT";
export const MOVE_CLIENT_INGREDIENT = "MOVE_CLIENT_INGREDIENT";
