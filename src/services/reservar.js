import api from './api';

export function getAmbientes() {

  const response = api.get('/reservas/getAmbientes');

  return response;
}
