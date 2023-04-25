import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toPascalCase } from "../../Utils/helpers";

export const getProducts = createAsyncThunk(
  "products/gettingAllProducts",
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

export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsKey: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.allProducts = [];
    },
    [getProducts.fulfilled]: (state, action) => {
      let allProObj = {
        [toPascalCase(action.meta.arg)]: action.payload,
      };
      state.allProducts.push(allProObj);
      state.productsKey.push(action.meta.arg);
      state.isLoading = false;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default productSlice.reducer;
