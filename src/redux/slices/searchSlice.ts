import {createSlice} from "@reduxjs/toolkit";

type initialStateType = {
  search: string
}

const initialState: initialStateType= {
  search: ''
}

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearch (state, action) {
      state.search = action.payload
    }
  }
})

export const {setSearch} = searchSlice.actions

export default searchSlice.reducer
