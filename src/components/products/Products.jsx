import React, { useEffect } from "react";
import st from "./products.module.css";
import CardProduct from "../card/CardProduct";
import { productsApi } from "../../api/productsApi";

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

  useEffect(() => {
    dispatch(productsApi());
  }, [dispatch]);

  const searchProducts = products.filter((obj) => {
    return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  });

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
    <div className={st.container_products}>
      <ToastContainer autoClose={1000} transition={Slide} />
      {searchProducts.map((product) => (
        <CardProduct
          key={product.id}
          {...product}
          handleClickAddProductToCart={handleClickAddProductToCart}
        />
      ))}
    </div>
  );
};

export default Products;
