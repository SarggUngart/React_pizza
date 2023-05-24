import React from 'react';
import {AddBtn} from "../Buttons/AddBtn";

export const PizzaBlock = (props) => {
  const {title, imageUrl, price, sizes, types} = props
  
  const typeName = ['тонкое', 'традиционное']
  const [count, setCount] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(sizes[0])
  const [activeType, setActiveType] = React.useState(types[0])
  
  const increaseCount = () => setCount(prev => prev + 1)
  const onClickActiveSizeHandler = (size) => {
    setActiveSize(size)
  }
  const onClockActiveTypeHandler = (type) => {
    setActiveType(type)
  }
  
  return (<div className="pizza-block">
    <img
      className="pizza-block__image"
      src={imageUrl}
      alt="Pizza"
    />
    <h4 className="pizza-block__title">{title}</h4>
    <div className="pizza-block__selector">
      <ul>
        {types.map((type, i) => {
          const activeTypeClass = activeType === type ? 'active' : ''
          return (<li key={i}
                      className={activeTypeClass}
                      onClick={() => onClockActiveTypeHandler(type)}
          >{typeName[type]}</li>)
        })}
      </ul>
      <ul>
        {sizes.map(size => {
          const activeSizeClass = activeSize === size ? 'active' : ''
          return (<li
            className={activeSizeClass}
            key={size}
            onClick={() => onClickActiveSizeHandler(size)}>
            {size} см
          </li>)
        })}
      </ul>
    </div>
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">от {price} ₽</div>
      <AddBtn count={count}
              increaseCount={increaseCount}/>
    </div>
  </div>);
};
