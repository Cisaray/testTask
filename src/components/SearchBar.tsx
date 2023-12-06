import React, {Dispatch, FC, SetStateAction} from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

interface SearchBarProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export const SearchBar:FC<SearchBarProps> = ({setOpenDrawer}) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full flex items-center justify-start gap-[6px]'>
        <LocationOnIcon/>
        <span>Москва</span>
      </div>
      <input
        placeholder='Поиск...'
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
};

