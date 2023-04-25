import ProductList from "../Components/ProductList/ProductList";
import { useSelector } from "react-redux";

export default function Category() {
  const allProductsArr = useSelector(
    (state) => state.rootReducer.productState.allProducts
  );
  const productsKey = useSelector(
    (state) => state.rootReducer.productState.productsKey
  );
  return (
    <div>
      {allProductsArr.map((products, index) => (
        <ProductList
          key={index}
          products={products}
          proKey={Object.keys(products)}
          productsKey={productsKey[index]}
        />
      ))}
    </div>
  );
}
