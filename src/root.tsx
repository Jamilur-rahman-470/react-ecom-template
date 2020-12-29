import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "./data/routes.data";
import Navbar from "./widgets/_navbar";
const Root = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {Routes.map((i, k) => (
          <Route path={i.path} component={i.comp} key={k} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
