import { Link, useNavigate } from "react-router-dom";

export default function Success() {
  const navigated = useNavigate();
  setTimeout(() => {
    navigated("/");
  }, 5000);
  return (
    <div className="sucess-page-main">
      <div className="success-page-sub">
        <h3>Your Order has been recieved</h3>
        <div className="success-page__image">
          <img src="Images/check-icon.png" alt="Check Icon" />
        </div>
        <h4>Thank you for your Purchase !</h4>
        <p>
          You will receive an order conformation email with details of your
          Order.
        </p>
        <Link to="/">
          <button type="button" className="btn btn-secondary cartbtn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}
