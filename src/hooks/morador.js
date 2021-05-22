import React, { createContext, useContext, useState, useEffect } from 'react';

import { add } from '../services/morador';

const MoradorContext = createContext();

export const Morador = ({ children }) => {

  const [ morador, setMorador ] = useState('');

  async function addUser(photo, nome, placa) {

    const data = new FormData();

    data.append('file', {
      name: photo.filename,
      type: photo.mime,
      uri: Platform.OS === 'ios' ? photo.sourceURL.replace('file://', '') : photo.sourceURL,
    });

    data.append('name', nome);
    data.append('plate', placa);

    try {
      const response = await add(data);
      return true;
    }
    catch(err) {
      return false;
    }
  }

  return(
    <MoradorContext.Provider value={{ morador, setMorador, addUser }}>
      { children }
    </MoradorContext.Provider>
  );
}

export function useMorador() {
  return useContext(MoradorContext);
}
