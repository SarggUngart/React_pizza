import React from 'react';
import {CartItem} from "./CartItem";
import {ReactComponent as CartIcon} from "../../../assets/img/cart.svg";
import {ReactComponent as TrashIcon} from "../../../assets/img/trash.svg";
import {ReactComponent as ArrowLeftIcon} from "../../../assets/img/grey-arrow-left.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearItems} from "../../../redux/slices/cartSlice";

export const Cart = () => {
  
  const dispatch = useDispatch()
  const {items, totalPrice} = useSelector(state => state.cart)
  console.log(items)
  const totalCount = items.reduce((total, item) => {
    return total + item.count;
  }, 0);
  
  
  const onClickClear = () => {
    if (window.confirm('Вы действительно хотите отчистить корзину?'))
      dispatch(clearItems())
  }
  
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
            <span onClick={onClickClear}>Очистить корзину</span>
          </div>
        </div>
        
        {items && items.map(item => {
          return <CartItem key={item.id}
                           {...item}
          />
        })}
        
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span> Всего пицц: <b>{totalCount} шт.</b> </span>
            <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
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

