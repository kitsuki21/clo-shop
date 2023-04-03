import {
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import { addProductToCartReducer } from "./addProductToCartReducer";

const rootReducer = combineReducers({
  addProductToCart: addProductToCartReducer,
});

export const store = createStore(rootReducer);
