import React from 'react';
import {ReactComponent as SortIcon} from '../../assets/img/sort_arrows.svg'

const sortItems = ['популярности', 'цене', 'алфавиту']

export const Sort = ({sortList, setSortList}) => {
  
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
  
  const onClickActiveSortHandler = (activeSort) => {
    setSortList(activeSort)
    setShowPopup(false)
  }
  
  return (<div className="sort">
    <div className="sort__label">
      <SortIcon className='sort__icon'/>
      <b>Сортировка по:</b>
      <span onClick={onClickShowPopupHandler}>{sortItems[sortList]}</span>
    </div>
    {showPopup && <div ref={popUpSortRef} className="sort__popup">
      <ul>
        {sortItems.map((item, i) => {
          const activeSortClass = sortList === i ? 'active' : ''
          return (<li key={item}
                      className={activeSortClass}
                      onClick={() => onClickActiveSortHandler(i)}
          >{item}</li>)
        })}
      </ul>
    </div>}
  </div>);
};
