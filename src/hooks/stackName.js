import React, { createContext, useState, useContext } from 'react';

const stackContext = createContext();

export const StackName = ({ children }) => {

  const [ name, setName ] = useState('');

  return (
    <stackContext.Provider value={{ name, setName }}>
      {children}
    </stackContext.Provider>
  );
}

export function useStackName() {
  return useContext(stackContext);
}
