import React from "react";
import "../App.css";
import Header from "../components/header/Header";
import Cart from "../components/cart/Cart";

const CartProducts = () => {
  return (
    <div className="App">
      <Header />
      <Cart />
    </div>
  );
};

export default CartProducts;
