const defaultState = {
  shoppingCart: [],
};

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const REMOVE_PRODUCT_TO_CART = "REMOVE_PRODUCT_TO_CART";
const INCREASE_COUNT_PRODUCT = "INCREASE_COUNT_PRODUCT";
const DECREASE_COUNT_PRODUCT = "DECREASE_COUNT_PRODUCT";

export const shoppingCartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
      };

    case REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          ({ id }) => id !== action.payload
        ),
      };
    case INCREASE_COUNT_PRODUCT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) =>
          item.id === action.payload
            ? { id: item.id, count: item.count + 1, price: item.price }
            : item
        ),
      };

    case DECREASE_COUNT_PRODUCT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.map((item) =>
          item.id === action.payload
            ? { id: item.id, count: item.count - 1, price: item.price }
            : item
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

export const increaseCountProductAction = (payload) => ({
  type: INCREASE_COUNT_PRODUCT,
  payload,
});

export const decreaseCountProductAction = (payload) => ({
  type: DECREASE_COUNT_PRODUCT,
  payload,
});
