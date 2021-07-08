import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  GET_SELECTED_ORDER,
  REM_SELECTED_ORDER,
} from "../types";
import { TOrder, TApplicationActions } from "../actions/actionTypes";

type TinitialStateOrder = {
  order: TOrder | null;
  isOrderPopup: boolean;
  orderRequest: boolean;
  orderFailed: boolean;
  currentOrder: TOrder | null;
};

const initialStateOrder: TinitialStateOrder = {
  order: null,
  isOrderPopup: false,
  orderRequest: false,
  orderFailed: false,
  currentOrder: null,
};

export const getOrderReducer = (
  state = initialStateOrder,
  action: TApplicationActions
): TinitialStateOrder => {
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
        isOrderPopup: true,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case GET_SELECTED_ORDER: {
      return {
        ...state,
        currentOrder: action.payload,
      };
    }
    case REM_SELECTED_ORDER: {
      return {
        ...state,
        currentOrder: null,
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
