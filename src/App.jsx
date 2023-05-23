import React from 'react';
import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";


export function App() {
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
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <main className="content__items">
            {items.map(item => {
              return (
                <PizzaBlock key={item.id}
                            {...item}
                />
              )
            })}
          </main>
        </div>
      </div>
    </div>
  );
}


