import React, { createContext, useContext, useState, useEffect, createRef } from 'react';

import { StackActions } from '@react-navigation/native';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

import * as not from '../services/notificacao';

const notificacaoContext = createContext();

export const Notificacoes = ({ children }) => {

  const [ notificacao, setNotificacao ] = useState([]);

  const navigationRef = createRef();

  PushNotification.configure({
    onNotification: notification => {
      console.log(notification);
      if(notification.userInteraction) {
        navigationRef.current.dispatch(StackActions.push('Lista de Visitantes', {}));
      }
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

  async function getNotification() {

    try {
      const response = await not.getNotification();

      setNotificacao(response.data.result);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function responseNotification(uid, name, authorized) {

    try {
      const response = await not.responseNotification(uid, name, authorized);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function discardNotification(uid) {

    try {
      const response = await not.discardNotification(uid);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <notificacaoContext.Provider value={{ navigationRef, getNotification, notificacao, responseNotification, discardNotification }}>
      {children}
    </notificacaoContext.Provider>
  );
}

export function useNotificacoes() {
  return useContext(notificacaoContext);
}
