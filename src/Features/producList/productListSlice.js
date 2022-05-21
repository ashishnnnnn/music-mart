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
    [fetch_product.pending]: (state) => {
      state.status = "loading";
    },
    [fetch_product.fulfilled]: (state, { payload }) => {
      state.product_list = payload;
      state.status = "fullfilled";
    },
    [fetch_product.rejected]: (state) => {
      state.product_list = [];
      state.status = "rejected";
    },
  },
});

export const productListReducer = productListSlice.reducer;
