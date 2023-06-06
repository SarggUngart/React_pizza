import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Pages/MainPage/Main";
import {NotFound} from "./components/Pages/NotFoundPage/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Pages/CartPage/Cart";
import {EmptyCart} from "./components/Pages/CartPage/EmptyCart";
import {useSelector} from "react-redux";


export function App() {
  
  const items = useSelector(state => state.cart.items)
  
  
  return (
    <div className="wrapper">
      <Header/>
      <main className="content">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='cart' element={items.length ? <Cart/> : <EmptyCart/>}/>
          <Route path='empty-cart' element={<EmptyCart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
    
    </div>);
}


