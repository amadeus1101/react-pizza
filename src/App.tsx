import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { setCartData } from "./redux/slices/cartSlice";

import "./scss/app.scss";

function App() {
  console.log("APP render");
  const dispatch = useDispatch();
  useEffect(() => {
    const localStoreData = localStorage.getItem("react-pizza");
    if (localStoreData) {
      const cartData = JSON.parse(localStoreData);
      if (cartData) dispatch(setCartData(cartData));
    }
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
