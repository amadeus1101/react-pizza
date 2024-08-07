import qs from "qs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QueryType } from "../@types/QueryType";
import { ProductType } from "../@types/ProductType";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateStorage } from "../utils/updateStorage";
import { sortArray } from "../constants";
//redux
import { setFilters } from "../redux/filters/slice";
import { FetchStatus } from "../redux/product/types";
import { cartSelector } from "../redux/cart/selectors";
import { fetchData } from "../redux/product/asyncActions";
import { filterSelector, sortSelector } from "../redux/filters/selectors";
import { productSelector } from "../redux/product/selectors";
//components
import Sort from "../components/Sort";
import Pagination from "../components/Pagination";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Notification from "../components/Notification";
import PizzaSkeleton from "../components/PizzaBlock/skeleton";

function Home() {
  console.log("*--Home");
  //redux
  const { category, search, page } = useAppSelector(filterSelector);
  const { name, sortby } = useAppSelector(sortSelector);
  const { items, status } = useAppSelector(productSelector);
  const { cart, totalCount, totalPrice } = useAppSelector(cartSelector);
  //query url params
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) updateStorage({ cart, totalCount, totalPrice });
  }, [totalCount]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category,
        sortby: sortby.substring(1),
        order: sortby[0] === "-" ? "desc" : "asc",
        page,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [category, sortby, page]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const tmp =
        params.order === "asc" ? "+" + params.sortby : "-" + params.sortby;
      const obj: QueryType = {
        category: Number(params.category),
        sortby: tmp,
        name: String(sortArray.find((elem) => elem.sortby === tmp)?.name),
        page: Number(params.page),
      };
      dispatch(setFilters(obj));
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    dispatch(fetchData({ sort: { name, sortby }, category, search, page }));
    window.scrollTo(0, 0);
  }, [category, sortby, page, search]);

  const getProductCount = (title: string) => {
    let counter = 0;
    for (let i = 0; i < cart.length; i++)
      if (cart[i].title === title) counter += cart[i].count;
    return counter;
  };

  const skeletons = [...new Array(4)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));
  const pizzas = items.map((pizza: ProductType) => (
    <PizzaBlock
      key={pizza.id}
      {...pizza}
      count={getProductCount(pizza.title)}
    />
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
              {status === FetchStatus.SUCCESS ? pizzas : skeletons}
            </div>
            {status === FetchStatus.SUCCESS && <Pagination />}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
