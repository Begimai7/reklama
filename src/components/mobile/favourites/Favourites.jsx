import { favouriteTabs } from "@utils/constants";
import { Tabs } from "@components/UI/Tabs";

export const Favourites = () => {
  return (
    <div className='mb-20'>
      <h6 className='text-[#BFBFBF] text-[20px] font-medium text-center my-5'>
        Избранное
      </h6>
      <div>
        <Tabs
          tabsProfile={favouriteTabs}
          firstTab='Товары'
          secondTab='Подписки'
        />
      </div>
    </div>
  );
};
