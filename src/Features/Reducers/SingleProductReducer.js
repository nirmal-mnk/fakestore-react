import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
  "singleProduct/gettingSingleProduct",
  async (state, thunkApi) => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${state}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProductData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getSingleProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProductData = action.payload;
      state.isLoading = false;
    },
    [getSingleProduct.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default singleProductSlice.reducer;
