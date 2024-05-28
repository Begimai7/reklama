import { SearchInput } from "@components/UI/Search-input";
import { Select } from "@components/UI/Select";
import { filterByCity } from "@utils/constants";
import { data } from "@utils/constants";
import bag from "@assets/images/bag.png";
import phone from "@assets/images/phone.png";

import { currency } from "@utils/constants";

export const FilterProduct = () => {
  return (
    <div className='md:mb-10'>
      {/* desktop and mobile */}
      <form className='flex flex-col gap-6 w-full' action=''>
        {/* search */}
        <div className='md:flex hidden items-center justify-between'>
          <Select
            options={filterByCity}
            borderColor='1px solid #dddfe1'
            placeholder='Все категории'
            width='170px'
            padding='20px 0 10px 10px'
          />
          <div className='w-[70%]'>
            {" "}
            <SearchInput />
          </div>
          <Select
            options={filterByCity}
            borderColor='1px solid #dddfe1'
            placeholder='Выбрать город'
            width='170px'
            padding='20px 0 10px'
          />
        </div>
        {/* sort */}
        <div className='flex lg:flex-row flex-col gap-6 w-full'>
          <div className='flex md:flex-row flex-col md:gap-16'>
            {/* price */}
            <div>
              <h5 className='w-full text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-4'>
                Цена
              </h5>
              <div className='flex gap-4 w-full'>
                <input
                  className='sm:w-1/2 s:w-1/2 w-1/2 py-3 px-3 border border-borderColor rounded-md'
                  type='text'
                  placeholder='Цена от'
                />
                <input
                  className='w-1/2 py-3 px-3 border border-borderColor rounded-md'
                  type='text'
                  placeholder='Цена от'
                />
              </div>
            </div>
            {/* currency */}
            <div>
              <h5 className='text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-4'>
                Валюта
              </h5>
              <div className='flex items-center gap-4 mt-5'>
                {currency.map((el) => (
                  <div key={el.id} className='flex items-center gap-3'>
                    <input className='h-[34px] w-[34px]' type='radio' />
                    <span className='text-[#515A68] md:text-[20px] text-[18px] font-normal'>
                      {el.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Сортировать */}
          <div>
            <h5 className='text-[#515A68] md:text-[24px] text-[16px] font-semibold font-inter mb-4'>
              Сортировать
            </h5>
            <Select
              width='200px'
              placeholder='По умолчанию'
              options={filterByCity}
            />
          </div>
        </div>
        {/* button */}
        <div className='flex justify-end'>
          <button className='bg-primary py-2 px-5 rounded-md text-white'>
            Показать
          </button>
        </div>
      </form>

      <div className='md:flex hidden items-start justify-between bg-[#F9FBFD] p-4 my-6'>
        <ul className='flex flex-col gap-3'>
          {data.map((el) => (
            <li key={el.id} className='text-[#515A68] text-[16px] font-medium'>
              <a href='/'>{el.name}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
          {data.map((el) => (
            <li key={el.id} className='text-[#515A68] text-[16px] font-medium'>
              <a href='/'>{el.name}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
          {data.map((el) => (
            <li key={el.id} className='text-[#515A68] text-[16px] font-medium'>
              <a href='/'>{el.name}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3'>
          {data.map((el) => (
            <li key={el.id} className='text-[#515A68] text-[16px] font-medium'>
              <a href='/'>{el.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='md:block hidden'>
        <div className='text-[#8D95A1] text-[14px] mb-4'>
          <a href=''>Объявления</a>
          <span> / </span>
          <a href=''>Одежда</a>
          <span> / </span>
          <a href=''>Сумки и акссесуары /</a>
        </div>

        <div className='flex gap-5 mt-10'>
          <div className='flex flex-col gap-5'>
            <div className='flex'>
              <img src={bag} alt='' />
              <div className='flex flex-col justify-between border border-[#BFBFBF] rounded-md py-6 px-5'>
                <div>
                  <div className='text-[#8D95A1] text-[14px] mb-1'>
                    <a href=''>Сумки и акссесуары /</a>
                  </div>
                  <div>
                    <h4 className='text-[#515A68] font-bold text-[24px]'>
                      Сумка с кожанными ремнями в оранжевом цвете
                    </h4>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#F94B4B] text-[32px] font-bold'>
                        120 USD
                      </p>{" "}
                      <span className='underline'>140 USD</span>
                    </div>
                    <span className='text-[#8D95A1] text-[16px]'>
                      10490 KGS
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <p>Бишкек 23.03.2023 / 14:45</p>
                  <div className='flex justify-end mt-10'>
                    <button className='bg-primary py-2 px-5 rounded-md text-white'>
                      Показать
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <img src={bag} alt='' />
              <div className='flex flex-col justify-between border border-[#BFBFBF] rounded-md py-6 px-5'>
                <div>
                  <div className='text-[#8D95A1] text-[14px] mb-1'>
                    <a href=''>Сумки и акссесуары /</a>
                  </div>
                  <div>
                    <h4 className='text-[#515A68] font-bold text-[24px]'>
                      Сумка с кожанными ремнями в оранжевом цвете
                    </h4>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#F94B4B] text-[32px] font-bold'>
                        120 USD
                      </p>{" "}
                      <span className='underline'>140 USD</span>
                    </div>
                    <span className='text-[#8D95A1] text-[16px]'>
                      10490 KGS
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <p>Бишкек 23.03.2023 / 14:45</p>
                  <div className='flex justify-end mt-10'>
                    <button className='bg-primary py-2 px-5 rounded-md text-white'>
                      Показать
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <img src={bag} alt='' />
              <div className='flex flex-col justify-between border border-[#BFBFBF] rounded-md py-6 px-5'>
                <div>
                  <div className='text-[#8D95A1] text-[14px] mb-1'>
                    <a href=''>Сумки и акссесуары /</a>
                  </div>
                  <div>
                    <h4 className='text-[#515A68] font-bold text-[24px]'>
                      Сумка с кожанными ремнями в оранжевом цвете
                    </h4>
                    <div className='flex items-center gap-2'>
                      <p className='text-[#F94B4B] text-[32px] font-bold'>
                        120 USD
                      </p>{" "}
                      <span className='underline'>140 USD</span>
                    </div>
                    <span className='text-[#8D95A1] text-[16px]'>
                      10490 KGS
                    </span>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <p>Бишкек 23.03.2023 / 14:45</p>
                  <div className='flex justify-end mt-10'>
                    <button className='bg-primary py-2 px-5 rounded-md text-white'>
                      Показать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={phone} alt='banner' />
          </div>
        </div>
      </div>
    </div>
  );
};
