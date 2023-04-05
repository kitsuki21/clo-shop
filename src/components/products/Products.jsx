import React from "react";
import CardProduct from "../card/CardProduct";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartAction,
  removeProductToCartAction,
} from "../../store/addProductToCartReducer";

const Products = ({ products, searchValue }) => {
  const dispatch = useDispatch();
  const addProductToCart = useSelector(
    (state) => state.addProductToCart.addProductToCart
  );

  const handleClickAddProductToCart = (id) => () => {
    if (addProductToCart.includes(id) === false) {
      dispatch(addProductToCartAction(id));
      addToast();
    } else {
      dispatch(removeProductToCartAction(id));
      removeToast();
    }
  };

  const addToast = () => toast.success("Added to cart !");
  const removeToast = () => toast.success("Remove from cart !");

  return (
    <div>
      <ToastContainer autoClose={1000} transition={Slide} />
      <CardProduct
        searchValue={searchValue}
        products={products}
        handleClickAddProductToCart={handleClickAddProductToCart}
      />
    </div>
  );
};

export default Products;
