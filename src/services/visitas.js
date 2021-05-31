import api from './api';

export function get() {

  const response = api.get('/visitas/getVisitas');

  return response;
}
