import React from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import CartProducts from "./pages/CartProducts";
import Authorization from "./pages/Authorization";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/cart">
          <CartProducts />
        </Route>
        <Route exact path="/authorization">
          <Authorization />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
