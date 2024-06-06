import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";

import "./scss/app.scss";

const fake = [0, 1, 2, 3, 4, 5, 6, 7];

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {fake.map((el) => (
              <PizzaBlock
                key={el}
                title="Чизбургер-пицца"
                type={0}
                size={1}
                price={395}
                count={2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
