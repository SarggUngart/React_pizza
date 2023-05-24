import React from 'react';
import {CartItem} from "./CartItem";
import {ReactComponent as CartIcon} from "../../../assets/img/cart.svg";
import {ReactComponent as TrashIcon} from "../../../assets/img/trash.svg";
import {ReactComponent as ArrowLeftIcon} from "../../../assets/img/grey-arrow-left.svg";
import {Link} from "react-router-dom";

export const Cart = () => {
  return (
    <div className='container container--cart'>
      
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon/>
            Корзина
          </h2>
          <div className="cart__clear">
            <TrashIcon/>
            <span>Очистить корзину</span>
          </div>
        </div>
        
        <CartItem/>
        
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Всего пицц: <b>3 шт.</b> </span>
            <span> Сумма заказа: <b>900 ₽</b> </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link to='/' className="button button--outline button--add go-back-btn">
              <ArrowLeftIcon/>
              <span>Вернуться назад</span>
            </Link>
            <button className="button pay-btn">Оплатить сейчас</button>
          </div>
        </div>
      </div>
    
    </div>
  
  );
};

