import { Container } from "../UI/Container";
import addPage from "@assets/icons/posting-page/add-photo.svg";
import call from "@assets/icons/posting-page/call.svg";
import "./index.css";

export const PostingPage = () => {
  const img = 12;

  const imgNumber = Array.from({ length: img }, (_, i) => i + 1);
  return (
    <Container>
      <h5 className='text-[36px] font-semibold text-[#1E293B] mb-10 w-full'>
        Размещение объявления
      </h5>
      <div>
        <div className='flex items-center justify-between w-[300px] mb-3'>
          <p className='text-[#515A68] text-[24px] font-semibold'>
            Загрузка фото
          </p>
          <span className='text-[#8D95A1] text-[14px]'>(до 30 фото)</span>
        </div>
        <div className='flex lg:flex-row flex-col items-center'>
          <div className='flex flex-col items-center w-[330px] h-[330px] mr-5 justify-center bg-bgGray'>
            <label htmlFor='img'>
              <img
                className='w-[56px] h-[56px] rounded-md'
                src={addPage}
                alt=''
              />
            </label>

            <span> Добавить фото</span>
          </div>

          <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-5 lg:mt-0 mt-10'>
            {imgNumber.map((el) => (
              <div
                className='h-[154px] w-[154px] rounded-md flex flex-col items-center justify-center bg-[#F4F4F4]'
                key={el}
              >
                {" "}
                <label htmlFor='img'>
                  <img className='w-[56px] h-[56px]' src={addPage} />
                </label>
                <input style={{ display: "none" }} type='file' id='img' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-10 flex flex-col gap-3'>
        <h6 className='text-[#515A68] text-[24px] font-semibold'>Описание</h6>
        <textarea
          className='p-5 outline-none w-full h-[150px]  border border-borderColor rounded-2xl'
          placeholder='Добавить описание...'
        ></textarea>
      </div>

      <div className='flex flex-col gap-8 lg:w-[60%] mb-16'>
        <h6 className='text-[#515A68] text-[24px] font-semibold'>Категория</h6>
        <div className='text-start'>
          <button className='text-[18px]  bg-primary py-2 px-4 rounded-md text-white'>
            Выбрать
          </button>
        </div>
        <div className='flex flex-col gap-10 w-full'>
          <div className='flex items-center gap-20'>
            <div className='flex flex-col gap-4 w-[40%]'>
              <h6 className='text-[#515A68] text-[20px] font-semibold'>
                Город
              </h6>
              <input
                className='border border-[#8D95A1] rounded-md p-2 pl-3 w-full'
                type='text'
                placeholder='Выбрать город'
              />
            </div>
            <div className='flex flex-col gap-4 w-[40%]'>
              <h6 className='text-[#515A68] text-[20px] font-semibold'>
                Телефон
              </h6>

              <div className='flex items-center gap-3 border border-[#8D95A1] rounded-md p-2 pl-3'>
                <img src={call} alt='' />
                <input type='text' placeholder='+996 000 000 000' />
              </div>
            </div>
          </div>
          <div className='flex items-center gap-20'>
            <div className='flex flex-col gap-4 w-[40%]'>
              <h6 className='text-[#515A68] text-[20px] font-semibold'>Цена</h6>
              <input
                className='border border-[#8D95A1] rounded-md p-2 pl-3'
                type='text'
                placeholder='Договорная'
              />
            </div>
            <div className='flex flex-col gap-4 w-[40%]'>
              <h6 className='text-[#515A68] text-[20px] font-semibold'>
                Валюта
              </h6>

              <div className='flex items-center gap-4 '>
                <div className='flex items-center gap-2'>
                  <input className='h-[30px] w-[30px]' type='radio' />
                  <span>KGS</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input className='h-[30px] w-[30px]' type='radio' />
                  <span>USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-16 mr-16'>
          <button className='text-[18px]  bg-primary py-2 px-4 rounded-md text-white'>
            Опубликовать объявление
          </button>
        </div>
      </div>
    </Container>
  );
};
