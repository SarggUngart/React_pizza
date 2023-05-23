import React from 'react';


const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


export const Categories = () => {
  const [category, setCategory] = React.useState(categories[0])
  
  const onClickActiveCatHandler = (activeCategory) => {
    setCategory(activeCategory)
  }
  
  return (
    <nav className="categories">
      <ul>
        {categories.map(cat => {
          const activeCategoryClass = category === cat ? 'active' : ''
          return (
            <li key={cat}
                className={activeCategoryClass}
                onClick={() => onClickActiveCatHandler(cat)}>
              {cat}
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

