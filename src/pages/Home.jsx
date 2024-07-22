import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DATA_URL } from "../constants";

import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlockSkeleton from "../components/PizzaBlock/skeleton";

function Home() {
  const { categoryId, sort, query, page } = useSelector(
    (state) => state.filter
  );
  const category = categoryId !== 0 ? "&category=" + categoryId : "";
  const sortType = "&sortby=" + sort.sortType;
  const order = "&order=" + sort.order;
  const currentPage = "page=" + page;
  const productsLimit = "&limit=" + 4;
  const search = query.length > 0 ? "&search=" + query : "";
  /**************************DATA FETCH****************************** */
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch(
      DATA_URL +
        "?" +
        currentPage +
        productsLimit +
        category +
        sortType +
        order +
        search
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
  }, [category, sortType, order, currentPage, search]);
  /**************************************************************************** */

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {isLoading ? (
          <div className="content__items">
            {[1, 2, 3, 4].map((el) => (
              <PizzaBlockSkeleton />
            ))}
          </div>
        ) : (
          <>
            <div className="content__items">
              {products.length > 0 &&
                products.map((pizza) => (
                  <PizzaBlock key={pizza.id} {...pizza} />
                ))}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
