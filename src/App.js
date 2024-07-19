import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { DATA_URL } from "./constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const { categoryId, sort } = useSelector((state) => state.filter);

  /**************************DATA FETCH****************************** */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let URL = DATA_URL;
    if (categoryId !== 0) {
      URL +=
        "?category=" +
        categoryId +
        "&sortby=" +
        sort.sortType +
        "&order=" +
        sort.order;
    } else {
      URL += "?sortby=" + sort.sortType + "&order=" + sort.order;
    }
    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occured. Awkward...");
        setLoading(false);
      });
  }, [categoryId, sort]);
  /**************************************************************************** */

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} loading={loading} error={error} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
