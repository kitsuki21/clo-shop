import React from "react";
import Main from "./pages/Main";
import Info from "./pages/Info";
import CartProducts from "./pages/CartProducts";
import Authorization from "./pages/Authorization";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registered from "./components/registered/Registered";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/cart">
          <CartProducts />
        </Route>
        <Route path="/authorization">
          <Authorization />
        </Route>
        <Route path="/registered">
          <Registered />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
