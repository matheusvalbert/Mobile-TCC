import React, { useEffect } from 'react';
import { Container, Form, Button, FormButton, ButtonTittle } from './styles';

import { useAuth } from '../../hooks/auth';
import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const ControleDeAcesso = ({ navigation }) => {

  const { signOut } = useAuth();

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <Container>
      <Form>
        <Button onPress={ () => navigation.navigate('Dados Moradores') }>
          <FormButton>
            <Icon name='person' size={ 80 } color='#03BB85' />
            <ButtonTittle>Adicionar/Alterar { '\n' } dados morador</ButtonTittle>
          </FormButton>
        </Button>
        <Button onPress={ () => navigation.navigate('Dados Visitante') }>
          <FormButton>
            <Icon name='person-add-alt-1' size={ 80 } color='#03BB85' />
            <ButtonTittle>Cadastrar/Alterar { '\n' } dados visitante</ButtonTittle>
          </FormButton>
        </Button>
      </Form>
      <Form>
        <Button onPress={ () => navigation.navigate('Agendar Visitante') }>
          <FormButton>
            <Icon name='calendar-today' size={ 80 } color='#03BB85' />
            <ButtonTittle>Agendar visitante</ButtonTittle>
          </FormButton>
        </Button>
        <Button onPress={ () => navigation.navigate('Lista de Visitantes') }>
          <FormButton>
            <Icon name='assignment' size={ 80 } color='#03BB85' />
            <ButtonTittle>Criar lista de { '\n' } visitantes</ButtonTittle>
          </FormButton>
        </Button>
      </Form>
      <Form>
        <Button onPress={ () => navigation.navigate('Reservar Ambiente') }>
          <FormButton>
            <Icon name='weekend' size={ 80 } color='#03BB85' />
            <ButtonTittle>Reservar ambiente</ButtonTittle>
          </FormButton>
        </Button>
        <Button onPress={ () => signOut() }>
          <FormButton>
            <Icon name='logout' size={ 80 } color='#03BB85' />
            <ButtonTittle>Sair</ButtonTittle>
          </FormButton>
        </Button>
      </Form>
    </Container>
  );
}

export default ControleDeAcesso;
