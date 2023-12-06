import React, {FC, useCallback, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {setCategory} from "../redux/slices";

export const CategoryFilterBar: FC = () => {
  const dispatch = useAppDispatch()
  // const {category} = useAppSelector(state => state.categoryReducer)
  const [clicked, setClicked] = useState<string>('Все товары');
  const handleChangeCategory = useCallback((str: string) => {
    setClicked(str)
    dispatch(setCategory(str))
  },[dispatch])
  return (
    <div className='flex items-center justify-start w-full gap-10 mt-10'>
      <div className='cursor-pointer' onClick={() => handleChangeCategory('Все товары')}>
        <p
          className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Все товары' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Все
          товары</p>
      </div>
      <div className='cursor-pointer' onClick={() => handleChangeCategory('Одежда')}>
        <p
          className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Одежда' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Одежда</p>
      </div>
      <div className='cursor-pointer' onClick={() => handleChangeCategory('Электроника')}>
        <p
          className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Электроника' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Электроника</p>
      </div>
      <div className='cursor-pointer' onClick={() => handleChangeCategory('Еда')}>
        <p
          className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Еда' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Еда</p>
      </div>
    </div>
  );
};

