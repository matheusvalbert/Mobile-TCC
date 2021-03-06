import api from './api';

export function signIn(username, password) {

  const response = api.post('/auth/login', {
    username: username,
    password: password
  });

  return response;
}

export function validate() {

  const response = api.post('/auth/validate', {});
  return response;
}

export function reset(oldPassword, newPassword) {

  const response = api.patch('/auth/reset', {
    oldPassword: oldPassword,
    newPassword: newPassword
  });

  return response;
}

export function setToken(token) {

  const response = api.patch('/auth/setToken', {
    token: token
  });

  return response;
}

export function deleteToken() {

  const response = api.delete('/auth/deleteToken');
}
