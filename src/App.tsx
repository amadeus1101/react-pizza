import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
const Cart = React.lazy(() => import("./pages/Cart"));

function App() {
  console.log("*APP");
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
