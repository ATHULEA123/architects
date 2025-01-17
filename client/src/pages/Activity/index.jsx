import {notification} from "antd";
import React from "react";

const Activity = () => {
  const notificationData = [
    {
      data: "Jeevan changed Project 1432 Design Status from “Basic Design” to “Final Design”.",
      updatedat: "09:00 pm, 03 Oct 2024",
    },
    {
      data: "Jeevan changed Project 1432 Design Status from “Basic Design” to “Final Design”.",
      updatedat: "09:00 pm, 03 Oct 2024",
    },
    {
      data: "Jeevan changed Project 1432 Design Status from “Basic Design” to “Final Design”.",
      updatedat: "09:00 pm, 03 Oct 2024",
    },
  ];
  return (
    <div className="p-10 flex flex-col gap-4">
      {notificationData.map((notification, index) => (
        <div key={index} className="bg-[#99683033] min-w-full border border-[#996830] rounded-lg p-4">
          <div className="text-lg">{notification.data}</div>
          <div className="text-end text-[rgba(68,68,68,1)]">{notification.updatedat}</div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
