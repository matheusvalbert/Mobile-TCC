import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const Tab = createBottomTabNavigator();

import Notificacoes from '../pages/notificacoes';
import ControleDeAcesso from '../pages/controleDeAcesso';

import { useStackName } from '../hooks/stackName';

const TabRoutes = () => {

  const { name } = useStackName();

  return(
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#03BB85', inactiveTintColor: 'gray' }}>
      <Tab.Screen name='Notificações' component={ Notificacoes } options={{
        tabBarIcon: ({ color }) => (
          name !== 'Notificações' ?
            <Icon name='notifications-none' size={ 25 } color={ color } />
              :
            <Icon name='notifications' size={ 25 } color={ color } />
        )
      }}/>
      <Tab.Screen name='Controle de Acesso' component={ControleDeAcesso}  options={{
        tabBarIcon: ({ color }) => (
          <Icon name='settings' size={ 25 } color={ color } />
        )
      }} />
    </Tab.Navigator>
  );
}

export default TabRoutes;
