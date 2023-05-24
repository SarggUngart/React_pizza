import React from 'react';
import {ReactComponent as SortIcon} from '../../assets/img/sort_arrows.svg'

const sortItems = ['популярности', 'цене', 'алфавиту']

export const Sort = () => {
  
  const [showPopup, setShowPopup] = React.useState(false)
  const [sortList, setSortList] = React.useState(sortItems[0])
  
  const onClickShowPopupHandler = () => {
    setShowPopup(!showPopup)
  }
  
  const onClickActiveSortHandler = (activeSort) => {
    setSortList(activeSort)
    setShowPopup(false)
  }
  
  return (<div className="sort">
    <div className="sort__label">
      <SortIcon className='sort__icon'/>
      <b>Сортировка по:</b>
      <span onClick={onClickShowPopupHandler}>{sortList}</span>
    </div>
    {showPopup && <div className="sort__popup">
      <ul>
        {sortItems.map(item => {
          const activeSortClass = sortList === item ? 'active' : ''
          return (<li key={item}
                      className={activeSortClass}
                      onClick={() => onClickActiveSortHandler(item)}
          >{item}</li>)
        })}
      </ul>
    </div>}
  </div>);
};
