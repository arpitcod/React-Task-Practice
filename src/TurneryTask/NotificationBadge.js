// **Notification Badge**: Show a notification badge if 
// there are new notifications, otherwise hide it.

import React, { useState } from "react";
import { IoMdNotifications } from "react-icons/io";

const NotificationBadge = () => {
  const [notification, setNotification] = useState(10);

  const handleClearNotification = () =>{
    setNotification(0)
  }
  return (
    <div className="mt-5 d-flex flex-column align-items-center gap-3">
      <a href="3" className=" position-relative">
      <IoMdNotifications className="fs-1 " />
          {notification > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {notification}
          <span className="visually-hidden">unread messages</span>
        </span>

          )}
      </a>
      <button className="btn btn-danger" onClick={handleClearNotification}>Clear Notificition</button>
    </div>
  );
};

export default NotificationBadge;
