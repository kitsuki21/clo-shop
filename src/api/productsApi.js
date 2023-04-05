import { getProductsAction } from "../store/productsReducer";

export const productsApi = () => {
  return (dispatch) => {
    fetch("https://63e8eea45f3e35d898f7ecf8.mockapi.io/products")
      .then((response) => response.json())
      .then((json) => dispatch(getProductsAction(json)));
  };
};
