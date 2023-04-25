import styles from "./Products.module.css";
import Banner from "../Banner/Banner";
import { formatCurrency } from "../../Utils/helpers";
import { useNavigate } from "react-router-dom";
export default function Products(props) {
  const products = props.products;
  const banner = props.banner;
  console.log(banner);
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    console.log(product.id);
    navigate(`/product/${product.id}`);
  };
  return (
    <div>
      <Banner
        bannerSrc={
          banner === "mensClothing"
            ? "Images/bannertwo.webp"
            : banner === "womensClothing"
            ? "Images/womensclothingBanner.webp"
            : banner === "electronics"
            ? "Images/electronicsBanner.jpg"
            : "Images/jeweleryBanner.webp"
        }
      />
      <div className={styles.categoriesCardMain}>
        <h2>
          {banner === "mensClothing"
            ? "Men's Clothing"
            : banner === "womensClothing"
            ? "Women's Clothing"
            : banner === "electronics"
            ? "Electronics"
            : "Jewelery"}
        </h2>
        <div className="row">
          {products.map((product, index) => (
            <div
              className="col-lg-3 my-4"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              <div className={styles.categoriescardSub}>
                <div className={styles.cardHead}>
                  <img src={product.image} alt="categoriestitle" />
                </div>
                <div className={styles.cardContent}>
                  <p>{product.title}</p>
                  <h3>{formatCurrency(product.price)}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
