import React from 'react';
import {Categories} from "../../Categories/Categories";
import {Sort} from "../../Sort/Sort";
import {PizzaBlock} from "../../PizzaBlock/PizzaBlock";
import {Skeleton} from "../../UI/Skeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../../../redux/slices/pizzaSlice";
import {ErrorPage} from "../ErrorPage/EmptyCart";


export const Main = () => {
  const {categoryValue, sortValue, sortOrder, inputValue} = useSelector(state => state.filter)
  const {items, status} = useSelector(state => state.pizza)
  
  const dispatch = useDispatch()
  
  const categoryPath = categoryValue === 0 ? '' : 'category=' + categoryValue
  const sortOrderPath = !sortOrder ? 'asc' : 'desc'
  const sortValuePath = `sortBy=${sortValue.sortProperty}`
  
  React.useEffect(() => {
    // const searchPath = inputValue ? `&search=${inputValue}` : ''
    dispatch(fetchPizzas({categoryPath, sortOrderPath, sortValuePath}))
  }, [categoryValue, sortValue, sortOrder, inputValue])
  
  return (
    <div className='container'>
      <div className="content__top">
        <Categories/>
        <Sort
        />
      </div>
      {status === 'error' ?
        <ErrorPage/>
        :
        <React.Fragment>
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
        </React.Fragment>
      }
    </div>
  );
};



