import React from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Pages/Main/Main";
import {NotFound} from "./components/Pages/NotFound/NotFound";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/Pages/Cart/Cart";

export function App() {
  
  return (<div className="wrapper">
    <Header/>
    <main className="content">
      <div className="container">
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </main>
  
  </div>);
}


