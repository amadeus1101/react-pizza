import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import { DATA_URL } from "./constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const { categoryId, sort, query, page } = useSelector(
    (state) => state.filter
  );

  /**************************DATA FETCH****************************** */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  //url ?page=${}&limit=4&${category}&sortby=${}&order=${}${search}
  useEffect(() => {
    setLoading(true);
    fetch(
      `${DATA_URL}?page=${page}&limit=4${
        categoryId !== 0 ? "&category=" + categoryId : ""
      }&sortby=${sort.sortType}&order=${sort.order}`
    )
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
  }, [categoryId, sort, page, query]);
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
