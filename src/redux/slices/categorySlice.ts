import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  category: ''
}

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload === 'Все товары' ? '' : action.payload === 'Одежда' ? 'cloth' : action.payload === 'Электроника' ? 'technique' : 'food'
    }
  }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer
