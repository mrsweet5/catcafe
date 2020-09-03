import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, isAuth, displayTimeHandler, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} displayTimeHandler={displayTimeHandler}/> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;