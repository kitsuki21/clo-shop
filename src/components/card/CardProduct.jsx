import React from "react";
import { useSelector } from "react-redux";
import st from "./cardProduct.module.css";
import cart from "../../assets/cart.png";
import star from "../../assets/star.png";
import addCart from "../../assets/addcart.svg";

const CardProduct = ({
  searchValue,
  products,
  handleClickAddProductToCart,
}) => {
  const addProductToCart = useSelector(
    (state) => state.addProductToCart.addProductToCart
  );

  return (
    <div className={st.container_products}>
      {products
        .filter((obj) => {
          return obj.title.toLowerCase().includes(searchValue.toLowerCase());
        })
        .map(({ id, image, title, price, rating }) => (
          <div className={st.card} key={id}>
            <img className={st.img_product} src={image} alt="products" />
            <div className={st.info_products}>
              <div>
                <p className={st.title}>{title}</p>
                <p className={st.price}>{price}$</p>
              </div>
              <div>
                <p className={st.rating}>
                  {rating.rate}
                  <img className={st.img_star} src={star} alt="star" />
                </p>
              </div>
            </div>
            <button
              className={st.button_add}
              onClick={handleClickAddProductToCart(id)}
            >
              {addProductToCart.includes(id) ? (
                <img className={st.img_cart} src={addCart} alt="" />
              ) : (
                <img className={st.img_cart} src={cart} alt="" />
              )}
            </button>
          </div>
        ))}
    </div>
  );
};

export default CardProduct;
