import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryValue: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload
    },
  },
})

export const {setCategoryValue} = filterSlice.actions
export default filterSlice.reducer