import cencel from "@assets/icons/nav/cencel.svg";
import { currency, filterByCity } from "@utils/constants";
import searchIcon from "@assets/icons/nav/search-icon.svg";
import { productFIlterCurrency } from "@utils/constants";
import { Select } from "./Select";
import "@src/index.css";

export const FilterModal = ({ closeFilterModalHandler, isOpen }) => {
  return (
    <form
      className={`modal ${
        isOpen ? "open" : ""
      } fixed z-50 top-0 w-[100vw] h-[100vh] flex flex-col gap-7 py-5 px-5 bg-white overflow-scroll`}
    >
      {/* top */}
      <div className='md:hidden flex justify-between items-center'>
        <img onClick={closeFilterModalHandler} src={cencel} alt='' />
        <h6 className='text-[#1E293B] text-[16px] font-medium'>Фильтр</h6>
        <button className='text-[16px] text-primary font-medium'>
          Очистить
        </button>
      </div>
      <div className='relative'>
        <input
          className='pl-12 py-3 rounded-md bg-bgGray w-full outline-none'
          type='text'
          placeholder='Я ищу...'
        />
        <img className='absolute top-3 left-3' src={searchIcon} />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-3 w-full'>
          <h6 className='text-[16px] text-[#1E293B] font-semibold font-inter'>
            Категория
          </h6>
          <Select
            options={filterByCity}
            borderColor='1px solid #dddfe1'
            placeholder='Выбрать'
            width='100%'
            padding='20px 0 10px 10px'
          />
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <h6 className='text-[16px] text-[#1E293B] font-semibold font-inter'>
            Местоположение
          </h6>
          <Select
            options={filterByCity}
            borderColor='1px solid #dddfe1'
            placeholder='Выбрать город'
            width='100%'
            padding='20px 0 10px'
          />
        </div>
        {/* currency */}
        <div>
          <h5 className='text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-2'>
            Валюта
          </h5>
          <div className='flex items-center gap-4'>
            {currency.map((el) => (
              <div key={el.id} className='flex items-center gap-3'>
                <input className='h-[28px] w-[28px] ' type='radio' />
                <span className='text-[#515A68] md:text-[20px] text-[18px] font-normal'>
                  {el.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* price */}
        <div>
          <h5 className='w-full text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-2'>
            Цена
          </h5>
          <div className='flex gap-4 w-full'>
            <input
              className='sm:w-1/2 s:w-1/2 w-1/2  outline-none py-3 px-3 border border-borderColor rounded-md'
              type='text'
              placeholder='Цена от'
            />
            <input
              className='w-1/2 outline-none py-3 px-3 border border-borderColor rounded-md'
              type='text'
              placeholder='Цена от'
            />
          </div>
        </div>
        {/* Сортировать */}
        <div>
          <h5 className='text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-2'>
            Сортировать по
          </h5>
          <div className='flex flex-col gap-4'>
            {productFIlterCurrency.map((el) => (
              <div
                className='flex justify-between items-center w-full'
                key={el.id}
              >
                <p className='text-primary text-[16px]'>{el.name}</p>
                <input className='h-5 w-5' type='radio' />
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <div className='w-full'>
          <button className='bg-primary w-full py-2 px-5 rounded-md text-white mt-4'>
            Фильтры
          </button>
        </div>
      </div>
    </form>
  );
};
