import {createSlice} from "@reduxjs/toolkit";

interface initialStateType {
  page: number,
}

const initialState: initialStateType= {
  page: 1,
}

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setPage(state, action ) {
      state.page = action.payload
    }
  }
})

export const {setPage} = paginationSlice.actions

export default paginationSlice.reducer
