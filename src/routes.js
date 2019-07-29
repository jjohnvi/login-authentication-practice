import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Page1 from "./Components/Page1/Page1";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/page1" component={Page1} />
    <Route path="/register" component={Register} />
  </Switch>
);
