import banner from "@assets/images/banner.png";
import { NewProductUpdates } from "./NewProductUpdates";
import { Category } from "../UI/Category";
import Pagination from "../UI/Pagination";

export const MainPage = () => {
  return (
    <div className='container flex flex-col gap-4'>
      <Category />
      <div className='sm:w-full'>
        <img src={banner} alt='' />
      </div>
      <NewProductUpdates />
      <Pagination />
    </div>
  );
};
