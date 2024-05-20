import { Container } from "../UI/Container";
import { Tabs } from "../tabs/Tabs";
import { Announcement } from "./announcement/Announcement";
import { Message } from "./message/Message";
import { ProfileSetting } from "./profile_setting/ProfileSetting";
import { Efficiency } from "./efficiency/Efficiency";
import { ImproveProfile } from "./improve_profile/ImproveProfile";

const tabsProfile = [
  {
    id: 1,
    name: "Мои объявление",
    content: <Announcement />,
  },
  {
    id: 2,
    name: "Сообщение",
    content: <Message />,
  },
  {
    id: 3,
    name: "Кошелек",
    content: <div>Кошелек Content</div>,
  },
  {
    id: 4,
    name: "Настройки профиля",
    content: <ProfileSetting />,
  },
  {
    id: 5,
    name: "Эффективность",
    content: <Efficiency />,
  },
  {
    id: 6,
    name: "Улучшить профиль",
    content: <ImproveProfile />,
  },
];
export const WalletBalance = () => {
  return (
    <Container>
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        className=' p-8 w-[40%] '
      >
        <p className='text-[#8D95A1] text-[20px] mb-2'>Баланс кошелька:</p>
        <h5 className='text-[#1E293B] text-[40px] font-semibold'>300 USD</h5>
        <div className='flex justify-end mt-20'>
          <button className='bg-primary p-2 px-3 rounded-md text-[#fff]'>
            Пополнить
          </button>
        </div>
      </div>
      <div className='my-20'>
        <Tabs tabsProfile={tabsProfile} />
      </div>
    </Container>
  );
};
