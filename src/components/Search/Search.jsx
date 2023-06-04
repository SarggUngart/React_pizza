import React from 'react';
import s from './Search.module.scss'
import {ReactComponent as SearchIcon} from "../../assets/img/search_icon.svg";
import {ReactComponent as CloseIcon} from "../../assets/img/close_icon.svg";
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";
import {setInputValue} from "../../redux/slices/filterSlice";

const Search = () => {
  const [localValue, setLocalValue] = React.useState('')
  const dispatch = useDispatch()
  const inputRef = React.useRef(null)
  
  const onClickClear = () => {
    if (inputRef) {
      dispatch(setInputValue(''))
      setLocalValue('')
      inputRef.current.focus()
    }
  }
  
  const updateSearchValue = React.useCallback(debounce((str) => {
    dispatch(setInputValue(str))
  }, 350), [])
  
  const onChangeInput = event => {
    setLocalValue(event.currentTarget.value)
    updateSearchValue(event.currentTarget.value)
  }
  
  
  return (
    <div className={s.container}>
      <SearchIcon className={s.searchIco}/>
      {localValue
        &&
        <div onClick={onClickClear}>
          <CloseIcon className={s.closeIco}/>
        </div>
      }
      
      <input className={s.input}
             type="text"
             ref={inputRef}
             value={localValue}
             onChange={onChangeInput}
             placeholder='Какую пиццу ищете?'/>
    </div>
  );
};

export default Search;