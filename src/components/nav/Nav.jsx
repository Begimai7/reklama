import burger from "@assets/icons/nav/burger.svg";
import like from "@assets/icons/nav/like.svg";
import email from "@assets/icons/nav/email.svg";
import avatar from "@assets/icons/nav/avatar.svg";
import favourites from "@assets/icons/nav/favourites.svg";
import chats from "@assets/icons/nav/chats.svg";
import profile from "@assets/icons/nav/profile.svg";
import add from "@assets/icons/nav/plus-add.svg";
import home from "@assets/icons/category/home.svg";
import { useLocation, Link } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();
  const currentRole = pathname.split("/")[1];
  return (
    <div>
      {/* mobile */}
      <div className=''>
        <div className='fixed bottom-0 z-50 w-full sm:px-6 s:px-2 bg-[#fff]  py-3  md:hidden flex justify-between items-center gap-[6px]'>
          <Link className='flex flex-col items-center gap-[6px]'>
            <img className='h-6 w-6' src={home} alt='' />
            <span className='s:text-[12px] text-[10px]'>Главная</span>
          </Link>
          <Link className='flex flex-col items-center gap-[6px]'>
            <img className='h-6 w-6' src={favourites} alt='' />
            <span className='s:text-[12px] text-[10px]'>Избранное</span>
          </Link>
          <Link className='flex flex-col items-center gap-[6px]'>
            <div className='bg-primary rounded-full p-6 absolute left-[44%] bottom-10'>
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
      {/* desktop */}
      <div className='bg-primary md:flex hidden'>
        <div className='container h-[81px]  flex justify-between items-center w-full'>
          <img src={burger} alt='' />
          <div className='flex justify-between w-[60%]'>
            <Link to='/'>
              <h4 className='text-[#fff] text-[24px] font-semibold font-inter'>
                Реклама √1
              </h4>
            </Link>

            {/* authorized */}
            {currentRole === "user" ? (
              <div className='flex gap-8'>
                <img src={like} alt='' />
                <img src={email} alt='' />
                <Link to='dashboard'>
                  <img
                    className='rounded-full w-[38px] h-[38px]'
                    src={avatar}
                    alt=''
                  />
                </Link>
                <Link
                  to='/user/posting-page'
                  className='text-primary font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] bg-white'
                >
                  Подать объявление
                </Link>
              </div>
            ) : (
              // none-authorized
              <div className='flex gap-8'>
                <button className='font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] border border-white text-white'>
                  Войти
                </button>
                <button className='text-primary font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] bg-white'>
                  Подать объявление
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
