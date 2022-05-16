import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./Features/authentication/authSlice";

const store = configureStore({
  reducer: { auth: authReducer },
});

export { store };
