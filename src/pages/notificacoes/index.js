import React, { useEffect, useState } from 'react';

import { useStackName } from '../../hooks/stackName';

import { useRoute } from '@react-navigation/native';

import { useNotificacoes } from '../../hooks/notificacoes';

import { Container, List, LineForm, Button, Form, Text } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const Notificacoes = ({ navigation }) => {

  const { getNotification, notificacao } = useNotificacoes();
  const [ isFetching, setIsFetching ] = useState(false);

  const route = useRoute();

  const { setName } = useStackName();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getNotification();
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  function update() {
    getNotification();
    setIsFetching(false);
  }

  function readNotification(item) {
    navigation.navigate('Detalhes notificacao', {
      notification: item.notification,
      visitor: item.visitor
    });
  }

  return (
    <Container>
    <List
      data={notificacao}
      refreshing={isFetching}
      onRefresh={ () => update() }
      renderItem={({ item }) => (
        <LineForm>
          <Button onPress={ () => readNotification(item) } >
            <Form>
              {
                item.visitor === null
                  ? <Text>{ item.notification }</Text>
                  : <Text>{ 'Novo visitante: ' + item.visitor }</Text>
              }
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

export default Notificacoes;
