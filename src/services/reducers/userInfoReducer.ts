import {
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
} from "../types";
import { TApplicationActions, TUser } from "../actions/actionTypes";

type TinitialUserInfo = {
  user: TUser;
  success: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  message: string | null;
  userRequest: boolean;
  userRequestFail: boolean;
};
const initialUserInfo: TinitialUserInfo = {
  user: { email: "", password: "", name: "" },
  success: false,
  accessToken: null,
  refreshToken: null,
  message: null,
  userRequest: false,
  userRequestFail: false,
};

export const userInfoReducer = (
  state = initialUserInfo,
  action: TApplicationActions
): TinitialUserInfo => {
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

    case GET_USER_INFO_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case GET_USER_INFO_SUCCESS: {
      const { success, user } = action.payload;
      return {
        ...state,
        success: success,
        user: user,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case GET_USER_INFO_FAILED: {
      return {
        ...state,
        userRequest: false,
        userRequestFail: true,
      };
    }
    case GET_USER_PASSWORD_CODE: {
      const { success, message } = action.payload;
      return {
        ...state,
        success: success,
        message: message,
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
    case REM_USER_INFO: {
      const { success, message } = action.payload;
      return {
        ...state,
        user: { email: "", password: "", name: "" },
        success: success,
        accessToken: null,
        refreshToken: null,
        message: message,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case REFRESH_USER_TOKEN: {
      const { success, accessToken, refreshToken } = action.payload;
      return {
        ...state,
        success: success,
        accessToken: accessToken,
        refreshToken: refreshToken,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case UPDATE_USER_INFO_REQUEST: {
      return {
        ...state,
        userRequest: true,
      };
    }
    case UPDATE_USER_INFO_SUCCESS: {
      const { success, user } = action.payload;
      return {
        ...state,
        success: success,
        user: user,
        userRequest: false,
        userRequestFail: false,
      };
    }
    case UPDATE_USER_INFO_FAILED: {
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
