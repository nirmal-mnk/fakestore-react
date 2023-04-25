import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (payload, thunkApi) => {
    try {
      const res = await axios.post(
        `https://fakestoreapi.com/auth/login`,
        payload
      );
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    isLoading: false,
    loginSuccess: false,
    loginError: false,
  },
  reducers: {
    logout: (state) => {
      state.loginSuccess = false;
      sessionStorage.removeItem("token", "");
    },
    changeLoginSuc: (state) => {
      state.loginSuccess = false;
    },
    changeLoginErr: (state) => {
      state.loginError = false;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.loginError = false;
      state.loginSuccess = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      sessionStorage.setItem("token", action.payload.token);
      state.token = action.payload;
      state.isLoading = false;
      state.loginSuccess = true;
      state.loginError = false;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      state.loginError = true;
      state.loginSuccess = false;
    },
  },
});
export const { logout, changeLoginSuc, changeLoginErr } = loginSlice.actions;
export default loginSlice.reducer;
