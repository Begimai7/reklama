import burger from "../../../public/assets/icons/nav/burger.svg";
import like from "../../../public/assets/icons/nav/like.svg";
import email from "../../../public/assets/icons/nav/email.svg";
import avatar from "../../../public/assets/icons/nav/avatar.svg";

export const Nav = ({ authorized }) => {
  return (
    <div className='bg-primary'>
      <div className='container h-[81px]  flex justify-between items-center w-full'>
        <img src={burger} alt='' />
        <div className='flex justify-between w-[60%]'>
          <h4 className='text-[#fff] text-[24px] font-semibold font-inter'>
            Реклама √1
          </h4>

          {/* authorized */}
          {authorized ? (
            <div className='flex gap-8'>
              <img src={like} alt='' />
              <img src={email} alt='' />
              <img
                className='rounded-full w-[38px] h-[38px]'
                src={avatar}
                alt=''
              />
              <button className='text-primary font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] bg-white'>
                Подать объявление
              </button>
            </div>
          ) : (
            // none-authorized
            <div className='flex gap-8'>
              <button className='font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] border border-white text-white'>
                Войти
              </button>
              <button className='text-primary font-medium font-inter text-[16px] px-3 py-2 rounded-[5px] bg-white'>
                Подать объявление
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
