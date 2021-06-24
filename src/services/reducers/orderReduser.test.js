import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REM_ORDER,
  GET_SELECTED_ORDER,
  REM_SELECTED_ORDER,
} from "../types";
import { getOrderReducer } from "./orderReduser";

const initialStateOrder = {
  order: null,
  isOrderPopup: false,
  orderRequest: false,
  orderFailed: false,
  currentOrder: null,
};

const sampleOrder = { id: "74hh4", name: "hello" };

describe("getOrderReducer", () => {
  it("should return the initial state", () => {
    expect(getOrderReducer(undefined, {})).toEqual(initialStateOrder);
  });
  it("should set isOrderPopup", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: GET_ORDER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        order: null,
        isOrderPopup: false,
        orderRequest: true,
        orderFailed: false,
        currentOrder: null,
      })
    );
  });

  it("should set data", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: GET_ORDER_SUCCESS,
        payload: sampleOrder,
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: false,
        order: sampleOrder,
        orderRequest: false,
        isOrderPopup: true,
      })
    );
  });
  it("should set orderFailed", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: GET_ORDER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: true,
        orderRequest: false,
      })
    );
  });

  it("should set selectedOrder", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: GET_SELECTED_ORDER,
        payload: sampleOrder,
      })
    ).toEqual(
      expect.objectContaining({
        currentOrder: sampleOrder,
      })
    );
  });

  it("should remove selectedOrder", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: REM_SELECTED_ORDER,
      })
    ).toEqual(
      expect.objectContaining({
        currentOrder: null,
      })
    );
  });

  it("should remove order", () => {
    expect(
      getOrderReducer(initialStateOrder, {
        type: REM_ORDER,
      })
    ).toEqual(
      expect.objectContaining({
        orderFailed: false,
        orderRequest: false,
        order: null,
      })
    );
  });
});
