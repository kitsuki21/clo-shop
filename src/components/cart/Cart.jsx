import React from "react";
import styles from "./cart.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartProduct from "../cart-product/CartProduct";

const Cart = () => {
  const products = useSelector((state) => state.products.products);
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const filterAddProduct = products.filter((product) =>
    shoppingCart.find(({ id }) => product.id === id)
  );

  const amountProduct = shoppingCart.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = shoppingCart.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  );

  return (
    <div className={styles.cart_container}>
      <p className={styles.title}>The basket </p>
      <div className={styles.wrapper_cart}>
        {filterAddProduct.length === 0 ? (
          <>
            <p className={styles.text}>
              To find the necessary products, use the search or catalog.
            </p>
            <Link to="/">
              <button className={styles.button}>main page</button>
            </Link>
          </>
        ) : (
          <div className={styles.product_container}>
            <div className={styles.wrapper_product}>
              {filterAddProduct.map((product) => (
                <CartProduct key={product.id} {...product} />
              ))}
            </div>
            <div className={styles.order_container}>
              <div className={styles.wrapper_info_order}>
                <div className={styles.left_col}>
                  <p className={styles.text_info_order}>Total</p>
                  <p className={styles.text_col}>{amountProduct} product</p>
                  <p className={styles.text_col}>Delivery</p>
                </div>
                <div className={styles.right_col}>
                  <p className={styles.text_info_order}>
                    {totalPrice.toFixed([2])}$
                  </p>
                  <p className={styles.text_col}>{totalPrice.toFixed([2])}$</p>
                  <p className={styles.text_col}>—</p>
                </div>
              </div>
              <button className={styles.button}>Place an order</button>
              <p className={styles.text_order}>
                By clicking, you agree to the processing of personal data in in
                accordance with the policy for the purpose of fixation by video
                recording the circumstances of the order issue at the order
                issue point and the rules trading platform
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
