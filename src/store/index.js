import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import { shoppingCartReducer } from "./shoppingCartReducer";
import { selectedCategoryReducer } from "./selectedCategoryReducer";
import thunk from "redux-thunk";
import { productsReducer } from "./productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./userSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
  selectedCategory: selectedCategoryReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
