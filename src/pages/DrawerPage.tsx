import React, {FC, memo, useMemo} from 'react';
import {DrawerItem} from "../components";
import {useGetDrawerItemsQuery} from "../redux/api/drawerApi";
import {CircularProgress} from "@mui/material";



export const DrawerPage: FC = memo(() => {
  const {data: drawerItems, isLoading} = useGetDrawerItemsQuery()

  const total = useMemo(() => {
    return drawerItems?.reduce((acc, val) => +acc + +val.price, 0)
  },[drawerItems])

  return (
    <>
      {isLoading ? <CircularProgress/> :
      <div className='w-[25vw] flex flex-col items-center justify-start overflow-y-auto'>
        <header className='px-[22px] py-[30px] w-full flex items-center justify-start border-b border-[#C7C7C7]'>
          <p
            className='text-[20px] font-medium'> {drawerItems?.length} {drawerItems && (drawerItems?.length === 1 ? 'товар' : drawerItems?.length < 5 ? 'товара' : 'товаров')} на
            сумму {total} Р</p>
        </header>
        <main className='w-full flex flex-col items-center justify-start'>

          {drawerItems?.length === 0 ?
            <p className='text-[20px] font-semibold mt-20'>Корзина пуста</p> :
            drawerItems?.map(item => <DrawerItem {...item} key={item.id}/>)}
        </main>
      </div>}
    </>

  );
});

