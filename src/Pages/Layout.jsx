import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Features/Reducers/ProductsReducer";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const categories = [
      "men's clothing",
      "women's clothing",
      "electronics",
      "jewelery",
    ];
    categories.map((category) => {
      dispatch(getProducts(category));
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
