import api from './api';

export function completeModify(data) {

  const response = api.put('morador/completeModify', data);
}

export function modify(uid, name, plate) {

  const response = api.patch('morador/modify', {
    uid : uid,
    name : name,
    plate : plate
  })
}

export function deleteU(uid) {

  const response = api.delete('/morador/delete', {
    data: {
      uid: uid
    }
  });

  return response;
}

export function users() {

  const response = api.get('/morador/getUsers');

  return response;
}

export function add(data) {

  const response = api.post('/morador/add', data);

  return response;
}
