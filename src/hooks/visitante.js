import React, { createContext, useContext, useState, useEffect } from 'react';

import { add, users, deleteU, modify, completeModify } from '../services/visitante';

const VisitanteContext = createContext();

export const Visitante = ({ children }) => {

  const [ visitantes, setVisitantes ] = useState('');

  async function completeUpdate(uid, photo, nome, placa) {

    const data = new FormData();

    data.append('file', {
      name: photo.path,
      type: photo.mime,
      uri: photo.path,
    });

    data.append('uid', uid);
    data.append('name', nome);
    data.append('plate', placa);

    try {
      const response = await completeModify(data);

      return true;
    }
    catch(err) {

      return false;
    }
  }

  async function partialUpdate(uid, nome, placa) {

    try {
      const response = await modify(uid, nome, placa);

      return true;
    }
    catch(err) {
      console.log(err)
    }
  }

  async function deleteUser(uid) {
    try {
      const response = await deleteU(uid);

      return true;
    }
    catch(err) {

      console.log(err);
    }
  }

  async function getUsers() {

    try {
      const response = await users();

      setVisitantes(response.data.result);
    }
    catch(err) {
      console.log(err);
    }
  }

  async function addUser(photo, nome, placa) {

    const data = new FormData();

    data.append('file', {
      name: photo.path,
      type: photo.mime,
      uri: photo.path,
    });

    data.append('name', nome);
    data.append('plate', placa);

    try {
      const response = await add(data);
      return response.data.insertedUser;
    }
    catch(err) {
      return false;
    }
  }

  return(
    <VisitanteContext.Provider value={{ visitantes, setVisitantes, addUser, getUsers, deleteUser, completeUpdate, partialUpdate }}>
      { children }
    </VisitanteContext.Provider>
  );
}

export function useVisitante() {
  return useContext(VisitanteContext);
}
