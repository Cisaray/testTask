import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/Cisaray/testDb/items'
  }),
  endpoints: build => ({
    getItems: build.query({
      query: (params) => `?_limit=8&_page=${params.page}${params.search ? `&q=${params.search}` : ''}${params.category ? `&category=${params.category}` : ''}`
    })
  })
})

export const {useGetItemsQuery} = mainApi
