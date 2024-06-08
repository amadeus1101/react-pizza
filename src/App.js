import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { useFetch } from "./hooks/useFetch";
import { useEffect } from "react";

function App() {
  const { data, loading, error } = useFetch();
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
