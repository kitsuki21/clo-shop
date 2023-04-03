import React from "react";
import st from "./footer.module.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className={st.container_footer}>
      <div className={st.container_logo}>
        <img src={logo} alt="logo" className={st.logo} />
      </div>
      <div className={st.nav}>
        <ul className={st.nav_elem}>
          <li className={st.elem}>Main</li>
          <li className={st.elem}>info</li>
          <li className={st.elem}>Contacts</li>
        </ul>
      </div>
      <div>
        <p>2023 © Kitsuki</p>
      </div>
    </div>
  );
};

export default Footer;
