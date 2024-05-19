import avatar from "@assets/icons/wallet-balance/avatar.svg";
import arrowRight from "@assets/icons/arrow-right.svg";
import email from "@assets/icons/wallet-balance/email.svg";
import call from "@assets/icons/wallet-balance/call.svg";
import confirm from "@assets/icons/wallet-balance/confirm.svg";

export const ProfileSetting = () => {
  return (
    <div className='flex items-start gap-14'>
      <div className='flex  items-center justify-between p-5 rounded-md shadow-lg'>
        <div className='flex items-start gap-2'>
          <img className='h-[38px] w-[38px] rounded-full' src={avatar} alt='' />
          <div>
            <p className='text-[#1E293B] text-[20px] font-bold'>Настя</p>
            <p className='text-[#515A68] text-[12px]'>
              Фото профиля, имя, описание
            </p>
          </div>
        </div>
        <img src={arrowRight} alt='' />
      </div>
      <div className='flex flex-col rounded-md shadow-lg w-[360px]'>
        <div className='flex  items-center justify-between p-6 '>
          <div className='flex items-center gap-2'>
            <div className='bg-bgGray h-[38px] w-[38px] rounded-full '>
              <img className='' src={email} alt='' />
            </div>
            <div>
              <p className='text-[#1E293B] text-[20px] font-bold'>Email:</p>
              <p className='text-[#515A68] text-[12px]'>nastya@gmail.com</p>
            </div>
          </div>
          <img src={arrowRight} alt='' />
        </div>
        <div className='flex  items-center justify-between p-5 '>
          <div className='flex items-center gap-2'>
            <div className='bg-bgGray h-[38px] w-[38px] rounded-full '>
              <img className='' src={call} alt='' />
            </div>
            <div>
              <p className='text-[#1E293B] text-[20px] font-bold'>Email:</p>
              <p className='text-[#515A68] text-[12px]'>nastya@gmail.com</p>
            </div>
          </div>
          <img src={arrowRight} alt='' />
        </div>
        <div className='flex  items-center justify-between p-5 '>
          <div className='flex items-center gap-2'>
            <div className='bg-bgGray h-[38px] w-[38px] rounded-full '>
              <img className='' src={confirm} alt='' />
            </div>
            <div>
              <p className='text-[#1E293B] text-[20px] font-bold'>Email:</p>
              <p className='text-[#515A68] text-[12px]'>nastya@gmail.com</p>
            </div>
          </div>
          <img src={arrowRight} alt='' />
        </div>
      </div>
    </div>
  );
};
