import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCartData } from "./redux/slices/cartSlice";
import { RootState, AppDispatch } from "./redux/store";
import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  console.log("APP render");
  const dispatch = useDispatch<AppDispatch>();
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
