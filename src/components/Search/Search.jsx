import React from 'react';
import s from './Search.module.scss'
import {ReactComponent as SearchIcon} from "../../assets/img/search_icon.svg";
import {ReactComponent as CloseIcon} from "../../assets/img/close_icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {setInputValue} from "../../redux/slices/filterSlice";

const Search = () => {
  
  const inputValue = useSelector(state => state.filter.inputValue)
  const dispatch = useDispatch()
  const inputRef = React.useRef(null)
  
  const onClickClear = () => {
    if (inputRef) {
      dispatch(setInputValue(''))
      inputRef.current.focus()
    }
  }
  
  const onChangeInputHandler = (e) => {
    dispatch(setInputValue(e.currentTarget.value))
  }
  
  return (
    <div className={s.container}>
      <SearchIcon className={s.searchIco}/>
      {inputValue
        &&
        <div onClick={onClickClear}>
          <CloseIcon className={s.closeIco}/>
        </div>
      }
      <input className={s.input}
             type="text"
             ref={inputRef}
             value={inputValue}
             onChange={onChangeInputHandler}
             placeholder='Какую пиццу ищете?'/>
    </div>
  );
};

export default Search;