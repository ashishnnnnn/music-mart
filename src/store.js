import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Features/authentication/authSlice";
import { productListReducer } from "./Features/producList/productListSlice";
import { filterReducer } from "./Features/filter/filterSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    product_list: productListReducer,
    filter: filterReducer,
  },
});

export { store };
