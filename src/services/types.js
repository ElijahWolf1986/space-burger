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
export const GET_SELECTED_ORDER = "GET_SELECTED_ORDER";
export const REM_SELECTED_ORDER = "REM_SELECTED_ORDER";

//actions для работы модального окна меню
export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "HIDE_MENU";
export const SHOW_PERSONAL_MENU = "SHOW_PERSONAL_MENU";
export const HIDE_PERSONAL_MENU = "HIDE_PERSONAL_MENU";

//actions для работы с ингредиентами клиента
export const PUT_CLIENT_INGREDIENT = "PUT_CLIENT_INGREDIENT";
export const REM_CLIENT_INGREDIENT = "REM_CLIENT_INGREDIENT";
export const MOVE_CLIENT_INGREDIENT = "MOVE_CLIENT_INGREDIENT";
export const CLEAR_CLIENT_INGREDIENTS = "CLEAR_CLIENT_INGREDIENTS";

//actions для работы с Register
export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

//actions для работы с ResetPassword
export const GET_USER_PASSWORD_CODE = "GET_USER_PASSWORD_CODE";
export const RESET_USER_PASSWORD = "RESET_USER_PASSWORD";

//actions для работы с Login
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

//actions для работы с Logout
export const REM_USER_INFO = "REM_USER_INFO";

//actions для работы с RefreshToken
export const REFRESH_USER_TOKEN = "REFRESH_USER_TOKEN";

//actions для работы с GetUserInfo
export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO";
export const GET_USER_INFO_FAILED = "GET_USER_INFO_FAILED";

//actions для работы с UpdateUserInfo
export const UPDATE_USER_INFO_REQUEST = "UPDATE_USER_INFO_REQUEST";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAILED = "UPDATE_USER_INFO_FAILED";
