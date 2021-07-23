import api from './api';

export function getNotification() {

  const response = api.get('/notificacao/getNotification');

  return response;
}

export function responseNotification(uid, name, authorized) {

  const response = api.post('/notificacao/responseNotification', {
    uid: uid,
    name: name,
    authorized: authorized
  });

  return response;
}

export function discardNotification(uid) {

  const response = api.delete('/notificacao/discardNotification', {
    data: {
      uid: uid
    }
  });

  return response;
}
