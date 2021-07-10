import React, { createContext, useContext, useState, useEffect, createRef } from 'react';

import { StackActions } from '@react-navigation/native';
import PushNotification from "react-native-push-notification";
import messaging from '@react-native-firebase/messaging';

const notificacaoContext = createContext();

export const Notificacoes = ({ children }) => {

  const navigationRef = createRef();

  PushNotification.configure({
    onNotification: notification => {
      console.log(notification);
      if(notification.userInteraction)
      navigationRef.current.dispatch(StackActions.push('Lista de Visitantes', {}));
    }
  });

  useEffect(() => {

    messaging()
      .onMessage(async remoteMessage => {
        console.log(
          'Notification caused app to open from foreground state:',
          remoteMessage,
        );

        PushNotification.localNotificationSchedule({
          title:"Message",
          message: "My Notification Message",
          date: new Date(Date.now()),
          allowWhileIdle: false
        });
      });

  }, []);

  return (
    <notificacaoContext.Provider value={{ navigationRef }}>
      {children}
    </notificacaoContext.Provider>
  );
}

export function useNotificacoes() {
  return useContext(notificacaoContext);
}
