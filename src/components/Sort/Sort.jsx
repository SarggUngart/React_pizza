import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {ReactComponent as SortIcon} from '../../assets/img/sort_arrows.svg'
import {setSortOrder, setSortValue} from "../../redux/slices/filterSlice";

export const sortItems = [
  {name: 'популярности', sortProperty: 'rating'},
  {name: 'цене', sortProperty: 'price'},
  {name: 'алфавиту', sortProperty: 'title'}]

export const Sort = () => {
  
  const sortItem = useSelector(state => state.filter.sortValue)
  const sortOrder = useSelector(state => state.filter.sortOrder)
  const dispatch = useDispatch()
  
  const [showPopup, setShowPopup] = React.useState(false)
  const popUpSortRef = React.useRef(null)
  
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpSortRef.current && !popUpSortRef.current.contains(event.target)) {
        setShowPopup(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popUpSortRef]);
  
  const onClickShowPopupHandler = () => {
    setShowPopup(true)
  }
  
  const onClickActiveSortHandler = (activeSortItem) => {
    dispatch(setSortValue(activeSortItem))
    setShowPopup(false)
  }
  
  return (<div className="sort">
    <div className="sort__label">
      <div onClick={() => dispatch(setSortOrder(!sortOrder))}>
        <SortIcon className='sort__icon'/>
      </div>
      <b>Сортировка по:</b>
      <span onClick={onClickShowPopupHandler}>{sortItem.name}</span>
    </div>
    {showPopup && <div ref={popUpSortRef} className="sort__popup">
      <ul>
        {sortItems.map((item, i) => {
          const activeSortClass = sortItem.sortProperty === item.sortProperty ? 'active' : ''
          return (<li key={i}
                      className={activeSortClass}
                      onClick={() => onClickActiveSortHandler(item)}
          >{item.name}</li>)
        })}
      </ul>
    </div>}
  </div>);
};
