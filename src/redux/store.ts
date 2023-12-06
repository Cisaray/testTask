import {configureStore} from "@reduxjs/toolkit";
import {mainApi} from "./api/mainApi";
import paginationReducer from "./slices/paginationSlice";
import searchReducer from "./slices/searchSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    paginationReducer,
    searchReducer,
    categoryReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      mainApi.middleware
    ])
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
