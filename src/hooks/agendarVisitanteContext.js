import React, { createContext, useState, useContext } from "react";

import { get } from '../services/visitas';

const dayContext = createContext();

export const AgendarVisitanteContext = ({ children }) => {

  const [ daySelected, setDaySelected ] = useState([ false, false, false, false, false, false, false ]);
  const [ daysWeek, setDaysWeek ] = useState('Selecione os dias...');

  const [ visitantes, setVisitantes ] = useState([]);

  async function getVisitas() {

    try {
      const response = await get();

      setVisitantes(response.data.visitantes);

      console.log(response.data.visitantes);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <dayContext.Provider value={{ daySelected, setDaySelected, daysWeek, setDaysWeek, getVisitas, visitantes }}>
      {children}
    </dayContext.Provider>
  );
}

export function useAgendarVisitanteContext() {
  return useContext(dayContext);
}
