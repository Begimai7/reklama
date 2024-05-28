import burger from "@assets/icons/nav/burger.svg";
import like from "@assets/icons/nav/like.svg";
import email from "@assets/icons/nav/email.svg";
import avatar from "@assets/icons/nav/avatar.svg";
import { useLocation, Link } from "react-router-dom";
import searchIcon from "@assets/icons/nav/search-icon.svg";
import filter from "@assets/icons/nav/filter.svg";
import "@src/index.css";
import { useState } from "react";
import { FilterModal } from "../UI/FilterModal";
import { MobileMenuBottom } from "../UI/MobileMenuBottom";
import { SearchInput } from "../UI/Search-input";

export const Nav = () => {
  const { pathname } = useLocation();
  const currentRole = pathname.split("/")[1];
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const openFilterModalHandler = () => {
    setOpenFilterModal(!openFilterModal);
  };

  return (
    <div>
      {/* desktop-top */}
      <div className='md:flex hidden  bg-primary md: m-0'>
        <div className='container h-[81px]  flex justify-between items-center w-full'>
          <img src={burger} alt='' />
          <div className='flex items-center justify-between w-[60%]'>
            <Link to='/'>
              <h4 className='text-[#fff] lg:text-[24px] font-semibold font-inter'>
                Реклама √1
              </h4>
            </Link>

            {/* authorized */}
            {currentRole === "user" ? (
              <div className='flex lg:gap-8 gap-3'>
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
              <div className='flex lg:gap-8 gap-4'>
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
      {/* desktop search */}
      <SearchInput />
      {/* mobile search-input */}
      <div className='container md:hidden flex items-center gap-3'>
        <div className='relative w-full'>
          <input
            className='pl-12 py-3 rounded-md bg-bgGray w-full outline-none'
            type='text'
            placeholder='Я ищу...'
          />
          <img
            className='absolute top-3 left-3'
            src={searchIcon}
            alt='Search'
          />
        </div>
        <img
          onClick={openFilterModalHandler}
          className='block'
          src={filter}
          alt='Filter'
        />
      </div>
      {/* filter modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg z-50 transition-transform duration-500 transform
         ${openFilterModal ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <FilterModal closeFilterModalHandler={openFilterModalHandler} />
      </div>
      {/* mobile-bottom */}
      <MobileMenuBottom />
    </div>
  );
};
