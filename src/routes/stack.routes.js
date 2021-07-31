import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import IconPass from 'react-native-vector-icons/MaterialIcons';
IconPass.loadFont();

import TabRoutes from './tab.routes';

import DadosMorador from '../pages/dadosMorador';
import CadastroMorador from '../pages/cadastroMorador';
import DadosVisitante from '../pages/dadosVisitante';
import CadastroVisitante from '../pages/cadastroVisitante';
import AgendarVisitanteDados from '../pages/agendarVisitanteDados';
import AgendarVisitante from '../pages/agendarVisitante';
import AgendarVisitanteRecorrente from '../pages/agendarVisitanteRecorrente';
import ListaDeVisitantes from '../pages/listaDeVisitantes';
import ReservarAmbienteDados from '../pages/reservarAmbienteDados';
import ReservarAmbiente from '../pages/reservarAmbiente';
import DetalhesNotificacao from '../pages/detalhesNotificacao';
import AlterarSenha from '../pages/alterarSenha';

import { useStackName } from '../hooks/stackName';
import { useNotificacoes } from '../hooks/notificacoes';
import { Morador } from '../hooks/morador';
import { Visitante } from '../hooks/visitante';
import { Agendar } from '../hooks/agendar';
import { Lista } from '../hooks/lista';
import { Reservar } from '../hooks/reservar';

const Stack = createStackNavigator();

const StackRoutes = () => {

  const { name } = useStackName();
  const { navigationRef } = useNotificacoes();

  return(
    <NavigationContainer ref={navigationRef}>
      <Morador>
        <Visitante>
          <Agendar>
            <Lista>
              <Reservar>
                <Stack.Navigator initialRouteName={'Tab'} screenOptions={({ navigation }) => ({
                  headerBackTitleVisible: false,
                  headerTintColor: '#FFF',
                  headerStyle: { backgroundColor: '#03BB85' },
                  headerRight: () => (
                    name === 'Menu'
                    ?
                      <TouchableOpacity style={{ paddingRight: 10 }} onPress={ () => navigation.navigate('Alterar Senha') }>
                        <IconPass name='settings' size={ 25 } color={ '#FFF' } />
                      </TouchableOpacity>
                    :
                      null
                  )
                })}>
                  <Stack.Screen name='Tab' component={ TabRoutes } options={{ title: name }} />
                  <Stack.Screen name='Dados Moradores' component={ DadosMorador } />
                  <Stack.Screen name='Cadastro Morador' component={ CadastroMorador } />
                  <Stack.Screen name='Dados Visitante' component={ DadosVisitante } />
                  <Stack.Screen name='Cadastro Visitante' component={ CadastroVisitante } />
                  <Stack.Screen name='Agendar Visitante Dados' component={ AgendarVisitanteDados } />
                  <Stack.Screen name='Agendar Visitante' component={ AgendarVisitante } />
                  <Stack.Screen name='Agendar Visitante Recorrente' component={ AgendarVisitanteRecorrente } />
                  <Stack.Screen name='Lista de Visitantes' component={ ListaDeVisitantes } />
                  <Stack.Screen name='Ambientes' component={ ReservarAmbienteDados } />
                  <Stack.Screen name='Reservar Ambiente' component={ ReservarAmbiente } />
                  <Stack.Screen name='Detalhes notificacao' component={ DetalhesNotificacao } />
                  <Stack.Screen name='Alterar Senha' component={ AlterarSenha } screenOptions={({ navigation }) => ({
                    headerTintColor: '#FFF',
                  headerStyle: { backgroundColor: '#03BB85' },
                  })} />
                </Stack.Navigator>
              </Reservar>
            </Lista>
          </Agendar>
        </Visitante>
      </Morador>
    </NavigationContainer>
  );
}

export default StackRoutes;
