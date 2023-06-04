import React from 'react';
import logo from "../../assets/img/pizza-logo.svg";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {ReactComponent as CartIcon} from "../../assets/img/cart.svg";

export const Header = () => {
  
  const {items, totalPrice} = useSelector(state => state.cart)
  
  const totalCount = items.reduce((total, item) => {
    return total + item.count;
  }, 0);
  
  return (<header className="header">
    <div className="container">
      <div className="header__logo">
        <Link to='/'>
          <img width="38" src={logo} alt="Pizza logo"/>
        </Link>
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <Link to='cart'>
        <div className="header__cart">
          <button className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon/>
            <span>{totalCount}</span>
          </button>
        </div>
      </Link>
    </div>
  </header>);
};

