import React from 'react';
import {ReactComponent as CrossIcon} from "../../../assets/img/cross.svg";
import {ReactComponent as PlusIcon} from "../../../assets/img/plus.svg";
import {ReactComponent as MinusIcon} from "../../../assets/img/minus.svg";
import {useDispatch} from "react-redux";
import {addItem, minusItem, removeItem} from "../../../redux/slices/cartSlice";

export const CartItem = ({title, id, imageUrl, type, price, count, size}) => {
  const dispatch = useDispatch()
  console.log(size)
  const onClickPlus = () => {
    dispatch(addItem({
      id
    }))
  }
  
  const onClickMinus = () => {
    dispatch(minusItem(id))
  }
  
  const onClickRemove = () => {
    dispatch(removeItem(id))
  }
  
  return (<div className="cart__item">
    
    <div className="cart__item-img">
      <img className="pizza-block__image"
           src={imageUrl}
           alt={title}/>
    </div>
    <div className="cart__item-info">
      <h3>{title}</h3>
      <p>{type} тесто, {size} см.</p>
    </div>
    
    <div className="cart__item-count">
      <button onClick={onClickMinus} className="button button--outline button--circle cart__item-count-minus">
        <MinusIcon/>
      </button>
      <b>{count}</b>
      <button onClick={onClickPlus} className="button button--outline button--circle cart__item-count-plus">
        <PlusIcon/>
      </button>
    </div>
    <div className="cart__item-price">
      <b>{price * count} ₽</b>
    </div>
    <div className="cart__item-remove">
      <button onClick={onClickRemove} className="button button--outline button--circle">
        <CrossIcon/>
      </button>
    </div>
  </div>);
};
