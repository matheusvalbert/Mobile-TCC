import React, { createContext, useState, useContext } from "react";

import { getList, modify, newList, deleteItem } from '../services/lista';

const listas = createContext();

export const Lista = ({ children }) => {

  const [ lists, setLists ] = useState([]);

  async function getLists() {
    try {
      const response = await getList()

      setLists(response.data.result);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function addList(name, ids) {

    const idsString = ids.toString();

    try {
      const response = await newList(name, idsString);
    }
    catch(err) {
      console.log(err);
    }
  }

  async function updateList(id, name, ids) {

    const idsString = ids.toString();

    try {
      const response = await modify(id, name, idsString);
    }
    catch(err) {
      console.log(err);
    }
  }

  async function deleteList(uid) {
    try {
      const response = await deleteItem(uid);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <listas.Provider value={{ getLists, lists, addList, updateList, deleteList }}>
      {children}
    </listas.Provider>
  );
}

export function useLista() {
  return useContext(listas);
}
