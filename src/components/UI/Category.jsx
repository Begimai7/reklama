import { categoryList } from "@utils/constants";
import { useLocation } from "react-router-dom";

export const Category = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/user/dashboard" ||
      pathname.includes("/products/detail/") ? (
        ""
      ) : (
        <div className='md:w-[90%] sm:w-[70%] s:w-[70%] w-[98%] flex justify-center  lg: overflow-scroll'>
          <ul className='flex gap-10 mb-10'>
            {categoryList.map((el) => (
              <li
                className='flex flex-col items-center gap-1 w-[60px] '
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
  );
};
