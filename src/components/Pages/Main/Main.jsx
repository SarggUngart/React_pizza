import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";
import axios from 'axios'
import {useSelector} from "react-redux";

export const Main = () => {
  const {categoryValue, sortValue, sortOrder, inputValue} = useSelector(state => state.filter)
  
  const [items, setItems] = React.useState([])
  
  const baseUrl = 'https://646b73777d3c1cae4ce3d264.mockapi.io/items'
  const categoryPath = categoryValue === 0 ? '' : 'category=' + categoryValue
  const sortOrderPath = !sortOrder ? 'asc' : 'desc'
  // const searchPath = inputValue ? `&search=${inputValue}` : ''
  
  React.useEffect(() => {
    axios.get(`${baseUrl}?${categoryPath}&sortBy=${sortValue.sortProperty}&order=${sortOrderPath}`)
      .then(res => setItems(res.data))
  }, [categoryValue, sortValue, sortOrderPath, inputValue])
  
  return (
    <div className='container'>
      <div className="content__top">
        <Categories/>
        <Sort
        />
      </div>
      <h2 className="content__title">Наши пиццы</h2>
      <div className="content__items">
        {items.length
          ?
          items
            .filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map(item => {
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



