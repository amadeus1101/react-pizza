import React, { Suspense, useEffect } from "react";
import { useAppDispatch } from "./hooks";
import { Routes, Route } from "react-router-dom";
import { setCartData } from "./redux/cart/slice";
import "./scss/app.scss";

import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
//const Cart = React.lazy(() => import("./pages/Cart"));

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
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Something gone wrong...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h2>Something gone wrong...</h2>}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
