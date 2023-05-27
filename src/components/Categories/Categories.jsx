import React from 'react';
import Search from "../Search/Search";

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые']

export const Categories = ({categoryValue, setCategoryValue, setInputValue, inputValue}) => {
  
  const onClickActiveCatHandler = (activeCategory) => {
    setCategoryValue(activeCategory)
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

