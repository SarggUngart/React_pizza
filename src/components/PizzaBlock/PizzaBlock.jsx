import React from 'react';
import {AddBtn} from "../Buttons/AddBtn";
import {useDispatch, useSelector} from "react-redux";

import {addItem} from "../../redux/slices/cartSlice";

export const PizzaBlock = (props) => {
  const {title, id, imageUrl, price, sizes, types} = props
  
  const typeName = ['тонкое', 'традиционное']
  const dispatch = useDispatch()
  const countItem = useSelector(state => state.cart.items.find(p => p.id === id))
  const [activeSize, setActiveSize] = React.useState(sizes[0])
  const [activeType, setActiveType] = React.useState(types[0])
  
  const addedCount = countItem ? countItem.count : '0'
  
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeType],
      size: activeSize
    }
    dispatch(addItem(item))
  }
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
      <AddBtn btnTitle={'Добавить'}
              count={addedCount}
              onClickAdd={onClickAdd}/>
    </div>
  </div>);
};
