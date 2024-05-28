import { useState } from "react";

export const Tabs = ({ tabsProfile }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className='flex items-center gap-10'>
        {tabsProfile.map((el) => (
          <div
            key={el.id}
            onClick={() => setActiveTab(el.id)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderBottom: activeTab === el.id ? "2px solid #C811AA" : "none",
              color: activeTab === el.id ? "#C811AA" : "#8D95A1",
              transition: "all 0.3s ease-in-out",
              fontWeight: activeTab === el.id ? "800" : "500",
            }}
          >
            {el.name}
          </div>
        ))}
      </div>
      <div className='mt-10'>
        {tabsProfile.map(
          (el) => el.id === activeTab && <div key={el.id}>{el.content}</div>
        )}
      </div>
    </div>
  );
};
