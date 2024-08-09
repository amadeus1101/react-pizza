import React from "react";
import { Link } from "react-router-dom";
import Notification from "./Notification";
import empty_icon from "../assets/img/empty-cart.png";

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
      <img src={empty_icon} alt="Empty cart" />
      <Link className="button button--black" to="/">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
