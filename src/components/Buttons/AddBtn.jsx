import React from 'react';
import {ReactComponent as PlusIcon} from '../../assets/img/plus.svg'

export const AddBtn = (props) => {
  const {count, onClickAdd, btnTitle} = props
  
  return (
    <button className="button button--outline button--add"
            onClick={onClickAdd}>
      <PlusIcon/>
      <span>{btnTitle}</span>
      {count > 0 && <i>{count}</i>}
    </button>
  );
};
