import { combineReducers } from "redux";
import productSlice from "./Reducers/ProductsReducer";
import categorySlice from "./Reducers/CategoryReducer";
import singleProductSlice from "./Reducers/SingleProductReducer";
import loginUser from "./Reducers/AuthReducers";

const rootReducer = combineReducers({
  productState: productSlice,
  categoryState: categorySlice,
  singleProductState: singleProductSlice,
  loginState: loginUser,
});

export default rootReducer;
