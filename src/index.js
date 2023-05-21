import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer, Slide } from "react-toastify";
import "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ToastContainer autoClose={1000} transition={Slide} />
    <App />
  </Provider>
);
