import React, {Dispatch, FC, memo, SetStateAction} from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setSearch} from "../redux/slices";

interface SearchBarProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export const SearchBar:FC<SearchBarProps> = memo(({setOpenDrawer}) => {
  const dispatch = useAppDispatch()
  const {search} = useAppSelector(state => state.searchReducer)
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full flex items-center justify-start gap-[6px]'>
        <LocationOnIcon/>
        <span>Москва</span>
      </div>
      <input
        placeholder='Поиск...'
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setSearch(e.target.value))}
        className='w-full p-3 border rounded-[8px] border-[#C4C4C4] bg-transparent' type="text"/>
      <div className='w-full gap-[1px] flex items-center justify-end'>
        <div className='w-fit flex flex-col items-center justify-center cursor-pointer'
             onClick={() => setOpenDrawer(true)}>
          <ShoppingCartOutlinedIcon/>
          <p>Корзина</p>
        </div>
      </div>
    </div>
  );
});

