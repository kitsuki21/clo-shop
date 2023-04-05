import React from "react";
import st from "./header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <li className={st.elem}>
            <Link to="/">Main</Link>
          </li>
          <li className={st.elem}>
            <Link to="/info">info</Link>
          </li>
          <li className={st.elem}>
            <Link to="/authorization">Login</Link>
          </li>
          <li className={st.elem}>
            <Link to="/cart">
              <img src={cart} alt="cart" />
            </Link>

            <span>{countCart.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
