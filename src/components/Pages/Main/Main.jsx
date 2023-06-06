import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setItems} from "../../../redux/slices/pizzaSlice";


export const Main = () => {
  const {categoryValue, sortValue, sortOrder, inputValue} = useSelector(state => state.filter)
  const items = useSelector(state => state.pizza.items)
  const dispatch = useDispatch()
  
  
  React.useEffect(() => {
    const categoryPath = categoryValue === 0 ? '' : 'category=' + categoryValue
    const sortOrderPath = !sortOrder ? 'asc' : 'desc'
    // const searchPath = inputValue ? `&search=${inputValue}` : ''
    const getItems = async () => {
      try {
        const res = await axios.get(`https://646b73777d3c1cae4ce3d264.mockapi.io/items?${categoryPath}&sortBy=${sortValue.sortProperty}&order=${sortOrderPath}`)
        dispatch(setItems(res.data))
      } catch (e) {
        console.log(e)
      }
    }
    
    getItems()
  }, [categoryValue, sortValue, sortOrder, inputValue])
  
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



