import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialAuthState = {
  product_list: [],
};

export const fetch_product = createAsyncThunk(
  "/productList/fetch_product",
  async () => {
    try {
      const response = await axios.get("/api/products");
      return response.data.products;
    } catch {
      return [];
    }
  }
);

const productListSlice = createSlice({
  name: "productList",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: {
    [fetch_product.fulfilled]: (state, { payload }) => {
      state.product_list = payload;
    },
    [fetch_product.rejected]: (state, { payload }) => {
      state.product_list = [];
    },
  },
});

export const productListReducer = productListSlice.reducer;
