import { newUpdateData } from "@utils/constants";
import arrowDown from "@assets/icons/arrow-down.svg";

export const NewProductUpdates = () => {
  return (
    <div>
      <div className='flex justify-between py-10'>
        <h4 className='text-[#1E293B] text-[40px] font-semibold'>
          Новые объявления{" "}
        </h4>
        <div className='flex items-center gap-2'>
          <span className='text-primary'>Все города</span>
          <img src={arrowDown} alt='' />
        </div>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {newUpdateData.map((el) => (
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
            <div className='text-end mt-5'>
              <button className='py-2 px-5  rounded-md bg-primary text-white'>
                Написать
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
