import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Pages/Main/Main";
import {NotFound} from "./components/Pages/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/Pages/Cart/Cart";
import {EmptyCart} from "./components/Pages/Cart/EmptyCart";

export function App() {
  
  return (<div className="wrapper">
    <Header/>
    <main className="content">
    
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='empty-cart' element={<EmptyCart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    
    </main>
  
  </div>);
}


