import {createSlice} from '@reduxjs/toolkit'
import {sortItems} from "../../components/Sort/Sort";
import React from "react";

const initialState = {
  categoryValue: 0,
  sortValue: sortItems[0],
  sortOrder: false,
  inputValue: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload
    }
  }
})

export const {
  setCategoryValue,
  setSortValue,
  setSortOrder,
  setInputValue
} = filterSlice.actions
export default filterSlice.reducer

