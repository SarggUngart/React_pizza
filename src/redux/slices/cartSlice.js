import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
      state.totalPrice = state.items.reduce((sum, item) => {
        return item.price + sum
      }, 0)
    },
    removeItem: (state, action) => {
      state.items = state.items.find(p => p.id !== action.payload)
    },
    clearItems: (state) => {
      state.items.length = 0
    }
  }
  
  
})

export const {
  addItem,
  removeItem,
  clearItems
} = cartSlice.actions
export default cartSlice.reducer
