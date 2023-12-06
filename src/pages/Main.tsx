import React, {FC, useCallback, useState} from 'react';
import {SearchBar} from "../components/SearchBar";
import {CategoryFilterBar} from "../components/CategoryFilterBar";
import {Drawer, Pagination} from "@mui/material";
import {ItemsBlock} from "../components/ItemsBlock";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setPage} from "../redux/slices/paginationSlice";
import {DrawerPage} from "./DrawerPage";


export const Main: FC = () => {
  const dispatch = useAppDispatch()
  const {page} = useAppSelector(state => state.paginationReducer)
  // const [page, setPage] = useState(1)
  const [openDrawer, setOpenDrawer] = useState(false)

  const changePage = useCallback((num: number) => {
    dispatch(setPage(num))
  },[dispatch])

  return (
    <>
      <main className='w-full px-[100px] mt-[50px]'>

        {/*поиск*/}
        <SearchBar setOpenDrawer={setOpenDrawer}/>

        {/*фильтрация по категориям*/}
        <CategoryFilterBar/>

        {/*блок с товарами*/}
        <ItemsBlock/>

        {/*пагинация*/}
        <div className='flex items-center justify-center gap-8 mt-5 py-5'>
          <Pagination
            size={'large'}
            page={page}
            onChange={(_, page) => changePage(page)}
            count={4}
            color="standard"/>
        </div>
      </main>
      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerPage/>
      </Drawer>
    </>
  );
};

