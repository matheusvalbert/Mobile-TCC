import api from './api';

export function completeModify(data) {

  const response = api.put('visitante/completeModify', data);
}

export function modify(uid, name, plate) {

  const response = api.patch('visitante/modify', {
    uid : uid,
    name : name,
    plate : plate
  })
}

export function deleteU(uid) {

  const response = api.delete('/visitante/delete', {
    data: {
      uid: uid
    }
  });

  return response;
}

export function users() {

  const response = api.get('/visitante/getUsers');

  return response;
}

export function add(data) {

  const response = api.post('/visitante/add', data);

  return response;
}
