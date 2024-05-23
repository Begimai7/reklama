import { newUpdateData } from "@utils/constants";
// import arrowDown from "@assets/icons/arrow-down.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Select } from "../UI/Select";
import { filterByRegion } from "@utils/constants";

export const NewProductUpdates = () => {
  const [selectedFilter, setSelectedFilter] = useState("Рекомендуемые");
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    navigate(`/products/city_id/${event.target.value}`);
  };

  const selectedFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData =
    selectedFilter === "Новые" ? newUpdateData : newUpdateData;
  // : newUpdateData.filter((item) => item.recommended);
  return (
    <div className='w-full'>
      <div className=' py-10 w-full'>
        <h4 className='sm:flex hidden text-[#1E293B] text-[40px] font-semibold'>
          Новые объявления{" "}
        </h4>
        <div className='flex items-center justify-between'>
          <div className='bg-bgGray flex items-center sm:w-[50%] w-full rounded-md py-1 px-1 text-[#1E293B] my-5'>
            <div
              className={`text-center py-2 rounded-md w-1/2 ${
                selectedFilter === "Рекомендуемые" ? "bg-white" : ""
              }`}
              onClick={() => selectedFilterChange("Рекомендуемые")}
            >
              Рекомендуемые
            </div>
            <div
              className={`text-center py-2 rounded-md w-1/2 ${
                selectedFilter === "Новые" ? "bg-white" : ""
              }`}
              onClick={() => selectedFilterChange("Новые")}
            >
              Новые
            </div>
          </div>

          <Select
            value={selectedValue}
            handleChange={handleChange}
            options={filterByRegion}
            borderColor='none'
            inputLabel='Все города'
            padding='0 0 0 32px'
            textColor='#C811AA'
            iconColor='#C811AA'
          />
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
