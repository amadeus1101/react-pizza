import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <Notification
        headline={"Корзина пустая "}
        paragraph1={"Вероятней всего, вы не заказывали ещё пиццу."}
        paragraph2={
          "Для того, чтобы заказать пиццу, перейди на главную страницу."
        }
      />
      <img src="img/empty-cart.png" alt="Empty cart" />
      <Link className="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
