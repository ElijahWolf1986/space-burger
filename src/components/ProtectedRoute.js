import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useDispatch } from "react-redux";

function ProtectedRoute({ children, ...rest }) {
//   const dispatch = useDispatch();
  const isToken = localStorage.getItem("refreshToken");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
