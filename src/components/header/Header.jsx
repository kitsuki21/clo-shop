import React from "react";
import st from "./header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const countCart = useSelector(
    (state) => state.addProductToCart.addProductToCart
  );

  return (
    <div className={st.container_header}>
      <div className={st.container_logo}>
        <img src={logo} alt="logo" className={st.logo} />
      </div>
      <div className={st.nav}>
        <ul className={st.nav_elem}>
          <li className={st.elem}>Main</li>
          <li className={st.elem}>info</li>
          <li className={st.elem}>Login</li>
          <li className={st.elem}>
            <img src={cart} alt="cart" />
            <span>{countCart.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
