import React, {FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const DrawerPage: FC = () => {
  return (
    <div className='w-[25vw] flex flex-col items-center justify-start overflow-y-auto'>
      <header className='px-[22px] py-[30px] w-full flex items-center justify-start border-b border-[#C7C7C7]'>
        <p className='text-[20px] font-medium'>1 товар на сумму 9.999 Р</p>
      </header>
      <main className='w-full flex flex-col items-center justify-start'>
        <div className='flex items-center justify-between px-[20px] py-[30px] border-b border-[#C7C7C7]'>
          <div className='flex items-center justify-center gap-[18px]'>
            <img className='w-[127px]' src="/assets/photos/tastyFood.jpg" alt="drawerItem"/>
            <div className='flex flex-col items-center justify-start'>
              <p className='text-[16px] font-medium'>Домашняя Паста Pesto</p>
            </div>
          </div>
          <div className='flex items-center h-full justify-start flex-col'>
            <CloseIcon/>
          </div>
        </div>
      </main>
    </div>
  );
};

