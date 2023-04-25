import styles from "./ProductList.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function ProductList(props) {
  const categoryPro = props.products[props.proKey];
  const productKey = props.productsKey.replace(/'| /g, "");
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="my-5">
      <div className={styles.homeCategoryCard}>
        <h4 className="header">Trending {props.proKey}</h4>
        <div className="row">
          {categoryPro.map((product, index) => (
            <div
              className="col"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              <div className="text-center m-2">
                <img src={product.image} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-end">
          <Link to={productKey}>View more</Link>
        </div>
      </div>
    </div>
  );
}
