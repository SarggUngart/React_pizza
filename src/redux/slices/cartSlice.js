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
      const findItem = state.items.find(p => p.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
            ...action.payload,
            count: 1
          }
        )
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.price * item.count) + sum
      }, 0)
    },
    minusItem: (state, action) => {
      const findItem = state.items.find(p => p.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    },
    clearItems: (state) => {
      state.items.length = 0
    }
  }
  
  
})

export const {
  addItem,
  removeItem,
  clearItems,
  minusItem
} = cartSlice.actions
export default cartSlice.reducer
