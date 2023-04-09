import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import { addProductToCartReducer } from "./addProductToCartReducer";
import { selectedCategoryReducer } from "./selectedCategoryReducer";
import thunk from "redux-thunk";
import { productsReducer } from "./productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  products: productsReducer,
  addProductToCart: addProductToCartReducer,
  selectedCategory: selectedCategoryReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
