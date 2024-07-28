import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
import { pizzaItemType } from "../@types/pizzaItemType";
import { filterSelector } from "../redux/selectors/filterSelector";
import { pizzaSelector } from "../redux/selectors/pizzaSelector";
import { useAppDispatch, useAppSelector } from "../hooks";

function Home() {
  console.log("**Home render");
  //redux
  const { category, sort, search, page } = useAppSelector(filterSelector);
  const { items, status } = useAppSelector(pizzaSelector);
  //query url params
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const getData = () => {
    dispatch(fetchData({ sort, category, search, page }));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: page,
        category: category,
        sortby: sort.sortby,
        order: sort.order,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sort.sortby, sort.order, page, search]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      let name;
      sortArray.forEach((el) => {
        if (el.sortby === params.sortby && el.order === params.order)
          name = el.name;
      });
      dispatch(setFilters({ ...params, name }));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    getData();
  }, [category, sort.sortby, sort.order, page, search]);

  const skeletons = [...new Array(4)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  const pizzas = items.map((pizza: pizzaItemType) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

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
