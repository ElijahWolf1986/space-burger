import { getCookie } from "../utils/func";

type TAction = {type: string, payload?: any};

export const socketMiddleware = (wsUrl, wsActions) => {
  return (store) => {
    let socket = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsStart,
        wsSendMessage,
        onOpen,
        onClose,
        onError,
        onGetOrders,
        wsClose,
        wsPingPong,
      } = wsActions;

      if (type === wsStart) {
        socket = new WebSocket(action.payload);

        socket.onopen = (event) => {
          console.log("open session ws");
          console.log(event);
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          console.log("there is an error");
          console.log(event);
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          console.log("message");
          console.log(event);

          const { data } = event;
          const parseData = JSON.parse(data);
          dispatch({
            type: onGetOrders,
            payload: {
              data: parseData,
              timestamp: new Date().getTime() / 100,
            },
          });
        };

        socket.onclose = (event) => {
          console.log("close");
          console.log(event);
          dispatch({ type: onClose, payload: event });
        };
      }
      if (wsClose && type === wsClose && socket) {
        socket.close();
        socket = undefined;
      }

      if (wsSendMessage && type === wsSendMessage && socket) {
        const message = {
          ...payload,
          token: getCookie("accessToken").replace("Bearer ", ""),
        };
        socket.send(JSON.stringify(message));
      }

      if (wsPingPong && type === wsPingPong && socket) {
        socket.send("pong");
      }

      next(action);
    };
  };
};