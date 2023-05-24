import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Buyer} from "../../../assets/img/shopping.svg";

export const EmptyCart = () => {
  return (
       <div className="cart cart--empty">
        <h2>Корзина пустая <icon>😕</icon></h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <Buyer/>
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>

  )
}
