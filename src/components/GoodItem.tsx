import React, {FC, memo, useCallback} from 'react';
import {OneGoodProps} from "../types/oneGoodProps";
import {useAddToDrawerMutation} from "../redux/api/drawerApi";
import toast from "react-hot-toast";

export const GoodItem: FC<OneGoodProps> = memo(({title, imageUrl, price, item, id}) => {
  console.log(item)
  const [addToCart, {isLoading}] = useAddToDrawerMutation()

  const handleAddToCart = useCallback (async () => {
    if(!item) return
    try {
      const {id, ...rest} = item
      await addToCart(rest)
      toast.success('Товар добавлен в корзину', {position: 'bottom-right'})
    } catch (e) {
      toast.error('Ошибка при добавлении товара', {position: 'bottom-right'})
    }
  },[addToCart, item])
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
            disabled={isLoading}
            onClick={handleAddToCart}
            className={isLoading ? 'opacity-50 rounded-[8px] bg-[#FFA85E] p-[10px] font-medium hover:bg-[#E47529] transition-colors' :'rounded-[8px] bg-[#FFA85E] p-[10px] font-medium hover:bg-[#E47529] transition-colors'}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
});

