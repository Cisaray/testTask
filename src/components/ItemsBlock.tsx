import React, {FC} from 'react';
import {GoodItem} from "./GoodItem";
import {useGetItemsQuery} from "../redux/api/mainApi";
import {useAppSelector} from "../redux/hooks";
import { CircularProgress } from '@mui/material';
import {OneGoodType} from "../types/oneGoodType";

export const ItemsBlock: FC = () => {
  const {page} = useAppSelector(state => state.paginationReducer)
  const {search} = useAppSelector(state => state.searchReducer)
  const {category} = useAppSelector(state => state.categoryReducer)
  const {data, isLoading} = useGetItemsQuery({page: page, search: search, category: category})

  return (
    <>
      {isLoading ?
        <div className='w-full h-full flex items-center justify-center mt-10'>
          <CircularProgress/>
        </div>
         :
        data.length === 0 ? <p className='text-[20] text-center mt-10'>Товары не найдены :(</p> :
          <div className='w-full grid grid-cols-4 gap-5 items-center justify-center mt-10'>
            {data.map((item: OneGoodType) => <GoodItem key={item.id} {...item}/>)}
          </div>}

    </>

  );
};

