import React, {useCallback, useState} from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Drawer, Pagination} from "@mui/material";

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

function App() {
  const [clicked, setClicked] = useState<string>('Все товары');
  const [page, setPage] = useState(1)
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleChangeCategory = useCallback((str: string) => {
    setClicked(str)
  },[])
  return (
    <div className='w-full h-full bg-[#FFFAF5]'>
      <header className='w-full pb-5 pt-10 border-b border-[#C7C7C7]'>
        <img className='ml-[100px]' src="/assets/testLodo.svg" alt="logo"/>
      </header>
      <main className='w-full px-[100px] mt-[50px]'>
        <div className='w-full flex items-center justify-center'>
          <div className='w-full flex items-center justify-start gap-[6px]'>
            <LocationOnIcon/>
            <span>Москва</span>
          </div>
          <input
            placeholder='Поиск...'
            className='w-full p-3 border rounded-[8px] border-[#C4C4C4] bg-transparent' type="text"/>
          <div className='w-full gap-[1px] flex items-center justify-end'>
            <div className='w-fit flex flex-col items-center justify-center cursor-pointer' onClick={() => setOpenDrawer(true)}>
              <ShoppingCartOutlinedIcon/>
              <p>Корзина</p>
            </div>
          </div>
        </div>

        {/*фильтрация по категориям*/}
        <div className='flex items-center justify-start w-full gap-10 mt-10'>
          <div className='cursor-pointer' onClick={() => handleChangeCategory('Все товары')}>
            <p className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Все товары' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Все товары</p>
          </div>
          <div className='cursor-pointer' onClick={() => handleChangeCategory('Одежда')}>
            <p className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Одежда' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Одежда</p>
          </div>
          <div className='cursor-pointer' onClick={() => handleChangeCategory('Электроника')}>
            <p className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Электроника' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Электроника</p>
          </div>
          <div className='cursor-pointer' onClick={() => handleChangeCategory('Еда')}>
            <p className={`text-[16px] font-medium p-[10px] transition-all hover:text-[#F27000] ${clicked === 'Еда' ? 'border border-[#F27000] rounded-[8px] text-[#F27000]' : ''}`}>Еда</p>
          </div>
        </div>

        {/*блок с товарами*/}
        <div className='w-full grid grid-cols-4 gap-5 items-center justify-center mt-10'>

          {/*Блок*/}
          {arr.map(item => <div key={item} className='flex flex-col items-center justify-center gap-[10px]'>
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
          </div>)}
        </div>


        {/*пагинация*/}
        <div className='flex items-center justify-center gap-8 mt-5 py-5'>
          <Pagination
            page={page}
            onChange={(_, page ) => setPage(page)}
            count={4}
            color="standard" />
        </div>
      </main>
      <Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div className='w-[300px]'></div>
      </Drawer>
    </div>
  );
}

export default App;
