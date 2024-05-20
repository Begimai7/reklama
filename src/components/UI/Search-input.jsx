import searchIcon from "@assets/icons/nav/search-icon.svg";
import { useLocation } from "react-router-dom";

export const SearchInput = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/user/posting-page" ? (
        ""
      ) : (
        <div className='container relative'>
          <input
            className='pl-5 py-3 rounded-md bg-bgGray w-full outline-none'
            type='text'
            placeholder='Я ищу...'
          />
          <img className='absolute top-3 right-3' src={searchIcon} />
        </div>
      )}
    </div>
  );
};
