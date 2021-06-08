import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container, List, LineForm, Button, Form, Text } from './styles';

import { useReservar } from '../../hooks/reservar';

const ReservarAmbienteDados = ({ navigation }) => {

  const { getAmbientes, ambientes } = useReservar();

  const [ isFetching, setIsFetching ] = useState(false);

  const route = useRoute();
  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getAmbientes();
    });
    return unsubscribe;
  }, [navigation]);

  function update() {
    getAmbientes();
    setIsFetching(false);
  }

  function dadosReserva() {
    navigation.navigate('Reservar Ambiente');
  }

  return(
    <Container>
    <List
      data={ambientes}
      refreshing={isFetching}
      onRefresh={ () => update() }
      renderItem={({ item }) => (
        <LineForm>
          <Button onPress={ () => { dadosReserva() } } >
            <Form>
              <Text> { item.name } </Text>
              <Icon name='arrow-right' size={ 20 } color='#03BB85' style={{ position: 'absolute', right: 0 }} />
            </Form>
          </Button>
        </LineForm>
      )}
      keyExtractor={item => item.uid}
    />
    </Container>
  );
}

export default ReservarAmbienteDados;
