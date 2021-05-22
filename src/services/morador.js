import api from './api';

export function add(data) {

  const response = api.post('/morador/add', data);

  return response;
}
