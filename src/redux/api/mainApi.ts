import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/items'
  }),
  endpoints: build => ({
    getItems: build.query({
      query: (params) => `?_limit=8&_page=${params.page}${params.search ? `&q=${params.search}` : ''}${params.category ? `&category=${params.category}` : ''}`
    }),
    addToDrawer: build.mutation({
      query: (body) => ({
        url: 'http://localhost:3000/drawer',
        method: 'POST',
        body
      })
    })
  })
})

export const {useGetItemsQuery} = mainApi
