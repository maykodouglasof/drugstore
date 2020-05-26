import React from "react";
import { Switch } from "react-router-dom";

import RouteHandler from "./components/RouteHandler";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddProduct from "./pages/AddProduct";

export default function Routes() {
  return (
    <Switch>
      <RouteHandler exact path="/">
        <Home />
      </RouteHandler>
      <RouteHandler exact path="/login">
        <Login />
      </RouteHandler>
      <RouteHandler exact path="/signup">
        <SignUp />
      </RouteHandler>
      <RouteHandler exact path="/add-product">
        <AddProduct />
      </RouteHandler>
    </Switch>
  );
}
