import { useState } from "react";
import { Link } from "react-router-dom";
import { newUpdateData } from "@utils/constants";

export const Tabs = ({ firstTab, secondTab }) => {
  const [selectedFilter, setSelectedFilter] = useState("Рекомендуемые");

  const selectedFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData =
    selectedFilter === "Новые" ? newUpdateData : newUpdateData;
  return (
    <div className='flex flex-col gap-7'>
      <div className='flex items-center justify-between'>
        <div className='bg-bgGray flex items-center md:w-[50%] w-full rounded-md py-1 px-1 text-[#1E293B] md:my-5'>
          <div
            className={`text-center py-2 rounded-md w-1/2 ${
              selectedFilter === "Рекомендуемые" ? "bg-white" : ""
            }`}
            onClick={() => selectedFilterChange("Рекомендуемые")}
          >
            {firstTab}
          </div>
          <div
            className={`text-center py-2 rounded-md w-1/2 ${
              selectedFilter === "Новые" ? "bg-white" : ""
            }`}
            onClick={() => selectedFilterChange("Новые")}
          >
            {secondTab}
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-5'>
        {filteredData.map((el) => (
          <Link to={`/products/detail/${el.title}`} key={el.id}>
            <img className='w-[324px]' src={el.img} alt='' />
            <div>
              <h5 className='text-[#1E293B] font-semibold sm:text-[32px] text-[16px]'>
                {el.price}
              </h5>
              <h6 className='text-[#8691A4] font-medium sm:text-[22px] text-[12px]'>
                {el.title}
              </h6>
              <p className='sm:w-[230px] text-[#515A68] sm:text-[14px] text-[10px] line-clamp-2'>
                {el.desc}
              </p>
            </div>
            <div className='sm:block hidden text-end mt-5'>
              <button className='py-2 px-5  rounded-md bg-primary text-white'>
                Написать
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
