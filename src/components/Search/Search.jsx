import React from 'react';
import s from './Search.module.scss'
import {ReactComponent as SearchIcon} from "../../assets/img/search_icon.svg";
import {ReactComponent as CloseIcon} from "../../assets/img/close_icon.svg";

const Search = ({setInputValue, inputValue}) => {
  
  const onChangeInputHandler = (e) => {
    setInputValue(e.currentTarget.value)
  }
  
  return (
    <div className={s.container}>
      <SearchIcon className={s.searchIco}/>
      {inputValue
        &&
        <div onClick={() => setInputValue('')}>
          <CloseIcon className={s.closeIco}/>
        </div>
      }
      <input className={s.input}
             type="text"
             value={inputValue}
             onChange={onChangeInputHandler}
             placeholder='Какую пиццу ищете?'/>
    </div>
  );
};

export default Search;