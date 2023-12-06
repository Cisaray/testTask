import React, {FC, useState} from 'react';
import {SearchBar} from "../components/SearchBar";
import {CategoryFilterBar} from "../components/CategoryFilterBar";
import {Drawer, Pagination} from "@mui/material";
import {GoodItem} from "../components/GoodItem";

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

export const Main: FC = () => {
  const [page, setPage] = useState(1)
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <main className='w-full px-[100px] mt-[50px]'>

        {/*поиск*/}
        <SearchBar setOpenDrawer={setOpenDrawer}/>

        {/*фильтрация по категориям*/}
        <CategoryFilterBar/>

        {/*блок с товарами*/}
        <div className='w-full grid grid-cols-4 gap-5 items-center justify-center mt-10'>

          {arr.map(item => <GoodItem key={item}/>)}
        </div>

        {/*пагинация*/}
        <div className='flex items-center justify-center gap-8 mt-5 py-5'>
          <Pagination
            size={'large'}
            page={page}
            onChange={(_, page) => setPage(page)}
            count={4}
            color="standard"/>
        </div>
      </main>
      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className='w-[300px]'></div>
      </Drawer>
    </>
  );
};

