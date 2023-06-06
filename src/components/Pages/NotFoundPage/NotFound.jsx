import React from 'react';
import s from './NotFound.module.scss'
import {Link} from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h2 className={s.title}>
        Ой, такой страницы нет :(
      </h2>
      <Link to='/'>
        <button className={s.btn}>На главную</button>
      </Link>
    </>
  );
};

