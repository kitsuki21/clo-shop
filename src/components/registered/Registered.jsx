import React, { useState } from "react";
import styles from "./registered.module.css";
import user from "../../assets/icon_login.png";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/userSlice";

const Registered = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, inputValue.email, inputValue.password)
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
        <button
          className={styles.button}
          type="submit"
          onClick={handleRegister}
        >
          Sign up
        </button>
      </form>
    </article>
  );
};

export default Registered;
