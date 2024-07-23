import React from "react";
import Notification from "./Notification";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <div class="cart cart--empty">
      <Notification
        headline={"Корзина пустая "}
        paragraph1={"Вероятней всего, вы не заказывали ещё пиццу."}
        paragraph2={
          "Для того, чтобы заказать пиццу, перейди на главную страницу."
        }
      />
      <img src="img/empty-cart.png" alt="Empty cart" />
      <Link class="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
}

export default CartEmpty;
