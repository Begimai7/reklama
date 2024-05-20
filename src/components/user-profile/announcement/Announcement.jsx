import { Tabs } from "../../tabs/Tabs";
import { Active } from "./Active";

const tabsProfile = [
  {
    id: 1,
    name: "Активно (4)",
    content: <Active />,
  },
  {
    id: 2,
    name: "Ожидают оплаты (0)",
    content: <div> Content</div>,
  },
  {
    id: 3,
    name: "На модерации (0)",
    content: <div>Кошелек Content</div>,
  },
  {
    id: 4,
    name: "Деактивировано (0)",
    content: <div>Настройки профиля Content</div>,
  },
  {
    id: 5,
    name: "Отклонено (0)",
    content: <div>Эффективность Content</div>,
  },
];

export const Announcement = () => {
  return (
    <div>
      <Tabs tabsProfile={tabsProfile} />
    </div>
  );
};
