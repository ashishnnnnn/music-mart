import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialAuthState = {
  token: null,
  user: null,
  status: "",
};

export const fetchWishlist = createAsyncThunk(
  "/auth/fetchWishlist",
  async (user_token) => {
    const response = await axios({
      method: "GET",
      url: "/api/user/wishlist",
      headers: {
        authorization: user_token,
      },
    });
    return response;
  }
);

export const addToWishlist = createAsyncThunk(
  "/auth/addToWishlist",
  async ({ product, user_token }) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        data: { product: product },
        headers: {
          authorization: user_token,
        },
      });
      return response;
    } catch {}
  }
);

export const removeFromWishlist = createAsyncThunk(
  "/auth/removeFromWishlist",
  async ({ product_id, user_token }) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${product_id}`,
      headers: {
        authorization: user_token,
      },
    });
    return response;
  }
);

export const fetchCart = createAsyncThunk(
  "/auth/fetchCart",
  async (user_token) => {
    const response = await axios({
      method: "GET",
      url: "/api/user/cart",
      headers: {
        authorization: user_token,
      },
    });
    return response;
  }
);

export const addToCart = createAsyncThunk(
  "/auth/addToCart",
  async ({ product, user_token }) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/cart",
        data: { product: product },
        headers: {
          authorization: user_token,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
);

export const changeQtyCart = createAsyncThunk(
  "/auth/changeQtyCart",
  async ({ product_id, user_token, type }) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/cart/${product_id}`,
        data: {
          action: {
            type: type,
          },
        },
        headers: {
          authorization: user_token,
        },
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "/auth/removeFromCart",
  async ({ product_id, user_token }) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${product_id}`,
      headers: {
        authorization: user_token,
      },
    });
    return response;
  }
);

export const login = createAsyncThunk(
  "/auth/login",
  async ({ email, password }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      return fulfillWithValue({
        response: response.data,
        message: "fullfilled",
      });
    } catch {
      return rejectWithValue({ response: {}, message: "rejected" });
    }
  }
);

export const signup = createAsyncThunk(
  "/auth/signup",
  async (
    { firstName, lastName, email, password },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      return fulfillWithValue({
        response: response.data,
        message: "fullfilled",
      });
    } catch {
      return rejectWithValue({ response: {}, message: "rejected" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: function (state) {
      state.token = "";
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.response.encodedToken;
      state.status = "fullfilled";
      state.user = payload.response.foundUser;
      localStorage.setItem("token", payload.response.encodedToken);
    },
    [login.rejected]: (state, { payload }) => {
      state.status = "rejected";
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.response.encodedToken;
      state.status = "fullfilled";
      state.user = payload.response.createdUser;
      localStorage.setItem("token", payload.response.encodedToken);
    },
    [signup.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWishlist.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.user.wishlist = payload.data.wishlist;
    },
    [fetchWishlist.rejected]: (state) => {
      state.user.wishlist = [];
      state.status = "rejected";
    },
    [addToWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [addToWishlist.fulfilled]: (state, { payload }) => {
      state.user.wishlist = payload.data.wishlist;
      state.status = "fullfilled";
    },
    [removeFromWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromWishlist.fulfilled]: (state, { payload }) => {
      state.user.wishlist = payload.data.wishlist;
      state.status = "fullfilled";
    },

    [fetchCart.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCart.fulfilled]: (state, { payload }) => {
      state.user.cart = payload.data.cart;
      state.status = "fullfilled";
    },
    [fetchCart.rejected]: (state) => {
      state.user.cart = [];
      state.status = "rejected";
    },
    [addToCart.pending]: (state) => {
      state.status = "loading";
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.user.cart = payload.data.cart;
      state.status = "fullfilled";
    },
    [changeQtyCart.pending]: (state) => {
      state.status = "loading";
    },
    [changeQtyCart.fulfilled]: (state, { payload }) => {
      state.user.cart = payload.data.cart;
      state.status = "fullfilled";
    },
    [removeFromCart.pending]: (state) => {
      state.status = "loading";
    },
    [removeFromCart.fulfilled]: (state, { payload }) => {
      state.user.cart = payload.data.cart;
      state.status = "fullfilled";
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
