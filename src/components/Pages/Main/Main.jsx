import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort, sortItems} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";
import axios from 'axios'

export const Main = () => {
  
  const [items, setItems] = React.useState([])
  const [categoryValue, setCategoryValue] = React.useState(0)
  const [sortItem, setSortItem] = React.useState(sortItems[0])
  const [sortOrder, setSortOrder] = React.useState(false)
  
  const baseUrl = 'https://646b73777d3c1cae4ce3d264.mockapi.io/items'
  const categoryPath = categoryValue === 0 ? '' : 'category=' + categoryValue
  let sortOrderPath = sortOrder ? 'asc' : 'desc'
  
  
  React.useEffect(() => {
    axios.get(`${baseUrl}?${categoryPath}&sortBy=${sortItem.sortProperty}&order=${sortOrderPath}`)
      .then(res => setItems(res.data))
  }, [categoryValue, sortItem, sortOrderPath])
  
  return (
    <div className='container'>
      <div className="content__top">
        <Categories
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
        />
        <Sort
          sortItem={sortItem}
          setSortItem={setSortItem}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>
      <h2 className="content__title">Наши пиццы</h2>
      <div className="content__items">
        {items.length
          ?
          items.map(item => {
            return (<PizzaBlock key={item.id}
                                {...item}
            />)
          })
          :
          [...new Array(10)].map((_, i) => {
            return (
              <Skeleton key={i}/>
            )
          })
        }
      </div>
    </div>
  
  );
};
