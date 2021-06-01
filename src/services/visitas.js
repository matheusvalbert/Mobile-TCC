import api from './api';

export function modify(visitas_uid, type, text, date, seg, ter, qua, qui, sex, sab, dom) {

  console.log(visitas_uid, type, text, date, seg, ter, qua, qui, sex, sab, dom);
}

export function get() {

  const response = api.get('/visitas/getVisitas');

  return response;
}
