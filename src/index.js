import React from 'react';
import { StatusBar } from 'react-native';

import { Auth } from './hooks/auth';

import Routes from './routes';

import messaging from '@react-native-firebase/messaging';

messaging()
  .setBackgroundMessageHandler(async remoteMessage => { });

const App = () => {
  return(
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content"/>
      <Auth>
        <Routes />
      </Auth>
    </>
  );
}

export default App;
