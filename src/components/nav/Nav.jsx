import burger from "@assets/icons/nav/burger.svg";
import like from "@assets/icons/nav/like.svg";
import email from "@assets/icons/nav/email.svg";
import avatar from "@assets/icons/nav/avatar.svg";
import { useLocation, Link } from "react-router-dom";

export const Nav = () => {
  const { pathname } = useLocation();
  const currentRole = pathname.split("/")[1];
  return (
    <div className='bg-primary'>
      <div className='container h-[81px]  flex justify-between items-center w-full'>
        <img src={burger} alt='' />
        <div className='flex justify-between w-[60%]'>
          <h4 className='text-[#fff] text-[24px] font-semibold font-inter'>
            Реклама √1
          </h4>

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
  );
};
