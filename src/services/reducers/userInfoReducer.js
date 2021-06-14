import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILED,
    RESET_USER_PASSWORD,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
  } from "../types";



const initialUserInfo = {
    user: {},
    success: false,
    accessToken: null,
    refreshToken: null,
    message: null,
    userRequest: false,
    userRequestFail: false,
  };

export const userInfoReducer = (state = initialUserInfo, action) => {
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