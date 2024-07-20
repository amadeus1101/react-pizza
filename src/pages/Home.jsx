import React from "react";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import { DATA_URL } from "../constants";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Home() {
  const { categoryId, sort, query, page } = useSelector(
    (state) => state.filter
  );

  /**************************DATA FETCH****************************** */
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  //url ?page=${}&limit=4&${category}&sortby=${}&order=${}${search}
  useEffect(() => {
    setLoading(true);
    fetch(
      `${DATA_URL}?page=${page}&limit=4${
        categoryId !== 0 ? "&category=" + categoryId : ""
      }&sortby=${sort.sortType}&order=${sort.order}${
        query.length > 0 ? "&search=" + query : ""
      }`
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
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>

        <div className="content__items">
          {products.length > 0 &&
            products.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Home;
