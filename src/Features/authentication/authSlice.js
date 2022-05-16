import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialAuthState = {
  token: null,
  user: null,
};

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
      state.status = "success";
      state.user = payload.response.foundUser;
      localStorage.setItem("token", payload.response.encodedToken);
    },
    [login.rejected]: (state, { payload }) => {
      state.status = "rejected";
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.response.encodedToken;
      state.status = "success";
      state.user = payload.response.createdUser;
      localStorage.setItem("token", payload.response.encodedToken);
    },
    [signup.rejected]: (state, { payload }) => {
      state.status = "rejected";
    },
  },
});

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
