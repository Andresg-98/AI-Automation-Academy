import { createContext, useState } from "react";

export const NotificationContext = createContext();

function NotificationProvider({ children }) {

  const [notification, setNotification] = useState(null);

  function showNotification(title, message) {

    setNotification({

      title,

      message

    });

    setTimeout(() => {

      setNotification(null);

    }, 3000);

  }

  return (

    <NotificationContext.Provider

      value={{

        notification,

        showNotification

      }}

    >

      {children}

    </NotificationContext.Provider>

  );

}

export default NotificationProvider;