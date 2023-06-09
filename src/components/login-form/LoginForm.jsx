import React, { useState } from "react";
import styles from "./loginform.module.css";
import user from "../../assets/icon_login.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { useHistory } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const push = useHistory();

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputValue.email, inputValue.password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accesToken,
          })
        );
        push("/");
      })
      .catch(console.error);

    if (inputValue.email || inputValue.password) {
      setInputValue({ email: "", password: "" });
    }
  };

  return (
    <article className={styles.article}>
      <form className={styles.form}>
        <img className={styles.img_user} src={user} alt="user" />
        <div className={styles.form_control}>
          <input
            className={styles.input}
            type="text"
            id="email"
            name="email"
            value={inputValue.email}
            onChange={handleChangeInput}
            placeholder="Email"
          />
        </div>
        <div className={styles.form_control}>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={inputValue.password}
            onChange={handleChangeInput}
            placeholder="Password"
          />
        </div>
        <button className={styles.button} type="submit" onClick={handleLogin}>
          Login
        </button>
        <p className={styles.text}>
          Not registered?{" "}
          <Link to="/registered" className={styles.a}>
            {" "}
            Create an account{" "}
          </Link>
        </p>
      </form>
    </article>
  );
};

export default LoginForm;
