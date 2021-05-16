import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from './hooks/auth';
import { StackName } from './hooks/stackName';

import Login from './pages/login';
import App from './routes/stack.routes';

const Routes = () => {

  const { loading, signed } = useAuth();

  if(loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#98FF98' }}>
        <ActivityIndicator size='large' color='#000' />
      </View>
    );
  }

  return(
    signed
    ?
      <StackName>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </StackName>
    :
      <Login />
  );
}

export default Routes;
