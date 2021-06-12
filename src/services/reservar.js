import api from './api';

export function getAmbientes() {

  const response = api.get('/reservas/getAmbientes');

  return response;
}

export function getReservas(ambiente_uid) {

  const response = api.get('/reservas/getReservaAmbiente', {
    params: {
      ambiente_uid: ambiente_uid
    }
  });

  return response;
}

export function reservarAmbiente(ambiente_uid, lista_uid, date) {

  const response = api.post('/reservas/addReservaAmbiente', {
    ambiente_uid: ambiente_uid,
    lista_uid: lista_uid,
    date: date
  });

  return response;
}

export function remover(date) {

  const response = api.delete('/reservas/deleteReservaAmbiente', {
    data: {
      date: date
    }
  });

  return response;
}

export function alterar(lista_uid, date) {

  const response = api.patch('/reservas/updateReservaAmbiente', {
    lista_uid: lista_uid,
    date: date
  });

  return response;
}
