import Products from "../Components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Features/Reducers/CategoryReducer";
import { useEffect } from "react";

export default function Electronics() {
  const electronicsProducts = useSelector(
    (state) => state.rootReducer.categoryState.categoryData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory("electronics"));
  }, []);
  return (
    <div>
      <Products products={electronicsProducts} banner={"electronics"} />
    </div>
  );
}
