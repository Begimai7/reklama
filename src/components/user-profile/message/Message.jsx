import { Tabs } from "../../tabs/Tabs";
import { Chats } from "./Chats";

const tabsProfile = [
  {
    id: 1,
    name: "Чаты",
    content: <Chats />,
  },
  {
    id: 2,
    name: "Уведомление",
    content: <div> Content</div>,
  },
];

export const Message = () => {
  return (
    <div>
      <Tabs tabsProfile={tabsProfile} />
    </div>
  );
};
