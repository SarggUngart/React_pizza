import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Pages/Main/Main";
import {NotFound} from "./components/Pages/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Pages/Cart/Cart";
import {EmptyCart} from "./components/Pages/Cart/EmptyCart";
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


