import {
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import { addProductToCartReducer } from "./addProductToCartReducer";
import { selectedCategoryReducer } from "./selectedCategoryReducer";

const rootReducer = combineReducers({
  addProductToCart: addProductToCartReducer,
  selectedCategory: selectedCategoryReducer,
});

export const store = createStore(rootReducer);
