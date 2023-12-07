import React, {FC} from 'react';



export const CustomErrorBoundary: FC = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <p className='text-[32px] font-semibold'>Произошла непредвиденная ошибка</p>
    </div>
  );
};

