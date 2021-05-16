import React from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import IconPass from 'react-native-vector-icons/MaterialCommunityIcons';
IconPass.loadFont();

import TabRoutes from './tab.routes';

import DadosMorador from '../pages/dadosMorador';
import DadosVisitante from '../pages/dadosVisitante';
import AgendarVisitante from '../pages/agendarVisitante';
import ListaDeVisitantes from '../pages/criarListaDeVisitantes';
import ReservarAmbiente from '../pages/reservarAmbiente';
import AlterarSenha from '../pages/alterarSenha';

import { useStackName } from '../hooks/stackName';

const Stack = createStackNavigator();


const StackRoutes = () => {

  const { name } = useStackName();

  return(
    <Stack.Navigator screenOptions={({ navigation }) => ({
      headerBackTitleVisible: false,
      headerTintColor: '#FFF',
      headerStyle: { backgroundColor: '#03BB85' },
      headerRight: () => (
        name === 'Controle de Acesso' || name === 'Notificações'
        ?
          <TouchableOpacity style={{ paddingRight: 10 }} onPress={ () => navigation.navigate('Alterar Senha') }>
            <IconPass name='onepassword' size={ 25 } color={ '#FFF' } />
          </TouchableOpacity>
        :
          <></>
      )
     })}>
      <Stack.Screen name='Tab' component={ TabRoutes } options={{ title: name }} />
      <Stack.Screen name='Dados Moradores' component={ DadosMorador } />
      <Stack.Screen name='Dados Visitante' component={ DadosVisitante } />
      <Stack.Screen name='Agendar Visitante' component={ AgendarVisitante } />
      <Stack.Screen name='Lista de Visitantes' component={ ListaDeVisitantes } />
      <Stack.Screen name='Reservar Ambiente' component={ ReservarAmbiente } />
      <Stack.Screen name='Alterar Senha' component={ AlterarSenha } />
    </Stack.Navigator>
  );
}

export default StackRoutes;
