import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from './hooks/auth';
import { StackName } from './hooks/stackName';
import { Notificacoes } from './hooks/notificacoes';

import Login from './pages/login';
import App from './routes/stack.routes';

const Routes = () => {

  const { loading, signed } = useAuth();

  if(loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#98FF98' }}>
        <ActivityIndicator size='large' color='#FFF' />
      </View>
    );
  }

  return(
    signed
    ?
      <StackName>
        <Notificacoes>
          <App />
        </Notificacoes>
      </StackName>
    :
      <Login />
  );
}

export default Routes;
