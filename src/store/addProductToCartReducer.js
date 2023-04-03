const defaultState = {
  addProductToCart: [],
};

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART";

export const addProductToCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        addProductToCart: [...state.addProductToCart, action.payload],
      };

    case REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        addProductToCart: state.addProductToCart.filter(
          (id) => id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const addProductToCartAction = (payload) => ({
  type: ADD_PRODUCT_TO_CART,
  payload,
});

export const removeProductToCartAction = (payload) => ({
  type: REMOVE_PRODUCT_TO_CART,
  payload,
});
