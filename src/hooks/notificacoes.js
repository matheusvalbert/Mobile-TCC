import React, { createContext, useContext, useState, useEffect, createRef } from 'react';

import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import * as not from '../services/notificacao';

const notificacaoContext = createContext();

export const Notificacoes = ({ children }) => {

  const [ notificacao, setNotificacao ] = useState([]);

  useEffect(() => {
    messaging()
      .onMessage(async remoteMessage => {
        PushNotification.localNotificationSchedule({
          title: remoteMessage.notification.title,
          message: remoteMessage.notification.body,
          date: new Date(Date.now()),
          allowWhileIdle: false,
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
    <notificacaoContext.Provider value={{ getNotification, notificacao, responseNotification, discardNotification }}>
      {children}
    </notificacaoContext.Provider>
  );
}

export function useNotificacoes() {
  return useContext(notificacaoContext);
}
