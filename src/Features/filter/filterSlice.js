import { createSlice } from "@reduxjs/toolkit";

const initial_filter_state = {
  sortby: "none",
  price: 30000,
  category: [],
  rating: "none",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initial_filter_state,
  reducers: {
    clearFilter: function (state) {
      state.sortby = "none";
      state.price = 300000;
      state.category = [];
      state.rating = "none";
    },
    setPrice: function (state, action) {
      state.price = Number(action.payload);
    },
    setCategory: function (state, action) {
      if (state.category.includes(action.payload)) {
        state.category = state.category.filter((ele) => ele !== action.payload);
      } else {
        state.category = [...state.category, action.payload];
      }
    },
    setRating: function (state, action) {
      state.rating = Number(action.payload);
    },
    setFilterSort: function (state, action) {
      state.sortby = action.payload;
    },
  },
});

export const { clearFilter, setPrice, setCategory, setRating, setFilterSort } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
