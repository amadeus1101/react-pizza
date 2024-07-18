import React from "react";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import { UTILITIES_URL } from "../constants";
import { useFetch } from "../hooks/useFetch";
import { useSort } from "../hooks/useSort";
import Pagination from "../components/Pagination";

function Home({ products, loading, error }) {
  const [tools, tools_loading, tools_error] = useFetch(UTILITIES_URL);
  const { sortMode, isSortOpened, openSortPopup, closeSortPopup } = useSort();
  return (
    <div className="content">
      <div className="container">
        {tools.length > 0 && (
          <div className="content__top">
            <Categories categories={tools[0].categories} />
            <Sort
              sorting={tools[0].sorting}
              sortMode={sortMode}
              isSortOpened={isSortOpened}
              openSortPopup={openSortPopup}
              closeSortPopup={closeSortPopup}
            />
          </div>
        )}
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
