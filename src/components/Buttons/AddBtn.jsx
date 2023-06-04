import React from 'react';
import {ReactComponent as PlusIcon} from '../../assets/img/plus.svg'

export const AddBtn = (props) => {
  const { items, onClickAdd, btnTitle} = props
  
  return (
    <button className="button button--outline button--add"
            onClick={onClickAdd}>
      <PlusIcon/>
      <span>{btnTitle}</span>
      <i>{items.length}</i>
    </button>
  );
};
