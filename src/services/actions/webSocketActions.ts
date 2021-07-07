import {
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_MESSAGE,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
} from "../types";

import {
  TOrders,
  IwsConnectionSuccess,
  IwsGetOrders,
  IwsSendMessage,
  IwsConnectionError,
  IwsConnectionClosed,
} from "./actionTypes";

export const wsConnectionSuccess = (): IwsConnectionSuccess => {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
};

export const wsGetOrders = (orders: TOrders): IwsGetOrders => {
  return {
    type: WS_GET_ORDERS,
    payload: orders,
  };
};

export const wsSendMessage = (message: string): IwsSendMessage => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
};

export const wsConnectionError = (): IwsConnectionError => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = (): IwsConnectionClosed => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};
