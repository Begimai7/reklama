import { SearchInput } from "@components/UI/Search-input";
import { Select } from "@components/UI/Select";
import { filterByCity } from "@utils/constants";
import { data } from "@utils/constants";
import bag from "@assets/images/bag.png";
import phone from "@assets/images/phone.png";

export const FilterProduct = () => {
  return (
    <div className='mb-10'>
      <div className='flex items-center justify-between'>
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
      <form action=''>
        <div className='flex items-start justify-between mt-10'>
          <div className='flex items-start gap-16'>
            <div>
              <h5 className='text-[#515A68] text-[24px] font-semibold font-inter mb-4 '>
                Цена
              </h5>
              <div className='flex gap-4'>
                <input
                  className='py-3 px-3 border border-borderColor rounded-md'
                  type='text'
                  placeholder='Цена от'
                />
                <input
                  className='py-3 px-3 border border-borderColor rounded-md'
                  type='text'
                  placeholder='Цена от'
                />
              </div>
            </div>
            <div>
              <h5 className='text-[#515A68] text-[24px] font-semibold font-inter mb-4'>
                Валюта
              </h5>
              <div className='flex gap-4 mt-5'>
                <input className='h-[34px] w-[34px]' type='radio' />
                <input className='h-[34px] w-[34px]' type='radio' />
              </div>
            </div>
          </div>
          <div>
            <h5 className='text-[#515A68] text-[24px] font-semibold font-inter mb-4'>
              Цена
            </h5>
            <Select
              width='200px'
              placeholder='По умолчанию'
              options={filterByCity}
            />
          </div>
        </div>
        <div className='flex justify-end mt-10'>
          <button className='bg-primary py-2 px-5 rounded-md text-white'>
            Показать
          </button>
        </div>
      </form>

      <div className='flex items-start justify-between bg-[#F9FBFD] p-4 my-6'>
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
                  <span className='text-[#8D95A1] text-[16px]'>10490 KGS</span>
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
                  <span className='text-[#8D95A1] text-[16px]'>10490 KGS</span>
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
                  <span className='text-[#8D95A1] text-[16px]'>10490 KGS</span>
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
  );
};
