import React, { createContext, useState, useContext } from "react";

import { get } from '../services/visitas';

const agendarContext = createContext();

export const Agendar = ({ children }) => {

  const [ daySelected, setDaySelected ] = useState([ false, false, false, false, false, false, false ]);
  const [ daysWeek, setDaysWeek ] = useState('Selecione os dias...');

  const [ visitantes, setVisitantes ] = useState([]);

  async function getVisitas() {


    try {
      const response = await get();

      setVisitantes(response.data.visitantes);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <agendarContext.Provider value={{ daySelected, setDaySelected, daysWeek, setDaysWeek, getVisitas, visitantes }}>
      {children}
    </agendarContext.Provider>
  );
}

export function useAgendar() {
  return useContext(agendarContext);
}
