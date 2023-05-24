import React from 'react';
import {ReactComponent as CrossIcon} from "../../../assets/img/cross.svg";
import {ReactComponent as PlusIcon} from "../../../assets/img/plus.svg";
import {ReactComponent as MinusIcon} from "../../../assets/img/minus.svg";

export const CartItem = () => {
  return (
    <div className="cart__item">
      
      <div className="cart__item-img">
        <img className="pizza-block__image"
             src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
             alt="Pizza"/>
      </div>
      <div className="cart__item-info">
        <h3>Сырный цыпленок</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      
      <div className="cart__item-count">
        <buttnon className="button button--outline button--circle cart__item-count-minus">
          <MinusIcon/>
        </buttnon>
        <b>2</b>
        <button className="button button--outline button--circle cart__item-count-plus">
          <PlusIcon/>
        </button>
      </div>
      <div className="cart__item-price">
        <b>770 ₽</b>
      </div>
      <div className="cart__item-remove">
        <button className="button button--outline button--circle">
          <CrossIcon/>
        </button>
      </div>
    </div>);
};
