import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { queryContext } from "./queryContext";

import "./scss/app.scss";
import { useFetch } from "./hooks/useFetch";
import { DATA_URL } from "./constants";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [products, products_loading, products_error] = useFetch(
    DATA_URL,
    query
  );
  return (
    <queryContext.Provider>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                loading={products_loading}
                error={products_error}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </queryContext.Provider>
  );
}

export default App;
