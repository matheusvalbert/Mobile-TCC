import React, { createContext, useState, useContext } from "react";

import * as reservar from '../services/reservar';

const reservarContext = createContext();

export const Reservar = ({ children }) => {

  const [ ambientes, setAmbientes ] = useState({ });
  const [ markedDates, setMarkedDates ] = useState({ });
  const [ ownMarked, setOwnMarked ] = useState([]);
  const [ otherMarked, setOtherMarked ] = useState([]);
  const [ reservas, setReservas ] = useState({ });
  const [ ambienteUid, setAmbienteUid ] = useState('');

  const newDate = new Date(Date.now());
  const year = newDate.getFullYear();
  var month = newDate.getMonth() + 1;
  var day = newDate.getDate();
  month < 10 ? month = '0' + month : month;
  day < 10 ? day = '0' + day : day;
  const date = year + '-' + month + '-' + day;

  async function reservarAmbiente(uid, lastSelected) {

    try {

      const response = await reservar.reservarAmbiente(ambienteUid, uid, lastSelected);

    }
    catch (err) {

      console.log(err);
    }
  }

  async function remover(date) {

    try {

      const response = await reservar.remover(date);

    }
    catch (err) {

      console.log(err);
    }
  }

  async function alterar(uid, lastSelected) {

    try {

      const response = await reservar.alterar(uid, lastSelected);

    }
    catch (err) {

      console.log(err);
    }
  }

  async function getReservas(ambiente_uid) {

    setAmbienteUid(ambiente_uid);

    try {
      const response = await reservar.getReservas(ambiente_uid);

      setReservas(response.data.result);

      response.data.result.map(item => {
        setMarkedDates(oldValues => ({
          ...oldValues,
          [item.date]: {
            marked: true, dotColor: response.data.number === item.number ? '#1520AB' : '#FF0000',
            selected: item.date === date ? true : false
          }
        }));
        if(item.number === response.data.number) {
          setOwnMarked(oldValues => [
            ...oldValues, item.date
          ]);
        }
        else {
          setOtherMarked(oldValues => [
            ...oldValues, item.date
          ]);
        }
      });

      var flag = false;

      response.data.result.map(item => {
        if(item.date === date)
          flag = true;
      });

      if(response.data.result.length === 0 || flag === false) {
        setMarkedDates( oldValues => ({
          ...oldValues,
          [date]: {
            selected: true
          }
        }));
      }
    }
    catch (err) {

      console.log(err);
    }
  }

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
    <reservarContext.Provider value={{ getAmbientes, ambientes, markedDates, setMarkedDates, getReservas, ownMarked, setOwnMarked, otherMarked, setOtherMarked, reservas, reservarAmbiente, remover, alterar }}>
      {children}
    </reservarContext.Provider>
  );
}

export function useReservar() {
  return useContext(reservarContext);
}
