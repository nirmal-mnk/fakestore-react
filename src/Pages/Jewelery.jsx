import Products from "../Components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Features/Reducers/CategoryReducer";
import { useEffect } from "react";

export default function Jewelery() {
  const jeweleryProducts = useSelector(
    (state) => state.rootReducer.categoryState.categoryData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory("jewelery"));
  }, []);
  return (
    <div>
      <Products products={jeweleryProducts} banner={"jewelery"} />
    </div>
  );
}
