import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";

export const Main = () => {
  
  const [items, setItems] = React.useState([])
  
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://646b73777d3c1cae4ce3d264.mockapi.io/items');
      const responseData = await response.json();
      setItems(responseData);
    }
    
    fetchData();
  }, [])
  
  return (
    <div  className='container'>
      <div className="content__top">
        <Categories/>
        <Sort/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
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
