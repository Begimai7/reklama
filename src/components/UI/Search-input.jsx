import searchIcon from "@assets/icons/nav/search-icon.svg";
import { useLocation } from "react-router-dom";
import "@src/index.css";

export const SearchInput = () => {
  const { pathname } = useLocation();

  return (
    <div className='my-5'>
      <div className='container w-full'>
        {pathname === "/user/posting-page" ||
        pathname.includes("/products/city_id/") ? (
          ""
        ) : (
          <div className='md:flex hidden items-center gap-3'>
            <div className='relative w-full'>
              <input
                className='pl-5 py-3 rounded-md bg-bgGray w-full outline-none'
                type='text'
                placeholder='Я ищу...'
              />
              <img
                className='absolute top-3 right-3'
                src={searchIcon}
                alt='Search'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
