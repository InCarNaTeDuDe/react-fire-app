import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { UserContext } from "./UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(UserContext);

  return (
    <Switch>
      <Route
        {...rest}
        render={(data) => {
          return isAuth ? <Component /> : <Redirect to="/" />;
        }}
      />
    </Switch>
  );
};

export default ProtectedRoute;
