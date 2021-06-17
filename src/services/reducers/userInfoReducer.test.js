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
import { userInfoReducer } from "./userInfoReducer";

const initialUserInfo = {
  user: {},
  success: false,
  accessToken: null,
  refreshToken: null,
  message: null,
  userRequest: false,
  userRequestFail: false,
};

const sampleCreateUserData = {
  success: "true",
  user: { name: "ilya", email: "il@mail.ru" },
  accessToken: "vdjkhnfvuikbnefvlfbnvjkdbv",
  refreshToken: "fdjkhfkjbrwfjklbdfjkvbjk",
};
const sampleGetUserData = {
  success: "true",
  user: { name: "ilya", email: "il@mail.ru" },
};

const sampleGetUserPasswordCode = {
  success: "true",
  message: "hello",
};

const sampleRefreshUserTokenData = {
  success: "true",
  accessToken: "vdjkhnfvuikbnefvlfbnvjkdbv",
  refreshToken: "fdjkhfkjbrwfjklbdfjkvbjk",
};

describe("userInfoReducer", () => {
  it("should return the initial state", () => {
    expect(userInfoReducer(undefined, {})).toEqual(initialUserInfo);
  });

  it("should send userRequest", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: CREATE_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true,
      })
    );
  });

  it("should create user", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: CREATE_USER_SUCCESS,
        payload: sampleCreateUserData,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleCreateUserData.success,
      user: sampleCreateUserData.user,
      accessToken: sampleCreateUserData.accessToken,
      refreshToken: sampleCreateUserData.refreshToken,
    });
  });

  it("should send userRequestFail", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: CREATE_USER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        userRequestFail: true,
      })
    );
  });

  it("should send userInfoRequest", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: GET_USER_INFO_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true,
      })
    );
  });

  it("should get userData", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: GET_USER_INFO_SUCCESS,
        payload: sampleGetUserData,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleGetUserData.success,
      user: sampleGetUserData.user,
    });
  });

  it("should send userInfoRequestFail", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: GET_USER_INFO_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        userRequestFail: true,
      })
    );
  });

  it("should get userPasswordCode", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: GET_USER_PASSWORD_CODE,
        payload: sampleGetUserPasswordCode,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleGetUserPasswordCode.success,
      message: sampleGetUserPasswordCode.message,
    });
  });

  it("should reset userPassword", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: RESET_USER_PASSWORD,
        payload: sampleGetUserPasswordCode,
      })
    ).toEqual(
      expect.objectContaining({
        success: sampleGetUserPasswordCode.success,
        message: sampleGetUserPasswordCode.message,
      })
    );
  });
  it("should send loginUserRequest", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: LOGIN_USER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true,
      })
    );
  });

  it("should login user", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: LOGIN_USER_SUCCESS,
        payload: sampleCreateUserData,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleCreateUserData.success,
      user: sampleCreateUserData.user,
      accessToken: sampleCreateUserData.accessToken,
      refreshToken: sampleCreateUserData.refreshToken,
    });
  });

  it("should send userLoginRequestFail", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: LOGIN_USER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        userRequestFail: true,
      })
    );
  });
  it("should remove userInfo", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: REM_USER_INFO,
        payload: sampleGetUserPasswordCode,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleGetUserPasswordCode.success,
      message: sampleGetUserPasswordCode.message,
    });
  });
  it("should refresh userToken", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: REFRESH_USER_TOKEN,
        payload: sampleRefreshUserTokenData,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleRefreshUserTokenData.success,
      accessToken: sampleRefreshUserTokenData.accessToken,
      refreshToken: sampleRefreshUserTokenData.refreshToken,
    });
  });

  it("should update userInfoRequest", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: UPDATE_USER_INFO_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        userRequest: true,
      })
    );
  });

  it("should set userUpdateData", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: UPDATE_USER_INFO_SUCCESS,
        payload: sampleGetUserData,
      })
    ).toEqual({
      ...initialUserInfo,
      success: sampleGetUserData.success,
      user: sampleGetUserData.user,
    });
  });

  it("should send userUpdateInfoFail", () => {
    expect(
      userInfoReducer(initialUserInfo, {
        type: UPDATE_USER_INFO_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        userRequestFail: true,
      })
    );
  });
});
