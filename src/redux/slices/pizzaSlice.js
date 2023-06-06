import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState = {
  items: []
}


const fetchPizzas = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  }
})

export const {setItems} = pizzaSlice.actions
export default pizzaSlice.reducer
