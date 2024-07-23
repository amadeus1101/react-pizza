import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { DATA_URL, sortArray } from "../constants";

import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaBlockSkeleton from "../components/PizzaBlock/skeleton";
import { setFilters } from "../redux/slices/filterSlice";

function Home() {
  console.log("**Home render");
  //redux
  const { category, sort, search, page } = useSelector((state) => state.filter);
  //fetch
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");
  //url
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const fetchData = (url, endpoint) => {
    setError(false);
    setLoading(true);
    fetch(url + endpoint)
      .then((res) => res.json())
      .then((json) => {
        if (json === "Not found") throw new Error("Incorrect search value");
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("An error occured. Awkward...");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: page,
        category: category,
        sortby: sort.sortType,
        order: sort.order,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sort.sortType, sort.order, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      let name;
      sortArray.forEach((el) => {
        if (el.sortType === params.sortby && el.order === params.order)
          name = el.name;
      });
      dispatch(setFilters({ ...params, name }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      const endpoint = `?page=${page}&limit=4${
        category !== 0 ? "&category=" + category : ""
      }&sortby=${sort.sortType}&order=${sort.order}${
        search ? "&search=" + search : ""
      }`;
      fetchData(DATA_URL, endpoint);
    }
    isSearch.current = false;
  }, [category, sort.sortType, sort.order, page, search]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">
          {!isError
            ? "Все пиццы"
            : "По запросу ничего не найдено, вот похожие пиццы ;("}
        </h2>
        {isLoading ? (
          <div className="content__items">
            {[1, 2, 3, 4].map((el) => (
              <PizzaBlockSkeleton key={el} />
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
