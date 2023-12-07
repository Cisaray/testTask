import React, {FC, useCallback} from 'react';
import CloseIcon from "@mui/icons-material/Close";
import {DrawerItemProps} from "../types/drawerItemProps";
import {useDeleteFromDrawerMutation} from "../redux/api/drawerApi";
import toast from "react-hot-toast";

export const DrawerItem: FC<DrawerItemProps> = ({id, title, imageUrl}) => {
  const [deleteFromDrawer] = useDeleteFromDrawerMutation()

  const handleDelete = useCallback(async () => {
    try {
      await deleteFromDrawer(id)
      toast.success('Товар удален из корзины', {position: 'bottom-right'})
    } catch (e) {
      toast.error('Ошибка при удалении товара', {position: 'bottom-right'})
    }
  },[deleteFromDrawer, id])

  return (
    <div className='flex w-full items-center justify-between px-[20px] py-[30px] border-b border-[#C7C7C7]'>
      <div className='flex items-center justify-center gap-[18px]'>
        <img className='w-[127px]' src={imageUrl} alt="drawerItem"/>
        <div className='flex flex-col items-center justify-start'>
          <p className='text-[16px] font-medium'>{title}</p>
        </div>
      </div>
      <div className='flex items-center h-full justify-start flex-col cursor-pointer' onClick={handleDelete}>
        <CloseIcon/>
      </div>
    </div>
  );
};

