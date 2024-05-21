import {
  aboutSite,
  forUsers,
  information,
  partnership,
  socialIcons,
} from "@utils/constants";
import appStore from "@assets/icons/footer/app-store.svg";
import googlePay from "@assets/icons/footer/google-pay.svg";

export const Footer = () => {
  return (
    <div className='container md:flex hidden justify-between items-start pb-20 '>
      <div className='flex flex-col gap-3 w-[320px]'>
        <h4 className='text-primary text-[24px] font-bold font-inter'>
          Реклама √1
        </h4>
        <p className='text-[#8D95A1 font-medium text-[#8D95A1]'>
          Больше информации о нашей компании можете найти в наших соц сетях
        </p>
        <div className='flex gap-2 pl-4'>
          {socialIcons.map((el) => (
            <a className='p-2' key={el.id} href=''>
              <img src={el.icon} alt='' />
            </a>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-5 gap-10'>
        <ul className='flex flex-col gap-3 text-[#8D95A1] text-[14px]'>
          <h6 className='text-[#1E293B] text-[14px] font-semibold font-inter mb-1'>
            О сайте
          </h6>
          {aboutSite.map((el) => (
            <li key={el.id}>
              <a href='#'>{el.title}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3 text-[#8D95A1] text-[14px]'>
          <h6 className='text-[#1E293B] text-[14px] font-semibold font-inter mb-1'>
            Партнерство
          </h6>
          {partnership.map((el) => (
            <li key={el.id}>
              <a href='#'>{el.title}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3 text-[#8D95A1] text-[14px]'>
          <h6 className='text-[#1E293B] text-[14px] font-semibold font-inter mb-1'>
            Информация
          </h6>
          {information.map((el) => (
            <li key={el.id}>
              <a href='#'>{el.title}</a>
            </li>
          ))}
        </ul>
        <ul className='flex flex-col gap-3 text-[#8D95A1] text-[14px]'>
          <h6 className='text-[#1E293B] text-[14px] font-semibold font-inter mb-1'>
            {" "}
            Для пользователей
          </h6>
          {forUsers.map((el) => (
            <li key={el.id}>
              <a href='#'>{el.title}</a>
            </li>
          ))}
        </ul>
        <div className='flex flex-col gap-3'>
          <h6 className='text-[#1E293B] text-[14px] font-semibold font-inter mb-1'>
            Скачать
          </h6>{" "}
          <div className='flex flex-col gap-2'>
            <a href='#'>
              <img
                className='bg-[#1E293B] py-2 px-3 rounded-md'
                src={appStore}
                alt=''
              />
            </a>
            <a href='#'>
              <img
                className='bg-[#1E293B] py-2 px-3 rounded-md'
                src={googlePay}
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
