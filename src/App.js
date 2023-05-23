import {Header} from "./components/Header/Header";
import {Categories} from "./components/Categories/Categories";
import {Sort} from "./components/Sort/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock";
import items from './localData/data.json'

function App() {
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
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            sizes={item.sizes}
                />
              )
            })}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
