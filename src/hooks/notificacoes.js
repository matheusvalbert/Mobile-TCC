import React, { createContext, useContext, useState, useEffect, createRef } from 'react';

import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import { StackActions } from '@react-navigation/native';

import * as not from '../services/notificacao';

const notificacaoContext = createContext();
const navigationRef = createRef();

export const Notificacoes = ({ children }) => {

  const [ notificacao, setNotificacao ] = useState([]);

  PushNotification.configure({
    onNotification: function (notification) {
      console.log('aaaa');
      if(notification.userInteraction && notification.data.uid !== '') {
        navigationRef.current.dispatch(StackActions.push('Detalhes notificacao', {
          uid: notification.data.uid,
          notification: notification.data.notification,
          visitor: notification.data.visitor
        }));
      }
    },
  });

  useEffect(() => {
    messaging()
      .onMessage(async remoteMessage => {
        PushNotification.localNotificationSchedule({
          title: remoteMessage.notification.title,
          message: remoteMessage.notification.body,
          date: new Date(Date.now()),
          allowWhileIdle: false,
          data: {
            uid: remoteMessage.data.uid,
            number: remoteMessage.data.number,
            type: remoteMessage.data.type,
            notification: remoteMessage.data.notification,
            visitor: remoteMessage.data.visitor,
          }
        });
      });
    messaging()
      .onNotificationOpenedApp(remoteMessage => {
        if(remoteMessage.data.uid !== '') {
          navigationRef.current.dispatch(StackActions.push('Detalhes notificacao', {
            uid: remoteMessage.data.uid,
            notification: remoteMessage.data.notification,
            visitor: remoteMessage.data.visitor
          }));
        }
      });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if(remoteMessage !== null && remoteMessage.data.uid !== '') {
          navigationRef.current.dispatch(StackActions.push('Detalhes notificacao', {
            uid: remoteMessage.data.uid,
            notification: remoteMessage.data.notification,
            visitor: remoteMessage.data.visitor
          }));
        }
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
