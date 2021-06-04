import api from './api';

export function getList() {

  const response = api.get('/listas/get');

  return response;
}

export function newList(name, ids) {

  const response = api.post('/listas/newList', {
    name: name,
    ids: ids
  });
}

export function modify(id, name, ids) {

  console.log(id, name, ids);

  const response = api.patch('/listas/modify', {
    name: name,
    ids: ids,
    uid: id
  });

  return response;
}

export function deleteItem(uid) {

  const response = api.delete('/listas/delete', {
    data: {
      uid: uid
    }
  });

  return response;
}
