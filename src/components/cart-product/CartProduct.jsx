import React, { useEffect, useState } from "react";
import styles from "./cartProduct.module.css";
import { useSelector } from "react-redux";

const CartProduct = ({ id, image, title, price }) => {
  const [countProduct, setCountProduct] = useState(1);
  const [amountProduct, setAmountProduct] = useState([]);

  useEffect(() => {
    setAmountProduct([...amountProduct, price]);
  }, []);

  const totalAmountProduct = amountProduct.reduce(
    (acc, price) => price + acc,
    0
  );

  const increaseAmountProduct = (price) => () => {
    setCountProduct((prev) => prev + 1);
    setAmountProduct([...amountProduct, price]);
  };

  const decreaseAmountProduct = () => () => {
    setCountProduct((prev) => prev - 1);
  };

  return (
    <div className={styles.cart_product} key={id}>
      <div className={styles.info_products}>
        <img className={styles.img_product} src={image} alt="products" />
        <div className={styles.title_container}>
          <p className={styles.title_product}>{title}</p>
          <div className={styles.count_container}>
            {countProduct > 1 ? (
              <button
                className={styles.button_count}
                onClick={decreaseAmountProduct(price)}
              >
                -
              </button>
            ) : (
              <button className={styles.button_count} title="Delete">
                -
              </button>
            )}
            <p className={styles.count_text}>{countProduct}</p>
            <button
              className={styles.button_count}
              onClick={increaseAmountProduct(price)}
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
