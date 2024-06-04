import { Link } from "react-router-dom";
import favourites from "@assets/icons/nav/favourites.svg";
import chats from "@assets/icons/nav/chats.svg";
import profile from "@assets/icons/nav/profile.svg";
import add from "@assets/icons/nav/plus-add.svg";
import home from "@assets/icons/category/home.svg";

export const MobileMenuBottom = () => {
  return (
    <div>
      <div className='md:hidden flex justify-between items-center fixed bottom-0  w-full mx-auto sm:px-6 s:px-2 bg-[#fff] py-3 '>
        <Link className='flex flex-col items-center gap-[6px]'>
          <img className='h-6 w-6' src={home} alt='' />
          <span className='s:text-[12px] text-[10px]'>Главная</span>
        </Link>
        <Link to='favourites' className='flex flex-col items-center gap-[6px]'>
          <img className='h-6 w-6' src={favourites} alt='' />
          <span className='s:text-[12px] text-[10px]'>Избранное</span>
        </Link>
        <Link to='' className='flex flex-col items-center gap-[6px]'>
          <div className='bg-primary rounded-full p-6 absolute z-50 left-[44%] bottom-10'>
            <img className='h-6 w-6 ' src={add} alt='add' />
          </div>
          <span className='s:text-[12px] text-[10px] mt-7'>Подать</span>
        </Link>
        <Link className='flex flex-col items-center gap-[6px]'>
          <img className='h-6 w-6' src={chats} alt='' />
          <span className='s:text-[12px] text-[10px]'>Чаты</span>
        </Link>
        <Link className='flex flex-col items-center gap-[6px]'>
          <img className='h-6 w-6' src={profile} alt='' />
          <span className='s:text-[12px] text-[10px]'>Профиль</span>
        </Link>
      </div>
    </div>
  );
};
