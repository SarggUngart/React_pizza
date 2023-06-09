import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  items: [],
  status: 'loading'
}

export const fetchPizzas = createAsyncThunk('pizza/fetchItems', async (params) => {
  const {categoryPath, sortOrderPath, sortValuePath} = params
  
  const response = await axios.get(`https://646b73777d3c1cae4ce3d264.mockapi.io/items?${categoryPath}&${sortValuePath}&order=${sortOrderPath}`)
  return response.data
})

export const pizzaSlice = createSlice({
  name: 'pizza', initialState, reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
  
})

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer
