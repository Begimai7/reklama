import searchIcon from "@assets/icons/nav/search-icon.svg";
import filter from "@assets/icons/nav/filter.svg";
import { useLocation } from "react-router-dom";

export const SearchInput = () => {
  const { pathname } = useLocation();

  return (
    <div className='sm: container sm:w-full mt-5'>
      {pathname === "/user/posting-page" ? (
        ""
      ) : (
        <div className='flex items-center gap-3'>
          <div className='container relative'>
            <input
              className='pl-5 py-3 rounded-md bg-bgGray w-full outline-none'
              type='text'
              placeholder='Я ищу...'
            />
            <img className='absolute top-3 right-3' src={searchIcon} />
          </div>
          <img className='sm:hidden block' src={filter} alt='' />
        </div>
      )}
    </div>
  );
};
