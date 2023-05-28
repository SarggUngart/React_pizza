import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Search from "../Search/Search";
import {setCategoryValue} from "../../redux/slices/filterSlice";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые']

export const Categories = ({setInputValue, inputValue}) => {
  
  const categoryValue = useSelector(state => state.filter.categoryValue)
  const dispatch = useDispatch()
  console.log(categoryValue)
  
  const onClickActiveCatHandler = (activeCategory) => {
    dispatch(setCategoryValue(activeCategory))
  }
  
  return (<nav className="categories">
    <ul className='categories__list'>
      {categories.map((cat, i) => {
        const activeCategoryClass = categoryValue === i ? 'active' : ''
        return (<li key={cat}
                    className={activeCategoryClass}
                    onClick={() => onClickActiveCatHandler(i)}>
          {cat}
        </li>)
      })}
    </ul>
    
    <Search setInputValue={setInputValue}
            inputValue={inputValue}/>
  
  </nav>);
  
};

