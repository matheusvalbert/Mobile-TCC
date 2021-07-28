import React, { createContext, useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import api from '../services/api';
import * as auth from '../services/auth';

const AuthContext = createContext();

export const Auth = ({ children }) => {

  const [ uid, setUid ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ token, setToken ] = useState('');
  const [ signed, setSigned ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function loadLogin() {
      var json = await AsyncStorage.getItem('@login');
      if(json !== null) {
        json = JSON.parse(json);

        setUsername(json.username);
        setUid(json.uid);
        setToken(json.token);
        setSigned(true);

        api.defaults.headers.Authorization = `Bearer ${json.token}`;

        try {
          const response = await auth.validate();
          if(json.uid !== response.data.uid) {
            setUsername('');
            setUid('');
            setToken('');
            setSigned(false);
          }
        }
        catch(err) {
          console.log(err);
          alert('falha login');
          setSigned(false);
        }
      }
      setLoading(false);
    }

    loadLogin();
  }, []);

  async function changePassword(oldPassword, newPassword) {
    try {
      const response = await auth.reset(oldPassword, newPassword);

      return 'success';
    }
    catch (err) {
      console.log(err);
      return 'error';
    }
  }

  async function signOut() {
    try {
      await AsyncStorage.removeItem('@login');
      setUsername('');
      setUid('');
      setToken('');
      setSigned(false);
      await auth.deleteToken();
    } catch(err) {
      console.log(err);
    }
  }

  async function signIn(username, password) {
    try {
      const response = await auth.signIn(username, password);
      setUsername(response.data.username);
      setUid(response.data.uid);
      setToken(response.data.token);
      setSigned(true);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      const json = JSON.stringify(response.data);
      await AsyncStorage.setItem('@login', json);
    }
    catch (err) {
      alert('falha no login');
    }

    messaging()
      .getToken()
      .then(async token => { await auth.setToken(token) });

  };

  return(
    <AuthContext.Provider value={{ uid, username, token, signed, loading, signIn, signOut, changePassword }}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
