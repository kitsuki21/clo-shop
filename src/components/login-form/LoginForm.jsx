import React from "react";
import styles from "./loginform.module.css";
import user from "../../assets/icon_login.png";

const LoginForm = () => {
  return (
    <article className={styles.article}>
      <form className={styles.form}>
        <img className={styles.img_user} src={user} alt="user" />
        <div className={styles.form_control}>
          <label htmlFor="firstName"> Name : </label>
          <input type="text" id="firstName" name="firstName" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email"> Email : </label>
          <input type="text" id="email" name="email" />
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </article>
  );
};

export default LoginForm;
