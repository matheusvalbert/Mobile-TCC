import React, { createContext, useState, useContext } from "react";

const dayContext = createContext();

export const AgendarVisitanteContext = ({ children }) => {

  const [ daySelected, setDaySelected ] = useState([ false, false, false, false, false, false, false ]);
  const [ daysWeek, setDaysWeek ] = useState('Selecione os dias...');

  return (
    <dayContext.Provider value={{ daySelected, setDaySelected, daysWeek, setDaysWeek }}>
      {children}
    </dayContext.Provider>
  );
}

export function useAgendarVisitanteContext() {
  return useContext(dayContext);
}
