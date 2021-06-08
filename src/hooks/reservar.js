import React, { createContext, useState, useContext } from "react";

import * as reservar from '../services/reservar';

const reservarContext = createContext();

export const Reservar = ({ children }) => {

  const [ ambientes, setAmbientes ] = useState({});

  async function getAmbientes() {

    try {

      const response = await reservar.getAmbientes();

      setAmbientes(response.data.result);
    }
    catch(err) {

      console.log(err);
    }
  }

  return (
    <reservarContext.Provider value={{ getAmbientes, ambientes }}>
      {children}
    </reservarContext.Provider>
  );
}

export function useReservar() {
  return useContext(reservarContext);
}
