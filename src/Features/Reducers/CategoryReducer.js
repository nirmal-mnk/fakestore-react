import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "category/gettingAllCategory",
  async (state, thunkApi) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${state}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryData: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.categoryData = action.payload;
      state.isLoading = false;
    },
    [getCategory.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default categorySlice.reducer;
