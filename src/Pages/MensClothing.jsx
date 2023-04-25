import Products from "../Components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../Features/Reducers/CategoryReducer";
import { useEffect } from "react";

export default function MensClothing() {
  const mensProducts = useSelector(
    (state) => state.rootReducer.categoryState.categoryData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory("men's clothing"));
  }, []);
  return (
    <div>
      <Products products={mensProducts} banner={"mensClothing"} />
    </div>
  );
}
