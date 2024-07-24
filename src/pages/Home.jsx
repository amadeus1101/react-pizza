import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { DATA_URL, sortArray } from "../constants";

import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import PizzaSkeleton from "../components/PizzaBlock/skeleton";
import { setFilters } from "../redux/slices/filterSlice";
import { setItems, fetchData } from "../redux/slices/pizzaSlice";
import Notification from "../components/Notification";

function Home() {
  console.log("**Home render");
  //redux
  const { category, sort, search, page } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  //query url params
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const getData = () => {
    const sortby = sort.sortType;
    const order = sort.order;
    dispatch(fetchData({ sortby, order, category, search, page }));
    window.scrollTo(0, 0);
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
    getData();
  }, [category, sort.sortType, sort.order, page, search]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        {status === "error" ? (
          <Notification
            headline={"Произошла ошибка "}
            paragraph1={"К сожалению, не удалось получить питсы."}
            paragraph2={"Попробуйте повторить попытку позже."}
          />
        ) : (
          <>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {status === "success" ? pizzas : skeletons}
            </div>
            <Pagination />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
