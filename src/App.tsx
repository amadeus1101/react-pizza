import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { Routes, Route } from "react-router-dom";
import { setCartData } from "./redux/cart/slice";
import "./scss/app.scss";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  console.log("*APP");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localStoreData = localStorage.getItem("react-pizza-cart");
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
