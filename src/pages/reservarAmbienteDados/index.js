import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import { Container, List, LineForm, Button, Form, Text } from './styles';

import { useReservar } from '../../hooks/reservar';

const ReservarAmbienteDados = ({ navigation }) => {

  const { getAmbientes, ambientes, getReservas, setMarkedDates, setOwnMarked, setOtherMarked } = useReservar();

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

  function dadosReserva(uid) {
    setOtherMarked([]);
    setOwnMarked([]);
    setMarkedDates({ });
    getReservas(uid);
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
          <Button onPress={ () => { dadosReserva(item.uid) } } >
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
