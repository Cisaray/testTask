import React, {FC} from 'react';

export const GoodItem: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10px]'>
      <img className='w-full' src="/assets/photos/vacuumCleaner.jpg" alt="item"/>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col items-start justify-between'>
          <p className='text-[16px]'>Пылесос Dyson</p>
          <p className='text-[16px] font-medium'>19.999₽</p>
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

