import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

function Notification() {

  const { notification } = useContext(NotificationContext);

  if (!notification) {

    return null;

  }

  return (

    <div
      className="
        fixed
        top-5
        right-5
        bg-green-600
        text-white
        px-6
        py-4
        rounded-xl
        shadow-2xl
        z-50
        animate-pulse
      "
    >

      <p className="font-bold">

        {notification.title}

      </p>

      <p className="text-sm mt-1">

        {notification.message}

      </p>

    </div>

  );

}

export default Notification;