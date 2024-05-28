import { categoryList } from "@utils/constants";
import { useLocation } from "react-router-dom";
import DropdownSlider from "./DropdownSlider";
import { useState } from "react";

export const Category = () => {
  const windowWidth = window.innerWidth;
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    if (windowWidth <= 768) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
  };
  const { pathname } = useLocation();

  return (
    <>
      {}
      <div className='md:hidden block'>
        <DropdownSlider open={open} toggleDrawer={toggleDrawer} />
      </div>
      <div>
        {pathname === "/user/dashboard" ||
        pathname.includes("/products/detail/") ||
        pathname.includes("/products/city_id/") ? (
          ""
        ) : (
          <div className='container lg:justify-center w-full flex  overflow-scroll'>
            <ul className='flex gap-10 mb-10'>
              {categoryList.map((el) => (
                <li
                  className='flex flex-col items-center gap-1 w-[60px] '
                  onClick={el.id === 1 && toggleDrawer}
                  key={el.id}
                >
                  <img
                    className={`p-3 rounded-md h-[60px] w-[60px]
                    ${el.id === 1 ? "bg-[#C811AA]" : "bg-bgGray"}  
              `}
                    src={el.icon}
                    alt={el.name}
                  />
                  <span className='text-[14px] text-[#1E293B] text-center font-medium p-0 m-0'>
                    {el.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
