import avatarImg from "@assets/icons/nav/avatar.svg";
import pero from "@assets/icons/mobile/pero.svg";
import setting from "@assets/icons/mobile/settings.svg";
import nextArrow from "@assets/icons/arrow-right.svg";
import statistics from "@assets/icons/mobile/static.svg";
import balance from "@assets/icons/mobile/balance.svg";
import { favouriteTabs } from "@utils/constants";
import { Tabs } from "@components/UI/Tabs";

export const Profile = () => {
  const avatar = avatarImg;
  const name = "Настя";
  return (
    <div>
      <div className='flex justify-between items-center mt-5'>
        <div className='flex items-center gap-2'>
          <img src={avatar} alt='' />
          <h6 className='text-[#1E293B] font-bold text-[20px]'>{name}</h6>
        </div>
        <div className='flex items-center gap-5'>
          <img src={pero} alt='' />
          <img src={setting} alt='' />
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-8'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={statistics} alt='' />
              <h6 className='text-[#1E293B] font-normal text-[16px]'>
                Статистика
              </h6>
            </div>
            <div className='flex items-center gap-5'>
              <img src={nextArrow} alt='' />
            </div>
          </div>
          <hr className='bg-[#BFBFBF] text-[#BFBFBF] h-[1px] mt-5' />
        </div>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <img src={balance} alt='' />
              <h6 className='text-[#1E293B] font-normal text-[16px]'>
                Баланс:{" "}
                <span className='text-primary font-bold text-[16px] ml-3'>
                  140 USD
                </span>
              </h6>
            </div>
            <div className='flex items-center gap-5'>
              <img src={nextArrow} alt='' />
            </div>
          </div>
          <hr className='bg-[#BFBFBF] text-[#BFBFBF] h-[1px] mt-5' />
        </div>
      </div>

      <div className='mt-5'>
        <Tabs
          tabsProfile={favouriteTabs}
          firstTab='Товары'
          secondTab='Подписки'
        />
      </div>
    </div>
  );
};
