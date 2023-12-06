import {configureStore} from "@reduxjs/toolkit";
import {mainApi} from "./api/mainApi";

const store = configureStore({
  reducer: {
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
