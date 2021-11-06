import { createContext, useState, FC, useEffect } from "react";

type NotificationContextType = {
  isNotificationVisible: boolean;
  setShowNotification(showNotification: boolean): void;
}

export const NotificationContext = createContext({} as NotificationContextType);

export const NotificationStorage:FC = ({ children }) => {
  const [isNotificationVisible, setIsNotificationVisible ] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    setIsNotificationVisible(true)
    setTimeout(() => {
      setIsNotificationVisible(false)
    }, 2000)
  }, [showNotification])

  return (
    <NotificationContext.Provider value={{setShowNotification, isNotificationVisible}}>
      {children}
    </NotificationContext.Provider>
  )
}