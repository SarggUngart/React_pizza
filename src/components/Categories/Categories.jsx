import React from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые']

export const Categories = ({category, setCategory}) => {
  
  const onClickActiveCatHandler = (activeCategory) => {
    setCategory(activeCategory)
  }
  
  return (<nav className="categories">
    <ul className='categories__list'>
      {categories.map((cat, i) => {
        const activeCategoryClass = category === i ? 'active' : ''
        return (<li key={cat}
                    className={activeCategoryClass}
                    onClick={() => onClickActiveCatHandler(i)}>
          {cat}
        </li>)
      })}
    </ul>
  </nav>);
};

