import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {DrawerItemProps} from "../../types/drawerItemProps";

export const drawerApi = createApi({
  reducerPath: 'drawerApi',
  tagTypes: ['Drawer'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/drawer'}),
  endpoints: build => ({
    getDrawerItems: build.query<DrawerItemProps[], void>({
      query: () => ``,
      providesTags: (result)=>
        result
          ? [
            ...(result as DrawerItemProps[])?.map(({id}) => ({type: 'Drawer', id} as const)),
            {type: 'Drawer', id: 'LIST'} as const,
          ]
          : [{type: 'Drawer', id: 'LIST'}],
    }),
    addToDrawer: build.mutation({
      query: body => ({
        url:'',
        method: 'POST',
        body
      }),
      invalidatesTags: [{type: 'Drawer', id: 'LIST'}]
    }),
    deleteFromDrawer: build.mutation({
      query: (id) => ({
        url:`/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: [{type: 'Drawer', id: 'LIST'}]
    })
  })
})

export const {useAddToDrawerMutation, useGetDrawerItemsQuery, useDeleteFromDrawerMutation} = drawerApi
