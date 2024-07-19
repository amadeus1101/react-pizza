import React from "react";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";

function Home({ products, loading, error }) {
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
