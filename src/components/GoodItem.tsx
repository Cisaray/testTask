import React, {FC} from 'react';
import {OneGoodType} from "../types/oneGoodType";

export const GoodItem: FC<OneGoodType> = ({title, imageUrl, price}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10px]'>
      <img className='w-full' src={imageUrl} alt="item"/>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col items-start justify-between'>
          <p className='text-[16px]'>{title}</p>
          <p className='text-[16px] font-medium'>{price}₽</p>
        </div>
        <div className='flex flex-col items-center justify-end'>
          <button
            className='rounded-[8px] bg-[#FFA85E] p-[10px] font-medium hover:bg-[#E47529] transition-colors'>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

