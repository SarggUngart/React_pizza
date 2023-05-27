import React from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые']

export const Categories = ({categoryValue, setCategoryValue}) => {
  
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
  </nav>);
};

