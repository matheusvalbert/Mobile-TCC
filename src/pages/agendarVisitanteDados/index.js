import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, List, Button, Form, LineForm, Text, Image } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const AgendarVisitanteDados = ({ navigation }) => {

  const [ isFetching, setIsFetching ] = useState(false);
  const [ visitantes, setVisitantes ] = useState(false);

  const route = useRoute();
  const { setName } = useStackName();

  function update() {
    getUsers();
    setIsFetching(false);
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
    });
    return unsubscribe;
  }, [navigation]);

  return(
    <Container>
      <List
        data={visitantes}
        refreshing={isFetching}
        onRefresh={ () => update() }
        renderItem={({ item }) => (
          <LineForm>
            <Button onPress={ () => alterarDados(item) } >
              <Form>
                <Image source={{ uri: `http://localhost:3333/visitante/profileImage/${item.img_name}`,
                  headers: {
                    Authorization: api.defaults.headers.Authorization
                  }
                }}/>
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

export default AgendarVisitanteDados;
