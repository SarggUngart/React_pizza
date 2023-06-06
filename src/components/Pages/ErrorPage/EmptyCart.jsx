import React from 'react';
import {ReactComponent as Buyer} from "../../../assets/img/shopping.svg";

export const ErrorPage = () => {
  return (
    <div className="cart cart--empty">
      <h2>Что-то сломалось</h2>
      <p>
        Очень жаль, но товаров вы сейчас не увидите((
      </p>
      <Buyer/>
    </div>
  
  )
}
