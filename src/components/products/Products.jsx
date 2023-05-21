import React, { useEffect } from "react";
import st from "./products.module.css";
import CardProduct from "../card/CardProduct";
import { productsApi } from "../../api/productsApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartAction,
  removeProductToCartAction,
} from "../../store/shoppingCartReducer";

const Products = ({ products, searchValue }) => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  useEffect(() => {
    dispatch(productsApi());
  }, [dispatch]);

  const searchProducts = products.filter((obj) => {
    return obj.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleClickAddProductToCart = (id, price) => () => {
    if (shoppingCart.find((product) => product.id === id)) {
      dispatch(removeProductToCartAction(id));
      removeToast();
    } else {
      const product = {
        id,
        price,
        count: 1,
      };
      dispatch(addProductToCartAction(product));
      addToast();
    }
  };

  const addToast = () => toast.success("Added to cart !");
  const removeToast = () => toast.success("Remove from cart !");

  return (
    <div className={st.container_products}>
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
