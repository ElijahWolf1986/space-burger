import {
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_MESSAGE,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
} from "../types";

export function wsConnectionSuccess() {
  return {
    type: WS_CONNECTION_SUCCESS,
  };
}

export function wsGetOrders(orders) {
  return {
    type: WS_GET_ORDERS,
    payload: orders,
  };
}

export const wsSendMessage = (message) => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message,
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED,
  };
};
