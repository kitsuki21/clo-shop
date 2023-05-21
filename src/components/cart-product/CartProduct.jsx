import React from "react";
import styles from "./cartProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCountProductAction,
  increaseCountProductAction,
  removeProductToCartAction,
} from "../../store/shoppingCartReducer";

const CartProduct = ({ id, image, title, price }) => {
  const { count } = useSelector((state) =>
    state.shoppingCart.shoppingCart.find((product) => product.id === id)
  );
  const dispatch = useDispatch();

  const totalAmountProduct = count * price;

  const increaseAmountProduct = (id) => () => {
    dispatch(increaseCountProductAction(id));
  };
  const decreaseAmountProduct = (id) => () => {
    dispatch(decreaseCountProductAction(id));
  };

  const handleRemoveProductFromCart = (id) => () => {
    dispatch(removeProductToCartAction(id));
  };

  return (
    <div className={styles.cart_product} key={id}>
      <div className={styles.info_products}>
        <img className={styles.img_product} src={image} alt="products" />
        <div className={styles.title_container}>
          <p className={styles.title_product}>{title}</p>
          <div className={styles.count_container}>
            {count > 1 ? (
              <button
                className={styles.button_count}
                onClick={decreaseAmountProduct(id)}
              >
                -
              </button>
            ) : (
              <button
                className={styles.button_count}
                title="Delete"
                onClick={handleRemoveProductFromCart(id)}
              >
                -
              </button>
            )}
            <p className={styles.count_text}>{count}</p>
            <button
              className={styles.button_count}
              onClick={increaseAmountProduct(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <p className={styles.price}>{totalAmountProduct.toFixed([2])}$</p>
    </div>
  );
};

export default CartProduct;
