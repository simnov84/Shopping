import "./App.css";
import Card from "./Card";
import Topbar from "./Topbar";
import CartList from "./CartList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DataProvider } from "./DataContext";
import React from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DataProvider>
          <Topbar></Topbar>
          <Route path="/" component={Card} exact={true}></Route>
          <Route path="/cart" component={CartList} exact={true}></Route>
        </DataProvider>
      </Switch>
    </BrowserRouter>
  );
}
