import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import MensClothing from "./Pages/MensClothing";
import Electronics from "./Pages/Electronics";
import WomensClothing from "./Pages/WomensClothing";
import Jewelery from "./Pages/Jewelery";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader/Loader";
import ProductDes from "./Components/ProductDes/ProductDes";
import Login from "./Pages/Login";
import AuthProvider from "./Components/AuthProvider";
import { useEffect, useState } from "react";
import Success from "./Pages/Success";

function App() {
  // const navigated = useNavigate();
  const loader = useSelector(
    (state) => state.rootReducer.productState.isLoading
  );
  const categoryLoader = useSelector(
    (state) => state.rootReducer.categoryState.isLoading
  );
  const singleProLoader = useSelector(
    (state) => state.rootReducer.singleProductState.isLoading
  );

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let warnTimeout;
  let logoutTimeout;
  const events = [
    "load",
    "mousemove",
    "mousedown",
    "click",
    "scroll",
    "keypress",
  ];

  const warn = () => {
    console.log("You will be logged out automatically in 15 minutes.");
  };

  const logout = () => {
    sessionStorage.removeItem("token", "");
    // navigated("/login");
    setIsLoggedIn(false);
  };

  const clearTimeouts = () => {
    if (warnTimeout) clearTimeout(warnTimeout);
    if (logoutTimeout) clearTimeout(logoutTimeout);
  };

  const setTimeouts = () => {
    warnTimeout = setTimeout(warn, 900000); //15 Minutes
    logoutTimeout = setTimeout(logout, 1800000); //30 Minutes
  };

  const resetTimeout = () => {
    clearTimeouts();
    setTimeouts();
  };

  useEffect(() => {
    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }
    setTimeouts();

    return () => {
      clearTimeouts();
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
      }
    };
  }, []);

  return (
    <div>
      {loader || categoryLoader || singleProLoader ? <Loader /> : null}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider>
                <Layout />
              </AuthProvider>
            }
          >
            <Route index element={<Navigate to="/home" />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="mensclothing" element={<MensClothing />} />
            <Route path="womensclothing" element={<WomensClothing />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewelery" element={<Jewelery />} />
            <Route path="/product/:id" element={<ProductDes />} />
            <Route path="/orderplaced" element={<Success />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
