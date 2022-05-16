import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Features/authentication/authSlice";
import { productListReducer } from "./Features/producList/productListSlice";

const store = configureStore({
  reducer: { auth: authReducer, product_list: productListReducer },
});

export { store };
