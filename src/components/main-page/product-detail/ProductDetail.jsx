import bag from "@assets/images/bag.png";
import call from "@assets/icons/posting-page/call.svg";
import avatar from "@assets/icons/wallet-balance/avatar.svg";
import Slider from "./slider/Slider";
import { readyMessages } from "@utils/constants";
import { useState } from "react";
import { images } from "@utils/constants";
import MapComponent from "@components/UI/Map";
import { newUpdateData } from "@utils/constants";

export const ProductDetail = () => {
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleSlideClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div>
      <div className='flex items-start gap-5 font-inter '>
        <div className='flex flex-col w-[55%]'>
          <img src={bag} alt='' />
          <Slider
            sliderData={images}
            onSlideClick={handleSlideClick}
            numberSlider={[0, 5]}
          />
        </div>
        <div className='w-[45%] border border-[#E3E3E3] rounded-md py-7'>
          <div className='px-7'>
            <h3 className='text-[#1E293B] text-[40px] font-bold'>120 USD</h3>
            <p className='text-[#8D95A1] text-[24px] font-medium'>10490 KGS</p>
          </div>
          <hr className='w-full my-7 text-[#E3E3E3]' />
          <div className='flex items-start gap-5 px-7'>
            <img className='w-[70px] h-[70px]' src={avatar} alt='' />
            <div>
              <h3 className='text-[#1E293B] text-[24px] font-bold font-inter'>
                Настя
              </h3>
              <p className='text-[#8D95A1] text-[14px]'>
                Была в сети 2ч. назад
              </p>
              <p className='text-[#8D95A1] text-[14px]'>
                Отвечает на 98% сообщений
              </p>
              <p className='text-[#8D95A1] text-[14px]'>
                Обычно в течении 2 ч.
              </p>
            </div>
          </div>
          <hr className='w-full my-7 text-[#E3E3E3]' />
          <div className='border border-[#E3E3E3] rounded-md mx-5 p-8 '>
            <textarea
              value={selectedMessage}
              className='w-[100%] outline-none  text-[18px]'
              placeholder='Сообщение....'
              rows={4}
            ></textarea>
            <Slider
              sliderData={readyMessages}
              onSlideClick={handleSlideClick}
              numberSlider={[0, 3]}
            />
            <div className='w-full'>
              <button className='w-full rounded-md text-[#BFBFBF] font-bold bg-[#F4F4F4] text-center py-3'>
                Сообщение
              </button>
            </div>
          </div>
          <div className='flex justify-between items-center py-2 px-5 mx-5 mt-5 border border-[#E3E3E3] rounded-md'>
            <div className='flex items-center gap-2'>
              <img src={call} alt='' />
              <span className='text-[#8D95A1] text-[20px]'>
                +996 700 xxx xxx
              </span>
            </div>
            <div className='text-primary font-medium text-[16px]'>Показать</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 w-[54%] rounded-md border border-[#E3E3E3] p-5 my-7'>
        <div>
          <p className='text-[#8D95A1] text-[14px]'>
            Показы: <span>1020</span>
          </p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-[70%] flex items-center gap-[10px] px-6 py-3 border border-[#E3E3E3] rounded-md'>
            <img className='w-[34px] h-[34px]' src={avatar} alt='' />
            <h3 className='text-[#1E293B] text-[20px] font-bold font-inter'>
              Настя
            </h3>
          </div>
          <button className='w-[28%] text-primary font-bold text-[16px] border border-primary rounded-md py-4'>
            Написать
          </button>
        </div>
        <div className='flex justify-between items-center py-2 px-5  border border-[#E3E3E3] rounded-md'>
          <div className='flex items-center gap-2'>
            <img src={call} alt='' />
            <span className='text-[#8D95A1] text-[20px]'>+996 700 xxx xxx</span>
          </div>
          <div className='text-primary font-medium text-[16px]'>Показать</div>
        </div>
        <div className=''>
          <MapComponent />
        </div>
        <div className='flex flex-col gap-4'>
          <h6 className='text-[#1E293B] text-[20px] font-bold mb-6 mt-3'>
            Сумка с кожанными ремнями в оранжевом цвете
          </h6>
          <div className='flex items-start justify-between font-inter w-[70%]'>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Состояние:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Новое</span>
              </div>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Бренд:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Другой</span>
              </div>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Доставкa:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Платная</span>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Состояние:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Новое</span>
              </div>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Бренд:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Другой</span>
              </div>
              <div className='flex items-center gap-[6px]'>
                <p className='text-[#8D95A1] text-[16px]'>Доставкa:</p>{" "}
                <span className='text-[#515A68] text-[16px]'>Платная</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-6 w-[90%]'>
            <p className='text-[#515A68] text-[18px] font-normal font-inter'>
              Компактная кожанная сумка. Сделана из натурально кожи. Высокое
              качество материалов
            </p>
            <p className='text-[#515A68] text-[18px] font-inter'>
              Вы можете выбрать из 4 цветов. Можете выбрать тип ремня и стиль
              самой сумки
            </p>
          </div>
          <div className='flex flex-col gap-2 text-[#8D95A1]'>
            <div className='flex items-center gap-[6px]'>
              <p className=' text-[16px]'>Обновлено:</p>{" "}
              <span className='text-[16px]'>20.03.2023</span>
            </div>
            <div className='flex items-center gap-[6px]'>
              <p className='text-[16px]'>Создано:</p>{" "}
              <span className=' text-[16px]'>11.01.2023</span>
            </div>
            <div className='flex items-center gap-[6px]'>
              <p className=' text-[16px]'>ID:</p>{" "}
              <span className='text-[16px]'>8293012301</span>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='bg-primary text-[#fff] text-[16px] font-bold rounded-md py-2 px-4'>
            Поделиться
          </button>
        </div>
      </div>
      <div className='my-12'>
        <h3 className='text-[40px] text-[#1E293B] font-semibold pb-6'>
          Схожие объявления{" "}
        </h3>
        <div className='grid grid-cols-4 gap-5'>
          {newUpdateData.slice(0, 4).map((el) => (
            <div key={el.id}>
              <img className='w-[324px]' src={el.img} alt='' />
              <div>
                <h5 className='text-[#1E293B] font-semibold text-[32px]'>
                  {el.price}
                </h5>
                <h6 className='text-[#8691A4] font-medium text-[22px]'>
                  {el.title}
                </h6>
                <p className='w-[230px] text-[#515A68] text-[14px] line-clamp-2'>
                  {el.desc}
                </p>
              </div>
              <div className='flex justify-end  text-[#fff] text-center mt-4'>
                <button className='bg-primary py-[6px] px-4 rounded-md text-[20px] font-medium'>
                  Написать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
