import React from 'react';
import {AddBtn} from "../Buttons/AddBtn";


export const PizzaBlock = (props) => {
  const {title, imageUrl, id, price} = props
  
  const [count, setCount] = React.useState(0)
  const increaseCount = () => setCount(prev => prev + 1)
  
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">тонкое</li>
          <li>традиционное</li>
        </ul>
        <ul>
          <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        
        <AddBtn count={count}
                increaseCount={increaseCount}/>
        
      </div>
    </div>
  );
};
