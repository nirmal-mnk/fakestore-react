import styles from "./ProductDes.module.css";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Features/Reducers/SingleProductReducer";
import { formatCurrency } from "../../Utils/helpers";
import addNotification from "react-push-notification";

export default function ProductDes() {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(
    (state) => state.rootReducer.singleProductState.singleProductData
  );
  useEffect(() => {
    console.log(params.id);
    dispatch(getSingleProduct(params.id));
  }, []);

  const sendNotification = () => {
    setTimeout(() => {
      addNotification({
        title: "Your Order has been recieved",
        message: `Thank you for your Purchasing ${product.title} !`,
        theme: "undefined",
        native: true,
        duration: 1000000,
        icon: "Images/AmazonLogo.png",
      });
    }, 1000);
  };
  return (
    <div className={styles.productDesMain}>
      <div className={styles.productDesLeft}>
        <div className={styles.productImg}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.actions}>
          <Link to="/orderplaced">
            <button
              type="button"
              className={styles.actionBtns}
              onClick={() => sendNotification()}
            >
              Buy Now
            </button>
          </Link>

          {/* <button type="button" className={styles.actionBtns}>
            Add to Cart
          </button> */}
        </div>
      </div>
      <div className={styles.productDesRight}>
        <h3 className={styles.proTitle}>{product.title}</h3>
        <h2 className={styles.proPrice}>{formatCurrency(product.price)}</h2>
        <span className="text-muted">
          <del>$100.00</del>
        </span>
        <p className="text-success">Extra 30% off</p>
        <p>You save:50(30%)</p>
        <p className="text-muted">Inclusive of all taxes</p>
        <p>FREE Delivery: Monday, May 13</p>
        <h5>Product description</h5>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
