import banner from "@assets/images/banner.png";
import { NewProductUpdates } from "./NewProductUpdates";
import { Category } from "../UI/Category";

export const MainPage = () => {
  const pagination = 8;

  const numbers = Array.from({ length: pagination }, (_, i) => i + 1);
  return (
    <div className='container flex flex-col gap-3'>
      <Category />
      <div className='sm:w-full'>
        <img src={banner} alt='' />
      </div>
      <NewProductUpdates />
      <div className='md:flex hidden justify-center items-center gap-10 mt-16 mb-12'>
        <span>Предыдущая страница</span>

        <div className='flex i gap-10'>
          {numbers.map((number) => (
            <span className='text-[#9A9A9A]' key={number}>
              {number}
            </span>
          ))}
        </div>
        <div className=''>
          <button className='py-2 px-5  rounded-md bg-primary text-white'>
            Следующая страница
          </button>
        </div>
      </div>
    </div>
  );
};
