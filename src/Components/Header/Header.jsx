import styles from "./Header.module.css";
import { navLinks } from "../../Utils/data";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Features/Reducers/AuthReducers";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="w-100 sticky-top">
      <div className={styles.headerMain}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="Images/amazon_PNG11.png" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className="text-end d-flex justify-content-end align-items-center">
            {/* <button type="button" className="icon-btn position-relative">
              <img src="Images/icons8-shopping-cart-30.png" alt="Cart Icon" />
              <span className={styles.cartCount}></span>
            </button> */}
            <input
              className="form-control w-25 ms-auto"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn searchbutton" type="button">
              Search
            </button>

            <button className="btn btn-dark" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className={styles.headerBtm}>
        <ul className={`nav justify-content-center ${styles.listhover}`}>
          {navLinks.map((links, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                to={links.link}
                className={`nav-link text-light text-uppercase`}
              >
                {links.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
