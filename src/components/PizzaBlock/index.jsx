import React, { useState } from "react";

function PizzaBlock({ title, type, size, price, count }) {
  const pzbsar = ["тонкое", "традиционное"];
  const pzszar = ["26 см.", "30 см.", "40 см."];
  const [pizzaCount, setPizzaCount] = useState(count);
  const [pizzaBase, setPizzaBase] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(0);

  const onClickAdd = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const onClickPizzaBase = (base) => {
    setPizzaBase(base);
  };
  const onClickPizzaSize = (size) => {
    setPizzaSize(size);
  };
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pzbsar.map((base, index) => (
            <li
              className={pizzaBase === index ? "active" : ""}
              onClick={() => onClickPizzaBase(index)}
            >
              {base}
            </li>
          ))}
        </ul>
        <ul>
          {pzszar.map((size, index) => (
            <li
              className={pizzaSize === index ? "active" : ""}
              onClick={() => onClickPizzaSize(index)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{"от " + price + " ₽"}</div>
        <div
          className="button button--outline button--add"
          onClick={onClickAdd}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
