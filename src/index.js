import React from 'react';
import { StatusBar } from 'react-native';

import { Auth } from './hooks/auth';

import Routes from './routes';

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
