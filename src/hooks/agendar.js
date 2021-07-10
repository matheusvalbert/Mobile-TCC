import React, { useState, useEffect, createContext, useContext } from 'react';

import { get, modify } from '../services/visitas';

const agendarContext = createContext();

export const Agendar = ({ children }) => {

  const [ daySelected, setDaySelected ] = useState([ false, false, false, false, false, false, false ]);
  const [ type, setType ] = useState('Nenhuma');
  const [ dayYear, setDayYear ] = useState('Selecione o dia...');
  const [ date, setDate ] = useState(new Date(Date.now()));
  const [ daysWeek, setDaysWeek ] = useState('Selecione os dias...');
  const [ visitantes, setVisitantes ] = useState([]);
  const [ visitante, setVisitante ] = useState([]);

  useEffect(() => {
    updateType();
    updateDayYear();
    updateDaysWeek();
  }, [visitante]);

  async function alterarDados() {
    try {
      if(type === 'Nenhuma') {
        await modify(visitante.visitas_uid, type, 'Aguardando cadastro', null, null, null, null, null, null, null, null);
      }
      if(type === 'Visita recorrente') {

        let arrayDays = [];

        for(var i = 0; i < 7; i++) {
          arrayDays.push(daySelected[i] === true ? 1 : 0);
        }

        await modify(visitante.visitas_uid, type, daysWeek, null, arrayDays[0], arrayDays[1], arrayDays[2], arrayDays[3], arrayDays[4], arrayDays[5], arrayDays[6]);
      }
      else if(type === 'Visita única') {
        await modify(visitante.visitas_uid, type, dayYear, date.toISOString().slice(0, 10), null, null, null, null, null, null, null, null);
      }
    }
    catch(err) {
      console.log(err);
    }
  }

  async function getVisitas() {

    try {
      const response = await get();

      setVisitantes(response.data.visitantes);
    }
    catch(err) {
      console.log(err);
    }
  }

  function updateType() {
    setType(visitante.type);
  }

  function updateDayYear() {
    setDate(new Date(Date.now()));
    setDayYear(visitante.text);
  }

  function updateDaysWeek() {

    let arrayDays = [];

    if(visitante.seg === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.ter === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.qua === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.qui === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.sex === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.sab === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    if(visitante.dom === 0)
      arrayDays.push(false);
    else
      arrayDays.push(true);

    setDaySelected(arrayDays);
    setDaysWeek(visitante.text);
  }

  return (
    <agendarContext.Provider value={{ daySelected, setDaySelected, daysWeek, setDaysWeek, getVisitas, visitantes, visitante, setVisitante, type, setType, setDate, setDayYear, dayYear, date, alterarDados }}>
      {children}
    </agendarContext.Provider>
  );
}

export function useAgendar() {
  return useContext(agendarContext);
}
