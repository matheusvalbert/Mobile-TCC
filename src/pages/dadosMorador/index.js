import React, { useState, useEffect } from 'react';

import { useStackName } from '../../hooks/stackName';
import { useRoute } from '@react-navigation/native';

import { Container, List, Button, LineForm, Form, Text, Image, Add } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import Plus from 'react-native-vector-icons/Octicons';
Plus.loadFont();

import api from '../../services/api';

import { useMorador } from '../../hooks/morador';

const DadosMorador = ({ navigation }) => {

  const route = useRoute();
  const { setName } = useStackName();

  const [ isFetching, setIsFetching ] = useState(false);
  const { moradores, setMoradores, getUsers } = useMorador();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setName(route.name);
      getUsers();
    });
    return unsubscribe;
  }, [navigation]);

  function update() {
    getUsers();
    setIsFetching(false);
  }

  function alterarDados(item) {
    setMoradores(item);
    navigation.navigate('Cadastro Morador');
  }

  function novoDado() {
    setMoradores('');
    navigation.navigate('Cadastro Morador');
  }

  return(
    <>
    <Container>
    <List
      data={moradores}
      refreshing={isFetching}
      onRefresh={ () => update() }
      renderItem={({ item }) => (
        <LineForm>
          <Button onPress={ () => alterarDados(item) } >
            <Form>
              <Image source={{ uri: `http://192.168.50.34:3333/morador/profileImage/${item.img_name}`,
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
    <Add onPress={ () => novoDado() } >
      <Plus name='plus' size={ 20 } color='#FFF' />
    </Add>
    </>
  );
}

export default DadosMorador;
