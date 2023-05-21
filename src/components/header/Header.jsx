import React from "react";
import st from "./header.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.png";
import logoUser from "../../assets/icon_login.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const countCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const { isAuth } = useAuth();

  return (
    <div className={st.container_header}>
      <div className={st.container_logo}>
        <img src={logo} alt="logo" className={st.logo} />
      </div>
      <div className={st.nav}>
        {isAuth ? (
          <ul className={st.nav_elem}>
            <li className={st.elem}>
              <Link to="/">Main</Link>
            </li>
            <li className={st.elem}>
              <Link to="/info">info</Link>
            </li>
            <li className={st.elem}>
              <img className={st.user_logo} src={logoUser} alt="userLogo" />
            </li>
            <li className={st.elem}>
              <Link to="/cart">
                <img src={cart} alt="cart" />
              </Link>

              <span>{countCart.length}</span>
            </li>
          </ul>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Header;
