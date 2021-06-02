import api from './api';

export function modify(visitas_uid, type, text, date, seg, ter, qua, qui, sex, sab, dom) {

  const response = api.put('/visitas/modify', {
    visitas_uid: visitas_uid,
    type: type,
    text: text,
    date: date,
    seg: seg,
    ter: ter,
    qua: qua,
    qui: qui,
    sex: sex,
    sab: sab,
    dom: dom
  });

  return response;
}

export function get() {

  const response = api.get('/visitas/getVisitas');

  return response;
}
