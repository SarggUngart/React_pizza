import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";
import axios from 'axios'

export const Main = () => {
  
  const [items, setItems] = React.useState([])
  const [category, setCategory] = React.useState(0)
  const [sortList, setSortList] = React.useState(0)
  
  const baseUrl = 'https://646b73777d3c1cae4ce3d264.mockapi.io/items'
  const categoryPath = category === 0 ? '' : category
  
  React.useEffect(() => {
    axios.get(`${baseUrl}?category=${categoryPath}`)
      .then(res => setItems(res.data))
  }, [category])
  
  return (
    <div className='container'>
      <div className="content__top">
        <Categories
          category={category}
          setCategory={setCategory}
        />
        <Sort
          sortList={sortList}
          setSortList={setSortList}
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
