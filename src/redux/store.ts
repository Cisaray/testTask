import {configureStore} from "@reduxjs/toolkit";
import {mainApi} from "./api/mainApi";
import paginationReducer from "./slices/paginationSlice";
import searchReducer from "./slices/searchSlice";
import categoryReducer from "./slices/categorySlice";
import {drawerApi} from "./api/drawerApi";

const store = configureStore({
  reducer: {
    paginationReducer,
    searchReducer,
    categoryReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [drawerApi.reducerPath]: drawerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      mainApi.middleware,
      drawerApi.middleware
    ])
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
